import { FaArrowRight } from "react-icons/fa";
import { TProduct } from "../../Type";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { _id, name, price, images, category } = product;
  return (
    <div className="card bg-base-100  shadow-xl rounded-md">
      <figure className="px-10 pt-10 h-[150px]">
        <img src={images} alt={name} className="rounded-xl w-[95%]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 className="-mt-3">{category}</h2>
        <p>Price : ${price}</p>
        <div className="card-actions">
          <a href={`/productDetails/${_id}`}>
            <button className="btn btn-neutral flex items-center gap-1 justify-center">
              View Details
              <span className="mt-1">
              <FaArrowRight />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
