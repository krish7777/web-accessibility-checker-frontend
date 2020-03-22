import React, { Component } from "react";
import "./Loading.css";
export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="flex">
            <div className="loader"></div>
          </div>
          <div className="load-text">Loading...</div>
        </div>
      </div>
    );
  }
}
