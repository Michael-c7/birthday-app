import React from 'react';
import ReactDOM from 'react-dom';
// css
import './style.css';
// module
import Profile from './Profile';
import Profiles from './Profiles';

ReactDOM.render(
  <React.StrictMode>
    <section className="card">
      <h1 className="heading">{Profiles.length} birthdays today</h1>
      <Profile key={Profiles.id} />
      <button className="btn">Clear All</button>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
