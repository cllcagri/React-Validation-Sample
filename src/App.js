import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    inputText: ""
  };

  inputChangeHandler = event => {
    this.setState({ inputText: event.target.value });
  };

  deleteCharHandler = index => {
    const text = this.state.inputText.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ inputText: updatedText });
  };

  render() {
    const charList = this.state.inputText.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Welcome to Validation React App Sample</h1>
        <p>
          <input
            className="deneme"
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.inputText}
          />
        </p>
        <p>
          <b>{this.state.inputText}</b>
        </p>
        <Validation inputLength={this.state.inputText.length} />
        {charList}
      </div>
    );
  }
}

export default App;
