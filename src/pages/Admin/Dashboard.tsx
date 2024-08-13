
import { FaUserGroup } from "react-icons/fa6";


const Dashboard = () => {
  return (
   <div className="grid grid-cols-4 gap-5">
   <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-5 flex justify-center gap-5 rounded-xl items-center">
    <div><FaUserGroup/></div>
    <div className="text-xl font-semibold text-white"><p>Total User : 50</p></div>
   </div>
   <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-5 flex justify-center gap-5 rounded-xl items-center">
    <div><FaUserGroup/></div>
    <div className="text-xl font-semibold text-white"><p>Total Customer : 30</p></div>
   </div>
   <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-5 flex justify-center gap-5 rounded-xl items-center">
    <div><FaUserGroup/></div>
    <div className="text-xl font-semibold text-white"><p>Total Sell : $50k </p></div>
   </div>
   <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-5 flex justify-center gap-5 rounded-xl items-center">
    <div><FaUserGroup/></div>
    <div className="text-xl font-semibold text-white"><p>Total User : 50</p></div>
   </div>
   </div>
  );
};

export default Dashboard;
