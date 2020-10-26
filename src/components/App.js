import React, { Component, useState } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.arrowRight = this.arrowRight.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }
  arrowRight(event) {
    if (
      (event.key === "ArrowRight" || event.keyCode === 39) &&
      this.state.renderBall
    ) {
      this.count = this.count + 1;
      let obj = {};
      obj.left = this.count * 5 + "px";
      console.log(obj.left);
      this.setState({ ballPosition: obj });
    }
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      this.arrowRight(event);
    });
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
