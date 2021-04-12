import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ColorArray } from "../color/color";
import animationData from "./animation/41878-chart.json";
import Lottie from "react-lottie";
function AreaChart() {
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
          //   backgroundColor: ColorArray[i],
          //   borderColor: "rgba(255,99,132,1)",
          //   borderWidth: 2,
          //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
          //   hoverBorderColor: "rgba(255,99,132,1)",
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
            left: "60%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
      )}
    </>
  );
}

export default AreaChart;
