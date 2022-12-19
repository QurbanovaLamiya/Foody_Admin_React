import React from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const series = [98, 60, 35];
  const options = {
    labels: ["KFC", "KLM", "American Express"],
    dataLabels: { enabled: true },
    legend: {
      position: "bottom",
    },
    chart: {
      foreColor: "#c7c7c7",
    },
  };

  return (
    <Chart
      style={{ cursor: "pointer" }}
      type="donut"
      series={series}
      options={options}
    />
  );
};

export default Donut;
