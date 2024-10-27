import {
  Area,
  AreaChart,
//   Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SellLineChart = () => {
  const data = [
    {
      name: "May",
      uv: 3000,
      pv: 1400,
      amt: 1600,
    },
    {
      name: "June",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "July",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "August",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "September",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Octobar",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="mt-5 bg-white p-5 rounded-md">
      <div style={{ width: "100%" }}>
        <p className="text-xl mb-5">Month View Sells</p>
        <div className="flex gap-5">

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            {/* <Brush /> */}
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SellLineChart;
