import React, { useState } from 'react'
import { Header, NavButtonLinks } from '../components'
import * as ICONS from "../assets/icons"
import * as IMAGES from "../assets"
import { NavLink } from 'react-router-dom';
import { AboutMe } from '../utils/data';
import { SingleSkill, ContentContainer } from '../components';
import { motion } from 'framer-motion';

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
          <motion.img 
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            transition={{delay: .15, duration: 1}}
          loading='lazy' className='w-52 h-52 object-cover rounded-full' src={IMAGES.TOM} alt="" />
        {/* </div> */}
        <motion.div 
          initial={{y: '100vw'}}
          animate={{y: 0}}
          transition={{delay: .8, duration: 1}}
        className='mt-10 md:mt-0 md:ml-10'>
          <div>
            <div className='lg:w-[70%]'>
              <p className='text-isSecondary font-extrabold'>Who am I?</p>
              <ul className='mt-2 ml-3 flex flex-col gap-3'>
                {
                  AboutMe.map(({id, text}, idx) => (
                    <li key={id} className='flex items-baselin gap-2'> <span className='text-isPrimary block pt-1 text-lg'><ICONS.BsPersonCheck/></span> <span className='text-isSecondary'>{text} {idx + 1 === AboutMe.length && <NavLink to="https://www.dowkaa.com/" target='_blank' className='text-isSecondary'> <span className='text-isPrimary'>Dowkaa intelligent solutions</span>  </NavLink>} </span></li>
                  ))
                }
              </ul>
            </div>

            <motion.div 
            initial={{opacity: 0, y: 40}}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {duration: 1.9}
              }}
            className='mt-12 md:w-[90%] lg:w-[80%]'>
              <p className='text-isSecondary font-extrabold'>What I do?</p>
              <div className="mt-4 ml-2 flex flex-col items-center gap-6 md:gap-x-8 md:grid md:grid-cols-2 lg:grid-cols-3">
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
            </motion.div>
            <p className='mt-8 my-6 lg:w-[80%]'>
            Welcome to my creative corner! Here, you'll find a showcase of my frontend development journey. I hope you enjoy the ride!
            </p>
              {/* <p>Welcome to my creative corner! Here, you'll find a showcase of my frontend development journey. I hope you enjoy the ride!</p> */}
          </div>
        </motion.div>
      </section>
    </ContentContainer>
  </div>
  )
}

export default About