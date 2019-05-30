import React, { Component } from "react";

import "./styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div class="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
          {/* <nav className="navbar  container"> */}
          <div className="header-logo">
            <a href="#">
              <h3 className="heading">Comming soon</h3>
            </a>
          </div>
          <div className="icons">
            {/* <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" style={{ color: "white" }}>
                Menu
              </span>
            </button> */}

            <button className="btn_icons p-2 text-dark">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077041.svg"
                alt=""
              />
            </button>
            <button className="btn_icons p-2 text-dark">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077032.svg"
                alt=""
              />
            </button>
            <button className="btn_icons p-2 text-dark">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077043.svg"
                alt=""
              />
            </button>
            <button className="btn_icons p-2 text-dark">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077042.svg"
                alt=""
              />
            </button>
          </div>
          {/* </nav>         */}
        </div>
      </div>
    );
  }
}

export default Header;
