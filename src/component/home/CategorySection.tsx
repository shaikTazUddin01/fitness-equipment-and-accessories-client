// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/HoverText.css";

// import required modules
import { Autoplay } from "swiper/modules";
import SectionTitle from "../shared/sectionTitle/SectionTitle";

//import images
import barbel from "../../assets/images/categoryImg/berbel.webp";
const CategorySection = () => {
  return (
    <div className="mt-14 text-center">
      <div>
      <SectionTitle
        heading="exclusive"
        subHeading="Category collections"
      ></SectionTitle>
      </div>
      <div className="mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area "
              style={{ backgroundImage: `url(${barbel})` }}
            >
              <div className="hover-text ">
                <SectionTitle
                  heading={"man's wordout"}
                  subHeading={""}
                ></SectionTitle>
                <a href="">
                  <button className="bg-primaryColor text-white px-3 py-2 rounded-sm">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area "
              style={{ backgroundImage: `url(${barbel})` }}
            >
              <div className="hover-text ">
                <SectionTitle
                  heading={"man's wordout"}
                  subHeading={""}
                ></SectionTitle>
                <a href="">
                  <button className="bg-primaryColor text-white px-3 py-2 rounded-sm">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area "
              style={{ backgroundImage: `url(${barbel})` }}
            >
              <div className="hover-text ">
                <SectionTitle
                  heading={"man's wordout"}
                  subHeading={""}
                ></SectionTitle>
                <a href="">
                  <button className="bg-primaryColor text-white px-3 py-2 rounded-sm">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area "
              style={{ backgroundImage: `url(${barbel})` }}
            >
              <div className="hover-text ">
                <SectionTitle
                  heading={"man's wordout"}
                  subHeading={""}
                ></SectionTitle>
                <a href="">
                  <button className="bg-primaryColor text-white px-3 py-2 rounded-sm">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area "
              style={{ backgroundImage: `url(${barbel})` }}
            >
              <div className="hover-text ">
                <SectionTitle
                  heading={"man's wordout"}
                  subHeading={""}
                ></SectionTitle>
                <a href="">
                  <button className="bg-primaryColor text-white px-3 py-2 rounded-sm">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area "
              style={{ backgroundImage: `url(${barbel})` }}
            >
              <div className="hover-text ">
                <SectionTitle
                  heading={"man's wordout"}
                  subHeading={""}
                ></SectionTitle>
                <a href="">
                  <button className="bg-primaryColor text-white px-3 py-2 rounded-sm">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;
