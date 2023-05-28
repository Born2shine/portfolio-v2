import React from "react";
import { motion } from 'framer-motion';

const SingleSkill = ({children, icon}) => {
  const skillVariants = {
    hover: {
      // scale: 1.1,
      y: -10,
    },
  }
  return (
    <motion.div
    variants={skillVariants}
    whileHover='hover'
    className="flex flex-col items-center text-center rounded-md bg-white drop-shadow-lg px-2 py-4 cursor-pointer w-40 group hover:bg-isPrimary hover:transition-all hover:duration-500">
      <span className="text-2xl text-isPrimary group-hover:text-[#ffffffff] mb-2">
		{icon}
      </span>
      <h1 className="group-hover:text-[#ffffffff]">
        {children}
      </h1>
    </motion.div>
  );
};

export default SingleSkill;
