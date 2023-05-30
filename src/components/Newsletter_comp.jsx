const Newsletter = () => {
  return (
    <section className="p-2 md:p-8">
      <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between">
        <h4 className="capitalize text-2xl font-bold text-center md:text-left">
          Sign up for our newsletter
        </h4>
        <p className="font-semibold md:w-2/3 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi.
          Aut blanditiis in commodi. Corrupti illum facilis sunt doloribus
          exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Consequuntur eum alias minus? Praesentium distinctio repellendus
          exercitationem, eos corrupti dolorem illum!
        </p>
      </div>
      <form className="space-y-3 flex justify-center items-center flex-col  p-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-2 md:w-1/2 border-2 outline-none rounded-full"
        />
        <button
          type="submit"
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-in-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Subscribe Now
          </span>
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
