import React from "react";
import { blogData } from "../Home/BlogData";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const OtherBlogPost = ({ tag }) => {
  return (
    <div className="p-4 lg:p-20 w-full items-center flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">Latest</h2>
      <div className="flex flex-col gap-9 lg:gap-6 max-w-[800px]">
        {blogData &&
          blogData
            .filter(blog => blog.tag !== tag)
            .map((blog, i) => (
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
      <Link
        to={"/"}
        className="flex flex-row hover:cursor-pointer items-center gap-1 text-gray-600"
      >
        <span className="text-lg">See all</span>
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default OtherBlogPost;
