import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { CgSpinnerTwo } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { allArticles, isLoading } = useSelector((store) => store.articles);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };
  const fallBackBcg =
    'https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
  // if (isLoading) {
  //   return (
  //     <div className="w-full h-[60vh] flex justify-center items-center">
  //       <CgSpinnerTwo className="animate-spin w-10 h-10" />
  //     </div>
  //   );
  // }

  console.log(allArticles);
  return (
    <section className="mb-6">
      <h4 className="text-xl md:text-3xl font-semibold px-2 md:px-8">
        Top 5 Headlines - Nigeria
      </h4>
      <Slider {...settings}>
        {allArticles.map((article, idx) => {
          return (
            <Link key={idx} to={`/article/${article.title}`}>
              <div className=" h-[75vh] ">
                <div
                  style={{
                    backgroundImage: `url("${
                      article.urlToImage || fallBackBcg
                    }")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                  className=" h-full flex  px-2 md:px-8 py-2 hover:cursor-pointer group">
                  <div className="flex flex-col justify-end bg-white h-fit self-end w-full md:w-1/2 p-2 space-y-2">
                    <h3 className="text-xl md:text-3xl font-bold    group-hover:underline">
                      {article.title}
                    </h3>
                    {/* <p className="text-base hidden md:block font-semibold   ">
                    {article.description}
                  </p> */}
                    <div className="flex space-x-1 md:space-x-4 text-sm md:text-base font-semibold ">
                      <p>{new Date(article.publishedAt).toDateString()} </p>
                      <p>Author: {article.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
};

export default Hero;
