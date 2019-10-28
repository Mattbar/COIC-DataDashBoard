import React, { Component } from 'react';
import BarChart from './barCharts/BarChart'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Data DashBoard</h2>
        </div>
        <div>
          <BarChart data={[5,10,1,3]} size={[500, 500]}/>
        </div>
      </div>
    );
  }
}

export default App;
