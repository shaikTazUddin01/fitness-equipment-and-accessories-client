import { IoCameraOutline } from "react-icons/io5";
import image from "../../assets/hero-5.jpg";
import UpdateUserProfile from "../../component/UserDashboard/profile/UpdateUser";
import { useFinduserQuery } from "../../redux/features/auth/User/userApi";
import { useGetOrderbySpUserQuery } from "../../redux/features/order/orderapi";
import { useAppSelector } from "../../redux/hooks/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state?.userLoginInfo?.user);
  const userEmail = user?.user;
  // console.log(user);
  const { data, isLoading } = useFinduserQuery(userEmail);

  const { data: order, isLoading: isOrderLoading } = useGetOrderbySpUserQuery(
    user?.id
  );
  if (isLoading && isOrderLoading) {
    return <p>loading...</p>;
  }
  const totalOrder = order?.data;

  // console.log(totalOrder);

  const totalPayment = totalOrder?.reduce((acc: number, cur: any) => {
    return acc + cur?.totalPayment;
  }, 0);
  // console.log(totalPayment);

  const userInfo = data?.data;

  console.log(userInfo);
  return (
    <div className="min-h-screen">
      
      <img
        src={image}
        alt=""
        className="hidden md:flex w-full h-[250px] object-cover"
      />
      <div className="flex flex-col md:flex-row md:gap-4 lg:gap-8 md:-mt-20 md:px-4 lg:px-10">
        <div className="w-full md:w-[30%] lg:w-[25%] bg-white p-5 rounded-xl shadow">
          <div className="flex flex-col justify-center items-center">
            <div className="relative">
            {
        userInfo?.image && userInfo?.image !=="" ?
        <img src={userInfo?.image} className="size-28 rounded-full border-2 border-black" />
        :
        <img src={image} className="size-28 rounded-full border-2 border-black" />

      }
             
            </div>
            <h1 className="text-xl">{userInfo?.name}</h1>
            <p>{userInfo?.email}</p>
          </div>
          <div className="bg-textSecondary h-[1px] w-full my-2"></div>
          <div className="space-y-1">
            <h1 className="text-lg flex justify-between">
              Total Order : <span>{totalOrder?.length}</span>
            </h1>
            <h1 className="text-lg flex justify-between text-red-500">
              Order Cancel : <span>00</span>
            </h1>
            <h1 className="text-lg flex justify-between">
              Total Payment : <span>$ {totalPayment}</span>
            </h1>
            <button className="w-full bg-textSecondary py-2 rounded-lg  font-semibold mt-2">
              Get Order
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-[75%] bg-white rounded-xl p-5 shadow">
          <h1 className="text-2xl font-semibold mb-5">Intro</h1>
          <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Name
              </label>
              <input
                type="text"
                value={userInfo?.name}
                className="border border-textSecondary rounded p-2"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Email
              </label>
              <input
                type="text"
                value={userInfo?.email}
                className="border border-textSecondary rounded p-2"
              />
            </div>
          </div>
          {/* ---- */}
          <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 mt-2">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Phone Number
              </label>
              <input
                type="text"
                value={userInfo?.phoneNumber}
                className="border border-textSecondary rounded p-2"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Gender
              </label>
              <input
                type="text"
                value={userInfo?.gender}
                className="border border-textSecondary rounded p-2"
              />
            </div>
          </div>
          {/* ---- */}
          <div className="flex flex-col md:flex-row justify-between gap-5 mt-2">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Address
              </label>
              <input
                type="text"
                value={userInfo?.address}
                className="border border-textSecondary rounded p-2"
              />
            </div>
          </div>
          {/* ---- */}
          <div className="flex flex-col md:flex-row justify-between gap-5 mt-2">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Age
              </label>
              <input
                type="text"
                value={userInfo?.age}
                className="border border-textSecondary rounded p-2"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-lg">
                Role
              </label>
              <input
                type="text"
                value={userInfo?.role}
                className="border border-textSecondary rounded p-2"
              />
            </div>
          </div>
          {/* update profile */}
          <UpdateUserProfile userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
