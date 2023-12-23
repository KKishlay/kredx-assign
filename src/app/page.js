import Automation from "@/components/KredXAutomation";
import Home from "@/components/Home";
import KredXAdvantage from "@/components/KredXAdvantage";
import Quotes from "@/components/Quotes";

import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <Quotes />
      <Automation />
      <KredXAdvantage />
    </div>
  );
};

export default page;
