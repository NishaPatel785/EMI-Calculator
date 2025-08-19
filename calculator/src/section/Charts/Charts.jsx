import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const EMIChart = ({ principal, totalPayment }) => {
  const interest = totalPayment - principal;
  const amount=principal
  const data = [
    { name: 'Principal', value: amount },
    { name: 'Interest', value: interest },
  ];
  const COLORS = ['#228B22', '#0096FF'];

  return (
    <PieChart  width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={({ name, percent }) =>
          `${name}: ${(percent * 100).toFixed(0)}%`
        }
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default EMIChart;
