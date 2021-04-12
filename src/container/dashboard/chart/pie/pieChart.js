import React from "react";
import { Pie } from "react-chartjs-2";
import { ColorArray } from "../../../chart/color/color";

function PieChart(props) {
  const handleData = () => {
    let keep = [];
    let head = Object.keys(props.data[0]);
    let dataArray = [];
    let label;
    let color = [];
    let i = 1;

    head.forEach((data) => {
      keep.push(props.data.map((item) => item[data]));

      color.push(props.data.map((data, item) => ColorArray[item]));
    });
    console.log(ColorArray[0]);
    for (let i = 0; i < keep.length; i++) {
      if (i > 0) {
        dataArray.push({
          label: head[i],
          backgroundColor: color[i],
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
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
    <Pie
      data={handleData()}
      width={100}
      height={20}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default PieChart;
