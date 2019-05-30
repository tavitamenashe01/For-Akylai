import React, { Component } from "react";

import "./styles/MainText.css";

class MainText extends Component {
  render() {
    return (
      <div className="MainText container row col-12">
        <div class="main_text">
          <h1 className="main_heading">The adventure begins</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            itaque voluptate qui pariatur. Dolorum, est?
          </p>
          <button class="btn btn-primary">Notify me</button>
        </div>
      </div>
    );
  }
}

export default MainText;
