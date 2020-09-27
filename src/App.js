import React from "react";
import { Button } from 'antd';
import "App.css";

const actions = {
  init(initialValue) {
    return { value: initialValue }
  },
  increment(prevState) {
    return { value: prevState.value + 1 }
  },
  decrement(prevState) {
    return { value: prevState.value - 1 }
  }
};

class Counter1 extends React.Component {
  state = actions.init(this.props.initialValue);

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter1: {value}
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.decrement)}>-1</Button>
      </div>
    );
  }
}

class FruitComponent extends React.Component {
  render () {
    return (
      <div>
        <h1>fruits</h1>
        <ul>
          {
            this.props.fruits.map((name, index) => (
              <li key={index}>{name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function App() {
  const fruits = ["apple", "mango", "pineapple"];
  return (
    <div>
      <Counter1 initialValue={10} />
      <FruitComponent fruits={fruits} />
    </div>
  );
}

export default App;
