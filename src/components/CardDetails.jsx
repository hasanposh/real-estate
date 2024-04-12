import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data);
//   const intId = parseInt(id);
  const estate = data.find((item) => item.id === id);
  console.log(estate,id)
  const { image, description, estate_title, segment_name, status, location } =
    estate;

  console.log(id);
  return (
    <div
      style={{
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d",
      }}
      className="min-h-[calc(100vh-64px)] absolute flex flex-col p-4 inset-4 rounded-xl bg-white shadow-lg"
    >
      <div className="flex-grow">
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="relative"
        >
          <div className="bg-red-600 text-white font-bold text-center w-20 z-10 top-0 right-0 absolute">
            <p>{status}</p>
          </div>
          <img
            className="rounded-t-xl image-full h-60 w-full"
            src={image}
            alt=""
          />
        </div>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className=" text-2xl font-bold"
        >
          {estate_title}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className=""
        >
          {description}
        </p>
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="flex justify-between"
        >
          <p className="font-bold">{segment_name}</p>
          <p className="font-bold">Location: {location}</p>
        </div>
      </div>
      <Link
        to={`/cardDetails/${id}`}
        style={{
          transform: "translateZ(50px)",
        }}
        className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
      >
        See Details
      </Link>
    </div>
  );
};

export default CardDetails;
