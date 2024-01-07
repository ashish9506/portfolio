import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { menus } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center h-[50%]">
      <div className="w-[75%]">
        <div className="flex flex-wrap justify-between my-10 items-center">
          <div className="text-center font-bold ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">{`{Dev}`}</h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
              Ashish
            </h1>
          </div>
          <div className="flex flex-wrap gap-10 text-zinc-500 text-sm">
            <p>+919506677024</p>
            <p>ashishchaurasiya9506@gmail.com</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ashish9506"
                target="_blank"
                className="text-2xl rounded-full text-zinc-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-chaurasiya-13170116b/"
                target="_blank"
                className="rounded-full bg-zinc-600 text-white p-1 text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="border border-zinc-300" />
        <div className="flex flex-wrap my-10 text-xs items-center text-zinc-600 font-medium justify-between">
          <div className="flex flex-rap gap-10">
            {menus.map((menu) => (
              <Link key={menu.name} to={menu.link}>
                {menu.name}
              </Link>
            ))}
          </div>

          <p className="text-center md:w-auto w-full md:p-0 p-4">
            Designed and build by Ashish Chaurasiya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
