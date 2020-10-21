import React from 'react';
// js
import Profiles from './Profiles';

// console.log(Profiles)

function Profile() { 
  return (
    <div className="profile">
      {Profiles.map((user) => {
        const { img, name, age} = user;
        return (<>
          <img className="profile__img" src={img} alt=""/>
          <div className="profile__info">
            <h3 className="profile__name">{name}</h3>
            <p className="profile__age">{age} years</p>  
          </div>
        </>);
      })}

    </div>
  );
}

export default Profile;
