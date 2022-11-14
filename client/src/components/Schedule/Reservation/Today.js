import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { add, format } from 'date-fns'


export default function Today({user}) {

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

  console.log(user)
 

  const date = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
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


//DAY 1


    const todayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered6Court1 = todayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button  onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const todayfiltered6Court2 = todayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const todayfiltered6Court3 = todayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court4 = todayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court5 = todayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court6 = todayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court7 = todayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court8 = todayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court9 = todayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered6Court10 = todayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 7


const filtered7 = results.filter(result => result.time === 7)

// DAY 1
    const todayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered7Court1 = todayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const todayfiltered7Court2 = todayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const todayfiltered7Court3 = todayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court4 = todayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court5 = todayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court6 = todayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court7 = todayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court8 = todayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court9 = todayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered7Court10 = todayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 8


const filtered8 = results.filter(result => result.time === 8)

//DAY 1


const todayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered8Court1 = todayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered8Court2 = todayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered8Court3 = todayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court4 = todayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court5 = todayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court6 = todayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court7 = todayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court8 = todayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court9 = todayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered8Court10 = todayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

//HOUR 9

const filtered9 = results.filter(result => result.time === 9)


const todayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered9Court1 = todayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered9Court2 = todayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered9Court3 = todayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court4 = todayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court5 = todayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court6 = todayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court7 = todayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court8 = todayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court9 = todayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered9Court10 = todayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

//HOUR 10

const filtered10 = results.filter(result => result.time === 10)

const todayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered10Court1 = todayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const todayfiltered10Court2 = todayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const todayfiltered10Court3 = todayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court4 = todayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court5 = todayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court6 = todayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court7 = todayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court8 = todayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court9 = todayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered10Court10 = todayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

//HOUR 11

const filtered11 = results.filter(result => result.time === 11)

    //DAY 1


    const todayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered11Court1 = todayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const todayfiltered11Court2 = todayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const todayfiltered11Court3 = todayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court4 = todayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court5 = todayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court6 = todayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court7 = todayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court8 = todayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court9 = todayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered11Court10 = todayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

// HOUR 12


const filtered12 = results.filter(result => result.time === 12)

//DAY 1

const todayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered12Court1 = todayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered12Court2 = todayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered12Court3 = todayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court4 = todayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court5 = todayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court6 = todayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court7 = todayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court8 = todayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court9 = todayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered12Court10 = todayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 13


const filtered13 = results.filter(result => result.time === 13)

//DAY 1


const todayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered13Court1 = todayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered13Court2 = todayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered13Court3 = todayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court4 = todayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court5 = todayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court6 = todayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court7 = todayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court8 = todayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court9 = todayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered13Court10 = todayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

// HOUR 14


const filtered14 = results.filter(result => result.time === 14)

//DAY 1

const todayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))


  const todayfiltered14Court1 = todayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
    </div>)

  const todayfiltered14Court2 = todayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
    </div>)

const todayfiltered14Court3 = todayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court4 = todayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court5 = todayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court6 = todayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court7 = todayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court8 = todayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court9 = todayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered14Court10 = todayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 15


const filtered15 = results.filter(result => result.time === 15)

//DAY 1

const todayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered15Court1 = todayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered15Court2 = todayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered15Court3 = todayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court4 = todayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court5 = todayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court6 = todayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court7 = todayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court8 = todayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court9 = todayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered15Court10 = todayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 16


const filtered16 = results.filter(result => result.time === 16)

//DAY 1


const todayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered16Court1 = todayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered16Court2 = todayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered16Court3 = todayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court4 = todayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court5 = todayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court6 = todayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court7 = todayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court8 = todayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court9 = todayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered16Court10 = todayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 17


const filtered17 = results.filter(result => result.time === 17)

//DAY 1

const todayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))


const todayfiltered17Court1 = todayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered17Court2 = todayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered17Court3 = todayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court4 = todayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court5 = todayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court6 = todayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court7 = todayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court8 = todayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court9 = todayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered17Court10 = todayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

// HOUR 18


const filtered18 = results.filter(result => result.time === 18)

//DAY 1


const todayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered18Court1 = todayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered18Court2 = todayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered18Court3 = todayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court4 = todayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court5 = todayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court6 = todayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court7 = todayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court8 = todayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court9 = todayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered18Court10 = todayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 19


const filtered19 = results.filter(result => result.time === 19)

//DAY 1

const todayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered19Court1 = todayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered19Court2 = todayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered19Court3 = todayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court4 = todayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court5 = todayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court6 = todayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court7 = todayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court8 = todayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court9 = todayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered19Court10 = todayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 20


const filtered20 = results.filter(result => result.time === 20)


//DAY 1

const todayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered20Court1 = todayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered20Court2 = todayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered20Court3 = todayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court4 = todayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court5 = todayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court6 = todayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court7 = todayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court8 = todayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court9 = todayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered20Court10 = todayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 21


const filtered21 = results.filter(result => result.time === 21)

//DAY 1

const todayfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered21Court1 = todayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court2 = todayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court3 = todayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court4 = todayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court5 = todayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court6 = todayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court7 = todayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court8 = todayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court9 = todayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered21Court10 = todayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


// HOUR 22

const filtered22 = results.filter(result => result.time === 22)

//DAY 1


const todayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered22Court1 = todayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered22Court2 = todayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const todayfiltered22Court3 = todayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court4 = todayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court5 = todayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court6 = todayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court7 = todayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court8 = todayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court9 = todayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const todayfiltered22Court10 = todayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


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

const [change, setChange] = useState(`/schedule/1/today`)

function handleSubmit(e) {
  e.preventDefault()
  console.log(change)
  navigate(change)
}

const [changeDate, setChangeDate] = useState(`/schedule/${courtId}/tomorrow`)

function handleSubmitDate(e) {
  e.preventDefault()
  console.log(changeDate)
  navigate(changeDate)
}

  return (
    <div className={styles.pickleContainer}>
      <h1>{court.name}</h1>
      <h4>{format(date, 'eee, MM/dd')}</h4>
      <div>View other courts:</div>
      <form onSubmit={handleSubmit}>
      <select onChange={(e) => setChange(e.target.value)}>
      <option value={`/schedule/1/today`}>Gates Tennis Center</option>
      <option value={`/schedule/2/today`}>Congress Park</option>
      <option value={`/schedule/3/today`}>Huston Lake Park</option>
      <option value={`/schedule/4/today`}>Eisenhower Recreation Center</option>
      <option value={`/schedule/5/today`}>Cook Park Recreation Center</option>
      <option value={`/schedule/6/today`}>Bear Valley Park Pickleball Courts</option>
      <option value={`/schedule/7/today`}>Washington Park Recreation Center</option>
      <option value={`/schedule/8/today`}>Sheridan Recreation Center</option>
      <option value={`/schedule/9/today`}>Meadow Creek Tennis and Fitness Club</option>
      <option value={`/schedule/10/today`}>Johnson Recreation Center</option>
      <option value={`/schedule/11/today`}>>Martin Luther King Jr. Recreation Center</option>
      <option value={`/schedule/12/today`}>Apex Pickleball Courts</option>
      <option value={`/schedule/13/today`}>Cornerstone Park</option>
      </select>
      <button type="submit">Go</button>
      </form>
      <div>View other dates: </div>
     <form onSubmit={handleSubmitDate}> 
      <select onChange={(e) => setChangeDate(e.target.value)}>
      <option value={`/schedule/${courtId}/tomorrow`}>{format(tomorrow, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day3`}>{format(day3, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day4`}>{format(day4, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day5`}>{format(day5, 'eee, MM/dd')}</option>
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
            
                 <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
             
    
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court1.length !== 0 ? todayfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court2.length !== 0 ? todayfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court3.length !== 0 ? todayfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court4.length !== 0 ? todayfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court5.length !== 0 ? todayfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court6.length !== 0 ? todayfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court7.length !== 0 ? todayfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court8.length !== 0 ? todayfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court9.length !== 0 ? todayfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered7Court10.length !== 0 ? todayfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
   
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court1.length !== 0 ? todayfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court2.length !== 0 ? todayfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court3.length !== 0 ? todayfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court4.length !== 0 ? todayfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court5.length !== 0 ? todayfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court6.length !== 0 ? todayfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court7.length !== 0 ? todayfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court8.length !== 0 ? todayfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court9.length !== 0 ? todayfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered8Court10.length !== 0 ? todayfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              

                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court1.length !== 0 ? todayfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court2.length !== 0 ? todayfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court3.length !== 0 ? todayfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court4.length !== 0 ? todayfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court5.length !== 0 ? todayfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court6.length !== 0 ? todayfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court7.length !== 0 ? todayfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court8.length !== 0 ? todayfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court9.length !== 0 ? todayfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered9Court10.length !== 0 ? todayfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
      
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court1.length !== 0 ? todayfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court2.length !== 0 ? todayfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court3.length !== 0 ? todayfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court4.length !== 0 ? todayfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court5.length !== 0 ? todayfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court6.length !== 0 ? todayfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court7.length !== 0 ? todayfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court8.length !== 0 ? todayfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court9.length !== 0 ? todayfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered10Court10.length !== 0 ? todayfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
      
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court1.length !== 0 ? todayfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court2.length !== 0 ? todayfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court3.length !== 0 ? todayfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court4.length !== 0 ? todayfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court5.length !== 0 ? todayfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court6.length !== 0 ? todayfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court7.length !== 0 ? todayfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court8.length !== 0 ? todayfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court9.length !== 0 ? todayfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered11Court10.length !== 0 ? todayfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
          
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court1.length !== 0 ? todayfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court2.length !== 0 ? todayfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court3.length !== 0 ? todayfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court4.length !== 0 ? todayfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court5.length !== 0 ? todayfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court6.length !== 0 ? todayfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court7.length !== 0 ? todayfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court8.length !== 0 ? todayfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court9.length !== 0 ? todayfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered12Court10.length !== 0 ? todayfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
                
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court1.length !== 0 ? todayfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court2.length !== 0 ? todayfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court3.length !== 0 ? todayfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court4.length !== 0 ? todayfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court5.length !== 0 ? todayfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court6.length !== 0 ? todayfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court7.length !== 0 ? todayfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court8.length !== 0 ? todayfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court9.length !== 0 ? todayfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered13Court10.length !== 0 ? todayfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
                
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court1.length !== 0 ? todayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court2.length !== 0 ? todayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court3.length !== 0 ? todayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court4.length !== 0 ? todayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court5.length !== 0 ? todayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court6.length !== 0 ? todayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court7.length !== 0 ? todayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court8.length !== 0 ? todayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court9.length !== 0 ? todayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered14Court10.length !== 0 ? todayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court1.length !== 0 ? todayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court2.length !== 0 ? todayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court3.length !== 0 ? todayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court4.length !== 0 ? todayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court5.length !== 0 ? todayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court6.length !== 0 ? todayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court7.length !== 0 ? todayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court8.length !== 0 ? todayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court9.length !== 0 ? todayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered15Court10.length !== 0 ? todayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court1.length !== 0 ? todayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court2.length !== 0 ? todayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court3.length !== 0 ? todayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court4.length !== 0 ? todayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court5.length !== 0 ? todayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court6.length !== 0 ? todayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court7.length !== 0 ? todayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court8.length !== 0 ? todayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court9.length !== 0 ? todayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered16Court10.length !== 0 ? todayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
              
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court1.length !== 0 ? todayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court2.length !== 0 ? todayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court3.length !== 0 ? todayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court4.length !== 0 ? todayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court5.length !== 0 ? todayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court6.length !== 0 ? todayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court7.length !== 0 ? todayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court8.length !== 0 ? todayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court9.length !== 0 ? todayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered17Court10.length !== 0 ? todayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court1.length !== 0 ? todayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court2.length !== 0 ? todayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court3.length !== 0 ? todayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court4.length !== 0 ? todayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court5.length !== 0 ? todayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court6.length !== 0 ? todayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court7.length !== 0 ? todayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court8.length !== 0 ? todayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court9.length !== 0 ? todayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered18Court10.length !== 0 ? todayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court1.length !== 0 ? todayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court2.length !== 0 ? todayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court3.length !== 0 ? todayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court4.length !== 0 ? todayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court5.length !== 0 ? todayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court6.length !== 0 ? todayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court7.length !== 0 ? todayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court8.length !== 0 ? todayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court9.length !== 0 ? todayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered19Court10.length !== 0 ? todayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court1.length !== 0 ? todayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court2.length !== 0 ? todayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court3.length !== 0 ? todayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court4.length !== 0 ? todayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court5.length !== 0 ? todayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court6.length !== 0 ? todayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court7.length !== 0 ? todayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court8.length !== 0 ? todayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court9.length !== 0 ? todayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered20Court10.length !== 0 ? todayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court1.length !== 0 ? todayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court2.length !== 0 ? todayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court3.length !== 0 ? todayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court4.length !== 0 ? todayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court5.length !== 0 ? todayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court6.length !== 0 ? todayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court7.length !== 0 ? todayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court8.length !== 0 ? todayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court9.length !== 0 ? todayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered21Court10.length !== 0 ? todayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
          
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court1.length !== 0 ? todayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court2.length !== 0 ? todayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court3.length !== 0 ? todayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court4.length !== 0 ? todayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court5.length !== 0 ? todayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court6.length !== 0 ? todayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court7.length !== 0 ? todayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court8.length !== 0 ? todayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court9.length !== 0 ? todayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{todayfiltered22Court10.length !== 0 ? todayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
             
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}