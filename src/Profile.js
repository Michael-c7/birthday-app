import React from 'react';
// js
import Profiles from './Profiles';

// the individual birthday
export default function Profile(props) {
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