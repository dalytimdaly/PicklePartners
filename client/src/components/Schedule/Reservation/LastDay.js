import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function LastDay() {

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
 


  const lastday = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


  // HOUR 6  


  const filtered6 = results.filter(result => result.time === 6)

  // DAY 7
        
  const lastDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

  const lastDayfiltered6Court1 = lastDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)

  const lastDayfiltered6Court2 = lastDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    
    <p className={styles.reserveP}>Spots Available:</p>
    <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
    </div>)

const lastDayfiltered6Court3 = lastDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court4 = lastDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court5 = lastDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court6 = lastDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court7 = lastDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court8 = lastDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court9 = lastDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered6Court10 = lastDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    
    //DAY 7
        
    const lastDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered7Court1 = lastDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const lastDayfiltered7Court2 = lastDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const lastDayfiltered7Court3 = lastDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court4 = lastDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court5 = lastDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court6 = lastDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court7 = lastDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court8 = lastDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court9 = lastDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered7Court10 = lastDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    

    
    //DAY 7
        
    const lastDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered8Court1 = lastDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const lastDayfiltered8Court2 = lastDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const lastDayfiltered8Court3 = lastDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court4 = lastDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court5 = lastDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court6 = lastDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court7 = lastDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court8 = lastDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court9 = lastDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered8Court10 = lastDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


     
    //DAY 7
        
    const lastDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))


    const lastDayfiltered9Court1 = lastDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const lastDayfiltered9Court2 = lastDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const lastDayfiltered9Court3 = lastDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court4 = lastDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court5 = lastDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court6 = lastDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court7 = lastDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court8 = lastDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court9 = lastDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const lastDayfiltered9Court10 = lastDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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