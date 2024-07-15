import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { searchProduct } from "../../redux/features/products/searchProduct.slice";


const SearchProduct = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();

  const handleSearch = (data: any) => {
    console.log();
    dispatch(searchProduct({ searchItem: data?.searchItem }));
  };
  return (
    <form action="" className="flex gap-2" onClick={handleSubmit(handleSearch)}>
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Search Here..."
          className="input input-bordered border-primaryColor"
          {...register("searchItem")}
        />
      </div>
      <button
        type="submit"
        className="bg-primaryColor text-white px-5 rounded-lg hover:shadow-md hover:shadow-secondaryColor"
      >
        Search
      </button>
    </form>
  );
};

export default SearchProduct;
