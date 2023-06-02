import { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { search } from '../features/articles/articles';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsNavOpen(false);
    if (keyword) {
      dispatch(search(keyword));
      navigate(`/search/${keyword}`);
      setKeyword('');
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-8 py-2  w-full  z-10 relative lg:static lg:bg-black lg:text-white ">
        <div className="flex space-x-6 lg:space-x-0 items-center w-full lg:w-1/3">
          <div className=" lg:hidden">
            {isNavOpen ? (
              <GrClose
                className="transition ease-in-out delay-300 duration-500   w-5 h-5"
                onClick={() => setIsNavOpen(!isNavOpen)}
              />
            ) : (
              <GoThreeBars
                className="transition ease-in-out delay-300 duration-500   w-5 h-5"
                onClick={() => setIsNavOpen(!isNavOpen)}
              />
            )}
          </div>
          <h1
            onClick={() => setIsNavOpen(false)}
            className="text-2xl font-bold text-red-500 hover:text-white transition ease-in-out delay-150 duration-300">
            <Link to="/"> News App</Link>
          </h1>
        </div>
        <div
          className={`bg-black py-2 text-white flex flex-col lg:flex-row justify-between lg:items-center px-8 lg:px-0 w-full transition ease-in-out delay-300 duration-500 z-50 absolute lg:static -bottom-56 left-0 ${
            isNavOpen
              ? 'translate-y-[13%] opacity-100'
              : '-translate-y-[150%] opacity-0 lg:translate-y-0 lg:opacity-100'
          }`}>
          <ul className="flex flex-col lg:flex-row space-x-0 lg:space-x-11 items-center space-y-2 p-2 lg:space-y-0 font-semibold">
            <li
              onClick={() => setIsNavOpen(false)}
              className="transition ease-in-out delay-150 duration-300 hover:text-red-500">
              <Link to={'/business'}>Business</Link>
            </li>
            <li
              onClick={() => setIsNavOpen(false)}
              className="transition ease-in-out delay-150 duration-300 hover:text-red-500">
              <Link to={'/health'}>Health</Link>
            </li>
            <li
              onClick={() => setIsNavOpen(false)}
              className="transition ease-in-out delay-150 duration-300 hover:text-red-500">
              <Link to={'/science'}>Science</Link>
            </li>
            <li
              onClick={() => setIsNavOpen(false)}
              className="transition ease-in-out delay-150 duration-300 hover:text-red-500">
              <Link to={'/sports'}>Sports</Link>
            </li>
            <li
              onClick={() => setIsNavOpen(false)}
              className="transition ease-in-out delay-150 duration-300 hover:text-red-500">
              <Link to={'/tech'}>Technology</Link>
            </li>
            <li
              onClick={() => setIsNavOpen(false)}
              className="transition ease-in-out delay-150 duration-300 hover:text-red-500">
              <Link to={'/entertainment'}>Entertainment</Link>
            </li>
          </ul>
          <form
            onSubmit={handleSubmit}
            className=" lg:w-fit  relative text-black">
            <input
              type="text"
              className="border-2 rounded-lg p-2 outline-none w-full  "
              placeholder="Search News App..."
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">
              <BsSearch className="absolute top-3 w-5 h-5 right-2 text-black" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
