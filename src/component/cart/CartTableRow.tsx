

const CartTableRow = ({mycart}) => {
    const { images, name, price, _id, category, stockQuentity } = mycart;
    return (
        <tr className="">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src={images}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>${price}</td>
      <td>{category}</td>
      <td>{stockQuentity}</td>
      <td>
        <div className="flex gap-2 justify-center items-center">
          <button
            className="btn btn-error btn-xs"
           
          >
            Order Now
          </button>
          
        </div>
      </td>
    </tr>
    );
};

export default CartTableRow;