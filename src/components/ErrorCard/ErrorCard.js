import React, { Component } from "react";
import "./ErrorCard.css";

export default class ErrorCard extends Component {
  render() {
    const { rule, snippet, fix } = this.props.err;
    return (
      <div className="error-card">
        <h4>RULE: {rule}</h4>
        <p>
          {this.props.isWarn ? this.props.err.warning : this.props.err.error}
        </p>
        <p>{snippet}</p>
        <p>{fix}</p>
      </div>
    );
  }
}
