import React from "react";

const SingleEducationContainer = ({
  title,
  school,
  description,
  duration,
  summaries,
}) => {
  return (
    <div className="mb-10 relative md:pl-4">
      <div className="w-8 h-8 rounded-full bg-[#f3dadaf5] absolute -left-[45px] grid place-content-center">
        <span className="w-3.5 h-3.5 rounded-full bg-isPrimary"></span>
      </div>
      <h1 className="text-isPrimary uppercase font-bold text-xl leading-none pb-1.5 tracking-tighter">
        {title}
      </h1>
      <span className="italic text-md text-isSecondary">{school}</span>
      <span className="block bg-[#9e9e9e24] w-fit p-2 px-3 my-2 rounded-[5px] text-sm font-semibold text-isSecondary">
        {duration}
      </span>
      <p className="mt-3">{description}</p>
      <ul className="mt-4 list-disc ml-10 md:ml-16">
        {summaries.map((summary, idx) => (
          <li key={idx} className="">
            {summary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleEducationContainer;
