import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarLink = ({ icon, text, showText, active, path, closeSidebar }) => {
  const handleLinkClicked = () => closeSidebar();

  const activeLink = "text-isPrimary";
  const normalLink =
    "hover:text-isPrimary hover:transition-all hover:duration-500";
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <div className="tracking-wider flex items-center gap-3" onClick={handleLinkClicked}>
        <span className={`text-2xl`}>
          {icon}
        </span>
        <span
          className={`link-text relative hover:before:absolut hover:before:bg-isPrimary hover:before:w-6 hover:before:h-[2px] hover:before:bottom-[0]  ${
            showText ? "" : "hidden"
          }`}>
          {text}
        </span>
      </div>
    </NavLink>
  );
};

export default SideBarLink;
