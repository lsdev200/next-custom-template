import React from "react";
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";
import { CategoryScale, ChartOptions, LinearScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
// Chart.register(LinearScale);

interface DataVisualizationProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      fill: boolean;
      borderColor: string;
      pointBackgroundColor: string;
      pointBorderColor: string;
      pointHoverBackgroundColor: string;
      pointHoverBorderColor: string;
    }[];
  };
}

const DataVisualizationRadar: React.FC<DataVisualizationProps> = ({ data }) => {
  const optionsradar: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        // type: "category",
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
    <>
      <div className="bg-white rounded-2xl shadow-md px-5 py-8 min-h-96 max-h-[40vh] w-96">
        <h2 className="text-xl font-semibold ">Radar Chart</h2>
        <Radar data={data} options={optionsradar} />
      </div>
    </>
  );
};

export default DataVisualizationRadar;
