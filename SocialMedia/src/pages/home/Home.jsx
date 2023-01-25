import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <div className="postSection">post</div>
      <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home
