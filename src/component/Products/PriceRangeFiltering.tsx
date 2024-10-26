import { Slider } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { priceRange } from "../../redux/features/products/priceRange.slice";
import { useGetProductsQuery } from "../../redux/features/products/products.api";
// import { useGetProductsQuery } from "../../redux/features/products/products.api";

const PriceRangeFiltering = () => {

const dispatch=useAppDispatch()
const { data: productData ,isLoading} = useGetProductsQuery({});
const [maxPrice, setMaxPrice] = useState(5000);
    const [sliderValue, setSliderValue] = useState([0,maxPrice]);

    useEffect(() => {
      if (productData) {
        const calculatedMaxPrice = productData?.data?.reduce((max:number, product:any) => {
          // console.log(max);
          return product.price > max ? product.price : max;
        }, 0);
        setMaxPrice(calculatedMaxPrice);
        setSliderValue([0, calculatedMaxPrice]); // Update slider range based on maxPrice
      }
    }, [productData]);


    if (isLoading) {
      return <p>loading...</p>
    }

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
            max={maxPrice}
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
              value={maxPrice}
              onChange={(e) => handleEndValue(e.target.value)}
            />
          </div>
          <div className="pt-2">
          <button
            className="w-full bg-textSecondary hover:bg-[#e17516]  font-medium rounded p-1"
            onClick={handleReset}
          >
            Reset
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFiltering;
