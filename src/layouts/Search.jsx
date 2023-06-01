import { BsSearch } from 'react-icons/bs';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../features/articles/articles';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';

const Search = () => {
  const { searchResult, isLoading } = useSelector((store) => store.articles);
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [mainKeyword, setMainKeyword] = useState('');
  const dispatch = useDispatch();
  const firstTen = searchResult.slice(0, 11);

  const fallBackBcg =
    'https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';

  useEffect(() => {
    setMainKeyword(keyword);
  }, [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mainKeyword) {
      dispatch(search(mainKeyword));
      navigate(`/search/${mainKeyword}`);
    }
  };

  return (
    <section className="p-4 md:p-8  lg:px-56 flex flex-col  space-y-6">
      <form onSubmit={handleSubmit} className=" relative">
        <input
          type="text"
          className="border-2 rounded-lg p-2 outline-none w-full  "
          placeholder="Search News App..."
          name="mainKeyword"
          value={mainKeyword}
          onChange={(e) => setMainKeyword(e.target.value)}
        />
        <button type="submit">
          <BsSearch className="absolute top-3 w-5 h-5 right-2" />
        </button>
      </form>
      <div className="flex justify-between">
        {searchResult.length !== 0 && (
          <h1>
            showig results for{' '}
            <span className="font-semibold text-lg">{mainKeyword}</span>
          </h1>
        )}
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
      {isLoading ? (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <CgSpinnerTwo className="animate-spin w-10 h-10" />
        </div>
      ) : searchResult.length === 0 ? (
        <div className="w-full h-[40vh] flex flex-col justify-center md:space-y-3">
          <p className="text-xl">
            Your search for{' '}
            <span className="font-semibold ">{mainKeyword}</span> did not match
            any results.
          </p>
          <div className=" md:space-y-2">
            <p className="font-semibold text-xl">A few suggestions:</p>
            <ul className="list-disc list-inside text-lg font-semibold">
              <li>Make sure all words are spelled correctly</li>
              <li>Try different keywords</li>
              <li>Try more general keywords</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {firstTen.map((item, idx) => {
            return (
              <div key={idx} className="space-y-2">
                <hr />
                <Link
                  to={`/article/${item?.title}`}
                  className="flex justify-normal md:justify-evenly flex-col md:flex-row group">
                  <img
                    src={item.urlToImage || fallBackBcg}
                    alt={item.title}
                    className="w-full md:w-1/2"
                  />
                  <div className="md:p-2 ">
                    <p className="font-semibold text-xl md:text-2xl group-hover:underline">
                      {item.title}
                    </p>
                    <p className="text-gray-400 ">
                      {new Date(item.publishedAt).toDateString()}
                    </p>
                    <p className="text-base md:text-lg hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
          <hr />
        </div>
      )}

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
