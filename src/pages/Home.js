import React from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import logo from "../Images/logo.jpeg";

function Home() {
  const location = useLocation();
  const news = location.state;
  return (
    <div className="mb-10 w-screen overflow-clip">
      <div className=" block">
        <Navbar />
        <div className="grid grid-cols-2 gap-6 h-screen mt-10">
          <div className="ml-10 ">
            {/* <span className=" font-extralight text-4xl">
              <h1>Latest</h1>
            </span> */}
            <img
              className="h-screen brightness-50 "
              src={news[0].urlToImage}
              alt={""}
            />{" "}
          </div>
          <div className="grid grid-cols-1 grid-flow-row overflow-scroll content-start">
            <div className="bg-white">
              <h1 className="sticky text-3xl font-bold ml-20 bg-white">
                Trending
              </h1>
            </div>
            <div className="grid grid-cols-1 grid-flow-row gap-8 overflow-scroll mx-10 mt-10 -ml-28">
              <Card data={news[0]} />
              <Card data={news[1]} />
              <Card data={news[2]} />
              <Card data={news[3]} />
              <Card data={news[4]} />
              <Card data={news[5]} />
            </div>
          </div>
        </div>
        <h1 className="ml-12 sticky text-3xl font-bold bg-white my-10">
          Latest
        </h1>
        <div className="grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-10">
          <Card data={news[0]} />
          <Card data={news[1]} />
          <Card data={news[2]} />
          <Card data={news[3]} />
          <Card data={news[4]} />
          <Card data={news[5]} />
          <Card data={news[6]} />
          <Card data={news[7]} />
          <Card data={news[8]} />
          {/* {news.map((article) => {
            <Card article={article} />;
          })} */}
        </div>
        <h1 className="ml-12 sticky text-3xl font-bold w-full bg-white my-10">
          Sports
        </h1>
        <List />
      </div>
    </div>
  );
}

export default Home;
