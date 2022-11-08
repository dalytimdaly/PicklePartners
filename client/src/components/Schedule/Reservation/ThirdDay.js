import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function ThirdDay({user}) {

  const [ results, setResults ] = useState([]);
  const [ court, setCourt ] = useState([])
  const [ errors, setErrors ] = useState([]);
  const { term } = useParams();

  const courtId = window.location.href.toString().substring(31,33).replace("/","")

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

  console.log(user)
 

  const day3 = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 2,
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


  // DAY 3
      
        const thirdDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
      
        const thirdDayfiltered6Court1 = thirdDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered6Court2 = thirdDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered6Court3 = thirdDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court4 = thirdDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court5 = thirdDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court6 = thirdDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court7 = thirdDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court8 = thirdDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court9 = thirdDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered6Court10 = thirdDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


 //Day 3
    
 const thirdDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))

 const thirdDayfiltered7Court1 = thirdDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
   <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
   <p className={styles.reserveP}>Type: {result.type_of_play}</p>
   <p className={styles.reserveP}>Group Size: {result.size}</p>
   <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
   
   <p className={styles.reserveP}>Spot(s) Available:</p>
   <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
   </div>)

 const thirdDayfiltered7Court2 = thirdDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
   <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
   <p className={styles.reserveP}>Type: {result.type_of_play}</p>
   <p className={styles.reserveP}>Group Size: {result.size}</p>
   <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
   
   <p className={styles.reserveP}>Spot(s) Available:</p>
   <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
   </div>)

const thirdDayfiltered7Court3 = thirdDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court4 = thirdDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court5 = thirdDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court6 = thirdDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court7 = thirdDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court8 = thirdDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court9 = thirdDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spot(s) Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
</div>)

const thirdDayfiltered7Court10 = thirdDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    
      //DAY 3
    
      const thirdDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))

      const thirdDayfiltered8Court1 = thirdDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)

      const thirdDayfiltered8Court2 = thirdDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)

const thirdDayfiltered8Court3 = thirdDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court4 = thirdDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court5 = thirdDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court6 = thirdDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court7 = thirdDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court8 = thirdDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court9 = thirdDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered8Court10 = thirdDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


     

      // DAY 3
    
      const thirdDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))

      const thirdDayfiltered9Court1 = thirdDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)

      const thirdDayfiltered9Court2 = thirdDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)

const thirdDayfiltered9Court3 = thirdDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court4 = thirdDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court5 = thirdDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court6 = thirdDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court7 = thirdDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court8 = thirdDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court9 = thirdDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered9Court10 = thirdDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


      // DAY 3
    
      const thirdDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))

      const thirdDayfiltered10Court1 = thirdDayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)

      const thirdDayfiltered10Court2 = thirdDayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spot(s) Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
        </div>)

