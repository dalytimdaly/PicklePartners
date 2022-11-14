import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function FifthDay({user}) {


  const [ results, setResults ] = useState([]);
  const [ court, setCourt ] = useState([])
  const [ errors, setErrors ] = useState([]);
  const { term } = useParams();

  const navigate = useNavigate()
  const courtId = window.location.href.toString().substring(31,33).replace("/","")

  useEffect(() => {
    if(user !== null) {
    fetch(`/pickleballs?q=${courtId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setResults(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }
  }, [courtId])

  useEffect(() => {
    if(user !== null) {
    fetch(`/courts/${courtId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setCourt(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }
  }, [courtId])
 

  const day5 = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 4,
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
      .then(
        navigate('/account')
      )
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
    .then(
      navigate('/account')
    )
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
      .then(
        navigate('/account')
      )
    }
  

  // HOUR 6  


  const filtered6 = results.filter(result => result.time === 6)


  // DAY 5
    
  const fifthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

  const fifthDayfiltered6Court1 = fifthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)

  const fifthDayfiltered6Court2 = fifthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)

const fifthDayfiltered6Court3 = fifthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court4 = fifthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court5 = fifthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court6 = fifthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court7 = fifthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court8 = fifthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court9 = fifthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered6Court10 = fifthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

//HOUR 7

const filtered7 = results.filter(result => result.time === 8)


      //DAY 5
    
      const fifthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

      const fifthDayfiltered7Court1 = fifthDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
        </div>)

      const fifthDayfiltered7Court2 = fifthDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
        </div>)

const fifthDayfiltered7Court3 = fifthDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court4 = fifthDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court5 = fifthDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court6 = fifthDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court7 = fifthDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court8 = fifthDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court9 = fifthDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered7Court10 = fifthDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

  // HOUR 8


  const filtered8 = results.filter(result => result.time === 8)


  
    
//DAY 5

const fifthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

const fifthDayfiltered8Court1 = fifthDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered8Court2 = fifthDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered8Court3 = fifthDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court4 = fifthDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court5 = fifthDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court6 = fifthDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court7 = fifthDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court8 = fifthDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court9 = fifthDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered8Court10 = fifthDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)


    

// HOUR 9


const filtered9 = results.filter(result => result.time === 9)


        //DAY 5
    
        const fifthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

        const fifthDayfiltered9Court1 = fifthDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
          </div>)
  
        const fifthDayfiltered9Court2 = fifthDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
          </div>)
  
  const fifthDayfiltered9Court3 = fifthDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court4 = fifthDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court5 = fifthDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court6 = fifthDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court7 = fifthDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court8 = fifthDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court9 = fifthDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  
  const fifthDayfiltered9Court10 = fifthDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
    </div>)
  

    // HOUR 10


    const filtered10 = results.filter(result => result.time === 10)



            
    //DAY 5
    
    const fifthDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

    const fifthDayfiltered10Court1 = fifthDayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered10Court2 = fifthDayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered10Court3 = fifthDayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court4 = fifthDayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court5 = fifthDayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court6 = fifthDayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court7 = fifthDayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court8 = fifthDayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court9 = fifthDayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered10Court10 = fifthDayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)



// HOUR 11


const filtered11 = results.filter(result => result.time === 11)


    //DAY 5
    
    const fifthDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
    
    const fifthDayfiltered11Court1 = fifthDayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered11Court2 = fifthDayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered11Court3 = fifthDayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court4 = fifthDayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court5 = fifthDayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court6 = fifthDayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court7 = fifthDayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court8 = fifthDayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court9 = fifthDayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered11Court10 = fifthDayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)
      

// HOUR 12


  const filtered12 = results.filter(result => result.time === 12)

    
  //DAY 5
  
    const fifthDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
  
    const fifthDayfiltered12Court1 = fifthDayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered12Court2 = fifthDayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered12Court3 = fifthDayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court4 = fifthDayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court5 = fifthDayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court6 = fifthDayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court7 = fifthDayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court8 = fifthDayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court9 = fifthDayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered12Court10 = fifthDayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)


// HOUR 13


  const filtered13 = results.filter(result => result.time === 13)
    
  //DAY 5
  
    const fifthDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
  
    const fifthDayfiltered13Court1 = fifthDayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered13Court2 = fifthDayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered13Court3 = fifthDayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court4 = fifthDayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court5 = fifthDayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court6 = fifthDayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court7 = fifthDayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court8 = fifthDayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court9 = fifthDayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered13Court10 = fifthDayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)


