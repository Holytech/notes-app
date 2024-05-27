import React, { useContext, useEffect, useState } from "react";
import { Notes } from "../data/Notes";
// import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import NoteModal from "./NoteModal";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const NotesGrid = () => {
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState("");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <div className="w-full bg-[#F0E3F8] h-[100vh] px-5 overflow-y-scroll overflow-x-hidden">
        {edit && <NoteModal setEdit={setEdit} selected={selected} />}
        <div className="w-full md:max-w-[1000px] mx-auto py-6 md:py-12">
          <img src="/header_logo.png" alt="header_logo" />
          {/* <h1 className="font-semibold text-[#8F51F6] text-2xl md:text-4xl font-Playfair">
            My Notes
          </h1> */}
          <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-lg">
            <input
              type="text"
              className="w-full outline-none focus:outline-none bg-transparent text-[#8F51F6] font-bold placeholder:text-[#9051f682]"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name=""
              id=""
              className="w-full outline-none focus:outline-none mt-5 bg-transparent text-[#8F51F6] font-semibold placeholder:text-[#9051f682] placeholder:italic"
              placeholder="Note Body..."
              rows={5}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            {Notes.map((each, index) => (
              <div className="bg-white rounded-lg p-3 shadow-lg">
                {/* <p>{each.title}</p> */}
                <input
                  type="text"
                  defaultValue={each.title || ""}
                  className="w-full outline-none focus:outline-none bg-transparent text-[#8F51F6] font-bold placeholder:text-[#9051f682]"
                  placeholder="Title"
                  onClick={() => {
                    setSelected(each);
                    setEdit(true);
                  }}
                />
                <textarea
                  className="w-full outline-none focus:outline-none mt-5 bg-transparent text-[#8F51F6] font-semibold placeholder:text-[#9051f682] placeholder:italic resize-none"
                  defaultValue={each.body || ""}
                  placeholder="Note Body..."
                  rows={7}
                  onClick={() => {
                    setSelected(each);
                    setEdit(true);
                  }}
                ></textarea>
                {/* <div className="w-full flex gap-1 items-center"> */}
                <RiDeleteBin6Line className="text-[#8F51F6] text-xl cursor-pointer" />
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesGrid;
