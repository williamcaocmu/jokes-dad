import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";

class JokesList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  state = {
    jokes: []
  };

  async componentDidMount() {
    const { numJokesToGet } = this.props;
    let jokes = [];
    let i = 0;
    while (i < numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json"
        }
      });
      let { joke } = res.data;
      jokes = [...jokes, joke];
      i++;
    }

    this.setState({ jokes });
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad </span>Jokes
          </h1>
          <img
            src={
              "https://assets.dryicons.com/uploads/icon/svg/7721/5bbdb7b1-9096-4b76-a8ef-2af8638da7e9.svg"
            }
          ></img>
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map((joke, i) => (
            <div key={i}> {joke}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokesList;
