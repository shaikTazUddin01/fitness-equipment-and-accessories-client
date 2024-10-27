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
      <div className="grid grid-cols-3 gap-5">
        <div className=" p-5 flex justify-center gap-5 rounded-xl items-center border shadow min-h-20">
          <div className="text-3xl">
            <MdAdminPanelSettings />
          </div>
          <div className="text-xl font-semibold ">
            <p>Total Admin : {admin?.data?.length}</p>
          </div>
        </div>
        <div className=" p-5 flex justify-center gap-5 rounded-xl items-center border shadow min-h-20">
          <div className="text-3xl">
            <FaUserFriends />
          </div>
          <div className="text-xl font-semibold ">
            <p>Total User : {user?.data?.length}</p>
          </div>
        </div>

        <div className=" p-5 flex justify-center gap-5 rounded-xl items-center border shadow min-h-20">
          <div className="text-3xl">
            <RiMoneyDollarCircleFill />
          </div>
          <div className="text-xl font-semibold ">
            <p>Total Earn : {totalEarn}</p>
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
          <h1 className="text-xl">Admin Management</h1>
          <ManageAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
