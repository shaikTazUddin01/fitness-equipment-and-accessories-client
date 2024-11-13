import { useAppSelector } from "../../redux/hooks/hooks";
import { useGetProductsQuery } from "../../redux/features/products/products.api";

import FIlterProduct from "../../component/Products/FIlterProduct";
import ProductCard from "../../component/Products/ProductCard";
import { TProduct } from "../../Type";
import PriceRangeFiltering from "../../component/Products/PriceRangeFiltering";
import ProductCardLoader from "../../component/shared/Loading/ProductLoaderCard";
import Pagination from "../../utiles/Pagination";
import CategoriesFiltering from "../../component/Products/SidebarFilter";
import { FaHome } from "react-icons/fa";

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
    <div className="min-h-screen pb-20 pt-3 px-5 xl:px-0 max-w-7xl mx-auto">
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
      </div>
      {/* --- */}

      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* Left sidebar for filters */}
        <div className="md:w-[20%] rounded-lg">
          <PriceRangeFiltering />
          <CategoriesFiltering />
        </div>

        {/* Main content area for products */}
        <div className="md:w-[80%]">
          <FIlterProduct />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
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
                    No Product Avaliable!
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
