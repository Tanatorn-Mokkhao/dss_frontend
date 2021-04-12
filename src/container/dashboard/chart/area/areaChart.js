import React from "react";
import { Line } from "react-chartjs-2";
import { ColorArray } from "../../../chart/color/color";

function AreaChart(props) {
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
          borderColor: ColorArray[i],
          borderWidth: 3,
          hoverBackgroundColor: ColorArray[i],
          hoverBorderColor: ColorArray[i],
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
    <Line
      data={handleData()}
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default AreaChart;
