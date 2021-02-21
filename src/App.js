import React, { Component } from "react";
import Cell from "./Component/Cell";

class App extends Component {
  state = {
    selected: [],
  };

  clickHandler = (id) => {
    const updated = this.state.selected;
    if (this.state.selected.length === 2) updated.shift();
    updated.push(+id);
    this.setState({ selected: updated });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Cell id="1" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="2" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="3" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="4" clicked={this.clickHandler} selected={this.state.selected} />
        </div>
        <div className="row">
          <Cell id="5" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="6" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="7" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="8" clicked={this.clickHandler} selected={this.state.selected} />
        </div>
        <div className="row">
          <Cell id="9" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="10" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="11" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="12" clicked={this.clickHandler} selected={this.state.selected} />
        </div>
        <div className="row">
          <Cell id="13" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="14" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="15" clicked={this.clickHandler} selected={this.state.selected} />
          <Cell id="16" clicked={this.clickHandler} selected={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default App;
