import { TPoducts } from "../../Type";
import ReactRating from "../shared/rating/ReactRating";

const ProductCard = ({ product }: { product: TPoducts }) => {
  const {  name, price } = product;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <ReactRating></ReactRating>
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
