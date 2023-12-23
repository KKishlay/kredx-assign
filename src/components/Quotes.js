import React from "react";
import Image from "next/image";

const Quotes = () => {
  return (
    <div className=" mx-[119px] my-[50px]  flex justify-center items-center">
      <div className="relative w-[56px] h-[109.3px]">
        <Image src={"/quotes-left.png"} alt="icon" fill />
      </div>
      <div className="mx-[25px]">
        <p className="w-[895px] h-[120px] text-center text-[26px] font-medium">
           Only KredX’s AP Solution lets you automate and streamline your entire
          PO-to-Pay process without messing up your existing processes. That’s
          because we support all native functionality for 40+ ERPs
        </p>
      </div>
      <div className="relative w-[56px] h-[109.3px]">
        <Image src={"/quotes-right.png"} alt="icon" fill />
      </div>
    </div>
  );
};

export default Quotes;
