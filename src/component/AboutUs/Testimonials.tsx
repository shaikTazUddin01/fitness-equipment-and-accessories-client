import SectionTitle from "../shared/sectionTitle/SectionTitle";
// images



const person1 = "https://i.ibb.co/ydDXm22/p-1.jpg";
const person2 = "https://i.ibb.co/LtJWVdF/p-3.jpg";
const person3 = "https://i.ibb.co/yyPNT06/p-4.jpg";
const person4 = "https://i.ibb.co/nR2YCnk/p-6.jpg";
const person5 = "https://i.ibb.co/chLhFnM/p-8.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../home/css/HoverText.css";

// import required modules
import { Autoplay } from "swiper/modules";
import TestimonialsCard from "./Testimonials.Card";

const Testimonials = () => {
  return (
    <div className="mt-16 text-center px-5 xl:px-0 -z-10">
      <div className="text-secondaryColor">
        <SectionTitle
          heading="Testimonials"
          subHeading="Satisfied Customer"
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
          className="mySwiper relative"
        >
          <SwiperSlide className="">
            <TestimonialsCard
              image={person1}
              name="Liam Young"
              review="The quality and durability of the fitness equipment from this company are outstanding."
            ></TestimonialsCard>
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialsCard
              image={person2}
              name="Emily White"
              review=" Their equipment is excellent for rehabilitation exercises.It is well-designed and user-friendly."
            ></TestimonialsCard>
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialsCard
              image={person3}
              name="Daniel Thompson"
              review=" The reliability and customer support are to all of us all people is very well and organized."
            ></TestimonialsCard>
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialsCard
              image={person4}
              name="Jessica Miller"
              review=" I love the variety of available. They have everything I need to keep my workouts interesting"
            ></TestimonialsCard>
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialsCard
              image={person5}
              name="Mark Johnson"
              review="The products and perfect for individual training and team exercises. Highly recommend."
            ></TestimonialsCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
