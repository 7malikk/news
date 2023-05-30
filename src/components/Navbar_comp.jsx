import { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-8 py-4  w-full z-10 relative lg:static">
        <div className="flex space-x-6 lg:space-x-0 items-center w-full lg:w-1/3">
          <span className="inline lg:hidden ">
            {isNavOpen ? (
              <GrClose
                className="transition ease-in-out delay-300 duration-500"
                onClick={() => setIsNavOpen(!isNavOpen)}
              />
            ) : (
              <GoThreeBars
                className="transition ease-in-out delay-300 duration-500"
                onClick={() => setIsNavOpen(!isNavOpen)}
              />
            )}
          </span>
          <h1 className="text-2xl font-bold">
            <Link to="/"> Logo</Link>
          </h1>
        </div>
        <div
          className={`flex flex-col lg:flex-row justify-between lg:items-center px-8 lg:px-0 w-full transition ease-in-out delay-300 duration-500 z-50 absolute lg:static -bottom-56 left-0 ${
            isNavOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-[140%] opacity-0 lg:translate-y-0 lg:opacity-100'
          }`}>
          <ul className="flex flex-col lg:flex-row space-x-0 lg:space-x-11 items-center space-y-2 p-2 lg:space-y-0 font-semibold">
            <li>
              <Link>Business</Link>
            </li>
            <li>
              <Link>Health</Link>
            </li>
            <li>
              <Link>Science</Link>
            </li>
            <li>
              <Link>Sports</Link>
            </li>
            <li>
              <Link>Technology</Link>
            </li>
            <li>
              <Link>Entertainment</Link>
            </li>
          </ul>
          <form className=" lg:w-fit  relative">
            <input
              type="text"
              className="border-2 rounded-lg p-2 outline-none w-full  "
              placeholder="Search News App..."
            />
            <button type="submit">
              <BsSearch className="absolute top-3 w-5 h-5 right-2" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
