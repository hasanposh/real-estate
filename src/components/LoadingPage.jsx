import PropTypes from "prop-types";

const LoadingPage = () => {
  return (
    <div>
      <CutoutTextLoader
        height="100vh"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="/headerbanner.jpeg"
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, background, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};

CutoutTextLoader.propTypes = {
  imgUrl: PropTypes.any,
  background: PropTypes.any,
  height: PropTypes.any,
};

export default LoadingPage;
