import Slider from "../components/Slider";
import bannerImage from "../../public/home banner.jpeg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          "--image-url": `linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url(${bannerImage})`,
        }}
        className={`min-h-[calc(100vh-64px)] space-y-3 text-center bg-cover text-white bg-[image:var(--image-url)]`}
      >
          <h2 className="text-7xl ">
            All you need is one click away.
          </h2>
        

        <Slider />
      </div>
    </div>
  );
};

export default Home;
