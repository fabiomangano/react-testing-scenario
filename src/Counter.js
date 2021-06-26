import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `Hai cliccato ${this.state.count} volte`;
  }
  componentDidUpdate() {
    document.title = `Hai cliccato ${this.state.count} volte`;
  }
  handleClick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>Hai cliccato {this.state.count} volte</p>
        <button onClick={this.handleClick}>Cliccami</button>
      </div>
    );
  }
}

export default Counter;
