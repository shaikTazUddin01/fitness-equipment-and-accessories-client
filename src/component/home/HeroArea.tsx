// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//images
import b1 from "../../assets/b1.png"
import b2 from "../../assets/b2.png"
import b3 from "../../assets/b3.png"
import b4 from "../../assets/b4.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay,Pagination } from "swiper/modules";

import "./css/HeroArea.css";

const HeroArea = () => {
  return (
    <div className="pt-16 md:pt-20">
      <Swiper
        // navigation={true}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b1})`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] w-full text-center md:text-left"
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b2})`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] text-center md:text-left"
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b3})`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] text-center md:text-left"
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b4})`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] text-center md:text-left"
          >
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HeroArea;
