import React from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const Area = () => {
  const { t } = useTranslation();
  const series = [
    {
      name: t("dashboard.month.February"),
      data: [
        {
          x: 2019,
          y: 70,
        },
        {
          x: 2020,
          y: 90,
        },
        {
          x: 2021,
          y: 60,
        },
        {
          x: 2022,
          y: 150,
        },
      ],
    },
    {
      name: t("dashboard.month.March"),
      data: [
        {
          x: 2019,
          y: 50,
        },
        {
          x: 2020,
          y: 80,
        },
        {
          x: 2021,
          y: 60,
        },
        {
          x: 2022,
          y: 100,
        },
      ],
    },
    {
      name: t("dashboard.month.April"),
      data: [
        {
          x: 2019,
          y: 20,
        },
        {
          x: 2020,
          y: 45,
        },
        {
          x: 2021,
          y: 65,
        },
        {
          x: 2022,
          y: 80,
        },
      ],
    },
  ];
  const options = {
    chart: {
      type: "area",
      foreColor: "#c7c7c7",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      x: {
        format: "02/06/2022 19:30",
      },
    },
    title: {
      text: t("dashboard.area-subtitle"),
      style: {
        color: "#8E8E93",
        fontSize: "16px",
      },
    },
  };

  return (
    <div>
      <Chart series={series} options={options} type="area" />
    </div>
  );
};

export default Area;
