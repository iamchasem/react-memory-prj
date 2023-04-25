import React, { Component } from 'react';

class Prompt extends Component {
  render() {
    const { item, handleAnswer, index } = this.props;
    return(
      <div>
        <p>Remember this letter?</p>
 <div className="d-flex justify-content-around align-items-center">
        <button onClick={(e) => handleAnswer(e, item, index, true )}>Yup!</button>
        
        <button onClick={(e) => handleAnswer(e, item, index, false )}>Nah!</button>
      </div>
      </div>
    );
  }
}

export default Prompt;