// HOUR 14


  const filtered14 = results.filter(result => result.time === 14)


        
  //DAY 5


    const fifthDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
  
    const fifthDayfiltered14Court1 = fifthDayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered14Court2 = fifthDayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered14Court3 = fifthDayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court4 = fifthDayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court5 = fifthDayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court6 = fifthDayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court7 = fifthDayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court8 = fifthDayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court9 = fifthDayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered14Court10 = fifthDayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)



// HOUR 15


  const filtered15 = results.filter(result => result.time === 15)

          
  //DAY 5
  
    const fifthDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
  
    const fifthDayfiltered15Court1 = fifthDayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered15Court2 = fifthDayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered15Court3 = fifthDayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court4 = fifthDayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court5 = fifthDayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court6 = fifthDayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court7 = fifthDayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court8 = fifthDayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court9 = fifthDayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered15Court10 = fifthDayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)


// HOUR 16


  const filtered16 = results.filter(result => result.time === 16)


          
  //DAY 5
  
    const fifthDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

    const fifthDayfiltered16Court1 = fifthDayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered16Court2 = fifthDayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered16Court3 = fifthDayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court4 = fifthDayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court5 = fifthDayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court6 = fifthDayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court7 = fifthDayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court8 = fifthDayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court9 = fifthDayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered16Court10 = fifthDayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)




// HOUR 17


  const filtered17 = results.filter(result => result.time === 17)




    
  //DAY 5
  
    const fifthDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

    const fifthDayfiltered17Court1 = fifthDayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered17Court2 = fifthDayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered17Court3 = fifthDayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court4 = fifthDayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court5 = fifthDayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court6 = fifthDayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court7 = fifthDayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court8 = fifthDayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court9 = fifthDayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered17Court10 = fifthDayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)
    
 

// HOUR 18


  const filtered18 = results.filter(result => result.time === 18)

    
  //DAY 5
  
    const fifthDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
  
    const fifthDayfiltered18Court1 = fifthDayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered18Court2 = fifthDayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered18Court3 = fifthDayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court4 = fifthDayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court5 = fifthDayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court6 = fifthDayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court7 = fifthDayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court8 = fifthDayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court9 = fifthDayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered18Court10 = fifthDayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

 
// HOUR 19


  const filtered19 = results.filter(result => result.time === 19)

          
  //DAY 5
  
    const fifthDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

    const fifthDayfiltered19Court1 = fifthDayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered19Court2 = fifthDayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered19Court3 = fifthDayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court4 = fifthDayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court5 = fifthDayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court6 = fifthDayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court7 = fifthDayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court8 = fifthDayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court9 = fifthDayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered19Court10 = fifthDayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

 
// HOUR 20


  const filtered20 = results.filter(result => result.time === 20)




        
  //DAY 5


    const fifthDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))
  
    const fifthDayfiltered20Court1 = fifthDayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered20Court2 = fifthDayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered20Court3 = fifthDayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court4 = fifthDayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court5 = fifthDayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court6 = fifthDayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court7 = fifthDayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court8 = fifthDayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court9 = fifthDayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered20Court10 = fifthDayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)


// HOUR 21


const filtered21 = results.filter(result => result.time === 21)


      
  //DAY 5

const fifthDayfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

const fifthDayfiltered21Court1 = fifthDayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered21Court2 = fifthDayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
  </div>)

const fifthDayfiltered21Court3 = fifthDayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court4 = fifthDayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court5 = fifthDayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court6 = fifthDayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court7 = fifthDayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court8 = fifthDayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court9 = fifthDayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered21Court10 = fifthDayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)



  // HOUR 22

  const filtered22 = results.filter(result => result.time === 22)


      
  //DAY 5
  
    const fifthDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

    const fifthDayfiltered22Court1 = fifthDayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

    const fifthDayfiltered22Court2 = fifthDayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
      </div>)

const fifthDayfiltered22Court3 = fifthDayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court4 = fifthDayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court5 = fifthDayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court6 = fifthDayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court7 = fifthDayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court8 = fifthDayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court9 = fifthDayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
</div>)

const fifthDayfiltered22Court10 = fifthDayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p></p>
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

const tomorrow = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 1,
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


const [change, setChange] = useState(`/schedule/1/day5`)

function handleSubmit(e) {
  e.preventDefault()
  console.log(change)
  navigate(change)
}

const [changeDate, setChangeDate] = useState(`/schedule/${courtId}/today`)

