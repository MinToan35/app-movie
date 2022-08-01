import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
      className="bg-black px-6 py-2  text-base rounded-full text-white w-full"
    />
  );
};

export default Input;
