import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { menus } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const Headers = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`w-full md:flex md:justify-center py-3 md:px-0 px-4`}>
      <div className="w-[75%] flex justify-between items-center h-auto relative">
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
          <h1>{`{Dev}`}</h1>
          <h1>Ashish</h1>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            {menus.map((menu) => (
              <Link key={menu.name} to={menu.link}>
                <p className="md:mx-4 text-xs text-zinc-600 font-medium md:my-0 my-8">
                  {menu.name}
                </p>
              </Link>
            ))}
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
          <div className="flex gap-3"></div>
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute top-4 right-2 cursor-pointer md:hidden"
      >
        {open ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>

      {open && (
        <div className="md:hidden w-full">
          {menus.map((menu) => (
            <Link key={menu.name} to={menu.link}>
              <p className="md:mx-4 text-xs text-zinc-600 font-medium md:my-0 my-8">
                {menu.name}
              </p>
            </Link>
          ))}
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
      )}
    </nav>
  );
};

export default Headers;
