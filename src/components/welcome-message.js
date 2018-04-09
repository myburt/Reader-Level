import React, { Component } from "react";
import "../App.css";
import LevelGuide from "../images/Levels.png";

const WelcomeMessage = props => {
  return (
    <div id="Header-Message">
      <h1>Welcome to Reader Level</h1>
      <h3>A place to check the level the approiate grade level for the books you read.</h3>
      <img src={LevelGuide} alt="the levels"/>
    </div>

  );
};

export default WelcomeMessage;
