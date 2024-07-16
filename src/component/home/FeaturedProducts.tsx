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
import { useGetProductsQuery } from "../../redux/features/products/products.api";
import Loading from "../shared/Loading/Loading";
import ProductCard from "../Products/ProductCard";
import { TProduct } from "../../Type";
// import ReactRating from "../shared/rating/ReactRating";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const products = data?.data;
  console.log(products);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-16">
      <div className="text-4xl text-center font-bold text-secondaryColor">
        <SectionTitle
          heading={"new Arrivals"}
          subHeading={"Feature Products"}
        ></SectionTitle>
      </div>
      <div className=" mt-5">
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
          {products.slice(0, 8).map((product: TProduct) => {
            return (
              <SwiperSlide className="">
                <ProductCard product={product}></ProductCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
