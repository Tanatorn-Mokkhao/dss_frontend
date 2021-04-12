import React from "react";
import Layout from "../../component/layout/layout";
import "./style.css";
import { useSelector } from "react-redux";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Lottie from "react-lottie";
import animationData from "./animation/8517-charts.json";
import { AiFillDelete } from "react-icons/ai";

function Home() {
  const chart = useSelector((state) => state.chart);

  const handleLink = (slug, _id, type) => {
    console.log(slug, type);
    window.location.href = `/${slug}?type=${type}`;
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const renderIconProject = (type) => {
    switch (type) {
      case "bar":
        {
          return (
            <img
              src="/img/barchart.png"
              style={{ width: "18vh", marginTop: "2vh" }}
            />
          );
        }
        break;
      case "pie":
        {
          return (
            <img
              src="/img/piechart.png"
              style={{ width: "18vh", marginTop: "2vh" }}
            />
          );
        }
        break;
      case "line":
        {
          return (
            <img
              src="/img/linechart.png"
              style={{ width: "15vh", marginTop: "3vh" }}
            />
          );
        }
        break;
      case "area":
        {
          return (
            <img
              src="/img/area.png"
              style={{ width: "15vh", marginTop: "3vh" }}
            />
          );
        }
        break;
    }
  };
  const handeleDelete = () => {
    console.log("delete");
  };

  return (
    <div>
      <Layout>
        <div className="main-list-project">
          {chart.chartProject.dataProject ? (
            chart.chartProject.dataProject.map((data) => (
              <div
                className="list-project"
                key={data._id}
                onClick={handleLink.bind(
                  this,
                  data.slug,
                  data._id,
                  data.chartType
                )}
              >
                <div className="name-project">
                  <div className="name">{data.projectName}</div>
                  <div className="option-project">
                    <AiFillDelete onClick={handeleDelete} />
                  </div>
                </div>
                <div className="date-project">
                  เเก้ไขเมื่อ{" "}
                  {formatDistance(
                    subDays(new Date(data.updateAt), 0),
                    new Date(),
                    {
                      addSuffix: true,
                    }
                  )}
                </div>
                <div className="icon-home">
                  {renderIconProject(data.chartType)}
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
      </Layout>
    </div>
  );
}

export default Home;
