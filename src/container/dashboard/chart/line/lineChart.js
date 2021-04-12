import React from "react";
import { Line } from "react-chartjs-2";
import { ColorArray } from "../../../chart/color/color";
function LineChart(props) {
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
          fill: false,
          lineTension: 0.1,
          backgroundColor: ColorArray[i],
          borderColor: ColorArray[i],
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: ColorArray[i],
          pointBackgroundColor: "#fff",
          pointBorderWidth: 10,
          pointHoverRadius: 50,
          pointHoverBackgroundColor: ColorArray[i],
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
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

export default LineChart;
