// import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/products/products.api";
import FIlterProduct from "../../../component/Products/FIlterProduct";
import { TProduct } from "../../../Type";
import ProductCard from "../../../component/Products/ProductCard";
import PriceRangeFiltering from "../../../component/Products/PriceRangeFiltering";
import { useAppSelector } from "../../../redux/hooks/hooks";
import ProductCardLoader from "../../../component/shared/Loading/ProductLoaderCard";
import Pagination from "../../../utiles/Pagination";
import CategoriesFiltering from "../../../component/Products/SidebarFilter";
import { FaHome } from "react-icons/fa";

const CategoryProduct = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const category = decodeURIComponent(pathname.split("/").pop() as string);
  const priceRange = useAppSelector((state) => state.priceRange);
  const filterPrice = priceRange?.priceRange;
  // get search value
  const searchProduct = useAppSelector(
    (state) => state?.searchProduct?.searchItem
  );
  const { data: catProducts, isLoading } = useGetProductsQuery({
    selectedCategory: category,
    priceRange: filterPrice,
    searchProduct,
  });

  const products = catProducts?.data?.result;
  //   console.log(products?.length);
  return (
    <div className="min-h-screen pb-20 pt-3  px-5 xl:px-0 max-w-7xl mx-auto">
      {/*page navigator */}
      <div className="flex gap-2 text-sm items-center  mb-3 text-[#545454]">
        <a href="/" className="hover:text-textSecondary">
          <span className="text-[16px]">
            <FaHome />
          </span>
        </a>
        <span className="text-[12px]">/</span>
        <a href="/products" className="hover:text-textSecondary">
          <span>Products</span>
        </a>
        <span className="text-[12px]">/</span>
        <a href={`/products/${category}`} className="hover:text-textSecondary">
          <span>{category}</span>
        </a>
      </div>
      {/* --- */}

      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* filter category left side bar */}
        <div className="md:w-[20%] rounded-lg">
          <PriceRangeFiltering />
          <CategoriesFiltering />
        </div>
        {/* product and search side bar */}
        <div className="md:w-[80%]">
          <FIlterProduct></FIlterProduct>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
              {Array.from({ length: 6 })?.map((_, idx) => (
                <ProductCardLoader key={idx} />
              ))}
            </div>
          ) : products?.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                {products?.map((item: TProduct) => (
                  <ProductCard key={item?._id} product={item}></ProductCard>
                ))}
              </div>
              <Pagination totalProducts={catProducts?.data?.totalProducts} />
            </div>
          ) : (
            <div>
              <h1 className=" text-2xl text-center mt-10">
                No Product Avaliable.!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
