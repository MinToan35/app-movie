import React from "react";
const btn =
  "text-white  inline-block rounded-full  cursor-pointer duration-300 font-semibold";
const Button = (props) => {
  return (
    <div
      onClick={props.onClick ? () => props.onClick() : null}
      className={`${btn} text-center border-4 border-transparent  shadow-xl  hover:shadow-2xl  bg-primary ${
        props.type === "small"
          ? "py-1 px-6 text-base"
          : "py-2 px-8 text-xl md:text-2xl"
      }`}
    >
      {props.children}
    </div>
  );
};

export const OutlineButton = (props) => {
  return (
    <button
      onClick={props.onClick ? () => props.onClick() : null}
      className={`${btn} text-center border-[3px] border-white  bg-transparent hover:bg-white hover:text-primary ${
        props.type === "small"
          ? "py-1 px-6 text-base"
          : "py-2 px-8 text-xl md:text-2xl"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
