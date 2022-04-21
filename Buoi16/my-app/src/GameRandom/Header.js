import React from "react";

export default function Header(props) {
  return (
    <div
      className="jumbotron text-center"
      style={{ backgroundColor: props.correct ? "green" : "gray" }}
    >
      <h1>Gettig random number</h1>
      <p>
        Toi da chon mot so random trong khoang tu 1 den 100, ban co the doan
        duoc
      </p>
      {props.randomNumber}
      <div>{props.wrap}</div>
      <button
        onClick={() => {
          props.wrapChild(props.wrap + 2);
        }}
      >
        change
      </button>
      <p></p>
    </div>
  );
}
