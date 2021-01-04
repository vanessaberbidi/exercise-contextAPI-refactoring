import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import MyContext from './myContext'

class App extends React.Component {
  constructor() {
    super();
    this.changeSignal = this.changeSignal.bind(this);
    this.state = {
      signal: 'red',
    }
  }

  changeSignal(color) {
    this.setState({
      signal: color
    })
  }
  render() {
    const contextValue = {
      changeSignal: this.changeSignal,
      signal: this.state.signal,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <TrafficSignal />
      </MyContext.Provider>
    );
  }
}

export default App;
