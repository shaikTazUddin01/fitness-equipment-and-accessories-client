import { FaSearch } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { GrCart } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { userLogout } from "../../../redux/features/auth/User/userAuthSlice";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log("path---->", currentPath);
  const { user, token } = useAppSelector((state) => state.userLoginInfo);
const dispatch=useAppDispatch()

  const handleLogOut=()=>{
    // alert('h1')
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!"
    }).then((result) => {
      if (result.isConfirmed) {
         dispatch(userLogout())

        toast.success("logout success",{
          duration:1000
        })
       
      }
    });
  
  
  }

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
      {user && token ? (
        <li onClick={()=>handleLogOut()}>
          <a >logout</a>
        </li>
      ) : (
        <li>
          <a href={"/login"}>login</a>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div
        className={`navbar text-white bg-[#161616b7] ${
          currentPath == "/" ? "absolute" : "relative"
        }  z-20 shadow-xl max-w-7xl px-10 py-4`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="buthrefn"
              className="btn btn-ghost lg:hidden"
            >
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
          <div className="hidden lg:flex">
            <a href="/">
              <img src={logo} alt="" className="h-full " />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end flex gap-4 items-center text-[20px] cursor-pointer">
          <a href="/products">
            <FaSearch></FaSearch>
          </a>
          {/* <FaRegUser></FaRegUser> */}

          <a href="/cart">
            <GrCart />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
