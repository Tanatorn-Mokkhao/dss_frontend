import React, { useEffect } from "react";
import Layout from "../../../component/layout/layout";
import { getAllDashBoard } from "../../../action/dashBoardAction";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.css";
function HomeDashBoard() {
  const auth = useSelector((state) => state.auth);
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getAllDashBoard());
    }
  }, [auth.authenticate]);

  const handleLink = (slug) => {
    window.location.href = `/dashboard/${slug}`;
  };
  return (
    <Layout>
      <div className="home-dash-content">
        {dashboard.getAllDashBoard.dashboardProject
          ? dashboard.getAllDashBoard.dashboardProject.map((data) => (
              <div className="list-dashboard">
                <div
                  className="list-dashboard-zone1"
                  onClick={handleLink.bind(this, data.slug)}
                >
                  <div className="name-dashBoard">{data.projectName}</div>
                  <div className="date-dashBoard">
                    {formatDistance(
                      subDays(new Date(data.updateAt), 0),
                      new Date(),
                      {
                        addSuffix: true,
                      }
                    )}
                  </div>
                </div>
                <div className="list-dashboard-zone2">
                  <BsThreeDotsVertical
                    size="30px"
                    style={{ marginTop: "10px", marginLeft: "60px" }}
                  />
                </div>
                <div
                  className="list-dashboard-zone3"
                  onClick={handleLink.bind(this, data.slug)}
                >
                  <img
                    src="/img/dash.png"
                    style={{ width: "15vh", marginTop: "3vh" }}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </Layout>
  );
}

export default HomeDashBoard;
