import React, { useState } from "react";
import { ContentContainer, Header, NavButtonLinks } from "../components";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MyPortfolio } from "../utils/data";
import { Tooltip, Zoom } from "@mui/material";

const SinglePortfolio = () => {
  const [activeLink, setActiveLink] = useState("Portfolio");
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const filteredPortfolio = MyPortfolio.filter((f) => f.slug === id)[0];
      setSelectedPortfolio(filteredPortfolio);
    }
  }, [id]);

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
        title=""
        subtitle=""
        breadcrumb={[
          { title: "Portfolio", path: "/portfolio" },
          { title: selectedPortfolio?.name, path: "" },
        ]}
      >
        <section className="mt-8 md:mt-8 md:w-[90%] md:mx-auto">
          <article className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-6">
            <NavLink to={selectedPortfolio?.img_url} target="_blank">
              <div className="relative">
                {/* <img className="absolute top-0 left-0 bg-red-30" src="https://i.ibb.co/2S1WYWH/portrait-gold-68b17216.png" alt="" width="600" /> */}
                <Tooltip
                  title="View Full Screen"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <img
                    className="border-2 border-gray-300 w-[80%] "
                    src={selectedPortfolio?.img_url}
                    loading="lazy"
                    alt=""
                    width="600"
                  />
                </Tooltip>
              </div>
            </NavLink>
            <div className="mt-4 md:mt-0">
              <h1 className="font-bold text-2xl text-isSecondary mb-3">
                {selectedPortfolio?.name}
              </h1>
              <p>{selectedPortfolio?.description}</p>
              <div className="flex flex-col items-center gap-4 mt-6 md:flex-row">
                <NavLink
                  to={selectedPortfolio?.code_url}
                  className="bg-isSecondary text-[#ffffffff] p-2.5 px-8 rounded-md"
                >
                  View on Github
                </NavLink>
                <NavLink
                  to={selectedPortfolio?.site_url}
                  target="_blank"
                  className="bg-isPrimary text-[#ffffffff] p-2.5 px-14 rounded-md"
                >
                  View Live
                </NavLink>
              </div>
            </div>
          </article>
        </section>
      </ContentContainer>
    </div>
  );
};

export default SinglePortfolio;
