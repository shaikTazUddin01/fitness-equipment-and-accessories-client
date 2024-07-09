// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//images
import hero1 from "../../assets/images/hero-1.webp";
import hero2 from "../../assets/images/hero-2.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import "./css/HeroArea.css";

const HeroArea = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero2})`,
            }}
            className="bg-cover h-[630px]"
          >
            <div className="flex justify-center items-center h-full bg-[#00000033]">
              {/* <div className=" text-white px-36 text-center">
                <h1 className="uppercase text-5xl font-extrabold">
                  The Most Complete Gym & Sport Store
                </h1>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero1})`,
            }}
            className="bg-cover h-[630px]"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroArea;
