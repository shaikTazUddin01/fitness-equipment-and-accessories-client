import { useAppSelector } from "../../redux/hooks/hooks";
import { useGetProductsQuery } from "../../redux/features/products/products.api";
import Spring from "../../component/shared/Loading/Spring";
import SidebarFilter from "../../component/Products/SidebarFilter";
import FIlterProduct from "../../component/Products/FIlterProduct";
import ProductCard from "../../component/Products/ProductCard";
import { TProduct } from "../../Type";
import PriceRangeFiltering from "../../component/Products/PriceRangeFiltering";
// import { useLocation } from "react-router-dom";


const Products = () => {
  // const location=useLocation()
  // console.log(location?.state);
  // get sort value
  const sortProductByPrice = useAppSelector((state) => state?.sortProduct?.sort);
  const priceRange=useAppSelector((state)=>state.priceRange)
  const filterPrice=priceRange?.priceRange
  
  // get search value
  const searchProduct = useAppSelector(
    (state) => state?.searchProduct?.searchItem
  );
  //get selected category
  // const selectedCategory = useAppSelector(
  //   (state) => state.categoryFilter?.categoris
  // );

  // console.log(selectedCategory);

  const { data, isLoading } = useGetProductsQuery({
    sortProductByPrice,
    searchProduct,
    priceRange:filterPrice
    // selectedCategory :selectedCategory?.length ? selectedCategory:"" 
  });
  const products = data?.data;
  // console.log(products);
  //use loading
  if (isLoading) {
    return <Spring></Spring>;
  }

  

  return (
    <div className="min-h-screen pb-20 pt-10 flex flex-col-reverse md:flex-row gap-5 px-5 xl:px-0 max-w-7xl mx-auto">
      {/* filter category left side bar */}
      <div className="md:w-[25%] rounded-lg">
        <PriceRangeFiltering/>
        <SidebarFilter ></SidebarFilter>
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
