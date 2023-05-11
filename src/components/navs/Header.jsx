import { NavLink } from "react-router-dom";
import * as ICONS from "../../assets/icons";
import { useCallback, useEffect, useState } from "react";
import { SideBarLinks } from "../../utils/data";
import SideBarLink from "./SideBarLink";
import NavButtonLinks from "./NavButtonLinks";

const Header = ({children}) => {
  const [isHoverSideNav, setHoverSideNav] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  
  
  const closeSidebar = useCallback(() => {
    setShowSidebar(false);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize() 

    return () => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(() => {
    if (screenSize < 768) {
      closeSidebar()
    }else{
      setShowSidebar(true)
    }
  }, [screenSize])

  return (
    <>
      <header className="relative px-6 py-4 md:px-10 md:py-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-white font-1 font-extralight text-4xl tracking-widest cursor-pointer"
          >
            FO
          </NavLink>
          {children}
          <div
            className="flex flex-col items-end cursor-pointer md:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <span className="w-5 h-[3px] bg-white content-none block"></span>
            <span className="w-8 h-[3px] bg-white content-none block mt-1"></span>
            <span className="w-4 h-[3px] bg-white content-none block mt-1"></span>
          </div>
              <nav
                className={`fixed flex flex-col items-center justify-center right-0 top-0 h-screen bg-[#3F4254] w-${
                  isHoverSideNav ? "40" : "32"
                } p-5 text-white cursor-pointer ${showSidebar ? "" : "hidden"} md:hidden`}
                onMouseOver={() => setHoverSideNav(true)}
                onMouseLeave={() => setHoverSideNav(false)}
              >
                <div
                  className="flex justify-center cursor-pointer absolute top-6"
                  onClick={closeSidebar}
                >
                  <span className="w-5 h-5 border rounded-full grid place-content-center">
                    <ICONS.MdOutlineClose />
                  </span>
                </div>
                <div className="flex flex-col gap-14 justify-center">
                  {SideBarLinks.map((link, idx) => (
                    <SideBarLink
                      key={idx}
                      path={link.url}
                      showText={isHoverSideNav}
                      icon={link.icon}
                      text={link.text}
                      closeSidebar={closeSidebar}
                    />
                  ))}
                  {/* <NavLink className="tracking-wider flex items-center gap-3">
                    <span className="text-2xl">
                      <ICONS.MdPermContactCalendar />
                    </span>
                    <span className={`link-text ${isHoverSideNav ? "" : "hidden"}`}>
                      Contact
                    </span>
                  </NavLink> */}
                </div>
              </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
