import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=""
      className="w-full py-20 rounded-t-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-10"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5, // Longer duration for smoother scroll
          }}
        >
          <h1 className='text-[17vw] whitespace-nowrap leading-none font-["Gilroy"] font-semibold uppercase pt-0 -mb-5'>
            We are tech We Are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
