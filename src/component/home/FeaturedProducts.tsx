
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const FeaturedProducts = () => {
  return (
    <div className="py-10">
        <div className="text-4xl text-center font-bold py-10">
            Feature Products
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[250px]"
      >
        <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
