import styles from './UserProfile.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function UserProfile({ user }) {

  
  

  const [ profile, setProfile ] = useState([])
  const [pickleballs, setPickleballs] = useState([])
  const [ errors, setErrors ] = useState([])

  
  const profileId = window.location.href.toString().substring(35,38).replace("/","")
  
  useEffect(() => {
    fetch(`/users/${profileId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setProfile(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
    
  }, [profileId])

  useEffect(() => {
    fetch(`/pickleballs/`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setPickleballs(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
    
  }, [])



  const gameCreated = pickleballs.filter(pickle => pickle.user_id === profile.id ).length
  

  const gamePlayed1 = pickleballs.filter(pickle => pickle.user2_id === profile.id ).length
  const gamePlayed2 = pickleballs.filter(pickle => pickle.user3_id === profile.id ).length
  const gamePlayed3 = pickleballs.filter(pickle => pickle.user4_id === profile.id ).length

  const totalGamesPlayed = gameCreated + gamePlayed1 + gamePlayed2 + gamePlayed3

  return (
    <div className={styles.profileContainer}>
      <div key={profile.id} className={styles.post}>
      {profile.avatar ? <img src={profile.avatar} alt={"No image provided"} className={styles.avatar}/>: null } 
      <div className={styles.name}><h2>{profile.first_name} {profile.last_name}</h2></div>
      <div className={styles.contact}><h3>Contact: </h3>
      <h4>phone:</h4> {profile.phone_number} 
      <h4>email:</h4> {profile.username}</div>
      <div className={styles.location}>
       <h3> Located near: </h3>
        {profile.area}
        </div>
      
      
      <div className={styles.skill}>
       <h3> skill level: </h3>
      {profile.skill_level}</div>
      <div className={styles.gamesPlayed}>
        <h3>games played: </h3>
        {`${totalGamesPlayed}`}
        </div>
        <div className={styles.aboutMe}>
      <h3> About me: </h3>
      {profile.bio}
      </div>
      <div className={user !== null && user.id === profile.id ? styles.userNone : styles.buttonDiv }>
          <button className={styles.category} onClick={() => alert("coming soon")}>
            <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1057/1057240.png" alt="connect" />
            <h4 className={styles.h4butFind}>Connect</h4>
          </button>
      </div>
      </div>
      
        
    </div>
  )
}