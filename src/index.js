import React from 'react';
import ReactDOM from 'react-dom';
// css
import './style.css';
// js
import Profiles from './Profiles';
import Profile from './Profile'

// list of birthdays
function ProfileList() {
    const [user, setUser] = React.useState(Profiles);
    const [amountOfUsers, setAmountOfUsers] = React.useState(Profiles.length)
    return (
            <section className="profile">
                <h1 className="profile__header">{amountOfUsers} birthdays today</h1>
                {user.map((profile) => {
                    return(<Profile key={profile.id} profile={profile}></Profile>)
                })}
                <button className="clear-btn" onClick={() => {
                    setUser([]);
                    setAmountOfUsers(0);
                }}>Clear All</button>
            </section>
    );
  }



// render
ReactDOM.render(<ProfileList/>, document.getElementById("root"));
