import { BsSearch } from 'react-icons/bs';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFromSource, search } from '../features/articles/articles';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import Error from '../components/error_comp';

const Search = () => {
  const dispatch = useDispatch();
  const { searchResult, isSearchLoading, sources, isSearchError } = useSelector(
    (store) => store.articles
  );
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [mainKeyword, setMainKeyword] = useState('');

  const [page, setPage] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (isSearchLoading) return;
    setDisplayData(searchResult[page]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isSearchLoading]);

  const next = () => {
    setPage((old) => {
      let nextPage = old + 1;
      if (nextPage > searchResult.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prev = () => {
    setPage((old) => {
      let prevPage = old - 1;
      if (prevPage < 0) {
        prevPage = searchResult.length - 1;
      }
      return prevPage;
    });
  };

  const fallBackBcg =
    'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
  useEffect(() => {
    setMainKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    dispatch(search(keyword));
    navigate(`/search/${keyword}`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mainKeyword) {
      dispatch(search(mainKeyword));
      navigate(`/search/${mainKeyword}`);
    }
  };
  const handleFilter = (e) => {
    e.preventDefault();
    if (filter === 'false') {
      dispatch(search(mainKeyword));
      navigate(`/search/${mainKeyword}`);
    } else {
      dispatch(getFromSource(`${mainKeyword}&domains=${filter}`));
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
            <span className="font-semibold text-lg">{keyword}</span>
          </h1>
        )}
        <form onSubmit={handleFilter} className="space-x-1  self-end">
          <label htmlFor="sources" className="text-gray-400">
            Filter source
          </label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="sources"
            id="sources"
            className="border rounded-md py-1 px-2 outline-none hover:border-red-500 transition duration-300 delay-150 ease-in-out">
            <option value="false">All News App</option>
            {sources.map((source, idx) => {
              return (
                <option key={idx} value={source.url}>
                  {source.name}
                </option>
              );
            })}
          </select>
          <button type="submit">Filter</button>
        </form>
      </div>
      {isSearchLoading ? (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <CgSpinnerTwo className="animate-spin w-10 h-10" />
        </div>
      ) : searchResult.length === 0 ? (
        <div className="w-full h-[40vh] flex flex-col justify-center md:space-y-3">
          <p className="text-xl">
            Your search for <span className="font-semibold ">{keyword}</span>{' '}
            did not match any results.
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
      ) : isSearchError ? (
        <Error />
      ) : (
        <div className="space-y-2">
          {displayData?.map((item, idx) => {
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
        <button onClick={prev}>
          <BiChevronLeftCircle className=" w-5 h-5" />
        </button>
        <p>{`${page + 1} of ${searchResult.length}`}</p>
        <button onClick={next}>
          <BiChevronRightCircle className=" w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Search;
