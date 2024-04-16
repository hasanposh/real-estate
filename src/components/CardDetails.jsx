import { Link, useLoaderData, useParams ,ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
  // const position = [51.505, -0.09];
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
    position,
    popup_text,
  } = estate;

  //   console.log(id);
  return (
    <>
      <Helmet>
        <title>Sedona Realty | Details</title>
      </Helmet>
      <div  className=" flex flex-col gap-4 lg:flex-row-reverse p-4 inset-4 rounded-xl">
        <div className="relative flex-1 lg:w-2/4">
          <div className="bg-red-600 text-white font-bold text-center w-20 z-10 top-0 right-0 absolute">
            <p>{status}</p>
          </div>
          <div className="w-full">
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
                  <img className="w-full " src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex-grow flex-1 space-y-2">
          <h2 className="text-2xl">
            <Link to={"/"}>Home</Link> /{" "}
            <span className="text-green-700">Details</span>
          </h2>
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

          <p className="text-4xl text-green-700 "> {price}</p>
          <div className="lg:w-2/3 h-96 flex items-center justify-center">
            <MapContainer center={position} zoom={13} className="w-full h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>{popup_text}</Popup>
              </Marker>
            </MapContainer>
          </div>
          <Link
            position={position}
            popup_text={popup_text}
            to={`/mapLocation`}
            className=" px-6 py-2 font-medium bg-green-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            See Location
          </Link>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default CardDetails;
