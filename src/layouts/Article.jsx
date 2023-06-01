import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
const Article = () => {
  const { title } = useParams();
  const { allArticles } = useSelector((store) => store.articles);
  const article = allArticles.find((article) => article.title === title);
  console.log(article);
  const fallBackBcg =
    'https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';

  return (
    <section className="p-5 md:p-8 lg:px-56  space-y-8">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-5xl font-semibold w-full md:w-2/3">
          {article.title}
        </h1>
        <div className="font-semibold text-gray-400 text-base">
          <p>Author: {article.author}</p>
          <p>Published: {new Date(article.publishedAt).toDateString()} </p>
        </div>
      </div>

      <div className="space-y-8">
        <img
          src={article.urlToImage || fallBackBcg}
          alt="article image"
          className="w-full"
        />
        <p className="text-justify">{article.description}</p>
        <a target="_blank" rel="noreferrer" href={article.url}>
          Read more <BsBoxArrowInUpRight />
        </a>
      </div>
    </section>
  );
};

export default Article;
