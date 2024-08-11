import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full flex   bg-zinc-900">
        <div className='w-1/2 p-20 font-["gilroy"] h-[80vh] flex justify-between flex-col '>
          <div className="heading ">
            <h1 className="uppercase text-[8vw] leading-none font-semibold ">
              Eye
            </h1>
            <h1 className="uppercase text-[8vw] leading-none font-semibold ">
              Opening
            </h1>
          </div>
        </div>
        <div className='w-1/2  font-["gilroy"]'>
          <div className="p-20">
            <div className="uppercase text-[5vw] leading-none font-semibold flex flex-col ">
              Presentations
            </div>
              <div className="dets text-[16px]  mt-10">
                <h4 className="text-[1vw] font-bold">S :</h4>
                <div className="leading-8 flex-col flex font-thin">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">X</a>
                </div>
              </div>
              <div className="w-full flex flex-row  ">
                <div className="dets w-1/2 text-[16px]  mt-10">
                  <div className="w-full">
                    <div className="w-1/2">
                      <h4 className="text-[1vw] font-bold">L :</h4>
                      <div className="leading-8 flex-col flex   font-thin">
                        <a href="#">202-1965 W 4th Ave</a>
                        <a href="#">Vancouver, Canada</a>
                        <a href="#">30 Chukarina St</a>
                        <a href="#">Lviv, Ukraine</a>
                      </div>
                    </div>
                    <div className="w-1/2 mt-10">
                      <h4 className="text-[1vw] font-bold">M :</h4>
                      <div className="leading-8 flex-col flex   font-thin">
                        <a href="#">KarmaTech@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dets w-1/2 text-[16px]  mt-10">
                  <h4 className="text-[1vw] font-bold">E :</h4>
                  <div className="leading-8 flex-col flex   font-thin">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Our work</a>
                    <a href="#">About us</a>
                    <a href="#">Insights</a>
                    <a href="#">Contact us</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20vh] p-20 flex ">
        <div className="w-1/2">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-32 "
          />
        </div>
        <div className="w-1/2">
          <div className="w-full flex justify-between">
            <div className="">© ochi design 2024. Legal Terms</div>
            <div className="">Website by Obys</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
