import { Typewriter } from "typewriter-effect";

const useTypwriter = () => {
	const result = <Typewriter
	options={{
	  strings: data,
	  autoStart: true,
	  loop: true,
	}}
  />
  const TypewriteThis = (data) => result
  return TypewriteThis;
};

export default useTypwriter;
