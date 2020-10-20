import React from 'react';
import Profiles from './Profiles'
function Profile() {
  return (
    <div className="profile">
      <img className="profile__img" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt=""/>
      <div className="profile__info">
        <h3 className="profile__name">First Last</h3>
        <p className="profile__age">44 years</p>  
      </div> 
    </div>
  );
}

export default Profile;
