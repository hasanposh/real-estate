import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { sliderData } from "../constants/homeSlider";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const HomeSlider = () => {
//   SwiperCore.use([Autoplay]);
  return (
    <Swiper
      enteredSlides={true}
      autoplay={true}
      loop={true}
      effect="Flip"
      modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.title}>
          <div
            style={{
              "--image-url": `linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url(${data.backgroundImage})`,
            }}
            className={`min-h-[calc(100vh-64px)] flex flex-col justify-center items-center space-y-3 text-center bg-cover text-white bg-[image:var(--image-url)]`}
          >
            <h2 className="text-7xl ">All you need is one click away.</h2>
            <p className="lg:w-3/4">{data.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
