import React, { useEffect, useState } from "react";
import Layout from "../../../component/layout/layout";
// import Draggable from "react-draggable";
import Drag from "../draganddrop/drag";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getPageChart } from "../../../action/chartAction";
import Bar from "../bar/barChart";
import Pie from "../pie/pieChart";
import Line from "../line/lineChart";
import Area from "../area/areaChart";

function Chart(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    const { match } = props;
    // console.log(match.params);
    console.log("hereweeeeeeeeee");
    dispatch(getPageChart(match.params.slug));
  }, []);

  const controlshowChart = () => {
    switch (props.chart) {
      case "bar":
        {
          return <Bar />;
        }
        break;
      case "pie":
        {
          return <Pie />;
        }
        break;
      case "line":
        {
          return <Line />;
        }
        break;
      case "area":
        {
          return <Area />;
        }
        break;
    }
  };

  return (
    <div>
      <Layout>
        <Drag>{controlshowChart()}</Drag>
      </Layout>
    </div>
  );
}

export default Chart;
