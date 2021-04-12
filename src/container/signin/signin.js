import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../action/authAction";
import { Redirect } from "react-router-dom";
import "./style.css";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleLogin = () => {
    const payload = { email, password };
    dispatch(signin(payload));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <div className="main-signin-page">
      <Container className="signin-field">
        <div className="signin-left">
          <div className="header-login">
            <p>Login</p>
          </div>
          <div className="fill-zone">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button onClick={handleLogin}>LOG IN</button>
          </div>
          <br />
          <br />
          {auth.error ? (
            <p style={{ fontWeight: "bold", color: "red" }}>{auth.error}</p>
          ) : null}
        </div>
        <div className="signin-right">
          <div className="overlay"></div>
        </div>
      </Container>
    </div>
  );
}

export default Signin;
