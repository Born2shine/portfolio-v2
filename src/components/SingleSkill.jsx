import React from "react";

const SingleSkill = ({children, icon}) => {
  return (
    <div className="flex flex-col items-center text-center rounded-md bg-white drop-shadow-lg px-2 py-4 cursor-pointer w-40 group hover:bg-isPrimary hover:transition-all hover:duration-500">
      <span className="text-2xl text-isPrimary group-hover:text-white mb-2">
		{icon}
      </span>
      <h1 className="group-hover:text-white">
        {children}
      </h1>
    </div>
  );
};

export default SingleSkill;
