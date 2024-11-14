import {  FaUserCog } from "react-icons/fa";
import logo from "../../../assets/epicfit.png";
import { GrCart } from "react-icons/gr";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  MdAdminPanelSettings,
  MdClose,
} from "react-icons/md";
// import { useFinduserQuery } from "../../../redux/features/auth/User/userApi";
// import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
import SearchProduct from "../../Products/SearchProduct";
// import { Badge } from "antd";
// import { TCategory } from "../../../Type";

const Navbar = () => {
  //handle redux store
  const { user, token } = useAppSelector((state) => state.userLoginInfo);
  const cartProduct = useAppSelector((state) => state.productCard?.productCart);
  // get category
  // const { data } = useGetCategoryQuery(undefined);

  // const categories=data?.data

  // const userEmail = user?.user;
  // console.log(user);
  // const { data: currentuser } = useFinduserQuery(userEmail);

  // const currentUserInFo = currentuser?.data;

  //navigation items
  const navItem = (
    <>
      <li>
        <a href={"/"}>Home</a>
      </li>
      <li>
        <a href={"/products"}>Collection</a>
      </li>
      {/* <li>
        <a href={"/productManagement"}>Product Management</a>
      </li> */}
      <li>
        <a href={"/about"}>About Us</a>
      </li>
      {!user && !token && (
        <li>
          <a href={"/login"}>login</a>
        </li>
      )}
    </>
  );
  return (
    <div
      className={`text-white bg-primaryColor  z-20 shadow-xl px-2  w-full h-[20]`}
    >
      <div className={`navbar max-w-7xl mx-auto p-0`}>
        <div className="navbar-start flex-1">
          {/* drawer */}
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="text-2xl">
                {/* Open drawer */}
                <AiOutlineMenuFold />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-primaryColor text-white min-h-full w-[65%] p-4 relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    const drawerCheckbox = document.getElementById(
                      "my-drawer"
                    ) as HTMLInputElement;
                    if (drawerCheckbox) {
                      drawerCheckbox.checked = false;
                    }
                  }}
                  aria-label="close sidebar"
                  className="absolute top-4 right-4 text-2xl font-bold"
                >
                  <MdClose />
                </button>
                {/* Sidebar content here */}
                <div className="mt-10 mx-auto border border-red">
                  <a href="/">
                    <img src={logo} alt="" className="h-full " />
                  </a>
                  <div className="flex flex-col justify-center items-center text-lg">
                    {navItem}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* drawer */}
          <div className="hidden lg:flex">
            <a href="/">
              <img src={logo} alt="" className="h-10 " />
            </a>
          </div>
        </div>
        {/* when screen is lg then work this part*/}
        <div className="navbar-center hidden lg:flex gap-5 ">
          <form action="">
           
              <SearchProduct searchboxWidthpx={550}/>
          </form>
          <div>
            {/* <a href="/cart">
            <GrCart />{" "}
          </a> */}
          </div>
          {/* <ul className="menu menu-horizontal px-1 text-[16px]">{navItem}</ul> */}
        </div>
        {/*  */}
        <div className="justify-end flex gap-8 items-center  cursor-pointer min-w-[30%] ">
          {/* <a href="/products">
            <FaSearch></FaSearch>
          </a> */}
          {/* <FaRegUser></FaRegUser> */}

          {/* ------ */}
          <div className="hover:text-textSecondary">
            <a href={"/about"}>
              <div className="flex items-center gap-2">
                <div className="text-2xl text-textSecondary">
                  <MdAdminPanelSettings />
                </div>
                <div className="space-y-0 flex flex-col">
                  <span className="text-[13px]">Poclicy</span>
                  <span className="text-[10px]">privacy policy</span>
                </div>
              </div>
            </a>
          </div>
          {/* ------ */}

          {/* toogle user */}

          {user && token ? (
            <div className="hover:text-textSecondary">
              <a href="/user/dashboard">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-textSecondary">
                    <FaUserCog />
                  </div>
                  <div className="space-y-0 flex flex-col ">
                    <span className="text-[13px]">Account</span>
                    <span className="text-[10px] ">profile or dashboard</span>
                  </div>
                </div>
              </a>
            </div>
          ) : (
            <div className="hover:text-textSecondary">
              <a href="/login">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-textSecondary">
                    <FaUserCog />
                  </div>
                  <div className="space-y-0 flex flex-col ">
                    <span className="text-[13px]">Account</span>
                    <span className="text-[10px] ">login or signup</span>
                  </div>
                </div>
              </a>
            </div>
          )}

         <div className="flex relative">
          <a href="/cart" className="hover:text-textSecondary text-2xl text-white">
      {/* <Avatar shape="square" size="large" /> */}
            <GrCart />{" "}
          </a>
          <p className="bg-textSecondary items-start font-semibold text-[10px] rounded-full absolute -top-2 -end-2 border text-center size-4">{cartProduct?.length?cartProduct?.length:"0"}</p>
          </div>
          {/* ---end--- */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
