import { useState } from "react";
import { ContentContainer, Header, NavButtonLinks } from "../components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MyPortfolio } from "../utils/data";

const Portfolio = () => {
  const [activeLink, setActiveLink] = useState("Portfolio");

  return (
    <div className="">
      <Header>
        <div className="hidden md:flex md:gap-5">
          <NavButtonLinks
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </Header>
      <ContentContainer
        title="Recent Works"
        subtitle="Check out some of my works."
      >
        <section className="mt-8 md:mt-8 md:w-[90%] md:mx-auto">
          <article className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-6">
            {MyPortfolio.map(({name, img_url, slug, site_url}, idx) => (
              <NavLink key={idx} to={`/portfolio/${slug}`} className="cursor-pointer relative group">
                <img
                  className="inline-block w-full object-cover shadow-lg rounded-sm lg:h-[280px]"
                  src={img_url}
                  alt="Design Sprint Master"
                />

                <div className="absolute left-0 top-0 w-full h-full group-hover:transition-all group-hover:duration-700 group-hover:bg-[#3F4254] group-hover:bg-opacity-80 group-hover:translate-x-0 flex justify-center items-center">
                  <div className="hidden group-hover:block">
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="font-bold text-[#ffffffff] text-xl">
                        {name}
                      </h1>
                      <span className="text-[#ffffffff] text-2xl">
                        <AiOutlineInfoCircle />
                      </span>
                    </div>
                    <div className="w-12 h-12 border-l-2 border-t-2 absolute left-4 top-4"></div>
                    <div className="w-12 h-12 border-r-2 border-b-2 absolute right-4 bottom-4"></div>
                  </div>
                </div>
              </NavLink>
            ))}
          </article>
        </section>
      </ContentContainer>
    </div>
  );
};

export default Portfolio;
