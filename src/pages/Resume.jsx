import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import {
	ContentContainer,
	Header,
	NavButtonLinks,
	SingleEducationContainer,
	SingleWorkExperience,
} from "../components";
import {
	EducationInformation,
	TechStacks,
	WorkExperience,
} from "../utils/data";
import { Zoom } from "@mui/material";
const Resume = () => {
  const [activeLink, setActiveLink] = useState("Resume");

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
        <section className="mt-8 md:mt-8 md:w-[90%] md:mx-auto">
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
              {WorkExperience.map(
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
              {EducationInformation.map(
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
                {TechStacks.map(({ name, imgLink }, idx) => (
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
        </section>
      </ContentContainer>
    </div>
  );
};

export default Resume;
