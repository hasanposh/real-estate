import PropTypes from "prop-types";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
  // console.log(item)
  return (
    <div className="w-full place-content-center p-4 text-slate-900">
      <TiltCard item={item} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ item }) => {
    console.log(item.images)
  const {
    images,
    description,
    estate_title,
    segment_name,
    status,
    id,
    location,
    
  } = item;
  // console.log(item.segment_name)
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[500px] rounded-xl bg-gradient-to-br from-green-900 to-black"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute flex flex-col p-4 inset-4 rounded-xl bg-white shadow-lg"
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
              src={images[0]}
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
    </motion.div>
  );
};

HomeCard.propTypes = {
  item: PropTypes.object,
};

TiltCard.propTypes = {
  item: PropTypes.object,
};

export default HomeCard;
