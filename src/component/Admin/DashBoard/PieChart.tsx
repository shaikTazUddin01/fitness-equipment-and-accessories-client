import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "OnProcess", value: 400 },
  { name: "Shipping", value: 300 },
  { name: "Delivered", value: 300 },
  { name: "Cenceled", value: 200 },
];

const OrderDetails = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;

  // Define the types for the label props
  interface LabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }

  // Add the type for the parameter in renderCustomizedLabel
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: LabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white my-5 rounded-lg">
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-5 grid grid-cols-4 gap-2 justify-center items-center">
        {/* ---- */}

        <div className="flex items-center gap-1">
          <div className="bg-[#0088FE] size-5 rounded"></div>
          <span>Delivered</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-[#00C49F] size-5 rounded"></div>
          <span>OnProcess</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-[#FFBB28] size-5 rounded"></div>
          <span>Shipping</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-[#FF8042] size-5 rounded"></div>
          <span>Cenceled</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
