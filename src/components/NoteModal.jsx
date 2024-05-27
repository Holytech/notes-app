import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const NoteModal = ({ setEdit, selected }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleClose = (e) => {
    if (e.target.id === "target") {
      setEdit(false);
    }
  };
  useEffect(() => {
    setTitle(selected.title);
    setBody(selected.body);
  }, []);
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center px-5 md:px-0 z-10"
        id="target"
        onClick={handleClose}
      >
        <div className="flex px-[25px] pt-4 w-full md:w-[30rem] bg-white flex-col gap-2 rounded-md shadow-lg border-[#8F51F6] border-2">
          <input
            type="text"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full outline-none focus:outline-none bg-transparent text-[#8F51F6] font-bold placeholder:text-[#9051f682]"
            placeholder="Title"
          />
          <textarea
            className="w-full outline-none focus:outline-none mt-5 bg-transparent text-[#8F51F6] font-semibold placeholder:text-[#9051f682] placeholder:italic resize-none"
            value={body || ""}
            placeholder="Note Body..."
            rows={7}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="w-full flex gap-1 items-center justify-between py-2">
            <FaRegSave className="text-[#8F51F6] text-2xl cursor-pointer" />
            <RiDeleteBin6Line className="text-[#8F51F6] text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteModal;
