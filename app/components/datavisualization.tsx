import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import Chart from "chart.js/auto";

interface DataVisualizationProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Data Visualization</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DataVisualization;