const thirdDayfiltered10Court3 = thirdDayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court4 = thirdDayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court5 = thirdDayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court6 = thirdDayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court7 = thirdDayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court8 = thirdDayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court9 = thirdDayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered10Court10 = thirdDayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

        // DAY 3
    
        const thirdDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))

        const thirdDayfiltered11Court1 = thirdDayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered11Court2 = thirdDayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered11Court3 = thirdDayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court4 = thirdDayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court5 = thirdDayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court6 = thirdDayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court7 = thirdDayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court8 = thirdDayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court9 = thirdDayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered11Court10 = thirdDayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
      
        // DAY 3
      
        const thirdDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered12Court1 = thirdDayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered12Court2 = thirdDayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered12Court3 = thirdDayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court4 = thirdDayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court5 = thirdDayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court6 = thirdDayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court7 = thirdDayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court8 = thirdDayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court9 = thirdDayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered12Court10 = thirdDayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
      
        // DAY 3
      
        const thirdDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered13Court1 = thirdDayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered13Court2 = thirdDayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered13Court3 = thirdDayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court4 = thirdDayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court5 = thirdDayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court6 = thirdDayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court7 = thirdDayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court8 = thirdDayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court9 = thirdDayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered13Court10 = thirdDayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
        // DAY 3
      
        const thirdDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
  
        const thirdDayfiltered14Court1 = thirdDayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered14Court2 = thirdDayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered14Court3 = thirdDayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court4 = thirdDayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court5 = thirdDayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court6 = thirdDayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court7 = thirdDayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court8 = thirdDayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court9 = thirdDayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered14Court10 = thirdDayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
      
  // DAY 3
  
        const thirdDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered15Court1 = thirdDayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered15Court2 = thirdDayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered15Court3 = thirdDayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court4 = thirdDayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court5 = thirdDayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court6 = thirdDayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court7 = thirdDayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court8 = thirdDayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court9 = thirdDayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered15Court10 = thirdDayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
        // DAY 3
      
        const thirdDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered16Court1 = thirdDayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered16Court2 = thirdDayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered16Court3 = thirdDayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court4 = thirdDayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court5 = thirdDayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court6 = thirdDayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court7 = thirdDayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court8 = thirdDayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court9 = thirdDayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered16Court10 = thirdDayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
        // DAY 3
      
        const thirdDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
        
  
        const thirdDayfiltered17Court1 = thirdDayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered17Court2 = thirdDayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered17Court3 = thirdDayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court4 = thirdDayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court5 = thirdDayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court6 = thirdDayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court7 = thirdDayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court8 = thirdDayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court9 = thirdDayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered17Court10 = thirdDayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
    
        // DAY 3
      
        const thirdDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
  
        const thirdDayfiltered18Court1 = thirdDayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered18Court2 = thirdDayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered18Court3 = thirdDayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court4 = thirdDayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court5 = thirdDayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court6 = thirdDayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court7 = thirdDayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court8 = thirdDayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court9 = thirdDayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered18Court10 = thirdDayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
        // DAY 3
      
        const thirdDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered19Court1 = thirdDayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered19Court2 = thirdDayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered19Court3 = thirdDayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court4 = thirdDayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court5 = thirdDayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court6 = thirdDayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court7 = thirdDayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court8 = thirdDayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court9 = thirdDayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered19Court10 = thirdDayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
  
        // DAY 3
      
        const thirdDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered20Court1 = thirdDayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered20Court2 = thirdDayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered20Court3 = thirdDayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court4 = thirdDayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court5 = thirdDayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court6 = thirdDayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court7 = thirdDayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court8 = thirdDayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court9 = thirdDayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered20Court10 = thirdDayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
    // DAY 3
  
    const thirdDayfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
    const thirdDayfiltered21Court1 = thirdDayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
  
    const thirdDayfiltered21Court2 = thirdDayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spot(s) Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
      </div>)
  
  const thirdDayfiltered21Court3 = thirdDayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court4 = thirdDayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court5 = thirdDayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court6 = thirdDayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court7 = thirdDayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court8 = thirdDayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court9 = thirdDayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spot(s) Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const thirdDayfiltered21Court10 = thirdDayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
  
  
        // DAY 3
      
        const thirdDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
  
        const thirdDayfiltered22Court1 = thirdDayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
        const thirdDayfiltered22Court2 = thirdDayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
          <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
          <p className={styles.reserveP}>Type: {result.type_of_play}</p>
          <p className={styles.reserveP}>Group Size: {result.size}</p>
          <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
          
          <p className={styles.reserveP}>Spot(s) Available:</p>
          <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
          <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
          </div>)
  
  const thirdDayfiltered22Court3 = thirdDayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court4 = thirdDayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court5 = thirdDayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court6 = thirdDayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court7 = thirdDayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court8 = thirdDayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court9 = thirdDayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spot(s) Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(event) => reserveSpotUser2(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(event) => reserveSpotUser3(event)} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(event) => reserveSpotUser4(event)} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const thirdDayfiltered22Court10 = thirdDayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
      
        const tomorrow = add(new Date(), {
          years: 0,
          months: 0,
          weeks: 0,
          days: 1,
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
      <Link>View other dates: </Link>
      <div>
     
    <Link to={`/schedule/${courtId}/today`}>{format(date, 'eee, MM/dd')}</Link>
    <Link to={`/schedule/${courtId}/tomorrow`}>{format(tomorrow, 'eee, MM/dd')}</Link>
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
            
              
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court1.length !== 0 ? thirdDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court2.length !== 0 ? thirdDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court3.length !== 0 ? thirdDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court4.length !== 0 ? thirdDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court5.length !== 0 ? thirdDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court6.length !== 0 ? thirdDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court7.length !== 0 ? thirdDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court8.length !== 0 ? thirdDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court9.length !== 0 ? thirdDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered6Court10.length !== 0 ? thirdDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
             
       
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court1.length !== 0 ? thirdDayfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court2.length !== 0 ? thirdDayfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court3.length !== 0 ? thirdDayfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court4.length !== 0 ? thirdDayfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court5.length !== 0 ? thirdDayfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court6.length !== 0 ? thirdDayfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court7.length !== 0 ? thirdDayfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court8.length !== 0 ? thirdDayfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court9.length !== 0 ? thirdDayfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered7Court10.length !== 0 ? thirdDayfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
      
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court1.length !== 0 ? thirdDayfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court2.length !== 0 ? thirdDayfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court3.length !== 0 ? thirdDayfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court4.length !== 0 ? thirdDayfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court5.length !== 0 ? thirdDayfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court6.length !== 0 ? thirdDayfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court7.length !== 0 ? thirdDayfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court8.length !== 0 ? thirdDayfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court9.length !== 0 ? thirdDayfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered8Court10.length !== 0 ? thirdDayfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
   
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              
            
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court1.length !== 0 ? thirdDayfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court2.length !== 0 ? thirdDayfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court3.length !== 0 ? thirdDayfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court4.length !== 0 ? thirdDayfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court5.length !== 0 ? thirdDayfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court6.length !== 0 ? thirdDayfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court7.length !== 0 ? thirdDayfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court8.length !== 0 ? thirdDayfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court9.length !== 0 ? thirdDayfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered9Court10.length !== 0 ? thirdDayfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
      
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court1.length !== 0 ? thirdDayfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court2.length !== 0 ? thirdDayfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court3.length !== 0 ? thirdDayfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court4.length !== 0 ? thirdDayfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court5.length !== 0 ? thirdDayfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court6.length !== 0 ? thirdDayfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court7.length !== 0 ? thirdDayfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court8.length !== 0 ? thirdDayfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court9.length !== 0 ? thirdDayfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered10Court10.length !== 0 ? thirdDayfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
      
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
          
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court1.length !== 0 ? thirdDayfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court2.length !== 0 ? thirdDayfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court3.length !== 0 ? thirdDayfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court4.length !== 0 ? thirdDayfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court5.length !== 0 ? thirdDayfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court6.length !== 0 ? thirdDayfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court7.length !== 0 ? thirdDayfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court8.length !== 0 ? thirdDayfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court9.length !== 0 ? thirdDayfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered11Court10.length !== 0 ? thirdDayfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
      
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
        
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court1.length !== 0 ? thirdDayfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court2.length !== 0 ? thirdDayfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court3.length !== 0 ? thirdDayfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court4.length !== 0 ? thirdDayfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court5.length !== 0 ? thirdDayfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court6.length !== 0 ? thirdDayfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court7.length !== 0 ? thirdDayfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court8.length !== 0 ? thirdDayfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court9.length !== 0 ? thirdDayfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered12Court10.length !== 0 ? thirdDayfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              
            
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court1.length !== 0 ? thirdDayfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court2.length !== 0 ? thirdDayfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court3.length !== 0 ? thirdDayfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court4.length !== 0 ? thirdDayfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court5.length !== 0 ? thirdDayfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court6.length !== 0 ? thirdDayfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court7.length !== 0 ? thirdDayfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court8.length !== 0 ? thirdDayfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court9.length !== 0 ? thirdDayfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered13Court10.length !== 0 ? thirdDayfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
    
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              
        
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court1.length !== 0 ? thirdDayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court2.length !== 0 ? thirdDayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court3.length !== 0 ? thirdDayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court4.length !== 0 ? thirdDayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court5.length !== 0 ? thirdDayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court6.length !== 0 ? thirdDayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court7.length !== 0 ? thirdDayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court8.length !== 0 ? thirdDayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court9.length !== 0 ? thirdDayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered14Court10.length !== 0 ? thirdDayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
     
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
            
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court1.length !== 0 ? thirdDayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court2.length !== 0 ? thirdDayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court3.length !== 0 ? thirdDayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court4.length !== 0 ? thirdDayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court5.length !== 0 ? thirdDayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court6.length !== 0 ? thirdDayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court7.length !== 0 ? thirdDayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court8.length !== 0 ? thirdDayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court9.length !== 0 ? thirdDayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered15Court10.length !== 0 ? thirdDayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
            
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court1.length !== 0 ? thirdDayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court2.length !== 0 ? thirdDayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court3.length !== 0 ? thirdDayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court4.length !== 0 ? thirdDayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court5.length !== 0 ? thirdDayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court6.length !== 0 ? thirdDayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court7.length !== 0 ? thirdDayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court8.length !== 0 ? thirdDayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court9.length !== 0 ? thirdDayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered16Court10.length !== 0 ? thirdDayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
      
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court1.length !== 0 ? thirdDayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court2.length !== 0 ? thirdDayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court3.length !== 0 ? thirdDayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court4.length !== 0 ? thirdDayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court5.length !== 0 ? thirdDayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court6.length !== 0 ? thirdDayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court7.length !== 0 ? thirdDayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court8.length !== 0 ? thirdDayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court9.length !== 0 ? thirdDayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered17Court10.length !== 0 ? thirdDayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
            
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court1.length !== 0 ? thirdDayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court2.length !== 0 ? thirdDayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court3.length !== 0 ? thirdDayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court4.length !== 0 ? thirdDayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court5.length !== 0 ? thirdDayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court6.length !== 0 ? thirdDayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court7.length !== 0 ? thirdDayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court8.length !== 0 ? thirdDayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court9.length !== 0 ? thirdDayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered18Court10.length !== 0 ? thirdDayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
   
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court1.length !== 0 ? thirdDayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court2.length !== 0 ? thirdDayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court3.length !== 0 ? thirdDayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court4.length !== 0 ? thirdDayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court5.length !== 0 ? thirdDayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court6.length !== 0 ? thirdDayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court7.length !== 0 ? thirdDayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court8.length !== 0 ? thirdDayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court9.length !== 0 ? thirdDayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered19Court10.length !== 0 ? thirdDayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
     
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
              
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court1.length !== 0 ? thirdDayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court2.length !== 0 ? thirdDayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court3.length !== 0 ? thirdDayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court4.length !== 0 ? thirdDayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court5.length !== 0 ? thirdDayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court6.length !== 0 ? thirdDayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court7.length !== 0 ? thirdDayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court8.length !== 0 ? thirdDayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court9.length !== 0 ? thirdDayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered20Court10.length !== 0 ? thirdDayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
               
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
      
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court1.length !== 0 ? thirdDayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court2.length !== 0 ? thirdDayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court3.length !== 0 ? thirdDayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court4.length !== 0 ? thirdDayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court5.length !== 0 ? thirdDayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court6.length !== 0 ? thirdDayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court7.length !== 0 ? thirdDayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court8.length !== 0 ? thirdDayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court9.length !== 0 ? thirdDayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered21Court10.length !== 0 ? thirdDayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
           
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court1.length !== 0 ? thirdDayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court2.length !== 0 ? thirdDayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court3.length !== 0 ? thirdDayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court4.length !== 0 ? thirdDayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court5.length !== 0 ? thirdDayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court6.length !== 0 ? thirdDayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court7.length !== 0 ? thirdDayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court8.length !== 0 ? thirdDayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court9.length !== 0 ? thirdDayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
               <th className={styles.reservationBlock}><div className={styles.courtBlock}>{thirdDayfiltered22Court10.length !== 0 ? thirdDayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}