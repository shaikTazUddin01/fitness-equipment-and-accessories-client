import SearchProduct from "./SearchProduct";
import SortByPrice from "./SortByPrice";

const FIlterProduct = () => {
  return (
    <div className="bg-white py-2 px-5 flex justify-between items-center rounded-lg">
      {/* search area */}
      <div className="w-[70%]">
        <SearchProduct></SearchProduct>
      </div>

      <div className=" ">
        <SortByPrice></SortByPrice>
      </div>
    </div>
  );
};

export default FIlterProduct;
