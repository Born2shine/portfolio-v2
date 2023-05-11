import React, { useState } from 'react'
import { Header, NavButtonLinks } from '../components'
import * as ICONS from "../assets/icons"
import * as IMAGES from "../assets"
import { NavLink } from 'react-router-dom';
import { AboutMe } from '../utils/data';
import SingleSkill from '../components/SingleSkill';

const About = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
	<div className=''>
    <Header>
      <div className="hidden md:flex md:gap-5">
            <NavButtonLinks activeLink={activeLink} setActiveLink={setActiveLink}/>
          </div>
    </Header>
    <section className='w-[90%] h-[400px] mx-auto overflow-y-scroll bg-[#ffffffff] px-5 py-10 mt-6 md:w-[88%] md:h-[450px] md:mt-1 md:pt-12'>
      <h1 className='font-1 font-extrabold text-4xl leading-12 text-isPrimary md:text-5xl md:w-[90%] md:mx-auto'>Meet Friday Odoh</h1>
      <div className='flex flex-col items-center place-content-center mt-4 md:flex-row md:items-start md:mt-8 md:w-[80%] md:mx-auto'>
        <div className='md:w-[40%]'>
          <img className='w-44 h-44 object-cover rounded-full' src={IMAGES.TOM} alt="" />
        </div>
        <div className='mt-10 md:mt-0 md:ml-10'>
          <div>
            <div className='w-[70%]'>
              <p className='text-isSecondary font-extrabold'>Who am I?</p>
              <ul className='mt-2 ml-3 flex flex-col gap-3'>
                {
                  AboutMe.map(({id, text}, idx) => (
                    <li key={id} className='flex items-baselin gap-2'> <span className='text-isPrimary block pt-1 text-lg'><ICONS.BsPersonCheck/></span> <span className='text-isSecondary'>{text} {idx + 1 === AboutMe.length && <NavLink to="http://jetwest-fe.surge.sh/" target='_blank' className='text-isSecondary'> <span className='text-isPrimary'>Dowkaa intelligent solutions</span>  </NavLink>} </span></li>
                  ))
                }
              </ul>
            </div>

            <div className='mt-12 md:w-[85%]'>
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
            <p className='mt-8 my-6'>
            Welcome to my creative corner! Here, you'll find a showcase of my frontend development journey. I hope you enjoy the ride!
            </p>
              {/* <p>Welcome to my creative corner! Here, you'll find a showcase of my frontend development journey. I hope you enjoy the ride!</p> */}
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default About