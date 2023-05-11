import React from 'react'
import { SideBarLinks } from './../../utils/data';
import { NavLink, useLocation } from 'react-router-dom';

const NavButtonLinks = ({activeLink, setActiveLink}) => {
	const location = useLocation()
  return (
	<>
		{SideBarLinks.map((link, idx) => (
			<NavLink
			to={link.url}
			className={`text-[#ffffffff] text-lg`}
			key={idx}
			>
			<div className="tracking-wider flex items-center gap-3">
				<span
				className={`link-text relative hover:before:absolute hover:before:bg-isPrimary hover:before:w-[65%] hover:before:h-[3px] hover:before:bottom-[2px] leading-8 hover:leading-8`}
				onClick={() => setActiveLink(link.text)}
				>
				{link.text}
				{(activeLink === link.text && location.pathname.split('/')[1] === link.text.toLowerCase() || (location.pathname.split('/')[1] === link.text.toLowerCase() || location.pathname.split('/')[1] === "" && link.text === 'Home')) && (
					<div className="absolute -bottom-0 w-[65%] border-b border-isPrimary border-2 content-none"></div>
				)}
				</span>
			</div>
			</NavLink>
		))}
	</>
  )
}

export default NavButtonLinks