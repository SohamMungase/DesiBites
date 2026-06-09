import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
