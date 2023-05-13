
const SingleWorkExperience = ({ duration, title, company, tasks }) => {
  return (
    <div className="mb-8">
      <h4 className="text-isPrimary md:text-[17px]">{duration}</h4>
      <h1 className="text-isSecondary uppercase font-bold text-xl leading-3 pt-2 pb-1.5 tracking-tighter">
       {title}
      </h1>
      <span className="">{company}</span>
      <ul className="mt-2 list-disc ml-4">
        {tasks.map((task, idx) => (
          <li key={idx} className="">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleWorkExperience;
