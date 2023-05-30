import { BsSearch } from 'react-icons/bs';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

const Search = () => {
  return (
    <section className="p-4 md:p-8  lg:px-56 flex flex-col  space-y-6">
      <form className=" relative">
        <input
          type="text"
          className="border-2 rounded-lg p-2 outline-none w-full  "
          placeholder="Search News App..."
        />
        <button type="submit">
          <BsSearch className="absolute top-3 w-5 h-5 right-2" />
        </button>
      </form>
      <div className="flex justify-between">
        <h1>
          showig results for{' '}
          <span className="font-semibold text-lg">ecuador</span>
        </h1>
        <form className="hidden md:block">
          <select name="sources" id="sources" placeholder="CNN">
            <option value="all">All</option>
            <option value="CNN">CNN</option>
            <option value="Youtube">Youtube</option>
            <option value="BBC">BBC</option>
            <option value="Aljazeerah">Aljazeerah</option>
          </select>
          <button type="submit">Filter</button>
        </form>
      </div>
      <div>
        <hr />
        <div className="flex justify-evenly">
          <img src="" alt="img" className="w-1/2" />
          <div>
            <p className="font-semibold text-xl md:text-2xl">
              title: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Porro, iusto.
            </p>
            <p>date/time: 12/12/2023</p>
            <p className="text-base md:text-lg">
              description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam, veritatis.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-evenly">
          <img src="" alt="img" className="w-1/2" />
          <div>
            <p className="font-semibold text-xl md:text-2xl">
              title: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Porro, iusto.
            </p>
            <p>date/time: 12/12/2023</p>
            <p className="text-base md:text-lg">
              description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam, veritatis.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-evenly">
          <img src="" alt="img" className="w-1/2" />
          <div>
            <p className="font-semibold text-xl md:text-2xl">
              title: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Porro, iusto.
            </p>
            <p>date/time: 12/12/2023</p>
            <p className="text-base md:text-lg">
              description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam, veritatis.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-5">
        <button>
          <BiChevronLeftCircle className=" w-5 h-5 md:w-7 md:h-7" />
        </button>
        <button>
          <BiChevronRightCircle className=" w-5 h-5 md:w-7 md:h-7" />
        </button>
      </div>
    </section>
  );
};

export default Search;
