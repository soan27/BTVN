import React from "react";
import styled from "./style.module.css";
export default function Header() {
  return (
    // <div>
    //   {/* <div style={{ color: "red" }} className="header">
    //     Header
    //   </div> */}
    //   <div className={styled.div}>
    //     <div className="footerLearn"></div>
    //   </div>
    // </div>
    <div className="bodyLearn">
      <div className={styled.div}></div>
      <div>Hello</div>
      <div className="footerLearn"></div>
    </div>
  );
}
