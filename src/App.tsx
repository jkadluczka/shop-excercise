import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
<ReactCSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <ShopB/>
        </ReactCSSTransitionGroup>    </div>
  );
}

export default App;
