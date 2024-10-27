import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Define custom color palette
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// Sample data
const data = [
  { name: "Cardio Equipment", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Fitness Accessories", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Sports Equipment", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Strength Training", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Fitness Apparel", uv: 1890, pv: 4800, amt: 2181 },
];

// Generate path for the custom triangle bar shape
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

// Custom triangle bar shape component
const TriangleBar: React.FC<any> = ({ fill, x, y, width, height }) => (
  <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
);

const DashBarChart = () => {
  return (
    <div className="bg-white rounded-lg py-[31px]">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default DashBarChart;
