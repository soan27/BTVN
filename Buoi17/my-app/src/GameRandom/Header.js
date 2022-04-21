import React from "react";

export default function Header(props) {
  return (
    <div className="jumbotron text-center">
      <h1>Getting random number</h1>
      <p>
        Toi da chon mot so random trong khoang tu 1 den 100, ban co the doan
        duoc
      </p>
      {props.randomNumber}
      <p></p>
    </div>
  );
}
