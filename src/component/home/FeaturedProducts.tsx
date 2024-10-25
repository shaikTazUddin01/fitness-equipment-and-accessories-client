// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import SectionTitle from "../shared/sectionTitle/SectionTitle";

import { useGetProductsQuery } from "../../redux/features/products/products.api";
import ProductCard from "../Products/ProductCard";
import { TProduct } from "../../Type";
import Spring from "../shared/Loading/Spring";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ feature: "True" });
  const products = data?.data;

  if (isLoading) {
    return <Spring></Spring>;
  }
  return (
    <div className="mt-16">
      <div className=" text-center ">
        <SectionTitle
          heading={"Featured Products"}
          subHeading={"Check & Get Your Desired Product!"}
        ></SectionTitle>
      </div>
      <div>
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
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {products?.map((product: TProduct) => (
            <SwiperSlide key={product?._id}>
              <div>
                <ProductCard key={product?._id} product={product}></ProductCard>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end mt-5">
        <a href="/products">
          <p className="text-white flex items-center gap-2">
            Explore more
            <FaArrowRight />
          </p>
        </a>
      </div>
     
    </div>
  );
};

export default FeaturedProducts;
