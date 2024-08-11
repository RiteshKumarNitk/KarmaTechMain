import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="py-20 w-full rounded-t-3xl text-black bg-[#CDEA68]"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] px-10 tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full p-20 border-t-[1px] mt-20 border-[#a1b562] flex">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold font-[gilroy]">Our Approach:</h1>
          <button
            className="px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white flex items-center gap-10 uppercase"
            aria-label="Read more about our approach"
          >
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-red-700 overflow-hidden">
          <video
            src="https://videos.pexels.com/video-files/853828/853828-hd_1920_1080_25fps.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default About;
