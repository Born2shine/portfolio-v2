import React from "react";

const Input = ({type, name, id, placeholder, classes}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`borde p-3.5 px-4 w-full rounded-full focus:outline-none focus:shadow-md bg-isSecondary5 ${classes}`}
    />
  );
};

export default Input;
