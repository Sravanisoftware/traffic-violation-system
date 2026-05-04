import { useEffect, useState } from "react";
import API from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {
  const [data, setData] = useState([]);
  const [totalFine, setTotalFine] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/violations");

      const violations = res.data.violations;

      // Count violations
      const counts = {};
      let fineSum = 0;

      violations.forEach((v) => {
        counts[v.violationType] =
          (counts[v.violationType] || 0) + 1;

        fineSum += v.fineAmount;
      });

      const chartData = Object.keys(counts).map((key) => ({
        name: key,
        count: counts[key],
      }));

      setData(chartData);
      setTotalFine(fineSum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Analytics Dashboard 📊</h2>

      <h3>Total Fine Collected: ₹{totalFine}</h3>

      {/* Bar Chart */}
      <h4>Violations Count</h4>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>

      {/* Pie Chart */}
      <h4>Violation Distribution</h4>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="count"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Analytics;