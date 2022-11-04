import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'


export default function Today() {

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
 

  const date = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


// HOUR 6  


const filtered6 = results.filter(result => result.time === 6)


//DAY 1


    const todayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered6Court1 = todayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const todayfiltered6Court2 = todayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const todayfiltered6Court3 = todayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court4 = todayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court5 = todayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court6 = todayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court7 = todayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court8 = todayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court9 = todayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered6Court10 = todayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
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
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const todayfiltered7Court2 = todayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const todayfiltered7Court3 = todayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court4 = todayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court5 = todayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court6 = todayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court7 = todayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court8 = todayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court9 = todayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered7Court10 = todayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

//DAY 1


const todayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered8Court1 = todayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const todayfiltered8Court2 = todayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const todayfiltered8Court3 = todayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court4 = todayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court5 = todayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court6 = todayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court7 = todayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court8 = todayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court9 = todayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered8Court10 = todayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

//HOUR 9

const filtered9 = results.filter(result => result.time === 9)


const todayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

const todayfiltered9Court1 = todayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const todayfiltered9Court2 = todayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const todayfiltered9Court3 = todayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court4 = todayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court5 = todayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court6 = todayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court7 = todayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court8 = todayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court9 = todayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered9Court10 = todayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

//HOUR 10

const filtered10 = results.filter(result => result.time === 10)

const todayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered10Court1 = todayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const todayfiltered10Court2 = todayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const todayfiltered10Court3 = todayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court4 = todayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court5 = todayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court6 = todayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court7 = todayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court8 = todayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court9 = todayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered10Court10 = todayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
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
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const todayfiltered11Court2 = todayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const todayfiltered11Court3 = todayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court4 = todayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court5 = todayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court6 = todayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court7 = todayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court8 = todayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court9 = todayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const todayfiltered11Court10 = todayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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