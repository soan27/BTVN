import React, { Component } from "react";

export default class RenderCp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }
  click() {
    console.log("Test");
  }
  render() {
    console.log("Render Parent");

    return (
      <div>
        <p
          onClick={() => {
            this.setState({ toggle: this.state.toggle });
          }}
        >
          Click
        </p>
        <A color={"#ff0000"} onClick={this.click} />
      </div>
    );
  }
}
const A = React.memo((color, onClick) => {
  console.log("render A");
  return (
    <div>
      <p style={{ color: color }}>A</p>
      <B />
    </div>
  );
});

const B = React.memo(() => {
  console.log("render B");
  return (
    <div>
      <h2>B</h2>
    </div>
  );
});
