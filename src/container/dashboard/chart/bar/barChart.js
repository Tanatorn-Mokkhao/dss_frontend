import React from "react";
import { Bar } from "react-chartjs-2";
import { ColorArray } from "../../../chart/color/color";

function BarChart(props) {
  const handleData = () => {
    let keep = [];
    let head = Object.keys(props.data[0]);
    let dataArray = [];
    let label;

    head.forEach((data) => {
      keep.push(props.data.map((item) => item[data]));
    });

    for (let i = 0; i < keep.length; i++) {
      if (i > 0) {
        dataArray.push({
          label: head[i],
          backgroundColor: ColorArray[i],
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 0,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: keep[i],
        });
      } else if (i == 0) {
        label = keep[i];
      }
    }

    const data = {
      labels: label,
      datasets: dataArray,
    };
    return data;
  };
  return (
    <Bar
      data={handleData()}
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default BarChart;
