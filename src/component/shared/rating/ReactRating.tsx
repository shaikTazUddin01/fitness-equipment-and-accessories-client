import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";

const ReactRating = () => {
  return (
    <div>
      <Rating
        emptySymbol={<FaRegStar></FaRegStar>}
        fullSymbol={<IoIosStar className="text-secondaryColor"></IoIosStar>}
        initialRating={2.5}
        readonly
      />
    </div>
  );
};

export default ReactRating;
