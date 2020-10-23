import React from 'react';
import ReactDOM from 'react-dom';
// css
import './style.css';
import Profiles from './Profiles';

// list of birthdays
function ProfileList() {
    return (
            <section className="profile">
                <h1 className="profile__header">{Profiles.length} birthdays today</h1>
                {Profiles.map((profile) => {
                    return(<Profile key={profile.id} profile={profile}></Profile>)
                })}
                <button className="clear-btn">Clear All</button>
            </section>
    );
}

// the individual birthday
function Profile(props) {
    const {img, name, age} = props.profile;
    return (
        <article className="profile__card">
            <img className="profile__img" src={img} alt=""/>
            <div className="profile__info">
                <h3 className="profile__name">{name}</h3>
                <h4 className="profile__age">{age} years</h4>
            </div>
        </article>
    )
}


ReactDOM.render(<ProfileList/>, document.getElementById("root"));