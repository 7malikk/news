const HomeVideos = () => {
  return (
    <section className="p-2 md:p-8">
      <hr />
      <h1>Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="col-span-1   md:col-span-2 bg-orange-400 h-full flex flex-col justify-between ">
          <img src="" alt="v1" />

          <p className=" text-center">Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-green-500 h-80 flex flex-col justify-between">
          <img src="" alt="v2" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-red-500  h-80 flex flex-col justify-between">
          {' '}
          <img src="" alt="v3" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-purple-500  h-80 flex flex-col justify-between">
          <img src="" alt="v4" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-amber-500  h-80 flex flex-col justify-between">
          <img src="" alt="v5" />
          <p>Title: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeVideos;
