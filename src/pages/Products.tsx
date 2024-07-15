import ProductCard from "../component/Products/ProductCard";
import { useGetProductsQuery } from "../redux/features/products/products.api";

import Loading from "../component/shared/Loading/Loading";
import { TProduct } from "../Type";

import FIlterProduct from "../component/Products/FIlterProduct";
import { useAppSelector } from "../redux/hooks/hooks";

const Products = () => {
  // get sort value
  const sortProductByPrice = useAppSelector((state) => state.sortProduct?.sort);
  // get search value
  const searchProduct = useAppSelector(
    (state) => state.searchProduct.searchItem
  );
  console.log(sortProductByPrice);
  console.log(searchProduct);
  //get products
  const { data, isLoading } = useGetProductsQuery({
    sortProductByPrice,
    searchProduct,
  });
  const products = data?.data;
  console.log(products);
  //use loading
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen pb-20 pt-10 flex gap-5">
      {/* filter category left side bar */}
      <div className="w-[30%] bg-white rounded-lg"></div>

      {/* product and search side bar */}
      <div className="w-[70%]">
        <FIlterProduct></FIlterProduct>
        {products.length>0 ? (
          <div className="grid grid-cols-4 gap-5 mt-7">
            {products?.map((item: TProduct) => (
              <ProductCard key={item?._id} product={item}></ProductCard>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-white text-2xl text-center mt-10">No Product Found.!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