function handleSubmitDate(e) {
  e.preventDefault()
  console.log(changeDate)
  navigate(changeDate)
}

  return (
    <div className={styles.pickleContainer}>
      <h1>{court.name}</h1>
      <h4>{format(day5, 'eee, MM/dd')}</h4>
      <div>View other courts:</div>
      <form onSubmit={handleSubmit}>
      <select onChange={(e) => setChange(e.target.value)}>
      <option value={`/schedule/1/day5`}>Gates Tennis Center</option>
      <option value={`/schedule/2/day5`}>Congress Park</option>
      <option value={`/schedule/3/day5`}>Huston Lake Park</option>
      <option value={`/schedule/4/day5`}>Eisenhower Recreation Center</option>
      <option value={`/schedule/5/day5`}>Cook Park Recreation Center</option>
      <option value={`/schedule/6/day5`}>Bear Valley Park Pickleball Courts</option>
      <option value={`/schedule/7/day5`}>Washington Park Recreation Center</option>
      <option value={`/schedule/8/day5`}>Sheridan Recreation Center</option>
      <option value={`/schedule/9/day5`}>Meadow Creek Tennis and Fitness Club</option>
      <option value={`/schedule/10/day5`}>Johnson Recreation Center</option>
      <option value={`/schedule/11/day5`}>>Martin Luther King Jr. Recreation Center</option>
      <option value={`/schedule/12/day5`}>Apex Pickleball Courts</option>
      <option value={`/schedule/13/day5`}>Cornerstone Park</option>
      </select>
      <button type="submit">Go</button>
      </form>
      <div>View other dates: </div>
      <form onSubmit={handleSubmitDate}> 
      <select onChange={(e) => setChangeDate(e.target.value)}>
      <option value={`/schedule/${courtId}/today`}>{format(date, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/tomorrow`}>{format(tomorrow, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day3`}>{format(day3, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day4`}>{format(day4, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day6`}>{format(day6, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day7`}>{format(lastday, 'eee, MM/dd')}</option>
      </select>
      <button type="submit">Go</button>
     </form>
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
            
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court1.length !== 0 ? fifthDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court2.length !== 0 ? fifthDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court3.length !== 0 ? fifthDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court4.length !== 0 ? fifthDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court5.length !== 0 ? fifthDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court6.length !== 0 ? fifthDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court7.length !== 0 ? fifthDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court8.length !== 0 ? fifthDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court9.length !== 0 ? fifthDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered6Court10.length !== 0 ? fifthDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
             
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court1.length !== 0 ? fifthDayfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court2.length !== 0 ? fifthDayfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court3.length !== 0 ? fifthDayfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court4.length !== 0 ? fifthDayfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court5.length !== 0 ? fifthDayfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court6.length !== 0 ? fifthDayfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court7.length !== 0 ? fifthDayfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court8.length !== 0 ? fifthDayfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court9.length !== 0 ? fifthDayfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered7Court10.length !== 0 ? fifthDayfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
  
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court1.length !== 0 ? fifthDayfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court2.length !== 0 ? fifthDayfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court3.length !== 0 ? fifthDayfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court4.length !== 0 ? fifthDayfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court5.length !== 0 ? fifthDayfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court6.length !== 0 ? fifthDayfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court7.length !== 0 ? fifthDayfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court8.length !== 0 ? fifthDayfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court9.length !== 0 ? fifthDayfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered8Court10.length !== 0 ? fifthDayfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              
          
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court1.length !== 0 ? fifthDayfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court2.length !== 0 ? fifthDayfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court3.length !== 0 ? fifthDayfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court4.length !== 0 ? fifthDayfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court5.length !== 0 ? fifthDayfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court6.length !== 0 ? fifthDayfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court7.length !== 0 ? fifthDayfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court8.length !== 0 ? fifthDayfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court9.length !== 0 ? fifthDayfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered9Court10.length !== 0 ? fifthDayfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
       
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court1.length !== 0 ? fifthDayfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court2.length !== 0 ? fifthDayfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court3.length !== 0 ? fifthDayfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court4.length !== 0 ? fifthDayfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court5.length !== 0 ? fifthDayfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court6.length !== 0 ? fifthDayfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court7.length !== 0 ? fifthDayfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court8.length !== 0 ? fifthDayfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court9.length !== 0 ? fifthDayfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered10Court10.length !== 0 ? fifthDayfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court1.length !== 0 ? fifthDayfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court2.length !== 0 ? fifthDayfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court3.length !== 0 ? fifthDayfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court4.length !== 0 ? fifthDayfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court5.length !== 0 ? fifthDayfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court6.length !== 0 ? fifthDayfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court7.length !== 0 ? fifthDayfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court8.length !== 0 ? fifthDayfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court9.length !== 0 ? fifthDayfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered11Court10.length !== 0 ? fifthDayfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court1.length !== 0 ? fifthDayfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court2.length !== 0 ? fifthDayfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court3.length !== 0 ? fifthDayfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court4.length !== 0 ? fifthDayfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court5.length !== 0 ? fifthDayfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court6.length !== 0 ? fifthDayfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court7.length !== 0 ? fifthDayfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court8.length !== 0 ? fifthDayfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court9.length !== 0 ? fifthDayfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered12Court10.length !== 0 ? fifthDayfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              
      
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court1.length !== 0 ? fifthDayfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court2.length !== 0 ? fifthDayfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court3.length !== 0 ? fifthDayfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court4.length !== 0 ? fifthDayfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court5.length !== 0 ? fifthDayfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court6.length !== 0 ? fifthDayfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court7.length !== 0 ? fifthDayfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court8.length !== 0 ? fifthDayfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court9.length !== 0 ? fifthDayfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered13Court10.length !== 0 ? fifthDayfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>

                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court1.length !== 0 ? fifthDayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court2.length !== 0 ? fifthDayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court3.length !== 0 ? fifthDayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court4.length !== 0 ? fifthDayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court5.length !== 0 ? fifthDayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court6.length !== 0 ? fifthDayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court7.length !== 0 ? fifthDayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court8.length !== 0 ? fifthDayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court9.length !== 0 ? fifthDayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered14Court10.length !== 0 ? fifthDayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court1.length !== 0 ? fifthDayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court2.length !== 0 ? fifthDayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court3.length !== 0 ? fifthDayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court4.length !== 0 ? fifthDayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court5.length !== 0 ? fifthDayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court6.length !== 0 ? fifthDayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court7.length !== 0 ? fifthDayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court8.length !== 0 ? fifthDayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court9.length !== 0 ? fifthDayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered15Court10.length !== 0 ? fifthDayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court1.length !== 0 ? fifthDayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court2.length !== 0 ? fifthDayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court3.length !== 0 ? fifthDayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court4.length !== 0 ? fifthDayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court5.length !== 0 ? fifthDayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court6.length !== 0 ? fifthDayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court7.length !== 0 ? fifthDayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court8.length !== 0 ? fifthDayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court9.length !== 0 ? fifthDayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered16Court10.length !== 0 ? fifthDayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court1.length !== 0 ? fifthDayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court2.length !== 0 ? fifthDayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court3.length !== 0 ? fifthDayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court4.length !== 0 ? fifthDayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court5.length !== 0 ? fifthDayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court6.length !== 0 ? fifthDayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court7.length !== 0 ? fifthDayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court8.length !== 0 ? fifthDayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court9.length !== 0 ? fifthDayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered17Court10.length !== 0 ? fifthDayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
  
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
      
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court1.length !== 0 ? fifthDayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court2.length !== 0 ? fifthDayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court3.length !== 0 ? fifthDayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court4.length !== 0 ? fifthDayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court5.length !== 0 ? fifthDayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court6.length !== 0 ? fifthDayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court7.length !== 0 ? fifthDayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court8.length !== 0 ? fifthDayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court9.length !== 0 ? fifthDayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered18Court10.length !== 0 ? fifthDayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court1.length !== 0 ? fifthDayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court2.length !== 0 ? fifthDayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court3.length !== 0 ? fifthDayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court4.length !== 0 ? fifthDayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court5.length !== 0 ? fifthDayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court6.length !== 0 ? fifthDayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court7.length !== 0 ? fifthDayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court8.length !== 0 ? fifthDayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court9.length !== 0 ? fifthDayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered19Court10.length !== 0 ? fifthDayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court1.length !== 0 ? fifthDayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court2.length !== 0 ? fifthDayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court3.length !== 0 ? fifthDayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court4.length !== 0 ? fifthDayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court5.length !== 0 ? fifthDayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court6.length !== 0 ? fifthDayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court7.length !== 0 ? fifthDayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court8.length !== 0 ? fifthDayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court9.length !== 0 ? fifthDayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered20Court10.length !== 0 ? fifthDayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court1.length !== 0 ? fifthDayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court2.length !== 0 ? fifthDayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court3.length !== 0 ? fifthDayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court4.length !== 0 ? fifthDayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court5.length !== 0 ? fifthDayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court6.length !== 0 ? fifthDayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court7.length !== 0 ? fifthDayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court8.length !== 0 ? fifthDayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court9.length !== 0 ? fifthDayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered21Court10.length !== 0 ? fifthDayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>

             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
        
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court1.length !== 0 ? fifthDayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court2.length !== 0 ? fifthDayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court3.length !== 0 ? fifthDayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court4.length !== 0 ? fifthDayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court5.length !== 0 ? fifthDayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court6.length !== 0 ? fifthDayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court7.length !== 0 ? fifthDayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court8.length !== 0 ? fifthDayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court9.length !== 0 ? fifthDayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fifthDayfiltered22Court10.length !== 0 ? fifthDayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}