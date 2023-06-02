import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useState } from 'react';
import { useEffect } from 'react';
import Error from '../components/error_comp';

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
    isHealthLoading,
    isScienceLoading,
    isEntLoading,
    isSportsLoading,
    isBusinessLoading,
    isTechLoading,
    isHealthError,
    isScienceError,
    isEntError,
    isSportsError,
    isBusinessError,
    isTechError,
  } = useSelector((store) => store.articles);
  let cat;
  switch (category) {
    case 'sports':
      cat = sports;
      break;
    case 'entertainment':
      cat = entertainment;
      break;
    case 'health':
      cat = health;
      break;
    case 'business':
      cat = business;
      break;
    case 'science':
      cat = science;
      break;
    case 'tech':
      cat = tech;
      break;
    default:
      cat = general;
      break;
  }

  const [page, setPage] = useState(0);
  const [displayData, setDisplayData] = useState([]);

  const first =
    (!isHealthLoading ||
      !isScienceLoading ||
      !isEntLoading ||
      !isSportsLoading ||
      !isBusinessLoading ||
      !isTechLoading) &&
    displayData[0];
  const others =
    (!isHealthLoading ||
      !isScienceLoading ||
      !isEntLoading ||
      !isSportsLoading ||
      !isBusinessLoading ||
      !isTechLoading) &&
    displayData.slice(1, 10);

  useEffect(() => {
    setDisplayData(cat[page]);
  }, [page, cat]);

  const next = () => {
    setPage((old) => {
      let nextPage = old + 1;
      if (nextPage > cat.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prev = () => {
    setPage((old) => {
      let prevPage = old - 1;
      if (prevPage < 0) {
        prevPage = cat.length - 1;
      }
      return prevPage;
    });
  };

  const fallBackBcg =
    'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
  if (
    isHealthLoading ||
    isScienceLoading ||
    isEntLoading ||
    isSportsLoading ||
    isBusinessLoading ||
    isTechLoading
  ) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center">
        <CgSpinnerTwo className="animate-spin w-10 h-10" />
      </div>
    );
  }
  if (
    isHealthError ||
    isScienceError ||
    isEntError ||
    isSportsError ||
    isBusinessError ||
    isTechError
  ) {
    return <Error />;
  }

  return (
    <section className=" px-2 md:px-8 pb-2 md:pb-8">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between p-2 md:p-8">
        <nav className="flex flex-col m:flex-row md:justify-end md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex space-x-5">
            <button onClick={prev}>
              <BiChevronLeftCircle className=" w-5 h-5" />
            </button>
            <p>{`${page + 1} of ${cat.length}`}</p>
            <button onClick={next}>
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
