import { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
  registerUser,
  signInWithFacebook,
  signInWithGoogle,
} from "../firebase/firebaseFunctions";
import UserContext from "../context/UserContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email && password) {
      const res = await registerUser(email, password);
      navigate("/signin");
    }
  };
  return (
    <>
      <div className="w-full bg-white pt-10 px-5">
        <header className="w-full md:max-w-[1200px] mx-auto">
          <img src="/header_logo.png" alt="header_logo" />
        </header>
        <div className="w-full md:max-w-[800px] mx-auto mt-14">
          <h1 className="font-bold text-3xl md:text-5xl font-Playfair tracking-widest">
            Sign Up
          </h1>
          <div className="w-full flex flex-col mt-16 gap-10">
            <div className="w-full flex flex-row justify-center items-center gap-4 font-Playfair">
              <button
                className="border-2 border-[#D6D6D6] bg-[#F7F7F7] rounded-full items-center p-2 text-5xl"
                onClick={() => signInWithGoogle()}
              >
                <FcGoogle />
              </button>
              {/* <button
                className="border-2 border-[#D6D6D6] bg-[#F7F7F7] rounded-full items-center p-2 text-5xl"
                onClick={() => signInWithFacebook()}
              >
                <FaFacebook className="text-[#1877F2]" />
              </button> */}
            </div>
            <hr />
            <form
              className="w-full flex flex-col gap-5 md:gap-10 font-Poppins"
              onSubmit={(e) => handleRegister(e)}
            >
              <input
                type="email"
                className="w-full border-2 border-[#D6D6D6] bg-[#F7F7F7] rounded-lg px-4 md:px-8 py-3 text-xl font-bold text-[#9a9a9a] focus:outline-none tracking-widest"
                required
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-full border-2 border-[#D6D6D6] bg-[#F7F7F7] rounded-lg px-4 md:px-8 py-3 text-xl font-bold text-[#9a9a9a] focus:outline-none tracking-widest"
                required
                placeholder="PASSOWRD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#7F6BFF] text-[#f3f3f3] rounded-lg w-full font-bold py-4"
              >
                REGISTER
              </button>
            </form>
            <p className="text-[#9a9a9a] font-semibold font-Poppins">
              Already a user? Sign In{" "}
              <Link className="text-[#7F6BFF] italic" to="/signin">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
