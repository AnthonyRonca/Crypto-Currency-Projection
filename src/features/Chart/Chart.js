import React from "react";
import "./Chart.css";
import LineChart from "react-linechart";

const data = [
    {
      color: "steelblue",
      points: [
        { x: 1, y: 0 },
        { x: 3, y: 1 },
        { x: 7, y: 20 },
      ],
    },
  ];

const Chart = ({}) => (
  <div>
    <div className="App">
      <h1>Crypto Chart Feature Incoming</h1>
      <LineChart width={600} height={400} data={data} />
    </div>
  </div>
);

export default Chart;