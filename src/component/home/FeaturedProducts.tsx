// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/HoverText.css";
// import required modules

import SectionTitle from "../shared/sectionTitle/SectionTitle";
//import images

import { useGetProductsQuery } from "../../redux/features/products/products.api";
import ProductCard from "../Products/ProductCard";
import { TProduct } from "../../Type";
import { IoIosArrowDown } from "react-icons/io";
import Spring from "../shared/Loading/Spring";
// import ReactRating from "../shared/rating/ReactRating";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const products = data?.data;
  // console.log(products);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {products?.slice(0, 8).map((product: TProduct) => {
          return <ProductCard key={product?._id} product={product}></ProductCard>;
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
