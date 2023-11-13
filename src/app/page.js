"use client";
import axios from "axios";
import { useState } from "react";
import Loading from "../components/loading";
import Hero from "@/components/Hero";
import {AiOutlineArrowRight} from "react-icons/ai";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    <div className="flex flex-col relative bg-background font-raleway gap-4 items-center min-h-screen">
  <p className="text-6xl text-primary font-bold mt-20">
    Follow <span className="text-active">Trends</span> & Attain{" "}
    <span className="text-active">Success</span>
  </p>
  <p className="text-active text-2xl mt-6">
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
    {loading && <Loading />}
         
      <TransitionGroup className="mt-10 grid grid-cols-2 gap-16 max-w-5xl">
        {response !== undefined &&
          response?.map((news, i) => (
            <CSSTransition key={i} timeout={300 * (i + 10)} classNames='page'>
          <Hero news={news} key={i}/>
          </CSSTransition>
          ))}
           </TransitionGroup> 
   
 

      {response && (
        <div className="flex flex-col justify-center mb-5">
          <button
            className="transition ease-in-out delay-150 h-12 hover:-translate-y-1 hover:scale-110 duration-300  hover:bg-hover flex items-center mt-2 sm:mb-0 w-auto rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => {
              setPage(page + 1);
              getNews();
            }}
          >
            Load next page <AiOutlineArrowRight/>
          </button>
        </div>
      )}
    </div>
  );
}
