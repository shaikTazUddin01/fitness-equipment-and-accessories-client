import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/products/products.api";
import FIlterProduct from "../../../component/Products/FIlterProduct";
import { TProduct } from "../../../Type";
import ProductCard from "../../../component/Products/ProductCard";
import PriceRangeFiltering from "../../../component/Products/PriceRangeFiltering";
import { useAppSelector } from "../../../redux/hooks/hooks";

const CategoryProduct = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const category = decodeURIComponent(pathname.split("/").pop() as string);
  const priceRange=useAppSelector((state)=>state.priceRange)
  const filterPrice=priceRange?.priceRange
// get search value
const searchProduct = useAppSelector(
  (state) => state?.searchProduct?.searchItem
);
  const { data: catProducts } = useGetProductsQuery({
    selectedCategory: category,
    priceRange:filterPrice,
    searchProduct
  });

  const products = catProducts?.data;
//   console.log(products?.length);
  return (
    <div className="min-h-screen pb-20 pt-10 flex flex-col-reverse md:flex-row gap-5 px-5 xl:px-0 max-w-7xl mx-auto">
      {/* filter category left side bar */}
      <div className="md:w-[25%] rounded-lg">
        <PriceRangeFiltering/>
      </div>
      {/* product and search side bar */}
      <div className="md:w-[75%]">
        <FIlterProduct></FIlterProduct>
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {products?.map((item: TProduct) => (
              <ProductCard key={item?._id} product={item}></ProductCard>
            ))}
          </div>
        ) : (
          <div>
            <h1 className=" text-2xl text-center mt-10">No Product Found.!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
