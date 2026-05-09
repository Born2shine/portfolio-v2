import { Skeleton, Zoom } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { motion } from 'framer-motion';
import { useMemo, useState } from "react";
import {
  ContentContainer,
  Header,
  NavButtonLinks,
  SingleEducationContainer,
  SingleWorkExperience,
} from "../components";
import { useGlobalContext } from "../provider/context";
import { sortWorkExperienceByDuration } from "../utils/sortWorkExperienceByDuration";

const Resume = () => {
  const [activeLink, setActiveLink] = useState("Resume");
  const { loading, workExperience, education_info } = useGlobalContext();
  const sortedWorkExperience = useMemo(
    () => sortWorkExperienceByDuration(workExperience),
    [workExperience]
  );

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
              {sortedWorkExperience.map(
                ({ id, title, duration, company, tasks }, idx) => (
                  <SingleWorkExperience
                    key={id ?? idx}
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
                { loading ?
                  Array.from({length: resumeTechStacks.length}, (_, i) => i + 1).map((d, idx) => (
                    <div key={idx} className="mb-4">
                      <Skeleton animation="pulse" variant="circular" width={50} height={50} />
                    </div>
                  )) : <> 
                  {resumeTechStacks.map(({ name, icon }) => (
                      <Tooltip  key={name} title={name} arrow disableInteractive TransitionComponent={Zoom}>
                          <img
                            className="w-10 h-10 object-contain cursor-pointer"
                            src={icon}
                            alt={name}
                          />
                      </Tooltip>
                  ))}   
                  </>
                }
              </div>
            </aside>
          </article>
        </motion.section>
      </ContentContainer>
    </div>
  );
};

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const resumeTechStacks = [
  { name: "Typescript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "Javascript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "SASS", icon: `${DEVICON}/sass/sass-original.svg` },
  { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
  { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "Tailwind", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
  { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Nextjs", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
];

export default Resume;
