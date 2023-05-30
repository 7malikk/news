import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
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
  return (
    <section className="mb-6">
      <Slider {...settings}>
        <div className="bg-blue-500 bg-cover bg-no-repeat bg-center h-[60vh] ">
          <div className="h-full flex flex-col justify-end px-2 md:px-8 py-2">
            <h3 className="text-xl font-bold">Title: Lorem ipsum dolor sit.</h3>
            <p className="text-base font-semibold w-full md:w-1/2">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam sequi placeat, laboriosam voluptates minus at.
            </p>
            <div className="flex space-x-4 text-sm">
              <p>Date/Time: 12/12/2023 </p>
              <p>Author: Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 bg-cover bg-no-repeat bg-center h-[60vh] ">
          <div className="h-full flex flex-col justify-end px-2 md:px-8 py-2">
            <h3 className="text-xl font-bold">Title: Lorem ipsum dolor sit.</h3>
            <p className="text-base font-semibold w-full md:w-1/2">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam sequi placeat, laboriosam voluptates minus at.
            </p>
            <div className="flex space-x-4 text-sm">
              <p>Date/Time: 12/12/2023 </p>
              <p>Author: Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 bg-cover bg-no-repeat bg-center h-[60vh] ">
          <div className="h-full flex flex-col justify-end px-2 md:px-8 py-2">
            <h3 className="text-xl font-bold">Title: Lorem ipsum dolor sit.</h3>
            <p className="text-base font-semibold w-full md:w-1/2">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam sequi placeat, laboriosam voluptates minus at.
            </p>
            <div className="flex space-x-4 text-sm">
              <p>Date/Time: 12/12/2023 </p>
              <p>Author: Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 bg-cover bg-no-repeat bg-center h-[60vh] ">
          <div className="h-full flex flex-col justify-end px-2 md:px-8 py-2">
            <h3 className="text-xl font-bold">Title: Lorem ipsum dolor sit.</h3>
            <p className="text-base font-semibold w-full md:w-1/2">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam sequi placeat, laboriosam voluptates minus at.
            </p>
            <div className="flex space-x-4 text-sm">
              <p>Date/Time: 12/12/2023 </p>
              <p>Author: Lorem, ipsum.</p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
