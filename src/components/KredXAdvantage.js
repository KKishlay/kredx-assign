import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/Right-icon.png",
    text: "Automations to increase the efficiency in both AP and AR sides.",
  },
  {
    id: 2,
    icon: "/Right-icon.png",
    text: "On time follow-ups with customers enables quicker realization of revenues",
  },
  {
    id: 3,
    icon: "/Right-icon.png",
    text: "Tools like dynamic discounting to increase bottom line",
  },
  {
    id: 4,
    icon: "/Right-icon.png",
    text: "Reduced human effort can be utilized to focus on increasing revenues",
  },
];

const ImageData = [
  {
    id: 1,
    icon: "/insta.png",
  },
  {
    id: 2,
    icon: "/linkedin.png",
  },
  {
    id: 3,
    icon: "/fb.png",
  },
  {
    id: 4,
    icon: "/twitter.png",
  },
  {
    id: 5,
    icon: "/yt.png",
  },
];

const KredXAdvantage = () => {
  return (
    <div className="w-full h-screen mx-auto">
      <h1 className="font-semibold pt-[15px] text-[#239A99] text-[50px] text-center">
        The KredX CMS Advantage
      </h1>
      <div className="flex mt-[40px]  mx-[119px] ">
        <div className="flex flex-col w-[50%]">
          <div className="w-full bg-gradient-to-r from-[#093A71] to-[#1F9EA6]  rounded-l-[6px]">
            <div className="flex justify-between  h-[115px]  py-[17px] px-[25px] ">
              <p className="text-[22px] w-[461px] text-white ">
                Increase bottom line by reducing costs and increasing efficiency
              </p>
              <div className="relative w-[23px] mr-[120px] h-[23px] mt-[18px]">
                <Image src={"/Right-arrow.png"} alt="img" fill />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[85px] py-[17px] px-[25px] rounded-[6px]  shadow-xl w-[616px] h-[115px]">
            <p className="w-[461px] text-[22px] font-semibold text-[#4A4A4A]">
              A tool for CFOs to analyze the cash flow and simulate what-if
              scenarios
            </p>
            <div className="relative w-[23.3px] h-[23.3px] mt-[18px]">
              <Image src={"/Right-arrow-grey.png"} alt="icon" fill />
            </div>
          </div>
          <div className="flex justify-between mt-[85px] py-[17px] px-[25px] rounded-[6px]  shadow-xl w-[616px] h-[115px]">
            <p className="w-[461px] text-[22px] font-semibold text-[#4A4A4A]">
              Use integrated financing to fulfill cash flow gaps just in time 
            </p>
            <div className="relative w-[23.3px] h-[23.3px] mt-[18px]">
              <Image src={"/Right-arrow-grey.png"} alt="icon" fill />
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[#1F9EA6] rounded-b-[6px] rounded-tr-[6px]">
          {data.map((datas) => (
            <div key={datas.id} className="flex  px-[125px] pt-[40px]">
              <div className="relative w-[19px] h-[19px]">
                <Image src={datas.icon} fill alt="icon" />
              </div>
              <p className="text-[18px] font-semibold pl-[25px] text-white w-[332px]">
                {datas.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[96px] bg-[#001932] mt-[115px] px-[119px] py-[30px] flex justify-between">
        <div>
          <div className="relative w-[82px] h-[20.9px]">
            <Image src={"/KredX-logo.png"} fill alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          {ImageData.map((data) => (
            <div key={data.id} className="flex justify-end px-[10px]">
              <div className="relative w-[24px] h-[24px]">
                <Image src={data.icon} fill alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KredXAdvantage;
