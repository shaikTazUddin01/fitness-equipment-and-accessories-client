import { FaSearch } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { GrCart } from "react-icons/gr";
// import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { userLogout } from "../../../redux/features/auth/User/userAuthSlice";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useState } from "react";
import userImage from "../../../assets/Userimage.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  // const location = useLocation();
  const [openCollapse, SetOpenCollapse] = useState(false);

  // const currentPath = location.pathname;
  //handle redux store
  const { user, token } = useAppSelector((state) => state.userLoginInfo);
  const dispatch = useAppDispatch();

  //handle logout
  const handleLogOut = () => {
    // alert('h1')
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(userLogout());

        toast.success("logout success", {
          duration: 1000,
        });
      }
    });
  };

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
    <div className={`text-white bg-primaryColor fixed z-20 shadow-xl  w-full h-[20]`}>
      <div
        className={`navbar max-w-7xl mx-auto`}
      >
        <div className="navbar-start">
         
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
                <div className="mt-10 mx-auto">
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
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            {navItem}
          </ul>
        </div>
        {/*  */}
        <div className="navbar-end flex gap-4 items-center text-[20px] cursor-pointer">
          <a href="/products">
            <FaSearch></FaSearch>
          </a>
          {/* <FaRegUser></FaRegUser> */}

          <a href="/cart">
            <GrCart />{" "}
          </a>
          {/* toogle user */}
          {user && token && (
            <div>
              <img
                src={userImage}
                alt=""
                className="h-10 cursor-pointer"
                onClick={() => SetOpenCollapse(!openCollapse)}
              />
              <div
                className={`collapse-container ${
                  openCollapse ? "open " : ""
                } bg-[#0b0e10da] border-2 border-secondaryColor absolute top-[75px] rounded end-2 text-center flex flex-col text-white p-5 z-20  min-w-36`}
              >
                <button
                  className="btn btn-warning btn-sm mt-2"
                  onClick={() => handleLogOut()}
                >
                  <a>logout</a>
                </button>
              </div>
            </div>
          )}
          {/* ---end--- */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
