import SectionTitle from "../shared/sectionTitle/SectionTitle";
// images
const person1 ="https://i.ibb.co/J79Z0bF/t1.jpg"
const person2 ="https://i.ibb.co/2P46WJj/t2.jpg"
const person3 ="https://i.ibb.co/3TFm16j/t3.jpg"
const person4 ="https://i.ibb.co/2t1ZwXF/t4.jpg"
const person5 ="https://i.ibb.co/26nFMLm/t5.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../home/css/HoverText.css";

// import required modules
import { Autoplay } from "swiper/modules";
const TeamInTo = () => {
  return (
    <div className="-mt-5 text-center px-5 xl:px-0">
      <div className="text-secondaryColor">
        <SectionTitle heading="Introduce" subHeading="Our Team"></SectionTitle>
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
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area bg-center bg-contain "
              style={{ backgroundImage: `url(${person1})` }}
            >
              <div className="hover-text bg-[#000000a3] h-full ">
                <SectionTitle
                  heading={"John Smith"}
                  subHeading={""}
                ></SectionTitle>
                <p className="-mt-5">Chief Executive Officer (CEO)</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area bg-center bg-contain "
              style={{ backgroundImage: `url(${person2})` }}
            >
              <div className="hover-text bg-[#000000a3] h-full ">
                <SectionTitle
                  heading={"Michael Brown"}
                  subHeading={""}
                ></SectionTitle>
                  <p className="-mt-5">Chief Operating Officer (COO)</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area bg-center bg-contain "
              style={{ backgroundImage: `url(${person3})` }}
            >
              <div className="hover-text bg-[#000000a3] h-full ">
                <SectionTitle
                  heading={"Robert Wilson"}
                  subHeading={""}
                ></SectionTitle>
                  <p className="-mt-5">Chief Financial Officer (CFO)</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area bg-center bg-contain "
              style={{ backgroundImage: `url(${person4})` }}
            >
              <div className="hover-text bg-[#000000a3] h-full ">
                <SectionTitle
                  heading={"David Johnson"}
                  subHeading={""}
                ></SectionTitle>
                  <p className="-mt-5">Head of Product Development</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] rounded-md hover-area bg-center bg-contain "
              style={{ backgroundImage: `url(${person5})` }}
            >
              <div className="hover-text bg-[#000000a3] h-full ">
                <SectionTitle
                  heading={"Sophia Martinez"}
                  subHeading={""}
                ></SectionTitle>
                  <p className="-mt-5">Customer Service Manager</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamInTo;
