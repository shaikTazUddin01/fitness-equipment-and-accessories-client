import { Slider } from "antd";
import { ReactNode, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { priceRange } from "../../redux/features/products/priceRange.slice";
// import { useGetProductsQuery } from "../../redux/features/products/products.api";

const PriceRangeFiltering = () => {
    const [sliderValue, setSliderValue] = useState([0, 5000]);
    const dispatch=useAppDispatch()
    // const { data: productData ,isLoading} = useGetProductsQuery({});

  //get max and min product value
//   const pv = ;
//   const maxPrice = productData?.data?.reduce((max, product) => {
//     return product.price > max ? product.price : max;
//   }, 0);
//   console.log(pv);

// console.log(maxPrice);


  const onSliderChange = (value: any) => {
    setSliderValue(value);
    dispatch(priceRange(value))
  };

  const handleStartValue = (value: ReactNode) => {
    const newValue = Number(value);
    setSliderValue([newValue, sliderValue[1]]);
  };
  const handleEndValue = (value: ReactNode) => {
    const newValue = Number(value);
    setSliderValue([sliderValue[0], newValue]);
  };
  const handleReset = () => {
    setSliderValue([0, 5000]);
    dispatch(priceRange([0, 5000]))

  };
  return (
    <div>
      <div className="bg-white w-full rounded-lg p-5 mb-5">
        <h1 className="text-[20px] font-semibold">Price Range</h1>
        <div className="divider mt-0"></div>
        <div className="space-y-2">
          <Slider
            trackStyle={[{ backgroundColor: "#e57f2c" }]}
            range
            step={10}
            value={sliderValue}
            min={0}
            max={5000}
            onChange={onSliderChange}
          />
          <div className="flex justify-around">
            <input
              className="border border-textSecondary text-center w-20 rounded h-8"
              onChange={(e) => handleStartValue(e.target.value)}
              value={sliderValue[0]}
            />
            <input
              className="border border-textSecondary w-20 text-center rounded h-8"
              value={sliderValue[1]}
              onChange={(e) => handleEndValue(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-textSecondary hover:bg-[#e17516] text-white font-medium rounded p-1"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFiltering;
