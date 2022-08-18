import React, { Component } from "react";
import Users from "./Users";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { usersData: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }
  showUsers() {
    // document.getElementById("main").style.display = "flex";
    const data = "https://reqres.in/api/users?page=1 ";
    fetch(data)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ usersData: users.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <nav className="nav">
          <ul>
            <li className="logo">
              <img src="users.png" alt="logo" />
              <p className="brand">Get_Users</p>
            </li>
            <li>
              <button className="btn" onClick={this.showUsers}>
                Get Users
              </button>
            </li>
          </ul>
        </nav>
        <Users loading={this.state.loading} users={this.state.usersData} />
      </>
    );
  }
}

export default App;
