import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" lat="logo"alt="logo" />
          <div className="gray-background">
            <h1>Hello React Project</h1>
            <h2>Let's develope management system</h2>
          </div>
        </header>
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer" >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


