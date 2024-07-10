import ProductCard from "../component/Products/ProductCard";
import { useGetProductsQuery } from "../redux/features/products/products.api";

import Loading from "../component/shared/Loading/Loading";
import { TProduct } from "../Type";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  console.log(error);
  const products = data?.data;
  
  if (isLoading) {
    return (
     <Loading></Loading>
    );
  }
  return (
    <div className="min-h-screen py-20">
      <div></div>
      <div className="grid grid-cols-4 gap-5">
        {products?.map((item:TProduct ) => (
          <ProductCard key={item?._id} product={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
