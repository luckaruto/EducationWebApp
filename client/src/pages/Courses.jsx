import React from "react";

import Text from "../components/Text";
import { useNavigate } from "react-router-dom";
import Img from "../components/Img";
import Input from "../components/Input";
import Button from "../components/Button";
import SelectBox from "../components/SelectBox";
import CourseCard from "../components/CourseCard";
import PaginationCard from "../components/PaginationCard";
import CloseSVG from "../components/CloseSVG";

import ClassCard from "../components/ClassCard";
import CustomImg from "../components/CustomImg";
const EduviCoursesPage = () => {
  const navigate = useNavigate();

  const [valueButton, setValue] = React.useState("");
  const [valuePage, setValuePage] = React.useState(0);

  const CourseHandle = (e) => {
    if (e.target.value !== valueButton) {
      setValue(e.target.value);
    }
  };

  const [inputvalue, setInputvalue] = React.useState("");
  const Coures = [
    {
      image: "./public/anh5.png",
      courseName: "Ielts 3.0-5.0 Teacher ABC",
      price: "$40.00",
    },
    {
      image: "./public/anh5.png",
      courseName: "Ielts 2.0-3.0 Teacher A",
      price: "$40.00",
    },
    {
      image: "./public/anh5.png",
      courseName: "Ielts 5.0-6.0 Teacher B",
      price: "$40.00",
    },
    {
      image: "./public/anh5.png",
      courseName: "Ielts 3.0-5.0 Teacher B",
      price: "$40.00",
    },
    {
      image: "./public/anh5.png",
      courseName: "Ielts 6.0-7.0 Teacher E",
      price: "$40.00",
    },
    {
      image: "./public/anh5.png",
      courseName: "Ielts 3.0-5.0 Teacher F",
      price: "$40.00",
    },
  ];

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <CustomImg></CustomImg>
        </div>
        <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
          <div className="flex items-center justify-center sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
            <div className="flex flex-row flex-wrap gap-[20px] items-center justify-center max-w-[1280px] mx-[auto] w-[100%]">
              <Button
                value="All Courses"
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "All Courses" === valueButton ? "choose" : ""
                }`}
                onClick={CourseHandle}
              >
                All Courses
              </Button>
              <Button
                value="0.0-2.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "0.0-2.0" === valueButton ? "choose" : ""
                }`}
              >
                0.0-2.0
              </Button>
              <Button
                value="2.0-3.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "2.0-3.0" === valueButton ? "choose" : ""
                }`}
              >
                2.0-3.0
              </Button>
              <Button
                value="3.0-4.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "3.0-4.0" === valueButton ? "choose" : ""
                }`}
              >
                3.0-4.0
              </Button>
              <Button
                value="4.0-5.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "4.0-5.0" === valueButton ? "choose" : ""
                }`}
              >
                4.0-5.0
              </Button>
              <Button
                value="5.0-6.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "5.0-6.0" === valueButton ? "choose" : ""
                }`}
              >
                5.0-6.0
              </Button>
              <Button
                value="6.0-7.0"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "6.0-7.0" === valueButton ? "choose" : ""
                }`}
              >
                6.0-7.0
              </Button>
              <Button
                value="More Courses"
                onClick={CourseHandle}
                className={`bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-[20px] px-[30px] py-[20px] rounded-[10px] text-[16px] text-center text-gray_900 w-[auto] ${
                  "More Courses" === valueButton ? "choose" : ""
                }`}
              >
                More Courses
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
            <div
              className="flex flex-col gap-[24px] items-center justify-start max-w-[1280px] mx-[auto] w-[100%]"
              onClick={() => navigate("/")}
            >
              <Text
                className="font-semibold text-gray_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                My Course
              </Text>
              <div className="flex items-center justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  {new Array(5).fill({}).map((props, index) => (
                    <React.Fragment key={`ClassCard${index}`}>
                      <ClassCard
                        className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-[100%] w-[100%]"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1280px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Other Courses IELTS
                </Text>
                <div className="flex md:flex-col flex-row gap-[42px] items-start justify-start w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-white_A700 flex flex-1 max-w-[838px] pl-[20px] pr-[7px] py-[7px] rounded-[10px] w-[100%]"
                    className="font-medium gap-[222px] leading-[normal] p-[0] placeholder:text-gray_700_99 text-[16px] text-gray_700_99 text-left w-[100%]"
                    name="search"
                    placeholder="Search Class, Course, Book Name"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[35px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          fillColor="#995d5a6f"
                          height={24}
                          width={24}
                          viewBox="0 0 24 24"
                        />
                      ) : (
                        <Img
                          src="./public/find.png"
                          className="cursor-pointer ml-[35px] my-[auto]"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <SelectBox
                    className="bg-white_A700 flex-1 md:flex-1 font-medium leading-[normal] px-[15px] py-[18px] rounded-[10px] text-[16px] text-gray_700_99 text-left md:w-[100%] w-[32%]"
                    placeholderClassName="text-gray_700_99"
                    name="sortby"
                    placeholder="Sort by: Latest"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="./public/down-arrow.png"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  {Coures.map((props, index) => (
                    <React.Fragment key={`CourseCard${index}`}>
                      <div onClick={() => navigate("/coursesdetails")}>
                        <CourseCard
                          className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-row items-end justify-between p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-[100%] w-[100%]"
                          {...props}
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <PaginationCard
              className="flex flex-row items-center justify-center w-[100%]"
              page="Page"
              one={valuePage}
              ofCounter="of 80"
              handlenext={() => {
                setValuePage(valuePage + 1);
              }}
              handleprev={() => {
                setValuePage(valuePage - 1);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EduviCoursesPage;