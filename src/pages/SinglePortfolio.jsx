import React, { useState } from "react";
import { ContentContainer, Header, NavButtonLinks } from "../components";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MyPortfolio } from "../utils/data";
import { Skeleton, Tooltip, Zoom } from "@mui/material";
import { WorkExperience } from "./../utils/data/index";
import { useGlobalContext } from "../provider/context";

const SinglePortfolio = () => {
  const [activeLink, setActiveLink] = useState("Portfolio");
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const { works, loading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const filteredPortfolio = works.filter((f) => f.slug === id)[0];
      setSelectedPortfolio(filteredPortfolio);
    }
  }, [id, works]);

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
          <article className={`grid gap-6 lg:grid-cols-2 lg:items-${loading ? 'center' : 'start'} lg:gap-6`}>
            <NavLink to={selectedPortfolio?.img_url} target="_blank">
              <div className="relative">
                <Tooltip
                  title="View Full Screen"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <>
                    {loading && (
                      <Skeleton variant="text" width={400} height={300} />
                    )}
                    <img
                      className="border-2 border-gray-300 w-[80%] "
                      src={selectedPortfolio?.img_url}
                      loading="lazy"
                      alt=""
                      width="600"
                    />
                  </>
                </Tooltip>
              </div>
            </NavLink>
            <div className="mt-4 md:mt-0">
              {loading && (
                <>
                  <h1 className="font-bold text-2xl text-isSecondary mb-3">
                    <Skeleton variant="text" width={200} height={40} />
                  </h1>
                  <p>
                    <Skeleton variant="text" width={400} height={10} />
                    <Skeleton variant="text" width={400} height={10} />
                  </p>

                  <div className="flex flex-col items-center gap-4 mt-6 md:flex-row">
                    <Skeleton variant="text" width={180} height={70} />
                  </div>
                </>
              )}
              <h1 className="font-bold text-2xl text-isSecondary mb-3">
                {selectedPortfolio?.name}
              </h1>
              <p>{selectedPortfolio?.description}</p>
              {
                !loading && (
                <div className="flex flex-col items-center gap-4 mt-6 md:flex-row">
                  {selectedPortfolio?.code_url && <NavLink
                    to={selectedPortfolio?.code_url}
                    target="_blank"
                    className="bg-isSecondary text-[#ffffffff] p-2.5 px-8 rounded-md"
                  >
                    View on Github
                  </NavLink>}
                  <NavLink
                    to={selectedPortfolio?.site_url}
                    target="_blank"
                    className="bg-isPrimary text-[#ffffffff] p-2.5 px-14 rounded-md"
                  >
                    View Live
                  </NavLink>
                </div>
                )
              }
            </div>
          </article>
        </section>
      </ContentContainer>
    </div>
  );
};

export default SinglePortfolio;
