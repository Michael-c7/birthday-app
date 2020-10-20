import React from 'react';
import ReactDOM from 'react-dom';
// css
import './style.css';
// module
import Profile from './Profile';

ReactDOM.render(
  <React.StrictMode>
    <section className="card">
      <h1 className="heading">5 birthdays today</h1>
      <Profile />
      <Profile /> 
      <button className="btn">Clear All</button>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
