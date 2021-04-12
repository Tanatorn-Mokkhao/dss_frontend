import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ColorArray } from "../color/color";
import Lottie from "react-lottie";
import animationData from "./animation/34601-line-chart.json";
function LineChart() {
  const chart = useSelector((state) => state.chart);

  const handleData = () => {
    let keep = [];
    let head = Object.keys(chart.dataQuery[0]);
    let dataArray = [];
    let label;

    head.forEach((data) => {
      keep.push(chart.dataQuery.map((item) => item[data]));
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {chart.dataQuery.length > 0 ? (
        <Line
          data={handleData()}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      ) : (
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          style={{
            position: "absolute",
            top: "70%",
            left: "58%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
      )}
    </>
  );
}

export default LineChart;
