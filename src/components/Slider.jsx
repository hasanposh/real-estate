// import Swiper core and required modules
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import {} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderData } from "../constants/slider";
import { RxArrowTopRight } from "react-icons/rx";

const Slider = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
       <p className= "lg:container mx-auto text-4xl lg:text-6xl p-4 lg:py-10">Our services </p>
      <Swiper
        autoplay={true}
        loop={true}
        className="max-w-[90%] lg:max-w-[80%]"
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />

              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
