/* eslint-disable prefer-const */
import { useState } from "react";
import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
import { TCategory, TProduct } from "../../../Type";
import { Dropdown, Skeleton } from "antd";
import { useGetProductsQuery } from "../../../redux/features/products/products.api";

const SubNavbar = () => {
  const [categoryItem, setCategoryItem] = useState("nodata");
  const { data, isLoading: categoryLoading } = useGetCategoryQuery(undefined);
// product query
  const { data: products, isLoading: productLoading } = useGetProductsQuery({
    selectedCategory: categoryItem,
  });

  // categories
  const categories = data?.data;

  let items;

  //handle product loading
  if (productLoading) {
    items = Array.from({length:2})?.map((_,idx) => ({
      key: idx,
      label: "",
    }));
  }else{

    items = products?.data?.map((product: TProduct) => ({
     key: product?._id,
     label: product?.name,
   }));
  }



//  handle hover category
  const handleHoverCategory = (item: string) => {
    setCategoryItem(item);
  };

  //navigation items

  return (
    <div className="bg-white ">
      <div className=" py-2 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-2">
          {categoryLoading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-32 h-6 bg-gray-200 rounded-md animate-pulse"
                ></div>
              ))
            : categories?.map((category: TCategory) => (
                <Dropdown
                  key={category?._id}
                  menu={{ items }}
                  placement="bottom"
                >
                  <button
                    className="hover:text-textSecondary"
                    onMouseEnter={() => handleHoverCategory(category?.name)}
                    onMouseLeave={()=>handleHoverCategory("")}
                  >
                    {" "}
                    {category?.name}
                  </button>
                </Dropdown>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
