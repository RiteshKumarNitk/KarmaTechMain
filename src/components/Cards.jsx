import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex bg-zinc-900 items-center px-32 gap-10 ">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card w-full relative rounded-xl flex  h-full bg-[#004D43] items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="card relative w-32 items-center"
            alt=""
          />
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10">
            &copy;2024-2025{" "}
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5 ">
        <div className="card w-1/2 flex items-center justify-center relative rounded-xl h-full bg-[#4d0049]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="card relative w-32 items-center"
            alt=""
          />
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10">
            &copy;2024-2025{" "}
          </button>
        </div>
        <div className="card w-1/2 relative flex items-center justify-center  rounded-xl h-full bg-[#4d3f00]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="card relative w-32 items-center"
            alt=""
          />
          <button className="absolute px-5 py-3 border-2 rounded-full left-10 bottom-10">
            &copy;2024-2025{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
