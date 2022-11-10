import styles from './UserProfile.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function UserProfile({ user }) {

  
  

  const [ profile, setProfile ] = useState([])
  const [pickleballs, setPickleballs] = useState([])
  const [ errors, setErrors ] = useState([])

  
  const profileId = window.location.href.toString().substring(35,38).replace("/","")
  console.log(profileId)
 
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

  console.log(profile)

  const gameCreated = pickleballs.filter(pickle => pickle.user_id === profile.id ).length
  

  const gamePlayed1 = pickleballs.filter(pickle => pickle.user2_id === profile.id ).length
  const gamePlayed2 = pickleballs.filter(pickle => pickle.user3_id === profile.id ).length
  const gamePlayed3 = pickleballs.filter(pickle => pickle.user4_id === profile.id ).length

  const totalGamesPlayed = gameCreated + gamePlayed1 + gamePlayed2 + gamePlayed3

  

  return (
    <div>
      <div key={profile.id} className={styles.post}> 
      <div>{profile.first_name} {profile.last_name}</div>
      <div>Located near: {profile.area}</div>
      <div>About me: {profile.bio}</div>
      <div>Contact: phone: {profile.phone_number} email: {profile.username}</div>
      <div>skill level: {profile.skill_level}</div>
      <div>{`games played: ${totalGamesPlayed}`}</div>
      <img src={profile.avatar} />
      </div>

        
    </div>
  )
}