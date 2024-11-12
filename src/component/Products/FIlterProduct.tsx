// import SearchProduct from "./SearchProduct";
import SortByPrice from "./SortByPrice";

const FIlterProduct = () => {
  return (
    <div className="bg-white py-2 px-5 flex flex-col md:flex-row justify-center md:justify-between items-center rounded-lg gap-2 ">
      {/* search area */}
      <div className="w-full md:w-[70%]">
        {/* <SearchProduct searchboxWidthps={80}></SearchProduct> */}
      </div>

      <div className="w-full md:w-[30%] md:text-end">
        <SortByPrice></SortByPrice>
      </div>
    </div>
  );
};

export default FIlterProduct;
