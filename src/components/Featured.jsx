import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
          <h1 className="text-7xl font-[Neue_Montreal] tracking-tight">
            Featured Project
          </h1>
        </div>
        <div className="px-20">
          <div className="cards w-full flex gap-20 mt-10">
            <div className="cardContainer relative w-1/2 h-[75vh] group">
              <h1 className="absolute leading-none font-[gilroy] top-1/2 text-[#CDEA68] -translate-y-1/2 left-full -translate-x-1/2 text-8xl font-semibold tracking-tight z-[9] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {"FEDE".split('').map((item, index) => <span key={index}>{item}</span>)}
              </h1>
              <div className="w-full h-full rounded-xl overflow-hidden bg-green-400">
                <img
                  className="w-full h-full bg-cover transition-transform duration-300 transform group-hover:scale-110"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cardContainer relative w-1/2 h-[75vh] group">
              <h1 className="absolute leading-none font-[gilroy] top-1/2 text-[#CDEA68] -translate-y-1/2  -translate-x-1/2 text-8xl font-semibold tracking-tight z-[9] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {"VISER".split('').map((item, index) => <span key={index}>{item}</span>)}
              </h1>
              <div className="w-full h-full rounded-xl overflow-hidden bg-green-400">
                <img
                  className="w-full h-full bg-cover transition-transform duration-300 transform group-hover:scale-110"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
