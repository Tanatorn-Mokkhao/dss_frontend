import React, { useState } from "react";
import Layout from "../../component/layout/layout";
import * as XLSX from "xlsx";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../action/projectAction";
import { getAllTable } from "../../action/initialData";
import { Modal, Button } from "react-bootstrap";

function Importexcel() {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [head, setHead] = useState([]);
  const [data, setData] = useState([]);
  const [errorfile, setErrorfile] = useState(true);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const readExcel = (file) => {
    if (file) {
      if (file.name.includes(".xlsx")) {
        const promise = new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);

          fileReader.onload = (e) => {
            const bufferArray = e.target.result;

            const wb = XLSX.read(bufferArray, { type: "buffer" });

            // console.log(wb.SheetNames);

            const wsname = wb.SheetNames[0];

            const ws = wb.Sheets[wsname];

            const data = XLSX.utils.sheet_to_json(ws);

            resolve(data);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
        promise.then((d) => {
          let data = Object.keys(d[0]);
          setData(d);
          setHead(data);
          console.log(d);
          console.log(data);
        });
        setErrorfile(true);
      } else {
        setErrorfile(false);
      }
    }
  };

  const renderTablePrototype = () => {
    let limit = 0;
    let dataMap = [];

    for (let indexdata of data) {
      dataMap.push(indexdata);
      limit++;
      if (limit == 3) {
        break;
      }
    }
    return (
      <>
        <p style={{ fontSize: "2em", fontWeight: "bold" }}>ตัวอย่างTable</p>
        <div className="overflowTable">
          <table style={{ width: "500px" }}>
            <tr>
              {head.map((headindex, item) => (
                <th style={{ border: "1px solid" }} ket={item}>
                  {headindex}
                </th>
              ))}
            </tr>
            {head.map((headindex, item) => (
              <td style={{ border: "1px solid" }} key={item}>
                {dataMap.map((index, item) => {
                  return <tr key={item}>{index[headindex]}</tr>;
                })}
              </td>
            ))}
          </table>
        </div>
      </>
    );
  };
  const handleSave = () => {
    const payload = {
      dataTable: {
        nameProject: projectName,
        headProject: head,
        dataProject: data,
      },
    };
    dispatch(createProject(payload)).then(() => {
      handleShow();
      dispatch(getAllTable());
    });
  };
  const renderModal = () => {
    return (
      <Modal show={show} onHide={handleClose} style={{ marginTop: "20vh" }}>
        <Modal.Header
          closeButton
          style={{ border: "0px solid" }}
        ></Modal.Header>
        <Modal.Body>
          <div className="success-animation">
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <p className="success-text">Add Table Succuss</p>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      <Layout>
        <div className="hold-importfile-page">
          <div className="zone1">
            <ul>
              <li>สร้างตาราง (นำเข้า) file excel</li>
              <br />
              <li>ชื่อตาราง</li>
              <input
                type="text"
                placeholder="ตั้งชื่องาน"
                style={{ width: "250px" }}
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <br />
              <br />

              <li>ชนิดไฟล์</li>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  readExcel(file);
                }}
              />

              <li>(รูปแบบไฟล์ที่รองรับ: XLSX เท่านั้น)</li>
            </ul>
            <ul>
              <li>หมายเหตุ</li>
              <li>- อัปได้เเค่ ไฟล์ XLSX เท่านั้น</li>
              <br />
              <li>
                {project.error ? (
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    {project.error}
                  </p>
                ) : null}
                {!errorfile ? (
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    อัปได้เเค่ xlsx file อย่างเดียว
                  </p>
                ) : null}
                {errorfile && data.length > 0 && projectName.length > 0 ? (
                  <button onClick={handleSave}>บันทึก</button>
                ) : (
                  <button disabled>บันทึก</button>
                )}
              </li>
            </ul>
          </div>
          <div className="zone2">
            {data.length > 0 ? renderTablePrototype() : null}
          </div>
        </div>
        {renderModal()}
      </Layout>
    </div>
  );
}

export default Importexcel;
