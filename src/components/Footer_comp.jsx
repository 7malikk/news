import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-y-4 lg:space-y-0 lg:space-x-8 p-2 md:p-8 bg-black text-white">
        <div className="space-y-8 text-center  flex justify-center flex-col items-center lg:items-start">
          <Link to={'/'}>
            <h1 className="text-3xl md:text-5xl font-bold text-red-500 hover:text-white transition ease-in-out delay-150 duration-300 ">
              News App
            </h1>
          </Link>
          <p className=" text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            obcaecati ex molestiae reprehenderit quia eveniet ipsa eos id
            officiis molestias.
          </p>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xl md:text-2xl font-bold text-red-500">
            Categories
          </p>
          <ul className="space-y-1 text-base md:text-lg">
            <li className="transition ease-in-out delay-150 duration-300 hover:underline">
              <Link to={'/business'}>Business</Link>
            </li>
            <li className="transition ease-in-out delay-150 duration-300 hover:underline">
              <Link to={'/health'}>Health</Link>
            </li>
            <li className="transition ease-in-out delay-150 duration-300 hover:underline">
              <Link to={'/science'}>Science</Link>
            </li>
            <li className="transition ease-in-out delay-150 duration-300 hover:underline">
              <Link to={'/sports'}>Sports</Link>
            </li>
            <li className="transition ease-in-out delay-150 duration-300 hover:underline">
              <Link to={'/tech'}>Technology</Link>
            </li>
            <li className="transition ease-in-out delay-150 duration-300 hover:underline">
              <Link to={'/entertainment'}>Entertainment</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4   text-center lg:text-left">
          <p className="text-xl md:text-2xl font-bold text-red-500">Company</p>
          <ul className="space-y-1 text-base md:text-lg">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="space-y-4  text-center lg:text-left">
          <p className="text-xl md:text-2xl font-bold text-red-500">
            Social Media
          </p>
          <ul className="space-y-1 text-base md:text-lg">
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </footer>
      <div className="text-center bg-black text-white p-8 ">
        Built with 💜 by{' '}
        <a
          href="https://github.com/7malikk"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-red-500">
          Malikk
        </a>
      </div>
    </>
  );
};

export default Footer;
