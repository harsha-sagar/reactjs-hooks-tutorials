import React, { Component } from 'react'

class ClassMouse extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       x: 0,
       y: 0
    };
  }

  logMousePosition = (e) => {
    console.log('logging mouse position');
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  componentDidMount() {
    console.log('inside componentDidMount');
    window.addEventListener('mousemove', this.logMousePosition);
  }

  render() {
    return (
      <div>
        x: { this.state.x }
        <hr/>
        y: { this.state.y }       
      </div>
    );
  }
}

export default ClassMouse