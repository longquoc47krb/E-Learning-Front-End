import React, { Component } from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerWidget}></div>
      </div>
    </div>
  );
}

export default Footer;
