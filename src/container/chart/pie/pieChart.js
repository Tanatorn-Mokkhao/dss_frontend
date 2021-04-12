import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ColorArray } from "../color/color";
import Lottie from "react-lottie";
import animationData from "./animation/27717-pie-chart (1).json";

function PieChart() {
  const chart = useSelector((state) => state.chart);

  // const data = {
  //   labels: [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "test",
  //   ],
  //   datasets: [
  //     {
  //       // label: "My First dataset",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: [1, 2],
  //     },
  //   ],
  // };

  const handleData = () => {
    let keep = [];
    let head = Object.keys(chart.dataQuery[0]);
    let dataArray = [];
    let label;
    let color = [];
    let i = 1;

    head.forEach((data) => {
      keep.push(chart.dataQuery.map((item) => item[data]));

      color.push(chart.dataQuery.map((data, item) => ColorArray[item]));
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
        <Pie
          data={handleData()}
          width={100}
          height={20}
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

export default PieChart;
