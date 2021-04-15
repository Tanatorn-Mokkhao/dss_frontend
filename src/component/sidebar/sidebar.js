import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BsTable } from "react-icons/bs";
import {
  AiOutlineBarChart,
  AiFillPieChart,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createChartProject } from "../../action/chartAction";
import { getAllChart } from "../../action/initialData";
import { BiFolder } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import { RiContactsBookUploadLine, RiDashboardFill } from "react-icons/ri";
import { createProjectDashBoard } from "../../action/dashBoardAction";

function Sidebar(props) {
  const project = useSelector((state) => state.project);
  const [subsidebar, setSubSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const [selectTable, setSelectTable] = useState("");
  const [name, setName] = useState("");
  const [showDash, setShowDash] = useState(false);
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const renderHiddensidebar = () => {
    setSubSidebar(!subsidebar);
  };
  useEffect(() => {}, [project.table]);
  const handleCheck = () => {
    if (subsidebar) {
      setSubSidebar(!subsidebar);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = (type) => {
    setType(type);
    setShow(true);
  };

  const handleSubmitTable = () => {
    const payload = {
      dataProject: {
        projectName: name,
        chartType: type,
        nameTable: selectTable,
      },
    };
    dispatch(createChartProject(payload)).then(() => {
      dispatch(getAllChart());
    });
  };

  const renderModal = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        style={{ marginTop: "30vh" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>เลือกตารางข้อมูล</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {project.table.dataTable ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ตั้งชื่อโปรเจค"
              ></input>
              <br />
              <br />
              <select
                value={selectTable}
                onChange={(e) => setSelectTable(e.target.value)}
              >
                <option>เลือกตาราง</option>
                {project.table.dataTable
                  ? project.table.dataTable.map((data) => (
                      <option value={data._id} key={data._id}>
                        {data.nameProject}
                      </option>
                    ))
                  : null}
              </select>
            </>
          ) : (
            <p>ยังไม่นำเข้าตารางข้อมูล</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {name ? (
            <Button variant="primary" onClick={handleSubmitTable}>
              Submit
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmitTable} disabled>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  };

  const renderModalDash = () => {
    return (
      <Modal
        show={showDash}
        onHide={handleShowDashclose}
        animation={false}
        style={{ marginTop: "30vh" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>เลือกตารางข้อมูล</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ตั้งชื่อโปรเจค"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowDashclose}>
            Close
          </Button>
          {name ? (
            <Button variant="primary" onClick={handleSubmitDshBoard}>
              Submit
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmitDshBoard} disabled>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  };
  const handleSubmitDshBoard = () => {
    const payload = { projectName: name };
    dispatch(createProjectDashBoard(payload));
  };
  const handleShowDash = () => {
    setShowDash(true);
  };
  const handleShowDashclose = () => {
    setShowDash(false);
  };
  return (
    <div className="grid-side-bar">
      {renderModal()}
      {renderModalDash()}
      <div>
        <div className="sidebar">
          <p
            className="s1"
            style={{ cursor: "pointer" }}
            onClick={renderHiddensidebar}
          >
            + สร้าง
          </p>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p
              className="s2"
              style={{ cursor: "pointer", marginTop: "0px", padding: "0px" }}
            >
              <BiFolder size="3vh" /> Explorer
            </p>
          </Link>
          <Link
            to="/home/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p
              className="s2"
              style={{ cursor: "pointer", marginTop: "0px", padding: "0px" }}
            >
              <RiDashboardFill size="3vh" /> Dashboard
            </p>
          </Link>

          <nav className={subsidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <Link to="/importfile">
                <li className="nav-text" style={{ display: "flex" }}>
                  <p>
                    <BsTable size="40px" />
                  </p>
                  <p style={{ marginLeft: "1vh", marginTop: "1vh" }}>
                    ตารางใหม่/นำข้อมูลเข้า
                  </p>
                </li>
              </Link>
              <li
                className="nav-text"
                style={{ display: "flex" }}
                onClick={handleShow.bind(this, "bar")}
              >
                <p>
                  <AiOutlineBarChart size="50px" />
                </p>
                <p
                  style={{
                    marginLeft: "1vh",
                    marginTop: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  Bar Chart
                </p>
              </li>
              <li
                className="nav-text"
                style={{ display: "flex" }}
                onClick={handleShow.bind(this, "pie")}
              >
                <p>
                  <AiFillPieChart size="50px" />
                </p>
                <p
                  style={{
                    marginLeft: "1vh",
                    marginTop: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  Pie Chart
                </p>
              </li>
              <li
                className="nav-text"
                style={{ display: "flex" }}
                onClick={handleShow.bind(this, "line")}
              >
                <p>
                  <BiLineChart size="50px" />
                </p>
                <p
                  style={{
                    marginLeft: "1vh",
                    marginTop: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  Line Chart
                </p>
              </li>

              <li
                className="nav-text"
                style={{ display: "flex" }}
                onClick={handleShow.bind(this, "area")}
              >
                <p>
                  <AiOutlineAreaChart size="50px" />
                </p>
                <p
                  style={{
                    marginLeft: "1vh",
                    marginTop: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  Area Chart
                </p>
              </li>
              <hr style={{ width: "100%" }} />
              <li
                className="nav-text"
                style={{ display: "flex" }}
                onClick={handleShowDash}
              >
                <p>
                  <RiDashboardFill size="50px" />
                </p>
                <p
                  style={{
                    marginLeft: "1vh",
                    marginTop: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  DashBoard
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div onClick={handleCheck} className="content-main">
        {props.children}
      </div>
    </div>
  );
}

export default Sidebar;
