/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { CgSpinnerTwo } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';
import Error from './error_comp';

const Section = ({ data, loading, name, error }) => {
  const first = !loading && data[0][0];
  const some = !loading && data[0].slice(1, 7);

  const fallBackBcg =
    'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center">
        <CgSpinnerTwo className="animate-spin w-10 h-10" />
      </div>
    );
  }
  if (error) {
    return <Error />;
  }

  return (
    <section>
      <div className="p-2 md:p-8 space-y-3">
        <hr className="hidden lg:block" />
        <Link
          className="group hover:text-red-500 flex w-fit items-center space-x-3 group"
          to={`/${name}`}>
          <h1 className="text-xl md:text-3xl font-semibold capitalize">
            {name}
          </h1>
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

export default Section;
