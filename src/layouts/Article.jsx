const Article = () => {
  return (
    <section className="p-5 md:p-8 lg:px-56  space-y-8">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-5xl font-semibold w-full md:w-2/3">
          title: Lorem ipsum dolor sit amet.
        </h1>
        <div className="font-semibold text-gray-400 text-base">
          <p>Author: Lorem, ipsum.</p>
          <p>date/time: Lorem, ipsum.</p>
        </div>
      </div>

      <div className="space-y-8">
        <img src="" alt="article image" className="w-full" />
        <p className="text-justify">
          content: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          exercitationem odit laboriosam consectetur nihil, nulla optio, dolorem
          soluta omnis aliquid fugit minima repellat est delectus repudiandae
          illo fuga tempora impedit alias facilis illum eos. Exercitationem
          dolores delectus quae explicabo nulla?
        </p>
      </div>
    </section>
  );
};

export default Article;
