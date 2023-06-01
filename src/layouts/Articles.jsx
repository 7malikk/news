import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { CgSpinnerTwo } from 'react-icons/cg';

const Articles = () => {
  const { category } = useParams();
  const {
    general,
    sports,
    entertainment,
    health,
    business,
    science,
    tech,
    isLoading,
  } = useSelector((store) => store.articles);
  const cat =
    category === 'sports'
      ? sports
      : category === 'entertainment'
      ? entertainment
      : category === 'health'
      ? health
      : category === 'business'
      ? business
      : category === 'science'
      ? science
      : category === 'tech'
      ? tech
      : general;
  const first = cat[0];
  const others = cat.slice(1, 10);

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
    <section className=" px-2 md:px-8 pb-2 md:pb-8">
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
        <h1 className="capitalize text-xl md:text-3xl font-semibold ">
          {category == 'tech' ? 'Technology' : category}
        </h1>
      </div>
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
        {others.map((item, idx) => {
          return (
            <Link
              className="hover:text-black  hover:underline col-span-1 flex flex-col items-center space-y-5 text-gray-500 group"
              key={idx}
              to={`/article/${item?.title}`}>
              <img
                src={item?.urlToImage || fallBackBcg}
                alt={item?.title}
                // className="h-fit w-fit"
              />
              <p className=" text-left font-bold text-xl md:text-3xl">
                {item?.title}
              </p>{' '}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
