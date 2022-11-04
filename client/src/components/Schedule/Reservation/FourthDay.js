import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function FourthDay() {

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
 

  const day4 = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


  // HOUR 6  


  const filtered6 = results.filter(result => result.time === 6)

    // DAY 4
    
    const fourthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered6Court1 = fourthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const fourthDayfiltered6Court2 = fourthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const fourthDayfiltered6Court3 = fourthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court4 = fourthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court5 = fourthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court6 = fourthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court7 = fourthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court8 = fourthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court9 = fourthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered6Court10 = fourthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


    // DAY 4
    
    const fourthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered7Court1 = fourthDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const fourthDayfiltered7Court2 = fourthDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const fourthDayfiltered7Court3 = fourthDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court4 = fourthDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court5 = fourthDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court6 = fourthDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court7 = fourthDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court8 = fourthDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court9 = fourthDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered7Court10 = fourthDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    


    //DAY 4

    
    const fourthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered8Court1 = fourthDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const fourthDayfiltered8Court2 = fourthDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const fourthDayfiltered8Court3 = fourthDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court4 = fourthDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court5 = fourthDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court6 = fourthDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court7 = fourthDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court8 = fourthDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court9 = fourthDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered8Court10 = fourthDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


        
    //DAY 4


    const fourthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered9Court1 = fourthDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

    const fourthDayfiltered9Court2 = fourthDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
      
      <p className={styles.reserveP}>Spots Available:</p>
      <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
      </div>)

const fourthDayfiltered9Court3 = fourthDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court4 = fourthDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court5 = fourthDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court6 = fourthDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court7 = fourthDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court8 = fourthDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court9 = fourthDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const fourthDayfiltered9Court10 = fourthDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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