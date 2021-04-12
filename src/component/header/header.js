import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../action/authAction";
import { HiUserCircle } from "react-icons/hi";
import "./style.css";
function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
  };
  const renderLogin = () => {
    if (auth.authenticate) {
      return (
        <>
          <div className="zone-3">
            {/* <span
              style={{ color: "white", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Logout
            </span> */}
            <ul>
              <li>
                <span>
                  <HiUserCircle
                    style={{ color: "white", cursor: "pointer" }}
                    size="40px"
                  />
                </span>
                <ul>
                  <li>{auth.user ? <p> {auth.user.username}</p> : null}</li>
                  <li>{auth.user ? <p> {auth.user.email}</p> : null}</li>
                  <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Logout
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="zone-3">
            <Link to="/signin">Login</Link>
          </div>
        </>
      );
    }
  };
  return (
    <div className="grid-header">
      <div className="zone-1">
        <img src="/img/zoho.png" width="25vh" style={{ marginLeft: "3vh" }} />
        <Link to="/" style={{ marginTop: "5px" }}>
          หน้าหลัก
        </Link>
      </div>
      {renderLogin()}
    </div>
  );
}

export default Header;
