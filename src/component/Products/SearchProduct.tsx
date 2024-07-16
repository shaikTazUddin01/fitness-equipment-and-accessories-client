import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { searchProduct } from "../../redux/features/products/searchProduct.slice";


const SearchProduct = () => {
  const { register, handleSubmit,reset } = useForm();

  const dispatch = useAppDispatch();

  //get reset value
  const resetFilter=useAppSelector((state)=>state.resetFilter.reset)

// handle search
  const handleSearch = (data: any) => {
    dispatch(searchProduct({ searchItem: data?.searchItem }));
  };
  //reset search field
  useEffect(()=>{
    if (resetFilter ==="reset") {
      reset()
  }
  },[reset,resetFilter])
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
        className="btn btn-neutral"
      >
        Search
      </button>
    </form>
  );
};

export default SearchProduct;
