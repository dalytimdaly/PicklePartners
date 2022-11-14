import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function SixthDay({ user }) {

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
 

  const day6 = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 5,
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

 //DAY 6
        
 const sixthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

 const sixthDayfiltered6Court1 = sixthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
   <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
   <p className={styles.reserveP}>Type: {result.type_of_play}</p>
   <p className={styles.reserveP}>Group Size: {result.size}</p>
   <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
   
   <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
   <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p>
   </p>
   </div>)

 const sixthDayfiltered6Court2 = sixthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
   <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
   <p className={styles.reserveP}>Type: {result.type_of_play}</p>
   <p className={styles.reserveP}>Group Size: {result.size}</p>
   <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
   
   <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
   <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
   </div>)

const sixthDayfiltered6Court3 = sixthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court4 = sixthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court5 = sixthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court6 = sixthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court7 = sixthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court8 = sixthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court9 = sixthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered6Court10 = sixthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


//HOUR 7

const filtered7 = results.filter(result => result.time === 8)

   //DAY 6
        
   const sixthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

   const sixthDayfiltered7Court1 = sixthDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)

   const sixthDayfiltered7Court2 = sixthDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)

const sixthDayfiltered7Court3 = sixthDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court4 = sixthDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court5 = sixthDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court6 = sixthDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court7 = sixthDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court8 = sixthDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court9 = sixthDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered7Court10 = sixthDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    

//DAY 6
    
        
const sixthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered8Court1 = sixthDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered8Court2 = sixthDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered8Court3 = sixthDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court4 = sixthDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court5 = sixthDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court6 = sixthDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court7 = sixthDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court8 = sixthDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court9 = sixthDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered8Court10 = sixthDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)



// HOUR 9


const filtered9 = results.filter(result => result.time === 9)


         //DAY 6
    
        
         const sixthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))
    
         const sixthDayfiltered9Court1 = sixthDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
           <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
           <p className={styles.reserveP}>Type: {result.type_of_play}</p>
           <p className={styles.reserveP}>Group Size: {result.size}</p>
           <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
           
           <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
           <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
           </div>)
   
         const sixthDayfiltered9Court2 = sixthDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
           <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
           <p className={styles.reserveP}>Type: {result.type_of_play}</p>
           <p className={styles.reserveP}>Group Size: {result.size}</p>
           <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
           
           <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
           <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
           </div>)
   
   const sixthDayfiltered9Court3 = sixthDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court4 = sixthDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court5 = sixthDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court6 = sixthDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court7 = sixthDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court8 = sixthDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court9 = sixthDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
   const sixthDayfiltered9Court10 = sixthDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
     </div>)
   
// HOUR 10


const filtered10 = results.filter(result => result.time === 10)

    
              
    //DAY 6


    const sixthDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

    const sixthDayfiltered10Court1 = sixthDayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const sixthDayfiltered10Court2 = sixthDayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const sixthDayfiltered10Court3 = sixthDayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court4 = sixthDayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court5 = sixthDayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court6 = sixthDayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court7 = sixthDayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court8 = sixthDayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court9 = sixthDayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered10Court10 = sixthDayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

// HOUR 11


const filtered11 = results.filter(result => result.time === 11)

//DAY 6

const sixthDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered11Court1 = sixthDayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered11Court2 = sixthDayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered11Court3 = sixthDayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court4 = sixthDayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court5 = sixthDayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court6 = sixthDayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court7 = sixthDayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court8 = sixthDayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court9 = sixthDayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered11Court10 = sixthDayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6
  
const sixthDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))


const sixthDayfiltered12Court1 = sixthDayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered12Court2 = sixthDayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered12Court3 = sixthDayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court4 = sixthDayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court5 = sixthDayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court6 = sixthDayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court7 = sixthDayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court8 = sixthDayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court9 = sixthDayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered12Court10 = sixthDayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



//DAY 6
  
const sixthDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered13Court1 = sixthDayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered13Court2 = sixthDayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered13Court3 = sixthDayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court4 = sixthDayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court5 = sixthDayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court6 = sixthDayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court7 = sixthDayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court8 = sixthDayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court9 = sixthDayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered13Court10 = sixthDayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6
  
const sixthDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered14Court1 = sixthDayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered14Court2 = sixthDayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered14Court3 = sixthDayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court4 = sixthDayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court5 = sixthDayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court6 = sixthDayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court7 = sixthDayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court8 = sixthDayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court9 = sixthDayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered14Court10 = sixthDayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6
  
const sixthDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))


const sixthDayfiltered15Court1 = sixthDayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered15Court2 = sixthDayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered15Court3 = sixthDayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court4 = sixthDayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court5 = sixthDayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court6 = sixthDayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court7 = sixthDayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court8 = sixthDayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court9 = sixthDayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered15Court10 = sixthDayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6
  
const sixthDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered16Court1 = sixthDayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered16Court2 = sixthDayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered16Court3 = sixthDayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court4 = sixthDayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court5 = sixthDayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court6 = sixthDayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court7 = sixthDayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court8 = sixthDayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court9 = sixthDayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered16Court10 = sixthDayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6
  
const sixthDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered17Court1 = sixthDayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered17Court2 = sixthDayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered17Court3 = sixthDayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court4 = sixthDayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court5 = sixthDayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court6 = sixthDayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court7 = sixthDayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court8 = sixthDayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court9 = sixthDayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered17Court10 = sixthDayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



//DAY 6    


const sixthDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered18Court1 = sixthDayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered18Court2 = sixthDayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered18Court3 = sixthDayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court4 = sixthDayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court5 = sixthDayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court6 = sixthDayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court7 = sixthDayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court8 = sixthDayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court9 = sixthDayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered18Court10 = sixthDayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



//DAY 6
  
const sixthDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered19Court1 = sixthDayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered19Court2 = sixthDayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered19Court3 = sixthDayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court4 = sixthDayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court5 = sixthDayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court6 = sixthDayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court7 = sixthDayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court8 = sixthDayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court9 = sixthDayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered19Court10 = sixthDayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6
  
const sixthDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered20Court1 = sixthDayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered20Court2 = sixthDayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered20Court3 = sixthDayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court4 = sixthDayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court5 = sixthDayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court6 = sixthDayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court7 = sixthDayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court8 = sixthDayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court9 = sixthDayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered20Court10 = sixthDayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



//DAY 6    


const sixthDayfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered21Court1 = sixthDayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court2 = sixthDayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court3 = sixthDayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court4 = sixthDayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court5 = sixthDayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court6 = sixthDayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court7 = sixthDayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court8 = sixthDayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court9 = sixthDayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered21Court10 = sixthDayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


//DAY 6

  
const sixthDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered22Court1 = sixthDayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered22Court2 = sixthDayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const sixthDayfiltered22Court3 = sixthDayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court4 = sixthDayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court5 = sixthDayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court6 = sixthDayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court7 = sixthDayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court8 = sixthDayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court9 = sixthDayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const sixthDayfiltered22Court10 = sixthDayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
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

