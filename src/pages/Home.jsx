import Slider from "../components/Slider";
// import bannerImage from "../../public/home banner.jpeg";
import Marquee from "react-fast-marquee";
import HomeSlider from "../components/HomeSlider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const  data  = useLoaderData();
  console.log(data)
  return (
    <div className="z-0">
      <HomeSlider />
      <div className="container mx-auto">
      <p className="text-7xl py-10">Check out our featured items</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">

      {
        data.map(item=><HomeCard item={item} key={item.id}/>)
      }
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
