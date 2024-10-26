import image from "../../assets/hero-5.jpg";
import { useFinduserQuery } from "../../redux/features/auth/User/userApi";
import { useAppSelector } from "../../redux/hooks/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state?.userLoginInfo?.user);
  const userEmail = user?.user;
  const { data, isLoading } = useFinduserQuery(userEmail);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const userInfo = data?.data;

  console.log(userInfo);
  return (
    <div className="min-h-screen">
      <img src={image} alt="" className="w-full h-[250px] object-cover" />
      <div className="flex gap-10 -mt-20 px-10">
        <div className="w-[25%] bg-white p-5 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <img src={image} className="size-28 rounded-full" />
            <h1 className="text-xl">{userInfo?.name}</h1>
            <p>{userInfo?.email}</p>
          </div>
          <div className="bg-textSecondary h-[1px] w-full my-2"></div>
          <div className="space-y-1">
            <h1 className="text-lg flex justify-between">
              Total Order: <span>50</span>
            </h1>
            <h1 className="text-lg flex justify-between">
              Order Cencle: <span>00</span>
            </h1>
            <h1 className="text-lg flex justify-between">
              Total Payment: <span>$ 5000</span>
            </h1>
            <button className="w-full bg-textSecondary py-2 rounded-lg text-white font-semibold mt-2">
              Get Order
            </button>
          </div>
        </div>
        <div className="w-[70%]"></div>
      </div>
    </div>
  );
};

export default Profile;
