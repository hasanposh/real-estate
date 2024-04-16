import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { sliderData } from "../constants/homeSlider";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'animate.css';

const HomeSlider = () => {
//   SwiperCore.use([Autoplay]);
  return (
    <Swiper
      enteredSlides={true}
      autoplay={{ delay: 2000 }}
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
              "--image-url": `linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(${data.backgroundImage})`,
            }}
            className={`min-h-[calc(100vh-64px)] flex flex-col justify-center items-center space-y-3 text-center bg-cover text-white bg-[image:var(--image-url)]`}
          >
            <h2 className="text-7xl animate__animated animate__fadeInDown">All you need is one click away.</h2>
            <p className="text-xl lg:w-3/4">{data.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
