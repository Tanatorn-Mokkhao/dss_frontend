import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../action/authAction";
import { Redirect } from "react-router-dom";
import "./style.css";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    const payload = { firstName, lastName, username, email, password };
    dispatch(signup(payload));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <div className="main-signup-page">
      <Container className="signup-field">
        <div className="signup-left">
          <div className="header-login">
            <p>Signup</p>
          </div>
          <div className="fill-zone">
            <input
              type="text"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <br />
            <br />
            <input
              type="text"
              placeholder="lasttName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <br />
            <br />
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
            <br />
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
            <button onClick={handleLogin}>Submit</button>
          </div>
          <br />
          <br />
          {auth.error ? (
            <p style={{ fontWeight: "bold", color: "red" }}>{auth.error}</p>
          ) : null}
        </div>
        <div className="signup-right">
          <div className="overlay"></div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
