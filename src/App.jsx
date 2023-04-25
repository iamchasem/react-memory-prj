import { Component } from "react";
import "./App.css";
import Header from "./Header";
import Game from "./Game";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      highScore: 0,
    };
    this.handleScore = this.handleScore.bind(this);
  }


  handleScore(incriment) {
    if(incriment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
    } else {
      this.setState({
        currentScore: 0,
      });
    }
  }


  render() {
    const { currentScore } = this.state;
    return(
      <div className="App">
        <Header currentScore={currentScore}  />
        <Game handleScore={this.handleScore} />
      </div>
    );
  }
}

export default App;
