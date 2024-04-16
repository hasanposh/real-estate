import Slider from "../components/Slider";
// import bannerImage from "../../public/home banner.jpeg";
import Marquee from "react-fast-marquee";
import HomeSlider from "../components/HomeSlider";
import { Link, useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="z-0 ">
      <HomeSlider />
      <div className="container mx-auto">
        <p className="text-7xl py-10">Explore Our Properties</p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-1 lg:grid-cols-3 "
        >
          {data.map((item) => (
            <HomeCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="my-20 gap-10 bg-[#f6f3f3] h-[500px] flex justify-between"
      >
        <div className="flex-1 flex flex-col pl-20 space-y-3 justify-center">
          <h2 className="text-5xl">
            Newly-launched campaign <br /> in Whitby agencies
          </h2>
          <div className="space-y-2 opacity-80">
            <li>
              The launch of a new campaign by Whitby agencies energizes the work
              culture and inspires creativity among team members
            </li>
            <li>
              These campaigns reflect the agencys commitment to innovation and
              staying at the forefront of industry trends.
            </li>
            <li>
              Successful campaigns strengthen client relationships and attract
              new clients through transparent communication and collaboration.
            </li>
            <li>
              Campaigns contribute to Whitbys business community by generating
              buzz and elevating its reputation as a hub of creativity.
            </li>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full object-cover"
            src="/public/banner.jpeg"
            alt=""
          />
        </div>
      </div>
      <Slider />
      <p className="text-6xl container mx-auto py-50">Featured</p>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="h-[500px] mt-10  container flex flex-col lg:flex-row  mx-auto"
      >
        <div className="flex-1 z-10  relative">
          <img
            className="absolute top-10 w-full h-full "
            src={data[0].images[0]}
            alt=""
          />
          <img
            className="absolute object-cover -right-10 w-1/2 h-4/5"
            src={data[0].images[1]}
            alt=""
          />
        </div>
        <div className="flex-1 z-0  flex flex-col p-20 space-y-2 opacity-80">
            <div className="flex-grow">
              <p className=" text-2xl font-bold">{data[0].estate_title}</p>
              <p className="">{data[0].description}</p>
              <div className="flex justify-between">
                <p className="font-bold">{data[0].segment_name}</p>
                <p className="font-bold">Location: {data[0].location}</p>
              </div>
                <p className="font-bold text-2xl">
                  Property size : <span className="font-thin"> {data[0].area}</span>
                </p>

                <h2 className="font-bold">Facilities : </h2>
                {data[0].facilities.map((facility, idx) => (
                  <li key={idx}>{facility}</li>
                ))}

                <p className="text-4xl text-green-700 "> {data[0].price}</p>
            </div>
            <Link
              to={`/cardDetails/${data[0].id}`}
              className="px-6 py-2 font-medium bg-green-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              See Details
            </Link>
          
        </div>
      </div>
      <Marquee>
        <h2 className="mb-40 z-20 opacity-10 text-8xl">
          Apartments from Heven
        </h2>
      </Marquee>
    </div>
  );
};

export default Home;
