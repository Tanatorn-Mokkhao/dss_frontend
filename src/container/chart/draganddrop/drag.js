import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import { getDataChartGroup, queryByElement } from "../../../action/chartAction";
import { getAllElementX } from "../../../action/projectAction";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
function Drag(props) {
  const chart = useSelector((state) => state.chart);
  const project = useSelector((state) => state.project);

  const dispatch = useDispatch();
  const [dragData, setDragData] = useState("");
  const [dataX, setDataX] = useState("");
  const [dataY, setDataY] = useState([]);
  const [elementCheck, setElementChecked] = useState([]);

  useEffect(() => {
    if (chart.chartProjectPage.dataProject) {
      if (
        chart.chartProjectPage.dataProject[0].saveState.dataX &&
        chart.chartProjectPage.dataProject[0].saveState.dataY &&
        chart.chartProjectPage.dataProject[0].saveState.element.length > 0
      ) {
        console.log(chart.chartProjectPage.dataProject[0].saveState.element);
        const payload = {
          tableId: chart.dataTable.dataTable[0]._id,
          labelX: chart.chartProjectPage.dataProject[0].saveState.dataX,
          dataArrayY: chart.chartProjectPage.dataProject[0].saveState.dataY,
          projectId: chart.chartProjectPage.dataProject[0]._id,
          elementLabelX:
            chart.chartProjectPage.dataProject[0].saveState.element,
        };
        dispatch(queryByElement(payload));
      } else if (
        chart.chartProjectPage.dataProject[0].saveState.dataX &&
        chart.chartProjectPage.dataProject[0].saveState.dataY
      ) {
        const payload = {
          tableId: chart.dataTable.dataTable[0]._id,
          labelX: chart.chartProjectPage.dataProject[0].saveState.dataX,
          dataArrayY: chart.chartProjectPage.dataProject[0].saveState.dataY,
          projectId: chart.chartProjectPage.dataProject[0]._id,
        };
        dispatch(getDataChartGroup(payload));
      }
    }
  }, [chart.chartProjectPage.dataProject]);

  const dropX = () => {
    setElementChecked([]);
    // console.log(elementCheck);
    setDataX(dragData);
  };

  const dropY = () => {
    setDataY([...dataY, { type: "sum", dataY: dragData }]);

    // setDataY([...dataY, dragData]);
  };

  const deleteX = () => {
    setDataX("");
  };
  const deleteY = (item) => {
    let keep;
    keep = dataY.filter((data, count) => count != item);
    setDataY(keep);
  };
  const handleQuery = () => {
    if (elementCheck.length > 0) {
      const payload = {
        tableId: chart.dataTable.dataTable[0]._id,
        labelX: dataX,
        dataArrayY: dataY,
        projectId: chart.chartProjectPage.dataProject[0]._id,
        elementLabelX: elementCheck,
      };
      const element = {
        tableId: chart.dataTable.dataTable[0]._id,
        labelX: dataX,
      };
      dispatch(queryByElement(payload));
      dispatch(getAllElementX(element));
    } else {
      const payload = {
        tableId: chart.dataTable.dataTable[0]._id,
        labelX: dataX,
        dataArrayY: dataY,
        projectId: chart.chartProjectPage.dataProject[0]._id,
      };
      const element = {
        tableId: chart.dataTable.dataTable[0]._id,
        labelX: dataX,
      };
      dispatch(getDataChartGroup(payload));
      dispatch(getAllElementX(element));
    }
  };

  const handleElementChecked = (data) => {
    let keep;
    if (elementCheck.includes(data)) {
      keep = elementCheck.filter((index) => index != data);
      setElementChecked(keep);
    } else {
      setElementChecked([...elementCheck, data]);
    }
  };

  const setTypeY = (value, item) => {
    let keep = [...dataY];
    keep[item].type = value;
    setDataY(keep);
    console.log(dataY);
  };
  return (
    <div className="main-drag">
      <div className="main-drag-zone1">
        <div className="control-scroll-listdata">
          <ul>
            {chart.dataTable.dataTable
              ? chart.dataTable.dataTable[0].headProject.map((data, item) => (
                  <li
                    onDragStart={(e) => setDragData(data)}
                    draggable="true"
                    key={item}
                  >
                    {data}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
      <div className="main-drag-zone2">
        <div className="top-drop">
          <div className="filter">1</div>
          <div className="drop">
            <div className="drop-zone1">
              <div className="x">
                เเกน X:
                <table>
                  <tr>
                    <td onDrop={dropX} onDragOver={(e) => e.preventDefault()}>
                      {dataX ? (
                        <p>
                          {dataX}
                          <GrFormClose
                            style={{
                              float: "right",
                              marginTop: "4px",
                              cursor: "pointer",
                            }}
                            onClick={deleteX}
                          />
                        </p>
                      ) : null}
                    </td>
                  </tr>
                </table>
              </div>

              <div className="y">
                เเกน Y:
                <div
                  className="control-scroll"
                  style={dataY.length > 3 ? { overflowY: "scroll" } : null}
                >
                  <table>
                    <tr>
                      <td onDrop={dropY} onDragOver={(e) => e.preventDefault()}>
                        {dataY
                          ? dataY.map((data, item) => (
                              // <p key={item}>
                              //   {data}{" "}
                              //   <GrFormClose
                              //     style={{ float: "right", marginTop: "4px" }}
                              //     onClick={deleteY.bind(this, item)}
                              //   />
                              // </p>
                              <div className="y-list" key={item}>
                                <div className="wrap-over-data">
                                  <p style={{ marginTop: "3px" }}>
                                    {data.dataY}
                                  </p>
                                </div>
                                <div className="type-list-y">
                                  <select
                                    style={{ marginTop: "2px" }}
                                    onChange={(e) =>
                                      setTypeY(e.target.value, item)
                                    }
                                  >
                                    <option value="sum">Sum</option>
                                    <option value="avg">Avg</option>
                                  </select>
                                </div>
                                <div>
                                  <GrFormClose
                                    style={{ float: "right", marginTop: "6px" }}
                                    onClick={deleteY.bind(this, item)}
                                  />
                                </div>
                              </div>
                            ))
                          : null}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="drop-zone2">
              <ul>
                <li>
                  <div
                    className={
                      project.elementX.length > 0
                        ? "scroll-element"
                        : "scroll-element1"
                    }
                  >
                    {project.elementX
                      ? project.elementX.map((data) => (
                          <div className="handle-hidden">
                            {!elementCheck.includes(data._id) ? (
                              <BiCheckbox
                                onClick={handleElementChecked.bind(
                                  this,
                                  data._id
                                )}
                                size="2vh"
                              />
                            ) : (
                              <BiCheckboxChecked
                                onClick={handleElementChecked.bind(
                                  this,
                                  data._id
                                )}
                                size="2vh"
                              />
                            )}
                            {/* <input
                              type="checkbox"
                              id={data._id}
                              name={data._id}
                              value={data._id}
                              onClick={(e) =>
                                handleElementChecked(e.target.value)
                              }
                            /> */}
                            {data._id}
                          </div>
                        ))
                      : null}
                  </div>
                </li>
                <li>
                  <button className="submit-query" onClick={handleQuery}>
                    คลิกที่นี้เพื่อ สร้างการฟ
                  </button>
                </li>
              </ul>
            </div>
            <div className="drop-zone3">1</div>
          </div>
        </div>
        <div className="bottom-content-chart">{props.children}</div>
      </div>
    </div>
  );
}

export default Drag;
