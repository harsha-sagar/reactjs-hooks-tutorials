import React, { Component } from 'react'

class ClassCounterOne extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      console.log('updating document title');
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input value= {this.state.name} onChange={ this.updateName } />       
        <button onClick={ this.incrementCount }>Count { this.state.count }</button>       
      </div>
    )
  }
}

export default ClassCounterOne
