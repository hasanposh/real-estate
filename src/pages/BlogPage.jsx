import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";

const BlogPage = () => {
  const blogs = useLoaderData();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  //   console.log(data);
  const handleFilteredBlogs = (data) => {
    // console.log(data);
    const filteredBlog = blogs.filter((b) => b.category == data);
    // console.log(filteredBlog)
    setFilteredBlogs(filteredBlog);
  };
  //   console.log(filteredBlogs)
  return (
    <div className=" bg-[#f6f3f3]">
      <Helmet>
        <title>Sedona Realty | Blog</title>
      </Helmet>
      <div className="h-48 flex text-white  items-center bg-center bg-cover bg-[url('/headerbanner.jpeg')]">
        <h1 className="container mx-auto text-center text-2xl font-bold ">
          Blog
        </h1>
      </div>
      <div className="container mx-auto p-10 gap-10 grid grid-cols-2 lg:grid-cols-4">
        <div className="col-span-3">
          {(filteredBlogs.length > 0 ? filteredBlogs : blogs).map((blog) => (
            <>
              <div key={blog.id} className="z-0 bg-white">
                <figure className="z-10 relative">
                  <img
                    className="w-full p-2 lg:p-10 "
                    src={blog.image}
                    alt=""
                  />
                  <div className="absolute z-20 right-2 top-2 lg:right-10 lg:top-10 bg-black text-white p-4 text-center font-semibold w-40">
                    <p>{blog.date}</p>
                  </div>
                </figure>
                <div className="lg:p-10 p-4 space-y-3 ">
                  <div className="flex flex-col lg:flex-row lg:text-xl lg:gap-4">
                    <p>{blog.category}</p> |<p>{blog.author}</p> |
                    <p className="flex gap-2">
                      {" "}
                      {blog.likes} <SlLike />
                    </p>{" "}
                    |
                    <p className="flex gap-2">
                      {blog.comments} <FaRegComment />{" "}
                    </p>
                  </div>
                  <h2 className="card-title text-4xl">{blog.title}</h2>
                  <p>{blog.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                    //   to={`/cardDetails/${data[0].id}`}
                      className="px-6 py-2 font-medium bg-green-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="bg-white col-span-3 lg:col-span-1 h-96">
          <div className="bg-black p-5 font-bold text-white">Category</div>

          <p
            onClick={() => handleFilteredBlogs("Office buildings")}
            className="p-3 cursor-pointer font-bold opacity-50 hover:opacity-100"
          >
            Office buildings
          </p>

          <p
            onClick={() => handleFilteredBlogs("Retail spaces")}
            className="p-3 cursor-pointer font-bold opacity-50 hover:opacity-100"
          >
            Retail spaces
          </p>

          <p
            onClick={() => handleFilteredBlogs("Warehouses")}
            className="p-3 cursor-pointer font-bold opacity-50 hover:opacity-100"
          >
            Warehouses
          </p>

          <p
            onClick={() => handleFilteredBlogs("Industrial facilities")}
            className="p-3 cursor-pointer font-bold opacity-50 hover:opacity-100"
          >
            Industrial facilities
          </p>

          <p
            onClick={() => handleFilteredBlogs("Restaurants")}
            className="p-3 cursor-pointer font-bold opacity-50 hover:opacity-100"
          >
            Restaurants
          </p>

          <p
            onClick={() => handleFilteredBlogs("Entertainment")}
            className="p-3 cursor-pointer font-bold opacity-50 hover:opacity-100"
          >
            Entertainment
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
