
const Hero = ({ news,i }) => {
  return (
    <div key={i} className="mt-10 grid justify-items-center">
    <img
      src={news.related_image_big}
      width="300"
      height="300"
      className="rounded-lg"
      alt={`News Image ${i}`}
    />
    <a
      className="text-primary text-center hover:text-active transition-colors duration-200"
      key={news.news_ID}
      href={news.news_link ? news.news_link : news.third_party_url}
    >
      <h3 className="mt-10 text-2xl">{news.HEADLINE}</h3>
      <p className="mt-4 text-center text-lg opacity-60">
        {news.news_provider_name}
      </p>
    </a>
  </div>
  );
};

export default Hero;
