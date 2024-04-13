import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  //   console.log(data);
  //   const intId = parseInt(id);
  const estate = data.find((item) => item.id === id);
//   console.log(estate, id);
  const {
    images,
    description,
    estate_title,
    segment_name,
    status,
    location,
    price,
    area,
    facilities,
  } = estate;

  //   console.log(id);
  return (
    <>
    <Helmet>
        <title>Sedona Realty | Details</title>
      </Helmet>
      <div className=" mt-12 absolute flex flex-col  lg:flex-row-reverse p-4 inset-4 rounded-xl bg-white shadow-lg">
        <div className="relative flex-1 w-2/4">
          <div className="bg-red-600 text-white font-bold text-center w-20 z-10 top-0 right-0 absolute">
            <p>{status}</p>
          </div>
          <div className=" ">
            <Swiper
              // install Swiper modules
              autoplay={true}
              loop={true}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {images.map((img, idx) => (
                <SwiperSlide
                  className="object-cover h-full w-full image-full"
                  key={idx}
                >
                  <img className=" " src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex-grow flex-1 space-y-2">
          <p className=" text-5xl font-bold">{estate_title}</p>
          <p className="text-xl">{description}</p>
          <div className="text-2xl space-y-2">
            <p className="font-bold">
              Category: <span className="font-thin">{segment_name}</span>
            </p>
            <p className="font-bold">
              Location : <span className="font-thin"> {location}</span>
            </p>
            <p className="font-bold text-2xl">
              Property size : <span className="font-thin"> {area}</span>
            </p>
          </div>
          <h2 className="font-bold">Facilities : </h2>
          {facilities.map((facility, idx) => (
            <li key={idx}>{facility}</li>
          ))}

          <p className="text-4xl text-green-700 pb-10"> {price}</p>
          <Link
            to={`/cardDetails/${id}`}
            className=" px-6 py-2 font-medium bg-green-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            See Location
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
