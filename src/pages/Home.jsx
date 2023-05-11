import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Header } from "../components";
import NavButtonLinks from "../components/navs/NavButtonLinks";
import { SocialLinks } from './../utils/data';

const Home = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <Header />
      <section>
        <div className="h-screen flex flex-col justify-center items-center text-left">
          <div className="text-left">
            <h1 className="font-1 font-extrabold text-5xl text-[#ffffffff] md:text-7xl">
              Friday Odoh
            </h1>
            <div className="text-[#ffffffff] font-bold text-xl mt-6 mb-6 md:mb-0 md:text-2xl">
              
              <Typewriter
                options={{
                  strings: ["Frontend Web Developer ❤️", 'Software Engineer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <ul className="my-6 gap-x-6 hidden md:flex">
              <NavButtonLinks activeLink={activeLink} setActiveLink={setActiveLink}/>
            </ul>
            <div className="flex gap-x-8">
              {
                SocialLinks.map((link) => (
                  <span key={link.id} className="text-[#ffffffff] cursor-pointer">
                    {link.icon}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
