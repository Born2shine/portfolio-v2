import { NavLink } from "react-router-dom";
import { BiChevronRight } from 'react-icons/bi'

const ContentContainer = ({ title, subtitle, children, breadcrumb }) => {
  return (
    <section className="w-[90%] h-[80vh] mx-auto overflow-y-scroll bg-[#ffffffff] px-5 py-10 mt-6 md:w-[88%] md:h-[450px] md:mt-1 md:pt-12">
      <div className="md:w-[90%] md:mx-auto">
        <h1 className="font-1 font-extrabold text-4xl leading-12 text-isPrimary md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
        {breadcrumb?.length > 0 ? (
          <div className="flex gap-x-3 items-center">
            {breadcrumb.map(({ title, path }, idx) => (
              <div className="flex gap-x-3 items-center" key={idx}>
                <NavLink to={path} className={path ? 'underline text-isPrimary' : ''}> {title} </NavLink> {(idx + 1) < breadcrumb.length && <span className=""><BiChevronRight/> </span>}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {children}
    </section>
  );
};

export default ContentContainer;
