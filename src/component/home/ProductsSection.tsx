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
import Spring from "../shared/Loading/Spring";
import { FaArrowRight } from "react-icons/fa";
import ProductCardLoader from "../shared/Loading/ProductLoaderCard";
// import ReactRating from "../shared/rating/ReactRating";

const ProductsSection = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const products = data?.data;
  // console.log(products);

  
  return (
    <div className="mt-16">
      <div className="text-center ">
        <SectionTitle
          heading={"Shop Our Full Range"}
          subHeading={"Endless choices await you in our collection."}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
        {
        isLoading?
Array.from({length:8})?.map((_,idx)=><ProductCardLoader key={idx}/>)
        :products?.slice(0, 8).map((product: TProduct) => {
          return <ProductCard key={product?._id} product={product}></ProductCard>;
        })}
      </div>
      <div className="flex justify-end mt-5">
        <a href="/products">
          <p className="text-primaryColor flex items-center gap-2">
            Explore more
            <FaArrowRight />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProductsSection;
