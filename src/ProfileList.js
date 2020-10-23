import React from 'react';
// js
import Profiles from './Profiles';

// console.log(Profiles)

function ProfileList() { 
  return (
    <section className="card">  
      {Profiles.map((user) => {
        return ( <Profile profile={user} key={user.id}/>)
      })}
    </section>
  )
}

export default ProfileList;
