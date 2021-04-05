import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList';
const container = document.getElementById("root");
const appkey = "demo13_1545210570249";

async function fetchAllStudents() {
  const stus = await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
    .then(resp => resp.json()).then(resp => resp.data)
  return stus;
}

async function render() {
  ReactDOM.render((
    <>
      正在加载中...
    </>
  ),
    container
  );
  const res = await fetchAllStudents();
  ReactDOM.render((
    <>
      <StudentList student={res}></StudentList>
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
