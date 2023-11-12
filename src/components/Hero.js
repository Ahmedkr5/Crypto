const Hero = ({ getNews, loading, response }) => {
  return (
    <div
      className="hero"
    >
      <div className="absolute top-1/2 transform -translate-y-1/2 xl:text-left mx-auto px-6 text-white md:w-auto">
        <p className="xl:text-6xl break-normal text-4xl text-primary font-bold">
          Follow <span className="text-active">Trends</span> & Attain{" "}
          <span className="text-active">Success</span>
        </p>
        <p className="text-primary text-l mt-6">
          Dive into the latest crypto trends with Coinexo, your hub for real-time
          news and insights.
        </p>
        {!loading && !response && (
          <button
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  hover:bg-hover block mt-2 sm:mb-0 w-auto rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getNews()}
          >
            Get Latest News
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
