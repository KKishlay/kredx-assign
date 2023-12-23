import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    logo: "/Invoice-digitization.png",
    header: "Invoice Digitization",
    about:
      "Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency",
  },
  {
    id: 2,
    logo: "/Invoice-processing.png",
    header: "Invoice Processing",
    about:
      "Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO’s",
  },
  {
    id: 3,
    logo: "/Centralized-access.png",
    header: "Centralized access and collaboration",
    about:
      "Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready",
  },
  {
    id: 4,
    logo: "/Advanced-quick.png",
    header: "Advanced & Quick customizable workflows",
    about:
      "Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time",
  },
  {
    id: 5,
    logo: "/Invoice-matching.png",
    header: "Invoice Matching",
    about:
      "Effortless 2 and 3 way matching with easy to understand ‘reason’ coding for users increasing efficiency & protect against fraud and duplication",
  },
  {
    id: 6,
    logo: "/Integrated-vendor.png",
    header: "Integrated Vendor Management",
    about: "Manage vendor onboarding, documentation and payment from one place",
  },
  {
    id: 7,
    logo: "/Strengthen-treasury.png",
    header: "Strengthen treasury & your supply chain",
    about:
      "Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX’s AP card program",
  },
  {
    id: 8,
    logo: "/Audit-ready.png",
    header: "Audit ready",
    about:
      "One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required.",
  },
];

const KredXAutomation = () => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-[url(/Automation-bg.png)] bg-cover">
      <div className="w-[737px] mx-auto pt-[27px]">
        <h1 className="font-semibold text-[#239A99] text-[50px] text-center">
          KredX AP Automation Capabilities
        </h1>
      </div>
      <div className="mx-[150px] flex flex-wrap">
        {data.map((datas) => (
          <div
            key={datas.id}
            className=" pt-[20px] w-[285px] h-[300px] mr-[60px]"
          >
            <div className="flex flex-col justify-center items-center">
              <Image src={datas.logo} width={56} height={56} alt={datas.logo} />
              <h1 className="text-[#0B4174] pt-[10px] font-semibold text-center text-[18px]">
                {datas.header}
              </h1>
              <p className="text-center pt-[10px] font-normal text-[14px] leading-[18px]">
                {datas.about}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-[325px] h-[72px] mb-[70px]">
        <button className="w-[325px] h-[72px] bg-[#32BDBF] text-center text-white rounded-[6px] font-semibold text-[28px]">
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default KredXAutomation;
