// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import SectionTitle from "../shared/sectionTitle/SectionTitle";

import { useGetProductsQuery } from "../../redux/features/products/products.api";
import ProductCard from "../Products/ProductCard";
import { TProduct } from "../../Type";
import { IoIosArrowDown } from "react-icons/io";
import Spring from "../shared/Loading/Spring";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ feature: "True" });
  const products = data?.data;

  if (isLoading) {
    return <Spring></Spring>;
  }
  return (
    <div className="mt-16">
      <div className="text-4xl mb-5 text-center font-bold text-secondaryColor">
        <SectionTitle
          heading={"new Arrivals"}
          subHeading={"Feature Products"}
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
          {products?.map((product: TProduct) => (
            <SwiperSlide key={product?._id}>
              <div>
                <ProductCard key={product?._id} product={product}></ProductCard>
                ;
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-10">
        <a href="/products">
          <button className="btn btn-warning">
            Explore more
            <IoIosArrowDown />
          </button>
        </a>
      </div>
      //{" "}
    </div>
  );
};

export default FeaturedProducts;
