// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/HoverText.css";
// import required modules

import SectionTitle from "../shared/sectionTitle/SectionTitle";
//import images

import { useGetProductsQuery } from "../../redux/features/products/products.api";
import Loading from "../shared/Loading/Loading";
import ProductCard from "../Products/ProductCard";
import { TProduct } from "../../Type";
import { IoIosArrowDown } from "react-icons/io";
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
      <div className="text-4xl mb-5 text-center font-bold text-secondaryColor">
        <SectionTitle
          heading={"new Arrivals"}
          subHeading={"Feature Products"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {/* <Swiper
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
        
        </Swiper> */}
        {products?.slice(0, 8).map((product: TProduct) => {
          return (
           
              <ProductCard product={product}></ProductCard>
           
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <a href="/products">
          <button className="btn btn-warning">
            Explore more
            <IoIosArrowDown />
          </button>
        </a>
      </div>
    </div>
  );
};

export default FeaturedProducts;
