import Nav from "../components/Nav";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="mb-10">
      <div className="md:flex">
        <h1 className="pb-3 text-4xl md:text-5xl font-bold hover:bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text hover:text-transparent hover:duration-1000">
          <a href="/">Darwin Villaruel</a>
        </h1>
        <div className="ml-auto flex space-x-9">
          <Nav />
        </div>
      </div>
      <p className="text-sm md:text-base mt-3">
        🧑‍💻 Fullstack Developer | Integration | Virtual Assistant | Pharmacist
      </p>
      <div className="my-2 flex space-x-2">
        <a href="darwinvillaruel2215@gmail.com">
          <BsEnvelopeAtFill className="size-5 text-blue-600" />
        </a>
        <a href="https://www.linkedin.com/in/darwin-villaruel-6b58aa16a/">
          <BsLinkedin className="size-5 text-blue-600" />
        </a>
        <a href="https://github.com/darwinvillaruel">
          <BsGithub className="size-5 text-blue-600" />
        </a>

        <a href="https://drive.google.com/file/d/1xiHBJkfGtv44Zizdm0UvGH9nIon3BohX/view?usp=sharing">
          <BsFileEarmarkArrowDownFill className="size-5 text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default Header;
