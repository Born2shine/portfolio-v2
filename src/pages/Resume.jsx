import { Skeleton, Zoom } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { motion } from 'framer-motion';
import React, { useState } from "react";
import {
  ContentContainer,
  Header,
  NavButtonLinks,
  SingleEducationContainer,
  SingleWorkExperience,
} from "../components";
import { useGlobalContext } from "../provider/context";

const Resume = () => {
  const [activeLink, setActiveLink] = useState("Resume");
  const { loading, workExperience, education_info, tech_stacks } = useGlobalContext()

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
        title="Resume"
        subtitle="Learn more about my skills, qualifications and experiences."
      >
        <motion.section
        initial={{y: '60vw'}}
        animate={{y: 0}}
        transition={{delay: .5, duration: .6}}
        className="mt-8 md:mt-8 md:w-[90%] md:mx-auto">
          <article className="flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
            <aside className="md:w-[40%]">
              <div>
                <h1 className="font-bold text-isSecondary text-[1.7rem]">
                  Work Experience
                </h1>
                <h3 className="uppercase font-bold text-isGray text-[.98rem] leading-4">
                  Present & Previous Job
                </h3>
              </div>
            </aside>
            <aside className="md:mt-5">
              { loading &&
                Array.from({length: 3}, (_, i) => i + 1).map((d, idx) => (
                  <div key={idx} className="mb-4">
                    <Skeleton animation="pulse" variant="text" width={210} height={10} />
                    <Skeleton animation="pulse" variant="text" width={210} height={30} />
                    <Skeleton animation="pulse" variant="text" width={210} height={10} />
                    <Skeleton animation="pulse" variant="text" width={410} height={15} />
                    <Skeleton animation="pulse" variant="text" width={410} height={15} />
                    <Skeleton animation="pulse" variant="text" width={410} height={15} />
                  </div>
                ))
              }
              {workExperience.map(
                ({ title, duration, company, tasks }, idx) => (
                  <SingleWorkExperience
                    key={idx}
                    title={title}
                    duration={duration}
                    company={company}
                    tasks={tasks}
                  />
                )
              )}
            </aside>
          </article>

          <article className="flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
            <aside className="md:w-[45%]">
              <div>
                <h1 className="font-bold text-isSecondary text-[1.7rem]">
                  Education
                </h1>
                <h3 className="uppercase font-bold text-isGray text-[.98rem] leading-4">
                  Academic Career
                </h3>
              </div>
            </aside>
            <aside className="border-l-2 pl-7 md:mt-3 md:w-[95%]">
            { loading &&
                Array.from({length: 3}, (_, i) => i + 1).map((d, idx) => (
                  <div key={idx} className="mb-4">
                    <Skeleton animation="pulse" variant="text" width={210} height={10} />
                    <Skeleton animation="pulse" variant="text" width={210} height={30} />
                    <Skeleton animation="pulse" variant="text" width={210} height={10} />
                    <Skeleton animation="pulse" variant="text" width={410} height={15} />
                    <Skeleton animation="pulse" variant="text" width={410} height={15} />
                    <Skeleton animation="pulse" variant="text" width={410} height={15} />
                  </div>
                ))
              }
              {education_info.map(
                ({ duration, description, title, school, summaries }, idx) => (
                  <SingleEducationContainer
                    key={idx}
                    duration={duration}
                    title={title}
                    description={description}
                    school={school}
                    summaries={summaries}
                  />
                )
              )}
            </aside>
          </article>

          <article className="flex flex-col gap-6 mt-10 md:flex-row md:items-start md:gap-0">
            <aside className="md:w-[45%]">
              <div>
                <h1 className="font-bold text-isSecondary text-[1.7rem]">
                  Tech Stack
                </h1>
                <h3 className="uppercase font-bold text-isGray text-[.98rem] leading-4">
                  Tools & Technologies
                </h3>
              </div>
            </aside>
            <aside className="md:mt-3 md:w-[80%]">
              <div className="grid grid-cols-4 gap-y-4 md:flex md:gap-y-0 md:gap-x-3 lg:gap-x-7">
                { loading &&
                  Array.from({length: 8}, (_, i) => i + 1).map((d, idx) => (
                    <div key={idx} className="mb-4">
                      <Skeleton animation="pulse" variant="circular" width={50} height={50} />
                    </div>
                  ))
                }
                {tech_stacks.map(({ name, imgLink }, idx) => (
                    <Tooltip  key={idx} title={name} arrow disableInteractive TransitionComponent={Zoom}>
                        <img
                          className="w-10 h-10 object-contain cursor-pointer"
                          src={imgLink}
                          alt={name}
                        />
                    </Tooltip>
                ))}
              </div>
            </aside>
          </article>
        </motion.section>
      </ContentContainer>
    </div>
  );
};

export default Resume;
