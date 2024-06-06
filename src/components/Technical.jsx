import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import { GrGraphQl } from "react-icons/gr";
import { SiPhp } from "react-icons/si";
import { SiPython } from "react-icons/si";

const Technical = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Technical Skills</h1>
      <div className="flex">
        <ul className="flex-none px-5">
          <li className="flex">
            <RiJavascriptFill className="size-12 text-yellow-400" />
          </li>
          <li>
            <RiReactjsFill className="size-12 text-sky-400" />
          </li>
          <li>
            <GrNode className="size-12 text-green-400" />
          </li>
        </ul>
        <ul className="flex-none px-5">
          <li>
            <GrGraphQl className="size-12 text-pink-400" />
          </li>
          <li>
            <SiPhp className="size-12 text-violet-400" />
          </li>
          <li>
            <SiPython className="size-12 text-blue-400" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technical;
