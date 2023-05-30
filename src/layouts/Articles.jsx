import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

const Articles = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between p-2 md:p-8">
        <nav className="flex justify-end items-center space-x-4">
          <form>
            <select name="sources" id="sources" placeholder="CNN">
              <option value="all">All</option>
              <option value="CNN">CNN</option>
              <option value="Youtube">Youtube</option>
              <option value="BBC">BBC</option>
              <option value="Aljazeerah">Aljazeerah</option>
            </select>
            <button type="submit">Filter</button>
          </form>

          <div className="flex space-x-5">
            <button>
              <BiChevronLeftCircle className=" w-5 h-5" />
            </button>
            <button>
              <BiChevronRightCircle className=" w-5 h-5" />
            </button>
          </div>
        </nav>
        <hr />
        <h1>Category: Business</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-8">
        <div className="col-span-1 md:col-span-2 bg-orange-400 h-80 flex flex-col justify-between ">
          <p className=" text-center">Title: Lorem ipsum dolor sit amet.</p>
          <img src="" alt="a1" />
          <p>
            description: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Itaque tempora fugit minima accusamus, quod veniam!
          </p>
        </div>
        <div className="bg-green-500 h-80 flex flex-col justify-between">
          <img src="" alt="a2" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-red-500  h-80 flex flex-col justify-between">
          {' '}
          <img src="" alt="a3" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-purple-500  h-80 flex flex-col justify-between">
          <img src="" alt="a4" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-amber-500  h-80 flex flex-col justify-between">
          <img src="" alt="a5" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-blue-500  h-36 flex justify-start items-center">
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-violet-500  h-36  flex justify-start items-center">
          {' '}
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-slate-400  h-36  flex justify-start items-center">
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-gray-500  h-36  flex justify-start items-center">
          {' '}
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-yellow-500  h-36  flex justify-start items-center">
          {' '}
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
};

export default Articles;
