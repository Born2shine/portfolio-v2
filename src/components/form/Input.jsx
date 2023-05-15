import React from "react";

const Input = ({type, name, id, placeholder, classes, touched, handleChange, handleBlur, values, errors}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
	  onChange={handleChange}
	  onBlur={handleBlur}
	  value={values?.name}
      placeholder={placeholder}
      className={`${ touched[name] && errors[name] && 'border border-red-500'} p-3.5 px-4 w-full rounded-full focus:outline-none focus:shadow-md bg-isSecondary5 ${classes}`}
    />
  );
};

export default Input;
