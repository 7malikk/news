import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
const Article = () => {
  const { title } = useParams();
  const {
    general,
    sports,
    entertainment,
    health,
    business,
    science,
    tech,
    searchResult,
  } = useSelector((store) => store.articles);
  const allArticles = [
    ...general,
    ...sports,
    ...entertainment,
    ...health,
    ...business,
    ...science,
    ...tech,
    ...searchResult,
  ];
  const article = allArticles.find((article) => article.title === title);

  const fallBackBcg =
    'https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';

  return (
    <section className="p-5 md:p-8 lg:px-56  space-y-8">
      <div className="space-y-8">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold w-full">
          {article?.title}
        </h1>
        <div className="font-semibold text-gray-400 text-base md:text-lg">
          <p>
            By: <span className="text-black">{article?.author}</span>
          </p>
          <p>
            Published:{' '}
            <span className="text-black">
              {new Date(article?.publishedAt).toDateString()}
            </span>{' '}
          </p>
        </div>
      </div>

      <div className="space-y-8 text-base md:text-xl">
        <img
          src={article?.urlToImage || fallBackBcg}
          alt="article image"
          className="w-full"
        />
        <p className="text-justify font-semibold">{article?.description}</p>

        <p className="text-justify">{article?.content}</p>
        <a
          target="_blank"
          rel="noreferrer"
          href={article?.url}
          className="flex items-center space-x-1 text-blue-600 hover:text-purple-600 w-1/2 md:w-fit  md:text-lg ">
          <p>Read more</p> <BsBoxArrowInUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};

export default Article;
