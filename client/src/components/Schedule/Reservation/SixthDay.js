import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function SixthDay() {

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
 

  const day6 = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


  // HOUR 6  


  const filtered6 = results.filter(result => result.time === 6)

 //DAY 6
        
 const sixthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

 const sixthDayfiltered6Court1 = sixthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
   <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
   <p className={styles.reserveP}>Type: {result.type_of_play}</p>
   <p className={styles.reserveP}>Group Size: {result.size}</p>
   <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
   
   <p className={styles.reserveP}>Spots Available:</p>
   <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
   </div>)

 const sixthDayfiltered6Court2 = sixthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
   <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
   <p className={styles.reserveP}>Type: {result.type_of_play}</p>
   <p className={styles.reserveP}>Group Size: {result.size}</p>
   <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
   
   <p className={styles.reserveP}>Spots Available:</p>
   <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
   <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
   </div>)

const sixthDayfiltered6Court3 = sixthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court4 = sixthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court5 = sixthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court6 = sixthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court7 = sixthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court8 = sixthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court9 = sixthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered6Court10 = sixthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

   //DAY 6
        
   const sixthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

   const sixthDayfiltered7Court1 = sixthDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)

   const sixthDayfiltered7Court2 = sixthDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)

const sixthDayfiltered7Court3 = sixthDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court4 = sixthDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court5 = sixthDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court6 = sixthDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court7 = sixthDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court8 = sixthDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court9 = sixthDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered7Court10 = sixthDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    

//DAY 6
    
        
const sixthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

const sixthDayfiltered8Court1 = sixthDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered8Court2 = sixthDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
  
  <p className={styles.reserveP}>Spots Available:</p>
  <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered8Court3 = sixthDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court4 = sixthDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court5 = sixthDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court6 = sixthDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court7 = sixthDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court8 = sixthDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court9 = sixthDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>

<p className={styles.reserveP}>Spots Available:</p>
<p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
</div>)

const sixthDayfiltered8Court10 = sixthDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


         //DAY 6
    
        
         const sixthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))
    
         const sixthDayfiltered9Court1 = sixthDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
           <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
           <p className={styles.reserveP}>Type: {result.type_of_play}</p>
           <p className={styles.reserveP}>Group Size: {result.size}</p>
           <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
           
           <p className={styles.reserveP}>Spots Available:</p>
           <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
           </div>)
   
         const sixthDayfiltered9Court2 = sixthDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
           <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
           <p className={styles.reserveP}>Type: {result.type_of_play}</p>
           <p className={styles.reserveP}>Group Size: {result.size}</p>
           <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
           
           <p className={styles.reserveP}>Spots Available:</p>
           <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
           <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
           </div>)
   
   const sixthDayfiltered9Court3 = sixthDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court4 = sixthDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court5 = sixthDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court6 = sixthDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court7 = sixthDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court8 = sixthDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court9 = sixthDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
     <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
     <p className={styles.reserveP}>Type: {result.type_of_play}</p>
     <p className={styles.reserveP}>Group Size: {result.size}</p>
     <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
     
     <p className={styles.reserveP}>Spots Available:</p>
     <p className={styles.reserveP}>{result.user2_id ? "taken" : <button onClick={(e) => reserveSpotUser2} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? "taken" : <button onClick={(e) => reserveSpotUser3} value={result.id}>sign up!</button>}</p>
     <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? "taken" : <button onClick={(e) => reserveSpotUser4} value={result.id}>sign up!</button>}</p>
     </div>)
   
   const sixthDayfiltered9Court10 = sixthDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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