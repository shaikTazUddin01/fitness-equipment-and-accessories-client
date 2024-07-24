// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//images
import hero1 from "../../assets/hero-4.webp";
// import hero2 from "../../assets/hero-2.webp";
import hero2 from "../../assets/hero-3.webp";

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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero2})`,
            }}
            className="bg-cover bg-center h-[500px] md:h-[630px] text-center md:text-left"
          >
            <div className="flex lg:pl-8 items-center h-full bg-[#0000005f] pt-[20px]">
              <div className=" text-white px-10  space-y-5 text-center lg:text-left w-[100%] lg:w-[70%]">
                <h1 className="text-3xl md:text-6xl font-extrabold ">
                  Try To Change
                </h1>
                <p className="text-2xl">
                Premium Equipment & Accessories for Every Athlete
                </p>
                
                <div className="flex gap-2 justify-center lg:justify-start">
                  <a href="/products">
                    <button className="btn btn-warning">Shop Now</button>
                  </a>
                  <a href="/about">
                    <button className="btn btn-neutral">Learn More</button>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero1})`,
            }}
            className="bg-cover bg-center h-[500px] md:h-[630px] text-center md:text-left"
          >
            <div className="flex lg:pl-8 items-center h-full bg-[#00000072] pt-[20px]">
              <div className=" text-white px-10  space-y-5 text-center lg:text-left w-[100%] lg:w-[70%]">
                <h1 className="text-3xl md:text-6xl font-extrabold ">
                Breaking Your Limits
                </h1>
                <p className="text-2xl">
                Get Your All Fitness Equipment Needed From One Place
                </p>
                
                <div className="flex gap-2 justify-center lg:justify-start">
                  <a href="/products">
                    <button className="btn btn-warning">Shop Now</button>
                  </a>
                  <a href="/about">
                    <button className="btn btn-neutral">Learn More</button>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroArea;
