import React, { useState } from "react";
import { ContentContainer, Header, Input, NavButtonLinks } from "../components";
import { NavLink } from "react-router-dom";
import { SocialLinks } from "../utils/data";

const Contact = () => {
  const [activeLink, setActiveLink] = useState("Contact");

  const getIconColorByName = (name) => {
	if (name === 'Linkedin') {
		return '#0072b1'
	}
  }

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
        title="Get In Touch"
        subtitle="Do you have a project in mind? I'm here to help bring your ideas to life. Let's chat!"
      >
        <section className="flex flex-col gap-y-4 mt-10 md:flex-row md:gap-x-20 lg:gap-x-40 md:items-start md:mt-8 md:w-[90%] md:mx-auto">
          <aside>
            <h2 className="font-bold text-isPrimary text-2xl leading-6">
              Let's discuss this!
            </h2>
            <p className="mt-3">
              Hey! hit me up via my{" "}
              <NavLink
                to="mailto:odohfriday9@gmail.com?body=Hello Friday,"
                className="text-isPrimary font-medium"
              >
                email. 🚀
              </NavLink>
            </p>
          </aside>
          <aside className="md:w-[75%] lg:w-[55%]">
            <form action="">
              <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-3">
                <Input type="text" name="name" id="name" placeholder="Names" />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mt-6">
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mt-6">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  className="borde p-3 px-4 w-full rounded-3xl bg-isSecondary5 focus:outline-none focus:shadow-md"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="p-2.5 px-4 mt-4 bg-isPrimary text-[#ffffffff] rounded-full font-bold">
                  Send Message
                </button>
              </div>
            </form>
          </aside>
        </section>

        <section className="flex flex-col gap-y-4 mt-10 md:flex-row md:gap-x-20 md:items-start md:my-16 md:w-[90%] md:mx-auto">
          <aside>
            <h2 className="font-bold text-isPrimary text-2xl leading-6">
              Contact me on social media!
            </h2>
          </aside>
          <aside className="md:w-[60%]">
            <section className="flex flex-col items-center gap-y-8 md:flex-row gap-x-6">
              {SocialLinks.map(
                ({ name, icon, link, id }) =>
                  name !== "Mail" && (
                    <NavLink
                      className={`flex gap-1 items-center`}
                      to={link}
					  target="_blank"
                      key={id}
                    >
                      <span>{icon}</span> <span>{name}</span>{" "}
                    </NavLink>
                  )
              )}
            </section>
          </aside>
        </section>
      </ContentContainer>
    </div>
  );
};

export default Contact;
