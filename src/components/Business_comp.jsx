// import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgSpinnerTwo } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';

const HomeArticles = () => {
  const { business, isLoading } = useSelector((store) => store.articles);
  const first = business[0];
  const some = business.slice(10, 15);

  const fallBackBcg =
    'https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';

  if (isLoading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center">
        <CgSpinnerTwo className="animate-spin w-10 h-10" />
      </div>
    );
  }
  return (
    <section>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between p-2 md:p-8">
        {/* <nav className="flex justify-end items-center space-x-4">
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
        </nav> */}
      </div>
      <div className="p-2 md:p-8 space-y-3">
        <hr />
        <Link
          className="group hover:text-red-500 flex w-fit items-center space-x-3 group"
          to={'/business'}>
          <h1 className="text-xl md:text-3xl font-semibold ">Business</h1>
          <BsArrowRight className="w-6 h-6 md:w-7 md:h-7 text-red-500 transition delay-150 duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-6" />
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <Link
            title={first?.title}
            className="col-span-1 lg:col-span-2 flex flex-col  space-y-5 hover:underline"
            to={`/article/${first?.title}`}>
            <img
              src={first?.urlToImage || fallBackBcg}
              alt={first?.title}
              // className="h-fit w-fit"
            />
            <p className=" text-left font-bold text-xl md:text-3xl">
              {first?.title}
            </p>
          </Link>
          <div className="col-span-1 flex flex-col items-center space-y-5 text-gray-500 group ">
            {some.map((item, idx) => {
              return (
                <Link
                  className="hover:text-black  hover:underline"
                  key={idx}
                  to={`/article/${item?.title}`}>
                  <p className=" text-left font-bold text-xl md:text-2xl lg:text-xl ">
                    {item?.title}
                  </p>
                  <hr />
                </Link>
              );
            })}
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeArticles;
