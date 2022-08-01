import React from "react";
import bg from "../assets/footer-bg.jpg";
const PageHeader = (props) => {
  return (
    <div
      className="relative pt-[8rem] pb-16 text-center mb-8 bg-top bg-cover bg-no-repeat  after:content-['']  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[100px] after:bg-gradient-to-t after:from-[#0f0f0f] after:to-[rgba(0,0,0,0)]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="relative z-10 font-bold text-2xl">{props.children}</h2>
    </div>
  );
};

export default PageHeader;
