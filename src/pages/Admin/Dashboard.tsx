/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  useGetAdminQuery,
  useGetUserQuery,
} from "../../redux/features/auth/User/userApi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useGetOrderQuery } from "../../redux/features/order/orderapi";
// import { TOrder } from "../../Type";

// import AdLineChart from "../../component/Admin/DashBoard/LineChart";
import SellLineChart from "../../component/Admin/DashBoard/LineChart";
import OrderDetails from "../../component/Admin/DashBoard/PieChart";
import ManageAdmin from "./AdminManagement/ManageAdmin";
// import ProductManagement from "../userView/ProductManagement";
import DashBarChart from "../../component/Admin/DashBoard/BarChart";

const Dashboard = () => {
  const { data: admin } = useGetAdminQuery({});
  const { data: user} = useGetUserQuery(undefined);
  const { data: earn } = useGetOrderQuery("delivered");

  const totalEarn = earn?.data?.reduce(
    (acc: number, curr: any) => acc + curr.totalPayment,
    0
  );

  // console.log(totalEarn);
  return (
    <div>
      {/* boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Total Admin */}
  <div className="p-6 flex flex-col md:flex-row justify-center items-center gap-4 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
    <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
      <MdAdminPanelSettings className="text-4xl" />
    </div>
    <div className="text-center md:text-left">
      <p className="text-sm text-gray-500">Total Admin</p>
      <p className="text-2xl font-bold text-gray-800">{admin?.data?.length}</p>
    </div>
  </div>

  {/* Total User */}
  <div className="p-6 flex flex-col md:flex-row justify-center items-center gap-4 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
    <div className="p-4 bg-green-100 text-green-500 rounded-full">
      <FaUserFriends className="text-4xl" />
    </div>
    <div className="text-center md:text-left">
      <p className="text-sm text-gray-500">Total Users</p>
      <p className="text-2xl font-bold text-gray-800">{user?.data?.length}</p>
    </div>
  </div>

  {/* Total Earnings */}
  <div className="p-6 flex flex-col md:flex-row justify-center items-center gap-4 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
    <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
      <RiMoneyDollarCircleFill className="text-4xl" />
    </div>
    <div className="text-center md:text-left">
      <p className="text-sm text-gray-500">Total Earnings</p>
      <p className="text-2xl font-bold text-gray-800">${totalEarn}</p>
    </div>
  </div>
</div>
      {/* charts */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
          <OrderDetails />
          <DashBarChart/>
        </div>
        <SellLineChart />
        <div className="my-10 bg-white p-5 rounded-lg">
          {/* <h1 className="text-xl">Admin Management</h1> */}
          <ManageAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
