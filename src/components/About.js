import React from "react";
import User from "./user";
import UserClass from "./userClass";

const About = () => {
  return (
    <div className="about">
        <h1>About</h1>
        <User name = {"Soham Mungase (Functional Component)"}/>
        <User name = {"Ram  (Functional Component)"}/>
        <UserClass/>
    </div>
  );
};

export default About;
