import React, { useState } from 'react'
import { Header, NavButtonLinks } from '../components'
import * as ICONS from "../assets/icons"
import * as IMAGES from "../assets"
import { NavLink } from 'react-router-dom';
import { AboutMe } from '../utils/data';
import { SingleSkill, ContentContainer } from '../components';

const About = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
	<div className=''>
    <Header>
      <div className="hidden md:flex md:gap-5">
            <NavButtonLinks activeLink={activeLink} setActiveLink={setActiveLink}/>
          </div>
    </Header>
    <ContentContainer title="Meet Friday Odoh" subtitle="">

    <section className='flex flex-col items-center place-content-center mt-4 md:flex-row md:items-start md:mt-8 md:w-[80%] md:mx-auto'>
        {/* <div className='md:w-34'> */}
          <img loading='lazy' className='w-52 h-52 object-cover rounded-full' src={IMAGES.TOM} alt="" />
        {/* </div> */}
        <div className='mt-10 md:mt-0 md:ml-10'>
          <div>
            <div className='lg:w-[70%]'>
              <p className='text-isSecondary font-extrabold'>Who am I?</p>
              <ul className='mt-2 ml-3 flex flex-col gap-3'>
                {
                  AboutMe.map(({id, text}, idx) => (
                    <li key={id} className='flex items-baselin gap-2'> <span className='text-isPrimary block pt-1 text-lg'><ICONS.BsPersonCheck/></span> <span className='text-isSecondary'>{text} {idx + 1 === AboutMe.length && <NavLink to="http://jetwest-fe.surge.sh/" target='_blank' className='text-isSecondary'> <span className='text-isPrimary'>Dowkaa intelligent solutions</span>  </NavLink>} </span></li>
                  ))
                }
              </ul>
            </div>

            <div className='mt-12 lg:w-[80%]'>
              <p className='text-isSecondary font-extrabold'>Who I do?</p>
              <div className="mt-4 ml-2 flex flex-col items-center gap-6 md:grid md:grid-cols-3">
                <SingleSkill icon={<ICONS.BsCodeSlash/>}>
                  Front-End Web <br /> Development
                </SingleSkill>
                <SingleSkill icon={<ICONS.BiCodeCurly/>}>
                    Back-End / API <br /> Integration
                </SingleSkill>
                <SingleSkill icon={<ICONS.BsPencilSquare/>}>
                      UI/UX <br /> Design
                </SingleSkill>
              </div>
            </div>
            <p className='mt-8 my-6 lg:w-[80%]'>
            Welcome to my creative corner! Here, you'll find a showcase of my frontend development journey. I hope you enjoy the ride!
            </p>
              {/* <p>Welcome to my creative corner! Here, you'll find a showcase of my frontend development journey. I hope you enjoy the ride!</p> */}
          </div>
        </div>
      </section>
    </ContentContainer>
  </div>
  )
}

export default About