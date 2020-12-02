import { Component } from 'react';
import './App.css';
import Box from './component/box/box.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <Box />
        <h1>By Shivansh Sen</h1>
      </div>
    );
  }
}

export default App;
