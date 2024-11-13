import { useAppSelector } from "../../redux/hooks/hooks";
import { useGetProductsQuery } from "../../redux/features/products/products.api";

import FIlterProduct from "../../component/Products/FIlterProduct";
import ProductCard from "../../component/Products/ProductCard";
import { TProduct } from "../../Type";
import PriceRangeFiltering from "../../component/Products/PriceRangeFiltering";
import ProductCardLoader from "../../component/shared/Loading/ProductLoaderCard";
import Pagination from "../../utiles/Pagination";
import CategoriesFiltering from "../../component/Products/SidebarFilter";

const Products = () => {
  // get sort, search, and price range values
  const sortProductByPrice = useAppSelector(
    (state) => state?.sortProduct?.sort
  );
  const priceRange = useAppSelector((state) => state.priceRange);
  const filterPrice = priceRange?.priceRange;
  const searchProduct = useAppSelector(
    (state) => state?.searchProduct?.searchItem
  );
  const { skip, limit } = useAppSelector((state) => state?.pagination);
  // console.log(skip, limit);
  // Fetch products with filters
  const { data, isLoading } = useGetProductsQuery({
    sortProductByPrice,
    searchProduct,
    priceRange: filterPrice,
    skip: skip,
    limit: limit,
  });

  const products = data?.data;
  // console.log(products);

  return (
    <div className="min-h-screen pb-20 pt-5 flex flex-col-reverse md:flex-row gap-5 px-5 xl:px-0 max-w-7xl mx-auto">
      {/* Left sidebar for filters */}
      <div className="md:w-[20%] rounded-lg">
        <PriceRangeFiltering />
        <CategoriesFiltering />
      </div>

      {/* Main content area for products */}
      <div className="md:w-[80%]">
        <FIlterProduct />
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {Array.from({ length: 8 }).map((_, idx) => (
              <ProductCardLoader key={idx} />
            ))}
          </div>
        ) : (
          <>
            {products && products?.result?.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
                  {products?.result?.map((item: TProduct) => (
                    <ProductCard key={item?._id} product={item} />
                  ))}
                </div>
                {/* pagination */}
                <Pagination totalProducts={products?.totalProducts} />
              </div>
            ) : (
              <div>
                <h1 className="text-2xl text-center mt-10">
                  No Product Found!
                </h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
