import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Header } from "../components";
import NavButtonLinks from "../components/navs/NavButtonLinks";
import { SocialLinkIcons, SocialLinks } from "./../utils/data";
import { db } from "../config/firebase";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useGlobalContext } from "../provider/context";

const Home = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const { socialLinks } = useGlobalContext()

  return (
    <>
      <Header />
      <section>
        <div className="h-screen flex flex-col justify-center items-center text-left">
          <div className="text-left">
            <motion.h1
              initial={{ y: "60vw" }}
              animate={{ y: "0" }}
              transition={{ duration: 1.5, type: "spring" }}
              className="font-1 font-extrabold text-5xl text-[#ffffffff] md:text-7xl"
            >
              Friday Odoh
            </motion.h1>
            <div className="text-[#ffffffff] font-bold text-xl mt-6 mb-6 md:mb-0 md:text-2xl">
              <Typewriter
                options={{
                  strings: ["Frontend Web Developer ❤️", "Software Engineer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 2 }}
              className="my-6 gap-x-6 hidden md:flex"
            >
              <NavButtonLinks
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </motion.ul>
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
              className="flex gap-x-8"
            >
              {SocialLinks.map((link) => (
                <NavLink
                  to={link.link}
                  target="_blank"
                  key={link.id}
                  className="text-[#ffffffff] cursor-pointer"
                >
                  {link.icon}
                </NavLink>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
