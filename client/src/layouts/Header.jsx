import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  Button,
  Avatar,
  Link as LinkUI,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  List,
  Drawer,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styles from "../styles/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth";
import utils from "../utils/utils";
import { getImage } from "../utils/fetchData";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  const pages = [
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
  ];

  const pagesTeacher = [
    {
      name: "TeacherCourses",
      href: "/TeacherCourse",
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setShowMenu(open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [image, setImage] = React.useState("not yet");
  React.useEffect(() => {
    const loadImage = async () => {
      const newImage = await getImage(`${currentUser.ID}.png`);
      setImage(newImage);
    };
    loadImage();
  }, []);
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Link to="/">
            <Box
              sx={{
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&:hover": styles.glowText,
              }}
            >
              <img className="w-[30px] mr-2" src="/icon/pie.png" />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                PIE
              </Typography>
            </Box>
          </Link>
          {/* Reponsive Menu Navigates */}
          <>
            <IconButton
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={showMenu}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {pages.map((page) => (
                    <Fragment key={page.name}>
                      <Link to={page.href}>
                        <Box sx={styles.link_noDecoration}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary={page.name} />
                            </ListItemButton>
                          </ListItem>
                        </Box>
                      </Link>
                      <Divider />
                    </Fragment>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
          {/* List Navigates */}
          <Stack direction={"row"} spacing={4} sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Typography
                component="a"
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  color: "inherit",
                  "&:hover": {
                    color: "inherit",
                    translate: "0 -10%",
                    textDecoration: "underline",
                    cursor: "pointer",
                    transition: "ease 0.2s",
                  },
                }}
                href={page.href}
                key={page.name}
                textAlign={"center"}
              >
                {page.name}
              </Typography>
            ))}
            {currentUser.ROLE == "teacher" &&
              pagesTeacher.map((page) => (
                <Typography
                  component="a"
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                    color: "inherit",
                    "&:hover": {
                      color: "inherit",
                      translate: "0 -10%",
                      textDecoration: "underline",
                      cursor: "pointer",
                      transition: "ease 0.2s",
                    },
                  }}
                  href={page.href}
                  key={page.name}
                  textAlign={"center"}
                >
                  {page.name}
                </Typography>
              ))}
          </Stack>

          {/* User Button */}
          <Stack direction={"row"} spacing={2}>
            <Link to="/Cart">
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Link>
            {!utils.checkUser(currentUser) ? (
              <>
                <Button
                  variant="contained"
                  href="/login"
                  sx={{
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  href="/register"
                  sx={{
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  fontSize={"1rem"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    placeItems: "center",
                  }}
                >
                  {currentUser.NAME}
                </Typography>
                <IconButton sx={{ p: "0", m: "0" }} onClick={handleClick}>
                  <Avatar alt="username" src={image} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Link to="/profile">
                      <Box sx={styles.link_noDecoration}>
                        <Avatar /> Profile
                      </Box>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/courses">
                      <Box sx={styles.link_noDecoration}>
                        <LocalLibraryIcon
                          sx={{ color: "#bdbdbd", margin: "0 8px 0 -4px" }}
                        />{" "}
                        My Courses
                      </Box>
                    </Link>
                  </MenuItem>
                  <Divider />

                  <MenuItem onClick={handleClose}>
                    <Link to="./settings">
                      <Box sx={styles.link_noDecoration}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </Box>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(logout());
                      window.location.replace("/");
                      //clean items
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
