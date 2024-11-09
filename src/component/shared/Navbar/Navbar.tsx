import { FaSearch } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { GrCart } from "react-icons/gr";
import { useAppSelector } from "../../../redux/hooks/hooks";
import userImage from "../../../assets/Userimage.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useFinduserQuery } from "../../../redux/features/auth/User/userApi";
import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
// import { TCategory } from "../../../Type";

const Navbar = () => {
  //handle redux store
  const { user, token } = useAppSelector((state) => state.userLoginInfo);
// get category
const {data}=useGetCategoryQuery(undefined)

// const categories=data?.data
  
  const userEmail = user?.user;
  // console.log(user);
  const { data:currentuser } = useFinduserQuery(userEmail);

  const currentUserInFo=currentuser?.data

  


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
      className={`text-white bg-primaryColor fixed z-20 shadow-xl  w-full h-[20]`}
    >
      <div className={`navbar max-w-7xl mx-auto`}>
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
          <ul className="menu menu-horizontal px-1 text-[16px]">{navItem}</ul>
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
              <a href="/user/dashboard">
              {
                currentuser && currentUserInFo?.image !="" &&currentUserInFo?.image ?
                <img src={currentUserInFo?.image} alt="" className="size-10 cursor-pointer rounded-full" />
                :<img src={userImage} alt="" className="size-10 rounded-full cursor-pointer" />
              }
              </a>
            </div>
          )}
          {/* ---end--- */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