const day5 = add(new Date(), {
  years: 0,
  months: 0,
  weeks: 0,
  days: 4,
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

const [change, setChange] = useState(`/schedule/1/day6`)

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
      <h4>{format(day6, 'eee, MM/dd')}</h4>
      <div>View other courts:</div>
      <form onSubmit={handleSubmit}>
      <select onChange={(e) => setChange(e.target.value)}>
      <option value={`/schedule/1/day6`}>Gates Tennis Center</option>
      <option value={`/schedule/2/day6`}>Congress Park</option>
      <option value={`/schedule/3/day6`}>Huston Lake Park</option>
      <option value={`/schedule/4/day6`}>Eisenhower Recreation Center</option>
      <option value={`/schedule/5/day6`}>Cook Park Recreation Center</option>
      <option value={`/schedule/6/day6`}>Bear Valley Park Pickleball Courts</option>
      <option value={`/schedule/7/day6`}>Washington Park Recreation Center</option>
      <option value={`/schedule/8/day6`}>Sheridan Recreation Center</option>
      <option value={`/schedule/9/day6`}>Meadow Creek Tennis and Fitness Club</option>
      <option value={`/schedule/10/day6`}>Johnson Recreation Center</option>
      <option value={`/schedule/11/day6`}>>Martin Luther King Jr. Recreation Center</option>
      <option value={`/schedule/12/day6`}>Apex Pickleball Courts</option>
      <option value={`/schedule/13/day6`}>Cornerstone Park</option>
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
      <option value={`/schedule/${courtId}/day5`}>{format(day5, 'eee, MM/dd')}</option>
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
            
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court1.length !== 0 ? sixthDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court2.length !== 0 ? sixthDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court3.length !== 0 ? sixthDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court4.length !== 0 ? sixthDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court5.length !== 0 ? sixthDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court6.length !== 0 ? sixthDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court7.length !== 0 ? sixthDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court8.length !== 0 ? sixthDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court9.length !== 0 ? sixthDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered6Court10.length !== 0 ? sixthDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
             
       
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court1.length !== 0 ? sixthDayfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court2.length !== 0 ? sixthDayfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court3.length !== 0 ? sixthDayfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court4.length !== 0 ? sixthDayfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court5.length !== 0 ? sixthDayfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court6.length !== 0 ? sixthDayfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court7.length !== 0 ? sixthDayfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court8.length !== 0 ? sixthDayfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court9.length !== 0 ? sixthDayfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered7Court10.length !== 0 ? sixthDayfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court1.length !== 0 ? sixthDayfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court2.length !== 0 ? sixthDayfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court3.length !== 0 ? sixthDayfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court4.length !== 0 ? sixthDayfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court5.length !== 0 ? sixthDayfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court6.length !== 0 ? sixthDayfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court7.length !== 0 ? sixthDayfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court8.length !== 0 ? sixthDayfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court9.length !== 0 ? sixthDayfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered8Court10.length !== 0 ? sixthDayfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court1.length !== 0 ? sixthDayfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court2.length !== 0 ? sixthDayfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court3.length !== 0 ? sixthDayfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court4.length !== 0 ? sixthDayfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court5.length !== 0 ? sixthDayfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court6.length !== 0 ? sixthDayfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court7.length !== 0 ? sixthDayfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court8.length !== 0 ? sixthDayfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court9.length !== 0 ? sixthDayfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered9Court10.length !== 0 ? sixthDayfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
               
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
              
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court1.length !== 0 ? sixthDayfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court2.length !== 0 ? sixthDayfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court3.length !== 0 ? sixthDayfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court4.length !== 0 ? sixthDayfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court5.length !== 0 ? sixthDayfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court6.length !== 0 ? sixthDayfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court7.length !== 0 ? sixthDayfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court8.length !== 0 ? sixthDayfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court9.length !== 0 ? sixthDayfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered10Court10.length !== 0 ? sixthDayfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court1.length !== 0 ? sixthDayfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court2.length !== 0 ? sixthDayfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court3.length !== 0 ? sixthDayfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court4.length !== 0 ? sixthDayfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court5.length !== 0 ? sixthDayfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court6.length !== 0 ? sixthDayfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court7.length !== 0 ? sixthDayfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court8.length !== 0 ? sixthDayfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court9.length !== 0 ? sixthDayfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered11Court10.length !== 0 ? sixthDayfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court1.length !== 0 ? sixthDayfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court2.length !== 0 ? sixthDayfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court3.length !== 0 ? sixthDayfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court4.length !== 0 ? sixthDayfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court5.length !== 0 ? sixthDayfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court6.length !== 0 ? sixthDayfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court7.length !== 0 ? sixthDayfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court8.length !== 0 ? sixthDayfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court9.length !== 0 ? sixthDayfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered12Court10.length !== 0 ? sixthDayfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court1.length !== 0 ? sixthDayfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court2.length !== 0 ? sixthDayfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court3.length !== 0 ? sixthDayfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court4.length !== 0 ? sixthDayfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court5.length !== 0 ? sixthDayfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court6.length !== 0 ? sixthDayfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court7.length !== 0 ? sixthDayfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court8.length !== 0 ? sixthDayfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court9.length !== 0 ? sixthDayfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered13Court10.length !== 0 ? sixthDayfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
               
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court1.length !== 0 ? sixthDayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court2.length !== 0 ? sixthDayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court3.length !== 0 ? sixthDayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court4.length !== 0 ? sixthDayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court5.length !== 0 ? sixthDayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court6.length !== 0 ? sixthDayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court7.length !== 0 ? sixthDayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court8.length !== 0 ? sixthDayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court9.length !== 0 ? sixthDayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered14Court10.length !== 0 ? sixthDayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court1.length !== 0 ? sixthDayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court2.length !== 0 ? sixthDayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court3.length !== 0 ? sixthDayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court4.length !== 0 ? sixthDayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court5.length !== 0 ? sixthDayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court6.length !== 0 ? sixthDayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court7.length !== 0 ? sixthDayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court8.length !== 0 ? sixthDayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court9.length !== 0 ? sixthDayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered15Court10.length !== 0 ? sixthDayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court1.length !== 0 ? sixthDayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court2.length !== 0 ? sixthDayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court3.length !== 0 ? sixthDayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court4.length !== 0 ? sixthDayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court5.length !== 0 ? sixthDayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court6.length !== 0 ? sixthDayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court7.length !== 0 ? sixthDayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court8.length !== 0 ? sixthDayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court9.length !== 0 ? sixthDayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered16Court10.length !== 0 ? sixthDayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court1.length !== 0 ? sixthDayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court2.length !== 0 ? sixthDayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court3.length !== 0 ? sixthDayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court4.length !== 0 ? sixthDayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court5.length !== 0 ? sixthDayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court6.length !== 0 ? sixthDayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court7.length !== 0 ? sixthDayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court8.length !== 0 ? sixthDayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court9.length !== 0 ? sixthDayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered17Court10.length !== 0 ? sixthDayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
        
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court1.length !== 0 ? sixthDayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court2.length !== 0 ? sixthDayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court3.length !== 0 ? sixthDayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court4.length !== 0 ? sixthDayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court5.length !== 0 ? sixthDayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court6.length !== 0 ? sixthDayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court7.length !== 0 ? sixthDayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court8.length !== 0 ? sixthDayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court9.length !== 0 ? sixthDayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered18Court10.length !== 0 ? sixthDayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court1.length !== 0 ? sixthDayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court2.length !== 0 ? sixthDayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court3.length !== 0 ? sixthDayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court4.length !== 0 ? sixthDayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court5.length !== 0 ? sixthDayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court6.length !== 0 ? sixthDayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court7.length !== 0 ? sixthDayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court8.length !== 0 ? sixthDayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court9.length !== 0 ? sixthDayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered19Court10.length !== 0 ? sixthDayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court1.length !== 0 ? sixthDayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court2.length !== 0 ? sixthDayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court3.length !== 0 ? sixthDayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court4.length !== 0 ? sixthDayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court5.length !== 0 ? sixthDayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court6.length !== 0 ? sixthDayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court7.length !== 0 ? sixthDayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court8.length !== 0 ? sixthDayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court9.length !== 0 ? sixthDayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered20Court10.length !== 0 ? sixthDayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
      
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court1.length !== 0 ? sixthDayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court2.length !== 0 ? sixthDayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court3.length !== 0 ? sixthDayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court4.length !== 0 ? sixthDayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court5.length !== 0 ? sixthDayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court6.length !== 0 ? sixthDayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court7.length !== 0 ? sixthDayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court8.length !== 0 ? sixthDayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court9.length !== 0 ? sixthDayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered21Court10.length !== 0 ? sixthDayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
   
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court1.length !== 0 ? sixthDayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court2.length !== 0 ? sixthDayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court3.length !== 0 ? sixthDayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court4.length !== 0 ? sixthDayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court5.length !== 0 ? sixthDayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court6.length !== 0 ? sixthDayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court7.length !== 0 ? sixthDayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court8.length !== 0 ? sixthDayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court9.length !== 0 ? sixthDayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{sixthDayfiltered22Court10.length !== 0 ? sixthDayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}