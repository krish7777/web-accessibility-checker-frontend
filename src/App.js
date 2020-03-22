import React from "react";
import axios from "axios";
import Loading from "./components/Loading/Loading";
import Result from "./components/Result/Result";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      submitted: false,
      response: false,
      result: {}
    };
  }

  handleChange = e => {
    let weblink = e.target.value;

    this.setState({ link: weblink });
  };

  handleSubmit = () => {
    let weblink = this.state.link;

    this.setState({ submitted: true, response: false });
    weblink = "https://www." + weblink;
    axios
      .post("http://localhost:8000/check", { link: weblink })
      .then(res => res.data)
      .then(result => {
        console.log(result);
        this.setState({ result: result, response: true, submitted: false });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div
          style={{
            height: "20vh",
            textAlign: "center",
            padding: "10px",
            background: "#423463",
            color: "#aaa"
          }}
        >
          <h1>Web accessibilty checker</h1>
          <span>www. </span>
          <input value={this.state.link} onChange={this.handleChange}></input>

          <button onClick={this.handleSubmit}>Check</button>
        </div>

        {this.state.submitted ? <Loading /> : null}
        {this.state.response ? <Result res={this.state.result} /> : null}
      </div>
    );
  }
}
export default App;
