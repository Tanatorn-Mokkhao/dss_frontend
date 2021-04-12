import React from "react";
import getParams from "../../getParams/getParams";
import Chart from "./chart/chart";
import HandleError from "./hanleError";
function Destinationlist(props) {
  const listPage = () => {
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "bar":
        {
          content = <Chart {...props} chart={"bar"} />;
        }
        break;
      case "pie":
        {
          content = <Chart {...props} chart={"pie"} />;
        }
        break;
      case "line":
        {
          content = <Chart {...props} chart={"line"} />;
        }
        break;
      case "area":
        {
          content = <Chart {...props} chart={"area"} />;
        }
        break;

      default: {
        content = <HandleError />;
      }
    }
    return content;
  };

  return <div>{listPage()}</div>;
}

export default Destinationlist;
