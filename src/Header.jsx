import React, { Component } from 'react';
import "./App.css";

class Header extends Component {
  render() {
    const { currentScore } = this.props; 
    return(
      <header className='App-header'>
        <h1>Memory Game Project</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div>
          <p>Current Score</p>
          <p>{currentScore}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;