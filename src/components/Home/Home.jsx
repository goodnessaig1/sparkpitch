import React, { useEffect } from "react";
import Header from "../common/Header";

import { Link } from "react-router-dom";
import { blogData } from "./BlogData";
import Footer from "../common/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full pt-14 lg:pt-[106px] flex flex-col pt-10 pb-16 h-full items-center">
        <div className="max-w-[800px] h-full w-full  border-[#E4E7E9] p-6 rounded-lg flex flex-col gap-5 ">
          <div className="text-center text-2xl font-semibold text-purple-900">
            Blog Posts
          </div>
          <div className="flex flex-col gap-9 lg:gap-4">
            {blogData &&
              blogData.map((blog, i) => (
                <div key={i} className=" border-b border-[#e4e7e9] py-4">
                  <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 lg:h-[180px]">
                    <div className="w-full lg:w-[40%] h-full">
                      <img
                        src={blog?.image}
                        alt="h-full"
                        className="h-full w-full rounded object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-[60%] justify-center flex flex-col gap-2.5">
                      <span className="text-gray-400">#{blog?.tag}</span>
                      <div className="flex flex-col gap-1.5">
                        <Link
                          to={`/blog/${blog?.tag}`}
                          className="font-semibold hover:underline decoration-1 text-2xl hover:cursor-pointer transition duration-300 hoveunderline"
                        >
                          {blog?.title.length < 60 ? (
                            `${blog?.title}`
                          ) : (
                            <span>{blog?.title.substring(0, 60)}...</span>
                          )}
                        </Link>
                        <div className="flex flex-row gap-1.5 items-center">
                          <div className="w-7 h-7 rounded-full bg-gray-200">
                            <img
                              src={blog?.profileImage}
                              className="rounded-full h-full w-full"
                              alt=""
                            />
                          </div>
                          <span className="text-gray-600 text-sm">
                            {blog?.author}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center text-sm justify-between">
                        <span className="text-gray-400">{blog?.date}</span>
                        <span className="text-gray-400">
                          {blog?.minRead} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
