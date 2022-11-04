import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function Tomorrow() {

  const [ results, setResults ] = useState([]);
  const [ court, setCourt ] = useState([])
  const [ errors, setErrors ] = useState([]);
  const { term } = useParams();

  const courtId = window.location.href.toString().substring(31,32)

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

  const tomorrow = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  //HOUR 6
  
  const filtered6 = results.filter(result => result.time === 6)


  // DAY 2
      
  const tomorrowfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))
  
  const tomorrowfiltered6Court1 = tomorrowfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const tomorrowfiltered6Court2 = tomorrowfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
  
  const tomorrowfiltered6Court3 = tomorrowfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court4 = tomorrowfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court5 = tomorrowfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court6 = tomorrowfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court7 = tomorrowfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court8 = tomorrowfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court9 = tomorrowfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)
  
  const tomorrowfiltered6Court10 = tomorrowfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
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
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered7Court2 = tomorrowfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
    
    const tomorrowfiltered7Court3 = tomorrowfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court4 = tomorrowfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court5 = tomorrowfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court6 = tomorrowfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court7 = tomorrowfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court8 = tomorrowfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court9 = tomorrowfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)
    
    const tomorrowfiltered7Court10 = tomorrowfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
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
        
        <p className={styles.reserveP}>Spots Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
        </div>)
      
      const tomorrowfiltered8Court2 = tomorrowfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
        
        <p className={styles.reserveP}>Spots Available:</p>
        <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
        </div>)
      
      const tomorrowfiltered8Court3 = tomorrowfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court4 = tomorrowfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court5 = tomorrowfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court6 = tomorrowfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court7 = tomorrowfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court8 = tomorrowfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court9 = tomorrowfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)
      
      const tomorrowfiltered8Court10 = tomorrowfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
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
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered9Court2 = tomorrowfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered9Court3 = tomorrowfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court4 = tomorrowfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court5 = tomorrowfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court6 = tomorrowfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court7 = tomorrowfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court8 = tomorrowfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court9 = tomorrowfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const tomorrowfiltered9Court10 = tomorrowfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)


    

  return (
    <div></div>
  )
}