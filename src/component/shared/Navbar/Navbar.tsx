import { FaUserCog } from "react-icons/fa";
import logo from "../../../assets/epicfit.png";
import { GrCart } from "react-icons/gr";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdAdminPanelSettings, MdClose } from "react-icons/md";
import SearchProduct from "../../Products/SearchProduct";
import { TCategory, TProduct } from "../../../Type";
import { useState } from "react";
import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
import { useGetProductsQuery } from "../../../redux/features/products/products.api";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

// import { TCategory } from "../../../Type";

const Navbar = () => {
  //handle redux store
  const { user, token } = useAppSelector((state) => state.userLoginInfo);
  const cartProduct = useAppSelector((state) => state.productCard?.productCart);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { data, isLoading: categoryLoading } = useGetCategoryQuery(undefined);
  // product query
  const { data: products } = useGetProductsQuery({});

  // categories
  const categories = data?.data;

  const filterByCategory = products?.data?.result?.filter(
    (item: TProduct) => item?.category == activeCategory
  );

  //handle product loading

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div
      className={`text-white bg-primaryColor  z-20 shadow-xl px-2  w-full h-[20]`}
    >
      <div className={`navbar max-w-7xl mx-auto p-0`}>
        <div className="navbar-start lg:w-[33%]">
          {/* responsive nav */}
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
              <div className="menu bg-white text-black min-h-full w-[65%] relative">
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
                  className="absolute top-4 right-2 text-2xl font-bold bg-slate-200 rounded"
                >
                  <MdClose />
                </button>
                {/* Sidebar content here */}
                <div className="">
                  
                  <div className="flex flex-col gap-1 mt-9">
                    {categoryLoading
                      ? Array.from({ length: 8 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-32 h-6 bg-gray-200 rounded-md animate-pulse"
                          ></div>
                        ))
                      : categories?.map((category: TCategory) => {
                          return (
                            <div key={category?._id}>
                              <div className="flex items-center justify-between">
                                <p
                                  className={`px-1 py-2 hover:text-textSecondary text-sm ${
                                    activeCategory == category?.name &&
                                    "text-textSecondary"
                                  }`}
                                >
                                  {category?.name}
                                </p>
                                {activeCategory == category?.name ? (
                                  <span
                                    className="text-xl"
                                    onClick={() =>
                                      handleCategoryClick(category?.name)
                                    }
                                  >
                                    <LuMinus />
                                  </span>
                                ) : (
                                  <span
                                    className="text-xl"
                                    onClick={() =>
                                      handleCategoryClick(category?.name)
                                    }
                                  >
                                    <GoPlus />
                                  </span>
                                )}
                              </div>
                              <div className="w-full h-[1px] bg-slate-200"></div>
                              {activeCategory == category?.name && (
                                <div className="  bg-slate-100 px-1 py-[2px] text-black ">
                                  {filterByCategory?.length > 0 ? (
                                    filterByCategory?.map(
                                      (product: TProduct) => (
                                        <div className="py-1 px-2 hover:text-textSecondary">
                                          <a
                                            key={product?._id}
                                            href={`/productDetails/${product?._id}`}
                                            className="text-sm"
                                          >
                                            {product?.name}
                                          </a>
                                          <div className="bg-white h-[1px] w-full"></div>
                                        </div>
                                      )
                                    )
                                  ) : (
                                    <div>
                                      <p>No Product Avaliable.!</p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* drawer */}
          <div className="hidden lg:flex">
            <a href="/">
              <img src={logo} alt="" className="w-[160px]" />
            </a>
          </div>
        </div>
        {/* when screen is lg then work this part*/}
        <div className="navbar-center hidden lg:flex ">
          <form action="">
            <SearchProduct searchboxWidthpx={550} />
          </form>
          <div></div>
        </div>
        {/* responsive icon */}
        <div className="navbar-center  lg:hidden justify-center w-full  pr-12">
        <div className="lg:hidden flex ">
            <a href="/">
              <img src={logo} alt="" className="w-[160px]" />
            </a>
          </div>
        
        </div>
        {/*  */}
        <div className="navbar-end flex gap-8 items-center  absolute end-0 z-20 lg:relative">
          {/* ------ */}
          <div className="hover:text-textSecondary hidden lg:flex ">
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
            <div className="hover:text-textSecondary hidden lg:flex">
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
            <div className="hover:text-textSecondary hidden lg:flex">
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
          {/* cart */}
          <div className="flex relative ">
            <a
              href="/cart"
              className="hover:text-textSecondary text-2xl text-white"
            >
              {/* <Avatar shape="square" size="large" /> */}
              <GrCart />{" "}
            </a>
            <p className="bg-textSecondary items-start font-semibold text-[10px] rounded-full absolute -top-2 -end-2 border text-center size-4">
              {cartProduct?.length ? cartProduct?.length : "0"}
            </p>
          </div>
          {/* search */}
          <div className="text-2xl lg:hidden">
            <IoSearch />
          </div>
          {/* ---end--- */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
