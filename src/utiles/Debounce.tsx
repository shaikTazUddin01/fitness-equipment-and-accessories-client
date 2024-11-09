import { useEffect, useState } from "react";

const Debounce = (value: string, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue
};

export default Debounce;
