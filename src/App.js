import React, { Component } from "react";
import { Header } from "./Components/Header";
import { Users } from "./Components/Users";
import { DisplayBoard } from "./Components/DisplayBoard";
import { SearchBoard } from "./Components/SearchBoard";
import CreateUser from "./Components/CreateUser";
import {
  getAllUsers,
  createUser,
  searchByUsername,
} from "./Services/UserServices";

import "./assets/scss/style.scss";
import { UsersBySearch } from "./Components/UsersBySearch";

class App extends Component {
  state = {
    user: {},
    users: [],
    searchUsername: "",
    numberOfUsers: 0,
  };

  createUser = (e) => {
    createUser(this.state.user).then((response) => {
      console.log("App.js_createUser: ", response);
      this.setState({ numberOfUsers: this.state.numberOfUsers + 1 });
    });
  };

  getAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      this.setState({ users: users, numberOfUsers: users.length });
    });
  };

  searchByUsername = (e) => {
    // if (e.target.value === this.state.searchUsername) {
    searchByUsername(this.state.searchUsername)
      .then((searchUsername) => {
        this.setState({
          searchUsername: this.state.searchUsername,
        });
        console.log("App.js_SearchByUsername: ", searchUsername);
      })
      .catch((e) => {
        console.log(e);
      });
    // }
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

    console.log("App.js_onChangeForm: ", user);
  };

  onChangeSearchUsername = (e) => {
    let searchUsername = e.target.value;

    if (e.target.name === "username") {
      // e.preventDefault();
      this.setState({
        searchUsername: searchUsername,
      });
    }

    console.log("App.js_onChangeSearchUsername: ", searchUsername);
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
              <SearchBoard
                onChangeSearchUsername={this.onChangeSearchUsername}
                searchByUsername={this.searchByUsername}
              ></SearchBoard>
            </div>
          </div>
        </div>
        <div className="container container-lg mt-5">
          <Users users={this.state.users}></Users>
          <UsersBySearch
            searchUsername={this.state.searchUsername}
          ></UsersBySearch>
        </div>
      </div>
    );
  }
}

export default App;
