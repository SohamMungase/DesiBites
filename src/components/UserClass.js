import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Parent call");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sohammungase");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json)
  }

  render() {
    const { name, location, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>contact:{login}</h4>
      </div>
    );
  }
}

export default UserClass;
