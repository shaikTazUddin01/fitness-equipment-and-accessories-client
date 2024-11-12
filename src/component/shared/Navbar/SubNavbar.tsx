/* eslint-disable prefer-const */
import { useState } from "react";
import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
import { TCategory, TProduct } from "../../../Type";
import { useGetProductsQuery } from "../../../redux/features/products/products.api";

const SubNavbar = () => {
  const [categoryItem, setCategoryItem] = useState("nodata");
  const [isDropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { data, isLoading: categoryLoading } = useGetCategoryQuery(undefined);
  // product query
  const { data: products, isLoading: productLoading } = useGetProductsQuery({});

  // categories
  const categories = data?.data;

  let items;
  const filterByCategory = products?.data?.filter(
    (item: TProduct) => item?.category == categoryItem
  );

  //handle product loading
  if (productLoading) {
    items = Array.from({ length: 2 })?.map((_, idx) => ({
      key: idx,
      label: <span className="text-gray-400">Loading...</span>,
    }));
  } else {
    items =
      filterByCategory?.map((product: TProduct) => ({
        key: product?._id,
        label: (
          <a href={`/productDetails/${product?._id}`} className="text-sm ">
            {product?.name}
          </a>
        ),
      })) || [];
  }

  //  handle hover category
  const handleHoverCategory = (item: string) => {
    setCategoryItem(item);
    setDropdownOpen(item); // open dropdown for the selected category
  };

  // Handle mouse leave to close dropdown
  const handleMouseLeave = () => {
    setDropdownOpen(null);
    setCategoryItem("nodata");
  };

  //navigation items

  return (
    <div className="bg-white shadow-xl border-b-2">
      <div className="py-1 max-w-7xl mx-auto " onMouseLeave={handleMouseLeave}>
        <div className="flex flex-wrap justify-between gap-2 ">
          {categoryLoading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-32 h-6 bg-gray-200 rounded-md animate-pulse"
                ></div>
              ))
            : categories?.slice(0, 8)?.map((category: TCategory) => (
                <div
                  key={category?._id}
                  className="relative"
                  onMouseEnter={() => handleHoverCategory(category?.name)}
                >
                  <button
                    className={`hover:text-textSecondary text-[15px] ${
                      categoryItem === category?.name
                        ? "text-textSecondary"
                        : ""
                    }`}
                  >
                    {category?.name}
                  </button>
                  {isDropdownOpen === category?.name && (
                    <div
                      className="absolute top-full left-0 mt-1 w-full px-2 py-2 bg-white rounded shadow-lg z-10 border-t-2 border-textSecondary"
                      onMouseLeave={handleMouseLeave}
                    >
                      {items.length > 0 ? (
                        items.map((item: any) => (
                          <div
                            key={item.key}
                            className="px-2 hover:bg-textSecondary rounded mb-1"
                          >
                            <span className=" hover:text-white ">
                              {item.label}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="p-2 text-gray-500 text-sm text-center">
                          No items available
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
