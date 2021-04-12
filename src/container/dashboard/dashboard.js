import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllChartList,
  getDataChartGroup,
  getDashBoardSlug,
  saveStateDashBoard,
} from "../../action/dashBoardAction";
import { queryByElement } from "../../action/dashBoardAction";
import Bar from "./chart/bar/barChart";
import Line from "./chart/line/lineChart";
import Area from "./chart/area/areaChart";
import Pie from "./chart/pie/pieChart";
import "./style.css";
import { BsXCircle } from "react-icons/bs";
function Dashboard(props) {
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [dragData, setDragData] = useState({});
  const [chart1, setchart1] = useState();
  const [chart2, setchart2] = useState();
  const [chart3, setchart3] = useState();
  const [chart4, setchart4] = useState();
  useEffect(() => {
    const { match } = props;
    dispatch(getDashBoardSlug(match.params.slug));
    dispatch(getAllChartList());
  }, []);
  useEffect(() => {
    if (dashboard.getDashBySlug.dashboardProject) {
      if (dashboard.getDashBySlug.dashboardProject[0].chartList) {
        if (dashboard.getDashBySlug.dashboardProject[0].chartList.chart1) {
          if (
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
              .dataProject[0].saveState.element.length > 0
          ) {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0]._id,
              elementLabelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].saveState.element,
            };
            dispatch(
              queryByElement(
                payload,
                "chart1",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].chartType
              )
            );
          } else {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0]._id,
            };
            dispatch(
              getDataChartGroup(
                payload,
                "chart1",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
                  .dataProject[0].chartType
              )
            );
          }
          setchart1(
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart1
              .dataProject[0]._id
          );
        }

        if (dashboard.getDashBySlug.dashboardProject[0].chartList.chart2) {
          if (
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
              .dataProject[0].saveState.element.length > 0
          ) {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0]._id,
              elementLabelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].saveState.element,
            };
            dispatch(
              queryByElement(
                payload,
                "chart2",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].chartType
              )
            );
          } else {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0]._id,
            };
            dispatch(
              getDataChartGroup(
                payload,
                "chart2",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
                  .dataProject[0].chartType
              )
            );
          }
          setchart2(
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart2
              .dataProject[0]._id
          );
        }
        if (dashboard.getDashBySlug.dashboardProject[0].chartList.chart3) {
          if (
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
              .dataProject[0].saveState.element.length > 0
          ) {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0]._id,
              elementLabelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].saveState.element,
            };
            dispatch(
              queryByElement(
                payload,
                "chart3",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].chartType
              )
            );
          } else {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0]._id,
            };
            dispatch(
              getDataChartGroup(
                payload,
                "chart3",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
                  .dataProject[0].chartType
              )
            );
          }
          setchart3(
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart3
              .dataProject[0]._id
          );
        }

        if (dashboard.getDashBySlug.dashboardProject[0].chartList.chart4) {
          if (
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
              .dataProject[0].saveState.element.length > 0
          ) {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0]._id,
              elementLabelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].saveState.element,
            };
            dispatch(
              queryByElement(
                payload,
                "chart4",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].chartType
              )
            );
          } else {
            const payload = {
              tableId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].nameTable,
              labelX:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].saveState.dataX,
              dataArrayY:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].saveState.dataY,
              projectId:
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0]._id,
            };
            dispatch(
              getDataChartGroup(
                payload,
                "chart4",
                dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
                  .dataProject[0].chartType
              )
            );
          }
          setchart4(
            dashboard.getDashBySlug.dashboardProject[0].chartList.chart4
              .dataProject[0]._id
          );
        }
      }
    }
  }, [dashboard.getDashBySlug.dashboardProject]);

  const dropZone1 = () => {
    if (dragData.element.length > 0) {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
        elementLabelX: dragData.element,
      };
      dispatch(queryByElement(payload, "chart1", dragData.chartType));
    } else {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
      };
      dispatch(getDataChartGroup(payload, "chart1", dragData.chartType));
    }
    let payload = {
      _id: dashboard.getDashBySlug.dashboardProject[0]._id,
      chartList: {
        chart1: dragData.projectId,
        chart2: chart2,
        chart3: chart3,
        chart4: chart4,
      },
    };
    // console.log(payload);
    dispatch(saveStateDashBoard(payload));
    setchart1(dragData.projectId);
  };

  const dropZone2 = () => {
    if (dragData.element.length > 0) {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
        elementLabelX: dragData.element,
      };
      dispatch(queryByElement(payload, "chart2", dragData.chartType));
    } else {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
      };
      dispatch(getDataChartGroup(payload, "chart2", dragData.chartType));
    }
    let payload = {
      _id: dashboard.getDashBySlug.dashboardProject[0]._id,
      chartList: {
        chart1: chart1,
        chart2: dragData.projectId,
        chart3: chart3,
        chart4: chart4,
      },
    };
    // console.log(payload);
    dispatch(saveStateDashBoard(payload));
    setchart2(dragData.projectId);
  };

  const dropZone3 = () => {
    if (dragData.element.length > 0) {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
        elementLabelX: dragData.element,
      };
      dispatch(queryByElement(payload, "chart3", dragData.chartType));
    } else {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
      };
      dispatch(getDataChartGroup(payload, "chart3", dragData.chartType));
    }
    let payload = {
      _id: dashboard.getDashBySlug.dashboardProject[0]._id,
      chartList: {
        chart1: chart1,
        chart2: chart2,
        chart3: dragData.projectId,
        chart4: chart4,
      },
    };
    // console.log(payload);
    dispatch(saveStateDashBoard(payload));
    setchart3(dragData.projectId);
  };

  const dropZone4 = () => {
    if (dragData.element.length > 0) {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
        elementLabelX: dragData.element,
      };
      dispatch(queryByElement(payload, "chart4", dragData.chartType));
    } else {
      const payload = {
        tableId: dragData.tableId,
        labelX: dragData.dataX,
        dataArrayY: dragData.dataY,
        projectId: dragData.projectId,
      };
      dispatch(getDataChartGroup(payload, "chart4", dragData.chartType));
    }
    let payload = {
      _id: dashboard.getDashBySlug.dashboardProject[0]._id,
      chartList: {
        chart1: chart1,
        chart2: chart2,
        chart3: chart3,
        chart4: dragData.projectId,
      },
    };
    // console.log(payload);
    dispatch(saveStateDashBoard(payload));
    setchart4(dragData.projectId);
  };
  const renderChart = (data, chartType) => {
    switch (chartType) {
      case "bar":
        {
          return <Bar data={data} />;
        }
        break;
      case "line":
        {
          return <Line data={data} />;
        }
        break;
      case "area":
        {
          return <Area data={data} />;
        }
        break;
      case "pie":
        {
          return <Pie data={data} />;
        }
        break;
    }
  };

  return (
    <>
      {dashboard.loading ? (
        <p>loading</p>
      ) : (
        <Layout>
          <div className="main-dashboard">
            <div className="dash-drag">
              <ul>
                {dashboard.getAllChartList.length > 0
                  ? dashboard.getAllChartList[0].dataProject.map((data) => (
                      <li
                        key={data._id}
                        onDragStart={(e) =>
                          setDragData({
                            projectId: data._id,
                            tableId: data.nameTable,
                            dataX: data.saveState.dataX,
                            dataY: data.saveState.dataY,
                            element: data.saveState.element,
                            chartType: data.chartType,
                          })
                        }
                        draggable="true"
                      >
                        {data.projectName}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="dash-content">
              <div
                onDrop={dropZone1}
                onDragOver={(e) => e.preventDefault()}
                className={dashboard.chart1.length ? "z1-drop" : "z1-notdrop"}
              >
                {dashboard.chart1.length ? (
                  renderChart(
                    dashboard.chart1[0].data,
                    dashboard.chart1[0].chartType
                  )
                ) : (
                  <ul>
                    <li>
                      <BsXCircle size="50px" />
                    </li>
                    <li>drop here</li>
                  </ul>
                )}
              </div>
              <div
                onDrop={dropZone2}
                onDragOver={(e) => e.preventDefault()}
                className={dashboard.chart2.length ? "z2-drop" : "z2-notdrop"}
              >
                {dashboard.chart2.length ? (
                  renderChart(
                    dashboard.chart2[0].data,
                    dashboard.chart2[0].chartType
                  )
                ) : (
                  <ul>
                    <li>
                      <BsXCircle size="50px" />
                    </li>
                    <li>drop here</li>
                  </ul>
                )}
              </div>
              <div
                onDrop={dropZone3}
                onDragOver={(e) => e.preventDefault()}
                className={dashboard.chart3.length ? "z3-drop" : "z3-notdrop"}
              >
                {dashboard.chart3.length ? (
                  renderChart(
                    dashboard.chart3[0].data,
                    dashboard.chart3[0].chartType
                  )
                ) : (
                  <ul>
                    <li>
                      <BsXCircle size="50px" />
                    </li>
                    <li>drop here</li>
                  </ul>
                )}
              </div>
              <div
                onDrop={dropZone4}
                onDragOver={(e) => e.preventDefault()}
                className={dashboard.chart4.length ? "z4-drop" : "z4-notdrop"}
              >
                {dashboard.chart4.length ? (
                  renderChart(
                    dashboard.chart4[0].data,
                    dashboard.chart4[0].chartType
                  )
                ) : (
                  <ul>
                    <li>
                      <BsXCircle size="50px" />
                    </li>
                    <li>drop here</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Dashboard;
