import Slider from "../components/Slider";
// import bannerImage from "../../public/home banner.jpeg";
import Marquee from "react-fast-marquee";
import HomeSlider from "../components/HomeSlider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="z-0">
      <HomeSlider />
      <div className="container mx-auto">
        <p className="text-7xl py-10">Check out our featured items</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {data.map((item) => (
            <HomeCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="my-20 gap-10 bg-[#f6f3f3] h-[500px] flex justify-between">
        <div className="flex-1 flex flex-col pl-20 space-y-3 justify-center">
          <h2 className="text-5xl">
            Newly-launched campaign <br /> in Whitby agencies
          </h2>
          <div className="space-y-2 opacity-80">
          <li>The launch of a new campaign by Whitby agencies energizes the work culture and inspires creativity among team members</li>
          <li>These campaigns reflect the agencys commitment to innovation and staying at the forefront of industry trends.</li>
          <li>Successful campaigns strengthen client relationships and attract new clients through transparent communication and collaboration.</li>
          <li>Campaigns contribute to Whitbys business community by generating buzz and elevating its reputation as a hub of creativity.</li>
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
      <Marquee className="text-5xl">
        <h2>hello</h2>
      </Marquee>
      <Slider />
    </div>
  );
};

export default Home;
