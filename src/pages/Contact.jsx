import React, { useEffect, useRef, useState } from "react";
import { ContentContainer, Header, Input, NavButtonLinks } from "../components";
import { NavLink } from "react-router-dom";
import { SocialLinks } from "../utils/data";
import { useFormik } from "formik";
import { contactSchema } from "../utils/helpers/contactSchema";
import emailjs from '@emailjs/browser';
import * as ICONS from '../assets/icons'
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [activeLink, setActiveLink] = useState("Contact");
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_8naxzfq', 'template_0ziprhi', formRef.current, 'rOawyLbzdJCyLyglh')
      .then((result) => {
          console.log(result.text, 'FORM_DATA: ',formRef.current.value);
		  setIsSuccess(true);
		  resetForm()
      }, (error) => {
          console.log(error.text);
		  resetForm()
      });
	  formRef.current.reset()
  };


  const handleFormSubmit = () => {
	sendEmail()
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm } = useFormik({
    initialValues: {
      names: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
	const timer = setTimeout(() => {
		setIsSuccess(false)
	}, 6000);

	return () => clearTimeout(timer)
  },[isSuccess])

  return (
    <div className="">
      <AnimatePresence>
        {
          isSuccess && (
            <motion.div
            exit={{ x: 1000 }}
            className={`text-[#ffffff] bg-[#da5165] w-fit p-2 px-4 fixed right-3 bottom-3 border-l-2 border-l-white-500 transition-all duration-300`}> <span className="animate-puls">Hey!👋 Thanks for reaching out </span> </motion.div>
          )
        }
      </AnimatePresence>
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
        <motion.section
        initial={{ y: '60vh'}}
        animate={{ y: 0 }}
        transition={{delay: .2, duration: .2}}
        className="flex flex-col gap-y-4 mt-10 md:flex-row md:gap-x-20 lg:gap-x-40 md:items-start md:mt-8 md:w-[90%] md:mx-auto">
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
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-3">
                <div className="w-full">
                  <Input
                    type="text"
                    name="names"
                    id="names"
                    placeholder="Names"
					touched={touched}
					handleChange={handleChange}
					handleBlur={handleBlur}
					value={values.names}
					errors={errors}
                  />
				  {
					touched.names && errors?.names &&
					<span className="text-red-500 text-sm ml-2"> {errors.names} </span>
				  }
                </div>
                <div className="w-full">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
					touched={touched}
					handleChange={handleChange}
					handleBlur={handleBlur}
					value={values.email}
					errors={errors}
                  />
				  {
					touched.email && errors?.email &&
					<span className="text-red-500 text-sm ml-2"> {errors.email} </span>
				  }
                </div>
              </div>
              <div className="mt-6">
                <Input
					type="text"
					name="subject"
					id="subject"
					touched={touched}
					handleChange={handleChange}
					handleBlur={handleBlur}
					value={values.subject}
					errors={errors}
                  	placeholder="Subject"
                />
				{
					touched.subject && errors?.subject &&
					<span className="text-red-500 text-sm ml-2"> {errors.subject} </span>
				  }
              </div>
              <div className="mt-6">
                <textarea
					name="message"
					id="message"
					touched={touched}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.message}
					cols="30"
					rows="5"
					placeholder="Message"
					className={`${touched.message && errors.message && 'border border-red-500'} p-3 px-4 w-full rounded-3xl bg-isSecondary5 focus:outline-none focus:shadow-md`}
                ></textarea>
				{
					touched.message && errors?.message &&
					<span className="text-red-500 text-sm ml-2"> {errors.message} </span>
				  }
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
				  disabled={isSubmitting ? true : false}
                  className={`flex items-center gap-1 p-2.5 px-4 mt-4 bg-isPrimary ${isSubmitting && 'bg-[#fb7d8fc9]'} text-[#ffffffff] rounded-full font-bold cursor-pointer`}
                >
				 {isSubmitting && <span className="animate-spin"><ICONS.AiOutlineLoading3Quarters/></span>}
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </aside>
        </motion.section>

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
