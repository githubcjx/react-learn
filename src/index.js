import React from 'react';
import ReactDOM from 'react-dom';
const container = document.getElementById("root");

function render() {
  ReactDOM.render((
    <>
      <div></div>
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
