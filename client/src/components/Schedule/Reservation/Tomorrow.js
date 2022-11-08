import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function Tomorrow({ user }) {

  const [ results, setResults ] = useState([]);
  const [ court, setCourt ] = useState([])
  const [ errors, setErrors ] = useState([]);
  const { term } = useParams();

  const courtId = window.location.href.toString().substring(31,33).replace("/","")
  console.log(courtId)

  useEffect(() => {
    fetch(`/pickleballs?q=${courtId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setResults(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }, [courtId])

  useEffect(() => {
    fetch(`/courts/${courtId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setCourt(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }, [courtId])


  const tomorrow = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  
    // FUNCTIONS

    function reserveSpotUser2(event) {
    
      event.preventDefault()
  
      const editedPlayer = {
          "user2_id": user.id
      }
  
      fetch(`/pickleballs/${event.target.value}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPlayer),
      })
      .then(r => r.json())
      .then((data) => {
        window.location.reload()
      })
     
    }
  

  function reserveSpotUser3(event) {

      event.preventDefault()
  
      const editedPlayer = {
        "user3_id": user.id
    }

    console.log(editedPlayer)

    fetch(`/pickleballs/${event.target.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlayer),
    })
    .then(r => r.json())
    .then((data) => {
      window.location.reload()
    })
   
  }

  function reserveSpotUser4(event) {

    event.preventDefault()
  
      const editedPlayer = {
        "user4_id": user.id
    }

    fetch(`/pickleballs/${event.target.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlayer),
    })
    .then(r => r.json())
    .then((data) => {
      window.location.reload()
    })
    
  }
  

  //HOUR 6
  
  const filtered6 = results.filter(result => result.time === 6)


  // DAY 2
      
  const tomorrowfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))
  
  const tomorrowfiltered6Court1 = tomorrowfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const tomorrowfiltered6Court2 = tomorrowfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const tomorrowfiltered6Court3 = tomorrowfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court4 = tomorrowfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court5 = tomorrowfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court6 = tomorrowfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court7 = tomorrowfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court8 = tomorrowfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court9 = tomorrowfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court10 = tomorrowfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)


//HOUR 7

const filtered7 = results.filter(result => result.time === 8)

    // DAY 2 
    const tomorrowfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered7Court1 = tomorrowfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered7Court2 = tomorrowfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered7Court3 = tomorrowfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court4 = tomorrowfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court5 = tomorrowfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court6 = tomorrowfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court7 = tomorrowfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court8 = tomorrowfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court9 = tomorrowfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court10 = tomorrowfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)

// HOUR 8


const filtered8 = results.filter(result => result.time === 8)



      //DAY 2
    
      const tomorrowfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

      const tomorrowfiltered8Court1 = tomorrowfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)
      
      const tomorrowfiltered8Court2 = tomorrowfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)
      
      const tomorrowfiltered8Court3 = tomorrowfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court4 = tomorrowfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court5 = tomorrowfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court6 = tomorrowfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court7 = tomorrowfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court8 = tomorrowfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court9 = tomorrowfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court10 = tomorrowfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)

    


// HOUR 9


const filtered9 = results.filter(result => result.time === 9)




// DAY 2 

const tomorrowfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

const tomorrowfiltered9Court1 = tomorrowfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered9Court2 = tomorrowfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered9Court3 = tomorrowfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court4 = tomorrowfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court5 = tomorrowfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court6 = tomorrowfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court7 = tomorrowfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court8 = tomorrowfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court9 = tomorrowfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court10 = tomorrowfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)


    // HOUR 10


    const filtered10 = results.filter(result => result.time === 10)


      // DAY 2 
    
      const tomorrowfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

      const tomorrowfiltered10Court1 = tomorrowfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)
      
      const tomorrowfiltered10Court2 = tomorrowfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)
      
      const tomorrowfiltered10Court3 = tomorrowfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court4 = tomorrowfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court5 = tomorrowfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court6 = tomorrowfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court7 = tomorrowfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court8 = tomorrowfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court9 = tomorrowfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered10Court10 = tomorrowfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)

      // HOUR 11


    const filtered11 = results.filter(result => result.time === 11)

    // DAY 2 

    const tomorrowfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered11Court1 = tomorrowfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered11Court2 = tomorrowfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered11Court3 = tomorrowfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court4 = tomorrowfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court5 = tomorrowfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court6 = tomorrowfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court7 = tomorrowfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court8 = tomorrowfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court9 = tomorrowfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered11Court10 = tomorrowfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 12


  const filtered12 = results.filter(result => result.time === 12)


    // DAY 2 
  
    const tomorrowfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))
    
    const tomorrowfiltered12Court1 = tomorrowfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered12Court2 = tomorrowfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered12Court3 = tomorrowfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court4 = tomorrowfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court5 = tomorrowfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court6 = tomorrowfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court7 = tomorrowfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court8 = tomorrowfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court9 = tomorrowfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered12Court10 = tomorrowfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)

// HOUR 13


  const filtered13 = results.filter(result => result.time === 13)


    // DAY 2 
  
    const tomorrowfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered13Court1 = tomorrowfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered13Court2 = tomorrowfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered13Court3 = tomorrowfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court4 = tomorrowfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court5 = tomorrowfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court6 = tomorrowfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court7 = tomorrowfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court8 = tomorrowfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court9 = tomorrowfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered13Court10 = tomorrowfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 14


  const filtered14 = results.filter(result => result.time === 14)


    // DAY 2 
  
    const tomorrowfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered14Court1 = tomorrowfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered14Court2 = tomorrowfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered14Court3 = tomorrowfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court4 = tomorrowfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court5 = tomorrowfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court6 = tomorrowfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court7 = tomorrowfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court8 = tomorrowfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court9 = tomorrowfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered14Court10 = tomorrowfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 15


  const filtered15 = results.filter(result => result.time === 15)


    // DAY 2 
  
    const tomorrowfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered15Court1 = tomorrowfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered15Court2 = tomorrowfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered15Court3 = tomorrowfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court4 = tomorrowfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court5 = tomorrowfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court6 = tomorrowfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court7 = tomorrowfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court8 = tomorrowfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court9 = tomorrowfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered15Court10 = tomorrowfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  


// HOUR 16


  const filtered16 = results.filter(result => result.time === 16)


    // DAY 2 
  
    const tomorrowfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered16Court1 = tomorrowfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered16Court2 = tomorrowfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered16Court3 = tomorrowfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court4 = tomorrowfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court5 = tomorrowfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court6 = tomorrowfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court7 = tomorrowfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court8 = tomorrowfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court9 = tomorrowfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered16Court10 = tomorrowfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 17


  const filtered17 = results.filter(result => result.time === 17)

// DAY 2 

    const tomorrowfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered17Court1 = tomorrowfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered17Court2 = tomorrowfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered17Court3 = tomorrowfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court4 = tomorrowfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court5 = tomorrowfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court6 = tomorrowfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court7 = tomorrowfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court8 = tomorrowfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court9 = tomorrowfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered17Court10 = tomorrowfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 18


  const filtered18 = results.filter(result => result.time === 18)

    // DAY 2 
  
    const tomorrowfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered18Court1 = tomorrowfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered18Court2 = tomorrowfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered18Court3 = tomorrowfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court4 = tomorrowfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court5 = tomorrowfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court6 = tomorrowfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court7 = tomorrowfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court8 = tomorrowfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court9 = tomorrowfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered18Court10 = tomorrowfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 19


  const filtered19 = results.filter(result => result.time === 19)

    // DAY 2 
  
    const tomorrowfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered19Court1 = tomorrowfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered19Court2 = tomorrowfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered19Court3 = tomorrowfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court4 = tomorrowfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court5 = tomorrowfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court6 = tomorrowfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court7 = tomorrowfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court8 = tomorrowfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court9 = tomorrowfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered19Court10 = tomorrowfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 20


  const filtered20 = results.filter(result => result.time === 20)


// DAY 2 
  
    const tomorrowfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered20Court1 = tomorrowfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered20Court2 = tomorrowfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered20Court3 = tomorrowfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court4 = tomorrowfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court5 = tomorrowfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court6 = tomorrowfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court7 = tomorrowfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court8 = tomorrowfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court9 = tomorrowfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered20Court10 = tomorrowfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)


// HOUR 21


const filtered21 = results.filter(result => result.time === 21)


// DAY 2 

const tomorrowfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

const tomorrowfiltered21Court1 = tomorrowfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered21Court2 = tomorrowfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered21Court3 = tomorrowfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court4 = tomorrowfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court5 = tomorrowfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court6 = tomorrowfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court7 = tomorrowfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court8 = tomorrowfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court9 = tomorrowfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered21Court10 = tomorrowfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)


  // HOUR 22

  const filtered22 = results.filter(result => result.time === 22)

 
    // DAY 2 
  
    const tomorrowfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

    const tomorrowfiltered22Court1 = tomorrowfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered22Court2 = tomorrowfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered22Court3 = tomorrowfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court4 = tomorrowfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court5 = tomorrowfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court6 = tomorrowfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court7 = tomorrowfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court8 = tomorrowfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court9 = tomorrowfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered22Court10 = tomorrowfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)

const date = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})



const day3 = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 2,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const day4 = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 3,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const day5 = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 4,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const day6 = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 5,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const lastday = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 6,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

console.log(court)
console.log(court.name)
  return (
    <div className={styles.pickleContainer}>
      <h1>{court.name}</h1>
      <div>View other courts:</div>
      <Link to={`/schedule/1/tomorrow`}>Gates Tennis Center</Link>
      <Link to={`/schedule/2/tomorrow`}>Congress Park</Link>
      <Link to={`/schedule/3/tomorrow`}>Huston Lake Park</Link>
      <Link to={`/schedule/4/tomorrow`}>Eisenhower Recreation Center</Link>
      <Link to={`/schedule/5/tomorrow`}>Cook Park Recreation Center</Link>
      <Link to={`/schedule/6/tomorrow`}>Bear Valley Park Pickleball Courts</Link>
      <Link to={`/schedule/7/tomorrow`}>Washington Park Recreation Center</Link>
      <Link to={`/schedule/8/tomorrow`}>Sheridan Recreation Center</Link>
      <Link to={`/schedule/9/tomorrow`}>Meadow Creek Tennis and Fitness Club</Link>
      <Link to={`/schedule/10/tomorrow`}>Johnson Recreation Center</Link>
      <Link to={`/schedule/11/tomorrow`}>Martin Luther King Jr. Recreation Center</Link>
      <Link to={`/schedule/12/tomorrow`}>Apex Pickleball Courts</Link>
      <Link to={`/schedule/13/tomorrow`}>Cornerstone Park</Link>
      <div>View other dates: </div>
      <div>
     
    <Link to={`/schedule/${courtId}/today`}>{format(date, 'eee, MM/dd')}</Link>
    
    <Link to={`/schedule/${courtId}/day3`}>{format(day3, 'eee, MM/dd')}</Link>
    <Link to={`/schedule/${courtId}/day4`}>{format(day4, 'eee, MM/dd')}</Link>
  
    <Link to={`/schedule/${courtId}/day5`}>{format(day5, 'eee, MM/dd')}</Link>
   
    <Link to={`/schedule/${courtId}/day6`}>{format(day6, 'eee, MM/dd')}</Link>
  
    <Link to={`/schedule/${courtId}/day7`}>{format(lastday, 'eee, MM/dd')}</Link>
   
    </div>
      <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRowDays}>
              <th></th>
              <th className={styles.tableHead}>Court 1</th>
              <th className={styles.tableHead}>Court 2</th>
              <th className={styles.tableHead}>Court 3</th>
              <th className={styles.tableHead}>Court 4</th>
              <th className={styles.tableHead}>Court 5</th>
              <th className={styles.tableHead}>Court 6</th>
              <th className={styles.tableHead}>Court 7</th>
              <th className={styles.tableHead}>Court 8</th>
              <th className={styles.tableHead}>Court 9</th>
              <th className={styles.tableHead}>Court 10</th>
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6AM</td>
            
              
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court1.length !== 0 ? tomorrowfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court2.length !== 0 ? tomorrowfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court3.length !== 0 ? tomorrowfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court4.length !== 0 ? tomorrowfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court5.length !== 0 ? tomorrowfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court6.length !== 0 ? tomorrowfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court7.length !== 0 ? tomorrowfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court8.length !== 0 ? tomorrowfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court9.length !== 0 ? tomorrowfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered6Court10.length !== 0 ? tomorrowfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
                
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court1.length !== 0 ? tomorrowfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court2.length !== 0 ? tomorrowfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court3.length !== 0 ? tomorrowfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court4.length !== 0 ? tomorrowfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court5.length !== 0 ? tomorrowfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court6.length !== 0 ? tomorrowfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court7.length !== 0 ? tomorrowfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court8.length !== 0 ? tomorrowfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court9.length !== 0 ? tomorrowfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered7Court10.length !== 0 ? tomorrowfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court1.length !== 0 ? tomorrowfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court2.length !== 0 ? tomorrowfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court3.length !== 0 ? tomorrowfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court4.length !== 0 ? tomorrowfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court5.length !== 0 ? tomorrowfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court6.length !== 0 ? tomorrowfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court7.length !== 0 ? tomorrowfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court8.length !== 0 ? tomorrowfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court9.length !== 0 ? tomorrowfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered8Court10.length !== 0 ? tomorrowfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court1.length !== 0 ? tomorrowfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court2.length !== 0 ? tomorrowfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court3.length !== 0 ? tomorrowfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court4.length !== 0 ? tomorrowfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court5.length !== 0 ? tomorrowfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court6.length !== 0 ? tomorrowfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court7.length !== 0 ? tomorrowfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court8.length !== 0 ? tomorrowfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court9.length !== 0 ? tomorrowfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered9Court10.length !== 0 ? tomorrowfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court1.length !== 0 ? tomorrowfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court2.length !== 0 ? tomorrowfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court3.length !== 0 ? tomorrowfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court4.length !== 0 ? tomorrowfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court5.length !== 0 ? tomorrowfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court6.length !== 0 ? tomorrowfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court7.length !== 0 ? tomorrowfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court8.length !== 0 ? tomorrowfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court9.length !== 0 ? tomorrowfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered10Court10.length !== 0 ? tomorrowfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
                       
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court1.length !== 0 ? tomorrowfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court2.length !== 0 ? tomorrowfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court3.length !== 0 ? tomorrowfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court4.length !== 0 ? tomorrowfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court5.length !== 0 ? tomorrowfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court6.length !== 0 ? tomorrowfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court7.length !== 0 ? tomorrowfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court8.length !== 0 ? tomorrowfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court9.length !== 0 ? tomorrowfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered11Court10.length !== 0 ? tomorrowfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court1.length !== 0 ? tomorrowfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court2.length !== 0 ? tomorrowfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court3.length !== 0 ? tomorrowfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court4.length !== 0 ? tomorrowfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court5.length !== 0 ? tomorrowfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court6.length !== 0 ? tomorrowfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court7.length !== 0 ? tomorrowfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court8.length !== 0 ? tomorrowfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court9.length !== 0 ? tomorrowfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered12Court10.length !== 0 ? tomorrowfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
     
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court1.length !== 0 ? tomorrowfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court2.length !== 0 ? tomorrowfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court3.length !== 0 ? tomorrowfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court4.length !== 0 ? tomorrowfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court5.length !== 0 ? tomorrowfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court6.length !== 0 ? tomorrowfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court7.length !== 0 ? tomorrowfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court8.length !== 0 ? tomorrowfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court9.length !== 0 ? tomorrowfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered13Court10.length !== 0 ? tomorrowfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court1.length !== 0 ? tomorrowfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court2.length !== 0 ? tomorrowfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court3.length !== 0 ? tomorrowfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court4.length !== 0 ? tomorrowfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court5.length !== 0 ? tomorrowfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court6.length !== 0 ? tomorrowfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court7.length !== 0 ? tomorrowfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court8.length !== 0 ? tomorrowfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court9.length !== 0 ? tomorrowfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered14Court10.length !== 0 ? tomorrowfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court1.length !== 0 ? tomorrowfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court2.length !== 0 ? tomorrowfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court3.length !== 0 ? tomorrowfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court4.length !== 0 ? tomorrowfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court5.length !== 0 ? tomorrowfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court6.length !== 0 ? tomorrowfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court7.length !== 0 ? tomorrowfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court8.length !== 0 ? tomorrowfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court9.length !== 0 ? tomorrowfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered15Court10.length !== 0 ? tomorrowfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court1.length !== 0 ? tomorrowfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court2.length !== 0 ? tomorrowfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court3.length !== 0 ? tomorrowfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court4.length !== 0 ? tomorrowfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court5.length !== 0 ? tomorrowfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court6.length !== 0 ? tomorrowfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court7.length !== 0 ? tomorrowfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court8.length !== 0 ? tomorrowfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court9.length !== 0 ? tomorrowfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered16Court10.length !== 0 ? tomorrowfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
                
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court1.length !== 0 ? tomorrowfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court2.length !== 0 ? tomorrowfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court3.length !== 0 ? tomorrowfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court4.length !== 0 ? tomorrowfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court5.length !== 0 ? tomorrowfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court6.length !== 0 ? tomorrowfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court7.length !== 0 ? tomorrowfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court8.length !== 0 ? tomorrowfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court9.length !== 0 ? tomorrowfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered17Court10.length !== 0 ? tomorrowfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court1.length !== 0 ? tomorrowfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court2.length !== 0 ? tomorrowfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court3.length !== 0 ? tomorrowfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court4.length !== 0 ? tomorrowfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court5.length !== 0 ? tomorrowfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court6.length !== 0 ? tomorrowfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court7.length !== 0 ? tomorrowfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court8.length !== 0 ? tomorrowfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court9.length !== 0 ? tomorrowfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered18Court10.length !== 0 ? tomorrowfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
              
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court1.length !== 0 ? tomorrowfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court2.length !== 0 ? tomorrowfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court3.length !== 0 ? tomorrowfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court4.length !== 0 ? tomorrowfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court5.length !== 0 ? tomorrowfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court6.length !== 0 ? tomorrowfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court7.length !== 0 ? tomorrowfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court8.length !== 0 ? tomorrowfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court9.length !== 0 ? tomorrowfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered19Court10.length !== 0 ? tomorrowfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
               
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court1.length !== 0 ? tomorrowfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court2.length !== 0 ? tomorrowfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court3.length !== 0 ? tomorrowfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court4.length !== 0 ? tomorrowfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court5.length !== 0 ? tomorrowfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court6.length !== 0 ? tomorrowfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court7.length !== 0 ? tomorrowfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court8.length !== 0 ? tomorrowfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court9.length !== 0 ? tomorrowfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered20Court10.length !== 0 ? tomorrowfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
          
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court1.length !== 0 ? tomorrowfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court2.length !== 0 ? tomorrowfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court3.length !== 0 ? tomorrowfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court4.length !== 0 ? tomorrowfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court5.length !== 0 ? tomorrowfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court6.length !== 0 ? tomorrowfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court7.length !== 0 ? tomorrowfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court8.length !== 0 ? tomorrowfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court9.length !== 0 ? tomorrowfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered21Court10.length !== 0 ? tomorrowfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court1.length !== 0 ? tomorrowfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court2.length !== 0 ? tomorrowfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court3.length !== 0 ? tomorrowfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court4.length !== 0 ? tomorrowfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court5.length !== 0 ? tomorrowfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court6.length !== 0 ? tomorrowfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court7.length !== 0 ? tomorrowfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court8.length !== 0 ? tomorrowfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court9.length !== 0 ? tomorrowfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{tomorrowfiltered22Court10.length !== 0 ? tomorrowfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
             
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}