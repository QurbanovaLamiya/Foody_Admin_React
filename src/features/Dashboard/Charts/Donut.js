import React from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const series = [25, 72, 98];
  const options = {
    labels: ["KFC", "KLM", "American Express"],
    dataLabels: { enabled: true },
    legend: {
      position: "bottom",
    },
    title: {
      formatter:()=> "title",
      style: {
        align: "center",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#C7C7C7",
      },
    },
  };

  return (
    <div>
      <Chart
        style={{ cursor: "pointer" }}
        type="donut"
        series={series}
        options={options}
      />
    </div>
  );
};

export default Donut;
