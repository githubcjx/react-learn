import React from 'react';
import ReactDOM from 'react-dom';
import BallList from './BallList';
const container = document.getElementById("root");

function render() {
  ReactDOM.render((
    <>
      <BallList></BallList>
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
