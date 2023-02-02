import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div className='ProfileCard'>

      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Mohit Kumar Dubey</span>
        <span>Senior Web Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
        <div className="follow">
            <span>63936</span>
            <span>Followers</span>
        </div>
        <div className="vl"></div>
        <div className="follow">
            <span>1</span>
            <span>Following</span>
        </div>
        </div>
            
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard