import React, { Component } from 'react'

export class ClassTimer extends Component {
  interval

  constructor(props) {
    super(props)
  
    this.state = {
       timer: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return { timer: prevState.timer + 1 }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <span>{ this.state.timer }</span>
        <br/>
        <button onClick = {() => clearInterval(this.interval) }>Stop timer</button>
      </div>
    );
  }
}

export default ClassTimer;
