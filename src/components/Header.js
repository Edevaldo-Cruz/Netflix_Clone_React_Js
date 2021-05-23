/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";

export default () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src="../img/logo.png"></img>
        </a>
      </div>
    </header>
  );
};
