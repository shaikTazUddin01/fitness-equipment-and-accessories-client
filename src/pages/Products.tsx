import ProductCard from "../component/Products/ProductCard";
import { useGetProductsQuery } from "../redux/features/products/products.api";


import { TProduct } from "../Type";

import FIlterProduct from "../component/Products/FIlterProduct";
import { useAppSelector } from "../redux/hooks/hooks";
import SidebarFilter from "../component/Products/SidebarFilter";
import { useLocation } from "react-router-dom";
import Spring from "../component/shared/Loading/Spring";

const Products = () => {
  const location = useLocation();
  const categoryFromState = location?.state?.category;
  // console.log(categoryFromState);
  // get sort value
  const sortProductByPrice = useAppSelector((state) => state?.sortProduct?.sort);
  // get search value
  const searchProduct = useAppSelector(
    (state) => state?.searchProduct?.searchItem
  );
  //get selected category
  const selectedCategory = useAppSelector(
    (state) => state.categoryFilter?.categoris
  );

  const { data, isLoading } = useGetProductsQuery({
    sortProductByPrice,
    searchProduct,
    selectedCategory :selectedCategory?.length ? selectedCategory : [categoryFromState]
  });
  const products = data?.data;
  // console.log(products);
  //use loading
  if (isLoading) {
    return <Spring></Spring>;
  }

  

  return (
    <div className="min-h-screen pb-20 pt-10 flex flex-col-reverse md:flex-row gap-5 px-5 xl:px-0">
      {/* filter category left side bar */}
      <div className="md:w-[25%] rounded-lg">
        <SidebarFilter autoselected={categoryFromState}></SidebarFilter>
      </div>
      {/* product and search side bar */}
      <div className="md:w-[75%]">
        <FIlterProduct></FIlterProduct>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {products?.map((item: TProduct) => (
              <ProductCard key={item?._id} product={item}></ProductCard>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-white text-2xl text-center mt-10">
              No Product Found.!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
