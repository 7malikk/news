const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-y-4 lg:space-y-0 lg:space-x-8 p-2 md:p-8">
        <div className="space-y-8 text-center  flex justify-center flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-5xl font-bold ">Logo</h1>
          <p className=" text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            obcaecati ex molestiae reprehenderit quia eveniet ipsa eos id
            officiis molestias.
          </p>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xl md:text-2xl font-bold">Categories</p>
          <ul className="space-y-1 text-base md:text-lg">
            <li className="hover:text-[#F7C35F] ">Business</li>
            <li className="hover:text-[#F7C35F]">Health</li>
            <li className="hover:text-[#F7C35F]">Science</li>
            <li className="hover:text-[#F7C35F]">Technology</li>
            <li className="hover:text-[#F7C35F]">Sports</li>
            <li className="hover:text-[#F7C35F]">Entertainment</li>
          </ul>
        </div>
        <div className="space-y-4   text-center lg:text-left">
          <p className="text-xl md:text-2xl font-bold">Company</p>
          <ul className="space-y-1 text-base md:text-lg">
            <li className="hover:text-[#F7C35F]">About Us</li>
            <li className="hover:text-[#F7C35F]">Careers</li>
            <li className="hover:text-[#F7C35F]">Privacy Policy</li>
            <li className="hover:text-[#F7C35F]">Terms Of Services</li>
            <li className="hover:text-[#F7C35F]">Contact Us</li>
          </ul>
        </div>
        <div className="space-y-4  text-center lg:text-left">
          <p className="text-xl md:text-2xl font-bold">Social Media</p>
          <ul className="space-y-1 text-base md:text-lg">
            <li className="hover:text-[#F7C35F]">Twitter</li>
            <li className="hover:text-[#F7C35F]">Youtube</li>
            <li className="hover:text-[#F7C35F]">Instagram</li>
            <li className="hover:text-[#F7C35F]">Facebook</li>
          </ul>
        </div>
      </footer>
      <div className="text-center">Copyright Malik</div>
    </>
  );
};

export default Footer;
