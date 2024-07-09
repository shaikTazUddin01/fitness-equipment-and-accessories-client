
import logo from "../../../assets/images/logo.webp";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <a href={"/"}>Home</a>
      </li>
      <li>
        <a href={"/products"}>Product</a>
      </li>
      <li>
        <a href={"/productManagement"}>Product Management</a>
      </li>
      <li>
        <a href={"/about"}>About Us</a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar text-white bg-[#1616169a] absolute z-20 shadow-xl max-w-7xl px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="buthrefn" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <div>
            <a className="">
              <img src={logo} alt="" className="h-full " />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Buthrefn</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
