import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import "./smallComponts/textgradient.css";
const LendingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["Professional", "Website", "With Us"].map((item, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker overflow-hidden ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] bg-center h-[5.7vw] mr-[1vw] rounded-lg flex items-center bg-cover bg-[url('https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
                  ></motion.div>
                )}
                <div className="uppercase text-[8vw] font-['Gilroy'] leading-[7vw] font-bold bg-gradient-to-r from-[#ebd197] via-[#b48811]  to-[#a2790d]   bg-clip-text text-transparent animate-gradient">
                  {item}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 flex justify-between items-center mt-48 px-20 py-8">
        {[
          "for Public and private Companies",
          "From the first Pitch to IPO",
        ].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5 cursor-pointer ">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light  uppercase  text-sm ">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full items-center flex border-[1px]  justify-center  hover:rotate-[180deg] duration-[1s] transition-all border-zinc-300">
            <span className="rotate-[270deg] ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendingPage;
