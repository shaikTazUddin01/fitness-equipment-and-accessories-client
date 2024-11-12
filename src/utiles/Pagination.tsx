import { useState } from "react";
import "./pagination.css";

const Pagination = ({totalProducts}:{totalProducts:number}) => {
  const [page, setPage] = useState(0);
  const handlePageChange = (pageNum: number) => {
    setPage(pageNum);
    console.log("Current Page:", pageNum);
  };



  const totalPage=Math.ceil(totalProducts/6)

  return (
    <div className="flex justify-end">
      <div className="join border shadow">
        {Array.from({length:totalPage}).map((_,num) => (
          <input
            key={num+1}
            className="join-item btn btn-square active-btn"
            type="radio"
            name="options"
            aria-label={(num+1).toString()}
            checked={page === num}
            onChange={() => handlePageChange(num+1)}
          />
        ))}
      </div>
      {/* <div className="ml-4">Page: {page}</div>  */}
    </div>
  );
};

export default Pagination;
