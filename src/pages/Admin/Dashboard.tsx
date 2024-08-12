import Chart from "../../component/charts/Chart";

const Dashboard = () => {
  return (
   <div className="grid grid-cols-2">
    <Chart></Chart>
    <Chart></Chart>
    <Chart></Chart>
   </div>
  );
};

export default Dashboard;
