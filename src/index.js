import React from 'react';
import ReactDOM from 'react-dom';
import Tick from './components/Tick';
const container = document.getElementById("root");

async function render() {
  ReactDOM.render((
    <>
      <Tick />
    </>
  ),
    container
  );
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
