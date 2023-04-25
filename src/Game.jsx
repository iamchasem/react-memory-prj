import React , { Component } from 'react';
import Prompt from "./Prompt"

const items = [];

for(let i = 65; i < 75; i++) {
  items.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
  })
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(event, item, index, answer) {
    this.props.handleScore(this.state.items[index].displayed === answer);
      const items = this.state.items.map((item) => {
        if (item.displayed) {
          return item;
        } else {
          item.displayed = true;
          return item;
        }
      });
      this.setState({ items });
    }


  randomItemIndx() {
    let rand = Math.floor(Math.random() * items.length);
    return rand;
  }


  render() {
    const { items } = this.state;
    const index = this.randomItemIndx()
    const item = items[index];

    return(
      <main className="d-flex justify-content-around align-items-center">
        <p id={index}>{items[this.randomItemIndx()].content}</p>
       <Prompt item={item} index={index} handleAnswer={this.handleAnswer} />
      </main>
    );
  }
}

export default Game;