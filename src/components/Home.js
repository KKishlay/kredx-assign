import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[url(/Home-bg.png)] bg-cover">
      <div className="pt-[57px] pl-[125px]">
        <div className="relative w-[334px] h-[80px]">
          <Image src={"/Home-logo.png"} alt="icon" fill />
        </div>
      </div>
      <div className="flex">
        <div className="text-white w-[535px] mt-[140px] ml-[123px]">
          <h1 className="font-semibold  text-[60px]">
            Automate Your Finance Function
          </h1>
          <h1 className="font-bold text-[34px] pt-[20px]">
            WITHOUT Reworking Your ERP
          </h1>
          <button className="w-[234px] h-[60px] text-center rounded-[6px] mt-[40px] text-[24px] bg-[#32BDBF]">
            Learn more
          </button>
        </div>
        <div className="ml-[240px] mt-[50px]">
          <div className="relative w-[590px] h-[443px]">
            <Image src={"/Home-img.png"} alt="icon" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
