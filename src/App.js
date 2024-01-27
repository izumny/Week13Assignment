//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
       // </a>
      //</header>
    //</div>
  //);
//}

import React from 'react' //import variable from the location
import './App.css'
import Navigation from './Nav'
import LoginForm from './LoginForm'

function App() {        //functional component
  return(
    <div className='App'>
      <Navigation/>
      <LoginForm/>
    </div>
  );
}

export default App;
