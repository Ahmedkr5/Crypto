"use client";
import axios from "axios";
import { useState } from "react";
import Loading from "../components/loading";
import Hero from "@/components/Hero";
import Image from "next/image";
export default function Home() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get("api", {
        params: { page },
      });
      if (res.status === 200) {
        setResponse(res.data.data.data[0].screen_data.news);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway  min-h-screen">
    <Hero getNews={getNews} loading={loading} response={response} />
      <div className="mt-10 grid grid-cols-2 gap-16 max-w-5xl">
        {loading && <Loading />}
        {response !== undefined &&
          response?.map((news, i) => (
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
          ))}
      </div>
      {response && (
        <div className="flex flex-col mt-10 justify-center">
          <button
            className="block text-active text-base font-bold"
            onClick={() => {
              setPage(page + 1);
              getNews();
            }}
          >
            Load next page
          </button>
        </div>
      )}
    </div>
  );
}
