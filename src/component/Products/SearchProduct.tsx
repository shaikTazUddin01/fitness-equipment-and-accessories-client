/* eslint-disable prefer-const */
import { FaSearch } from "react-icons/fa";
import Debounce from "../../utiles/Debounce";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../Type";

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  // debounce function
  const debouncedSearchTerm = Debounce(searchTerm, 500);
// get product data query
  const { data: productsData, isLoading: productLoading } = useGetProductsQuery(
    {}
  );

  let products = productsData?.data;

  // filter search product
  useEffect(() => {
    if (debouncedSearchTerm && products) {
      const searchItem = products?.filter((product: TProduct) =>
        product?.name
          .toLocaleLowerCase()
          .includes(debouncedSearchTerm.toLocaleLowerCase())
      );
      setFilteredProducts(searchItem);
    }
  }, [debouncedSearchTerm, products]);

  // handle search
  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  console.log(filteredProducts);

  return (
    <form action="" className="flex gap-2">
      <div className="relative flex items-center text-black">
        <input
          className="border  w-[600px] text-sm p-2 rounded-md"
          placeholder="Search in thunder..."
          name="search"
          onChange={(e) => handleSearch(e)}
        />
        <span className="absolute text-black end-2 cursor-pointer">
          <FaSearch />
        </span>
      </div>
    </form>
  );
};

export default SearchProduct;
