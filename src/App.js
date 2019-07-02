import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  contsructor(props) {
    this.state = {
      friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      friend: ""
    };
  }
  changeHandler(event) {
    this.setState({
      friend: event
    });
  }

  addFriend() {
    this.state.friendsList.push(this.state.friend);
  }

  deleteFriend(index) {
    this.state.friendsList.splice(index, 1);
  }

  render() {
    const mappedFreinds = this.state.friendsList.map((friend, index) => {
      <div key={index}>
        <span>{friend}</span>
        <button onClick={this.state.deleteFriend} />
      </div>;
    });
    return (
      <div className="App">
        <div>{mappedFreinds}</div>
        <input
          type="number"
          onChange={this.changeHandler}
          value={this.state.friend}
        />
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}

export default App;
