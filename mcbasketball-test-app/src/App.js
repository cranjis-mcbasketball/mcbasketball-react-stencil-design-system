import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HelloWorld, HelloUranus } from 'mcbasketball-react';

/* Core CSS required for Ionic components to work properly */
import 'mcbasketball-react/css/core.css';

/* Basic CSS for apps built with Ionic */
import 'mcbasketball-react/css/normalize.css';
import 'mcbasketball-react/css/structure.css';
import 'mcbasketball-react/css/typography.css';

/* Optional CSS utils that can be commented out */
import 'mcbasketball-react/css/padding.css';
import 'mcbasketball-react/css/text-alignment.css';
import 'mcbasketball-react/css/text-transformation.css';
import 'mcbasketball-react/css/flex-utils.css';
import 'mcbasketball-react/css/display.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          (Please make this <code>"App"</code> more exciting than this. These components are whack, and by "whack" I mean "super lame".)
        </p>
        <HelloWorld first="Uranus" middle="'Jeremiah'" last="McBasketball" />
        <br></br>
        <HelloUranus first="World" middle="'Don't Call Me Earth'" last="Mister T" />
        <br>
        </br>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to "learn" more about "imaginary" planets
        </a>
      </header>
    </div>
  );
}

export default App;