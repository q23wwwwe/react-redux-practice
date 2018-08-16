import React, { Component } from "react";
import store from "./Store";
import * as Action from './Action'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: store.getState()
    };
  }

  onIncrement = () => {
    store.dispatch(Action.increment());
  };

  onDecrement = () => {
    store.dispatch(Action.decrement());
  };

  render() {
    store.subscribe(() =>
      this.setState({
        count: store.getState()
      })
    );

    return (
      <div className="container">
        <h1 className="text-center mt-5">{store.getState()}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={this.onDecrement}>
            Decrease
          </button>
        </p>
      </div>
    );
  }
}