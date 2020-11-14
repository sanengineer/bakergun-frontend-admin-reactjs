import React, { Component } from "react";
import { Header } from "./Components/Header";
import { Users } from "./Components/Users";
import { DisplayBoard } from "./Components/DisplayBoard";
import { SearchBoard } from "./Components/SearchBoard";
import CreateUser from "./Components/CreateUser";
import { getAllUsers, createUser } from "./Services/UserServices";

import "./assets/scss/style.scss";

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };

  createUser = (e) => {
    createUser(this.state.user).then((response) => {
      console.log(response);
      this.setState({ numberOfUsers: this.state.numberOfUsers + 1 });
    });
  };

  getAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      this.setState({ users: users, numberOfUsers: users.length });
    });
  };

  onChangeForm = (e) => {
    let user = this.state.user;
    if (e.target.name === "username") {
      user.username = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    } else if (e.target.name === "password") {
      user.password = e.target.value;
    }

    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <CreateUser
                user={this.state.user}
                onChangeForm={this.onChangeForm}
                createUser={this.createUser}
              ></CreateUser>
            </div>
            <div className="col-md-4">
              <DisplayBoard
                numberOfUsers={this.state.numberOfUsers}
                getAllUsers={this.getAllUsers}
              ></DisplayBoard>
              <SearchBoard></SearchBoard>
            </div>
          </div>
        </div>
        <div className="container container-lg mt-5">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
