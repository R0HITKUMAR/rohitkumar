import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import img from "../../../assets/img/3003035.png";

export default function Navbar(props) {
  const navigate = useNavigate();

  return (
    <nav>
      <i onClick={props.stoggle} className="bx bx-menu" />
      <form action="#"></form>
      <input type="checkbox" onChange={props.mtoggle} id="switch-mode" hidden />
      <label for="switch-mode" className="switch-mode" />
      <a
        href="/"
        className="profile"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        <img src={img} alt="User" />
        <span className="name" style={{ marginLeft: "5px" }}>
          Rohit Kumar
        </span>
        <ul
          className="dropdown-menu dropdown-menu-end m-1"
          style={{ zIndex: "1" }}
        >
          <li>
            <button className="dropdown-item" onClick={() => navigate("/")}>
              Dashboard
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => navigate("/")}>
              My Profile
            </button>
          </li>
          <li>
            <button onClick={props.logout} className="dropdown-item">
              Logout
            </button>
          </li>
        </ul>
      </a>
    </nav>
  );
}
