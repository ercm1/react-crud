import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Contact from './Contact';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <div>
        {/*<button onClick={() => {this.setState({name: 'Velopert'});}}>Click Me</button>
        <h1>Hello@!!! {this.state.name}</h1>*/}
        <Contact/>
      </div>
    );
  }
}

export default App;
