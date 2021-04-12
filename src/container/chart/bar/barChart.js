import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ColorArray } from "../color/color";
import Lottie from "react-lottie";
import animationData from "./animation/34544-bar-chart.json";

function BarChart() {
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
        // let rgb = "rgb(" + 255 / i + "," + 10 * i + "," + 100 / i + ")";
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

    // console.log(dataArray);
    // console.log(label);

    const data = {
      labels: label,
      datasets: dataArray,
      // datasets: [
      //   {
      //     label: "1",
      //     backgroundColor: "rgba(255,99,132,0.2)",
      //     borderColor: "rgba(255,99,132,1)",
      //     borderWidth: 1,
      //     hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //     hoverBorderColor: "rgba(255,99,132,1)",
      //     // data: [1, 2, 4, 5, 6, 7, 8],
      //     data: [4, 3, 5, 2, 1, 9, 6],
      //   },
      //   {
      //     label: "2",
      //     backgroundColor: "rgb(87, 169, 199)",
      //     borderColor: "rgba(255,99,132,1)",
      //     borderWidth: 1,
      //     hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //     hoverBorderColor: "rgba(255,99,132,1)",
      //     data: [4, 3, 5, 2, 1, 9, 6],
      //   },
      // ],
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
        <Bar
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

export default BarChart;
