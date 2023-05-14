import React from "react";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import { useSelector } from "react-redux";
import { GetCourseInCart, AddCourseToCart } from "../utils/fetchData";

const Home = () => {
  const sectionVariants = ["Courses", "Blogs"];
  const discount = [
    "/discount/discount3.jpg",
    "/discount/discount1.jpg",
    "/discount/discount2.jpg",
    "/discount/discount4.jpg",
    "/discount/discount5.jpg",
    "/discount/discount6.jpg",
    "/discount/discount7.jpg",
    "/discount/discount8.jpg",
  ];

  const [bgs, setBgs] = React.useState([]);

  const [itemsInCart, setItemsInCart] = React.useState([]);
  const [score, setScore] = React.useState({});
  const [sum, setSum] = React.useState(0);
  const currentUser = useSelector((state) => state.auth.user);
  React.useEffect(() => {
    setBgs(discount);

    const GetCart = async () => {
      const data = await GetCourseInCart(currentUser.ID);
      localStorage.setItem("items", JSON.stringify(data));
      setItemsInCart(data);
    };
    GetCart();
  }, []);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  const handleChange = (e) => {
    var newScore = { ...score };
    newScore[e.target.id] = e.target.value;
    setScore((score) => newScore);
  };
  const handleSum = () => {
    const listening = parseFloat(score.listening);
    const reading = parseFloat(score.reading);
    const writing = parseFloat(score.writing);
    const total = (listening + reading + writing) / 3;
    setSum((sum) => (Math.round(total * 4) / 4).toFixed(2));
  };

  const addCourseInCartHandler = async (title, img, price, id) => {
    setItemsInCart((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          NAME: title,
          IMG: img,
          PRICE: price,
          CID: id,
        },
      ];
    });
    const Data = {
      CourseID: id,
      UID: currentUser.ID,
    };
    await AddCourseToCart(Data);
    alert("Add success!");
  };

  return (
    <>
      <Carousel backgrounds={bgs} />
      <div className="container bg-sky-300 py-6 px-4 mt-2 font-Poppins">
        <p className=" font-semibold text-3xl md:text-xl text-center duration-300 animate-bounce text-rose-700">
          Determine Band By the First Test Here
        </p>
        <div className="p-3 ring-2 ring-rose-700 flex md:flex-col m-4">
          <div className=" flex flex-col items-center justify-center gap-4 font-semibold  flex-1 border-r-2 md:border-none border-slate-700 border-dashed">
            <a
              href="https://ieltsonlinetests.com/ielts-mock-test-2023-january-listening-practice-test-2"
              target={"_blank"}
              className="w-[400px] text-center sm:w-[200px] p-2 bg-violet-300 rounded-sm ring-2 ring-slate-600 hover:bg-white hover:text-black"
            >
              Listening
            </a>
            <a
              href="https://ieltsonlinetests.com/ielts-mock-test-2023-january-reading-practice-test-1"
              target={"_blank"}
              className="w-[400px] text-center sm:w-[200px] p-2 bg-green-300 rounded-sm ring-2 ring-slate-600 hover:bg-white hover:text-black"
            >
              Reading
            </a>
            <a
              href="https://ieltsonlinetests.com/ielts-mock-test-2023-january-writing-practice-test-1"
              target={"_blank"}
              className="w-[400px] text-center sm:w-[200px] p-2 bg-orange-300 rounded-sm ring-2 ring-slate-600 hover:bg-white hover:text-black"
            >
              Writing
            </a>
          </div>
          <div className="calculator flex flex-col gap-2 flex-2 px-10 py-2">
            <div className="flex items-center justify-between">
              <label className="mr-2" htmlFor="listening">
                Listening:
              </label>
              <input
                onChange={handleChange}
                id="listening"
                type="number"
                step={0.25}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-2" htmlFor="reading">
                Reading:
              </label>
              <input
                onChange={handleChange}
                id="reading"
                type="number"
                step={0.25}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-2" htmlFor="writing">
                Writing:
              </label>
              <input
                onChange={handleChange}
                id="writing"
                type="number"
                step={0.25}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSum}
                className="bg-rose-700 px-3 py-2 rounded-lg font-semibold hover:ring-2 hover:text-yellow-300"
              >
                Get Your Score:
              </button>
              <span className="text-3xl">{sum}</span>
            </div>
          </div>
        </div>
      </div>
      {sectionVariants.map((variant, index) => {
        return (
          <Section
            key={index}
            Type={variant}
            index={index}
            onAdd={addCourseInCartHandler}
          />
        );
      })}
    </>
  );
};

export default Home;
