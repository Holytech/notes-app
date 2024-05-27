import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full px-5 bg-gradient-to-b from-[#9A8AFFDD] to-[#5C4BC5] h-[100vh]">
        <div className="w-full md:max-w-[1000px] mx-auto flex flex-col items-center justify-center h-full gap-10">
          <img className="w-4/5 md:w-2/5" src="/hero_image.png" alt="" />
          <p className="text-[#F5F3FF] text-center text-2xl w-full md:max-w-[450px] font-Poppins">
            <b>Simple</b> , <b>clean</b> and fast to get you&apos;re{" "}
            <u className=" underline-offset-4">tasks done</u> best.
          </p>
          <Link
            className="border-2 border-white rounded-lg text-white px-8 py-4 text-lg md:text-2xl font-Playfair tracking-widest"
            to="/signin"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
