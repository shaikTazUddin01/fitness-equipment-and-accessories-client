// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/HoverText.css";

// import required modules
import { Autoplay } from "swiper/modules";
import SectionTitle from "../shared/sectionTitle/SectionTitle";

import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { TCategory } from "../../Type";
import Loading from "../shared/Loading/Loading";
const CategorySection = () => {
  //retrieve category data
  const { data, isLoading } = useGetCategoryQuery(undefined);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const categories = data?.data;

  return (
    <div className="mt-16 text-center">
      <div className="text-secondaryColor">
        <SectionTitle
          heading="exclusive"
          subHeading="Our Categories"
        ></SectionTitle>
      </div>
      <div className="mt-5">
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
          {categories?.map((category: TCategory) => {
            return (
              <SwiperSlide key={category?._id}>
                <div
                  className="h-[300px] rounded-md hover-area "
                  style={{ backgroundImage: `url(${category?.image})` }}
                >
                  <div className="bg-[#06060693] h-full w-full">
                    <div className="hover-text ">
                      <SectionTitle
                        heading={`${category?.name}`}
                        subHeading={""}
                      ></SectionTitle>
                      <a href="/products">
                        <button className="bg-primaryColor text-white px-3 py-2 rounded-md">
                          shop now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;
