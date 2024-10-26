

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">

          {products?.map((product: TProduct) => (
            
            <div>
                <ProductCard key={product?._id} product={product}></ProductCard>
                
              </div>
            
          ))}
          </div>
        
      </div>
      <div className="flex justify-end mt-5">
        <a href="/products">
          <p className="flex items-center gap-2">
            Explore more
            <FaArrowRight />
          </p>
        </a>
      </div>
     
    </div>
  );
};

export default FeaturedProducts;
