import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'
import CourtSchedule from './CourtSchedule';


export default function ReservationCalendar({ user }) {
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

  console.log(court)
 

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


// HOUR 6  


    const filtered6 = results.filter(result => result.time === 6)


//DAY 1


    const todayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered6Court1 = todayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered6Court2 = todayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered6Court3 = todayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court4 = todayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court5 = todayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court6 = todayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court7 = todayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court8 = todayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court9 = todayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered6Court10 = todayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

// DAY 2
    
const tomorrowfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd'))

const tomorrowfiltered6Court1 = tomorrowfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered6Court2 = tomorrowfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const tomorrowfiltered6Court3 = tomorrowfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court4 = tomorrowfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court5 = tomorrowfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court6 = tomorrowfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court7 = tomorrowfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court8 = tomorrowfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court9 = tomorrowfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const tomorrowfiltered6Court10 = tomorrowfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

// DAY 3
    
      const thirdDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd'))
    
      const thirdDayfiltered6Court1 = thirdDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

      const thirdDayfiltered6Court2 = thirdDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

const thirdDayfiltered6Court3 = thirdDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court4 = thirdDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court5 = thirdDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court6 = thirdDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court7 = thirdDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court8 = thirdDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court9 = thirdDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const thirdDayfiltered6Court10 = thirdDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

  // DAY 4
    
      const fourthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered6Court1 = fourthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

      const fourthDayfiltered6Court2 = fourthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

const fourthDayfiltered6Court3 = fourthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court4 = fourthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court5 = fourthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court6 = fourthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court7 = fourthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court8 = fourthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court9 = fourthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fourthDayfiltered6Court10 = fourthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

      // DAY 5
    
      const fifthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd'))

      const fifthDayfiltered6Court1 = fifthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

      const fifthDayfiltered6Court2 = fifthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

const fifthDayfiltered6Court3 = fifthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court4 = fifthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court5 = fifthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court6 = fifthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court7 = fifthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court8 = fifthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court9 = fifthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const fifthDayfiltered6Court10 = fifthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
    
    //DAY 6
        
      const sixthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd'))

      const sixthDayfiltered6Court1 = sixthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

      const sixthDayfiltered6Court2 = sixthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

const sixthDayfiltered6Court3 = sixthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court4 = sixthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court5 = sixthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court6 = sixthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court7 = sixthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court8 = sixthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court9 = sixthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const sixthDayfiltered6Court10 = sixthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
    

    // DAY 7
        
      const lastDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

      const lastDayfiltered6Court1 = lastDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

      const lastDayfiltered6Court2 = lastDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)

const lastDayfiltered6Court3 = lastDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court4 = lastDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court5 = lastDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court6 = lastDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court7 = lastDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court8 = lastDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court9 = lastDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

const lastDayfiltered6Court10 = lastDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

// HOUR 7


    const filtered7 = results.filter(result => result.time === 7)

// DAY 1
    const todayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered7Court1 = todayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered7Court2 = todayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered7Court3 = todayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court4 = todayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court5 = todayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court6 = todayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court7 = todayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court8 = todayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court9 = todayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered7Court10 = todayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

    // DAY 2 
      const tomorrowfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      //Day 3
    
      const thirdDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    // DAY 4
    
      const fourthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      //DAY 5
    
      const fifthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 6
        
      const sixthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 8


    const filtered8 = results.filter(result => result.time === 8)

    //DAY 1


    const todayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered8Court1 = todayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered8Court2 = todayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered8Court3 = todayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court4 = todayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court5 = todayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court6 = todayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court7 = todayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court8 = todayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court9 = todayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered8Court10 = todayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      //DAY 2
    
      const tomorrowfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      //DAY 3
    
      const thirdDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 4

    
      const fourthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
//DAY 5

      const fifthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)


//DAY 6
    
        
      const sixthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

// HOUR 9


    const filtered9 = results.filter(result => result.time === 9)

    //DAY 1


    const todayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered9Court1 = todayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered9Court2 = todayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered9Court3 = todayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court4 = todayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court5 = todayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court6 = todayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court7 = todayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court8 = todayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court9 = todayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered9Court10 = todayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)
    
// DAY 2 

      const tomorrowfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 4


      const fourthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      //DAY 6
    
        
      const sixthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 10


    const filtered10 = results.filter(result => result.time === 10)

    //DAY 1

    const todayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered10Court1 = todayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered10Court2 = todayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered10Court3 = todayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court4 = todayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court5 = todayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court6 = todayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court7 = todayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court8 = todayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court9 = todayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered10Court10 = todayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
              
    //DAY 6



      const sixthDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7    

      const lastDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 11


    const filtered11 = results.filter(result => result.time === 11)

    //DAY 1


    const todayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered11Court1 = todayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered11Court2 = todayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered11Court3 = todayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court4 = todayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court5 = todayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court6 = todayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court7 = todayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court8 = todayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court9 = todayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered11Court10 = todayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)
    
// DAY 2 

      const tomorrowfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
        
//DAY 6

      const sixthDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 12


    const filtered12 = results.filter(result => result.time === 12)

    //DAY 1

    const todayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered12Court1 = todayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered12Court2 = todayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered12Court3 = todayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court4 = todayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court5 = todayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court6 = todayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court7 = todayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court8 = todayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court9 = todayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered12Court10 = todayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)


      
    //DAY 5
    
      const fifthDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 13


    const filtered13 = results.filter(result => result.time === 13)

    //DAY 1


    const todayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered13Court1 = todayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered13Court2 = todayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered13Court3 = todayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court4 = todayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court5 = todayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court6 = todayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court7 = todayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court8 = todayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court9 = todayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered13Court10 = todayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      
    //DAY 4

      const fourthDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 14


    const filtered14 = results.filter(result => result.time === 14)

    //DAY 1

    const todayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))


      =const todayfiltered14Court1 = todayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)
  
      const todayfiltered14Court2 = todayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4>RESERVED</h4>
        <p>Type: {result.type_of_play}</p>
        <p>Group Size: {result.size}</p>
        <p>Skill Level: {result.skill_level}</p>
        <p>Court Number: {result.court_number_id}</p>
        <p>Spots Available:</p>
        <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
        <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
        </div>)
  
  const todayfiltered14Court3 = todayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court4 = todayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court5 = todayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court6 = todayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court7 = todayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court8 = todayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court9 = todayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
  const todayfiltered14Court10 = todayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>Spots Available:</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

      // DAY 2 
    
      const tomorrowfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

          
    //DAY 5


      const fifthDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 15


    const filtered15 = results.filter(result => result.time === 15)

    //DAY 1

    const todayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered15Court1 = todayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered15Court2 = todayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered15Court3 = todayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court4 = todayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court5 = todayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court6 = todayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court7 = todayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court8 = todayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court9 = todayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered15Court10 = todayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
// DAY 3

      const thirdDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 16


    const filtered16 = results.filter(result => result.time === 16)

    //DAY 1


    const todayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered16Court1 = todayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered16Court2 = todayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered16Court3 = todayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court4 = todayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court5 = todayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court6 = todayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court7 = todayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court8 = todayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court9 = todayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered16Court10 = todayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      
    //DAY 4

      const fourthDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7    

      const lastDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 17


    const filtered17 = results.filter(result => result.time === 17)

    //DAY 1

    const todayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))


    const todayfiltered17Court1 = todayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered17Court2 = todayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered17Court3 = todayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court4 = todayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court5 = todayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court6 = todayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court7 = todayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court8 = todayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court9 = todayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered17Court10 = todayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)
    
// DAY 2 

      const tomorrowfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      
    //DAY 4

      const fourthDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)


      
    //DAY 5
    
      const fifthDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
      //DAY 6
        
      const sixthDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 18


    const filtered18 = results.filter(result => result.time === 18)

    //DAY 1


    const todayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered18Court1 = todayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered18Court2 = todayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered18Court3 = todayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court4 = todayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court5 = todayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court6 = todayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court7 = todayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court8 = todayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court9 = todayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered18Court10 = todayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      const thirdDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)


      
    //DAY 5
    
      const fifthDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 6    


      const sixthDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    //DAY 7
        
      const lastDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


 // HOUR 19


    const filtered19 = results.filter(result => result.time === 19)

    //DAY 1

    const todayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered19Court1 = todayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered19Court2 = todayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered19Court3 = todayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court4 = todayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court5 = todayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court6 = todayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court7 = todayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court8 = todayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court9 = todayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered19Court10 = todayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      
    //DAY 4

      const fourthDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

            
    //DAY 5
    
      const fifthDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
        
      const lastDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 20


    const filtered20 = results.filter(result => result.time === 20)


    //DAY 1

    const todayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered20Court1 = todayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered20Court2 = todayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered20Court3 = todayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court4 = todayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court5 = todayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court6 = todayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court7 = todayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court8 = todayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court9 = todayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered20Court10 = todayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)


// DAY 2 
    
      const tomorrowfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
      
    //DAY 4

    
      const fourthDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

          
    //DAY 5


      const fifthDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 6
        
      const sixthDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)


      //DAY 7
    
        
      const lastDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


// HOUR 21


  const filtered21 = results.filter(result => result.time === 21)

  //DAY 1

  const todayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

  const todayfiltered21Court1 = todayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4>RESERVED</h4>
    <p>Type: {result.type_of_play}</p>
    <p>Group Size: {result.size}</p>
    <p>Skill Level: {result.skill_level}</p>
    <p>Court Number: {result.court_number_id}</p>
    <p>Spots Available:</p>
    <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
    </div>)

  const todayfiltered21Court2 = todayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4>RESERVED</h4>
    <p>Type: {result.type_of_play}</p>
    <p>Group Size: {result.size}</p>
    <p>Skill Level: {result.skill_level}</p>
    <p>Court Number: {result.court_number_id}</p>
    <p>Spots Available:</p>
    <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
    </div>)

const todayfiltered21Court3 = todayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court4 = todayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court5 = todayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court6 = todayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court7 = todayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court8 = todayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court9 = todayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered21Court10 = todayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)


// DAY 2 

  const tomorrowFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

  // DAY 3

  const thirdDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
  
    //DAY 4


  const fourthDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

        
    //DAY 5

  const fifthDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)


//DAY 6    


  const sixthDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)


//DAY 7
    
  const lastDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)
    

    // HOUR 22

    const filtered22 = results.filter(result => result.time === 22)

    //DAY 1


    const todayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd'))

    const todayfiltered22Court1 = todayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

    const todayfiltered22Court2 = todayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)

const todayfiltered22Court3 = todayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court4 = todayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court5 = todayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court6 = todayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court7 = todayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court8 = todayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court9 = todayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

const todayfiltered22Court10 = todayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4>RESERVED</h4>
<p>Type: {result.type_of_play}</p>
<p>Group Size: {result.size}</p>
<p>Skill Level: {result.skill_level}</p>
<p>Court Number: {result.court_number_id}</p>
<p>Spots Available:</p>
<p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
<p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
</div>)

      // DAY 2 
    
      const tomorrowfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

      // DAY 3
    
      const thirdDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      
    //DAY 4

      const fourthDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)

        
    //DAY 5
    
      const fifthDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)


      //DAY 6
    
        
      const sixthDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    

    //DAY 7
        
      const lastDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      </div>)


    // FUNCTIONS

 
    
    
  

  function reserveSpotUser2() {
    return "hi"
    /* patch request to pickleball.id with user id
      make SURE IT CANNOT OVERWRITE A USER ALREADY SIGNED UP
    */
  }

  function reserveSpotUser3() {
    return "hi"
    /* patch request to pickleball.id with user id
      make SURE IT CANNOT OVERWRITE A USER ALREADY SIGNED UP
    */
  }

  function reserveSpotUser4() {
    return "hi"
    /* patch request to pickleball.id with user id
      make SURE IT CANNOT OVERWRITE A USER ALREADY SIGNED UP
    */
  }

  

  return (
    <div className={styles.pickleContainer}>
      <h1>{court.name}</h1>
      <label>view another court:
      <select className={styles.categories} >
        <option value="jobs">jobs</option>
        <option value="services">services</option>
        <option value="housing">housing</option>
        <option value="community">community</option>
        <option value="events">events</option>
      </select>
      </label>
      <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRowDays}>
              <th></th>
              <th className={styles.tableHead}>{format(date, 'MM/dd')}</th>
              <th className={styles.tableHead}>{format(tomorrow, 'MM/dd')}</th>
              <th className={styles.tableHead}>{format(day3, 'MM/dd')}</th>
              <th className={styles.tableHead}>{format(day4, 'MM/dd')}</th>
              <th className={styles.tableHead}>{format(day5, 'MM/dd')}</th>
              <th className={styles.tableHead}>{format(day6, 'MM/dd')}</th>
              <th className={styles.tableHead}>{format(lastday, 'MM/dd')}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6AM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court1.length !== 0 ? tomorrowfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court2.length !== 0 ? tomorrowfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court3.length !== 0 ? tomorrowfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court4.length !== 0 ? tomorrowfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court5.length !== 0 ? tomorrowfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court6.length !== 0 ? tomorrowfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court7.length !== 0 ? tomorrowfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court8.length !== 0 ? tomorrowfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court9.length !== 0 ? tomorrowfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{tomorrowfiltered6Court10.length !== 0 ? tomorrowfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
                </th>
              <th className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{thirdDayfiltered6Court1.length !== 0 ? thirdDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court2.length !== 0 ? thirdDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court3.length !== 0 ? thirdDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court4.length !== 0 ? thirdDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court5.length !== 0 ? thirdDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court6.length !== 0 ? thirdDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court7.length !== 0 ? thirdDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court8.length !== 0 ? thirdDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court9.length !== 0 ? thirdDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{thirdDayfiltered6Court10.length !== 0 ? thirdDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
                </th>
              <th className={styles.reservationBlock}>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court1.length !== 0 ? fourthDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court2.length !== 0 ? fourthDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court3.length !== 0 ? fourthDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court4.length !== 0 ? fourthDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court5.length !== 0 ? fourthDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court6.length !== 0 ? fourthDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court7.length !== 0 ? fourthDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court8.length !== 0 ? fourthDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court9.length !== 0 ? fourthDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fourthDayfiltered6Court10.length !== 0 ? fourthDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
                </th>
              <th className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{fifthDayfiltered6Court1.length !== 0 ? fifthDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court2.length !== 0 ? fifthDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court3.length !== 0 ? fifthDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court4.length !== 0 ? fifthDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court5.length !== 0 ? fifthDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court6.length !== 0 ? fifthDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court7.length !== 0 ? fifthDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court8.length !== 0 ? fifthDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court9.length !== 0 ? fifthDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{fifthDayfiltered6Court10.length !== 0 ? fifthDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
                </th>
              <th className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{sixthDayfiltered6Court1.length !== 0 ? sixthDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court2.length !== 0 ? sixthDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court3.length !== 0 ? sixthDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court4.length !== 0 ? sixthDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court5.length !== 0 ? sixthDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court6.length !== 0 ? sixthDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court7.length !== 0 ? sixthDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court8.length !== 0 ? sixthDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court9.length !== 0 ? sixthDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{sixthDayfiltered6Court10.length !== 0 ? sixthDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
                </th>
              <th className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{lastDayfiltered6Court1.length !== 0 ? lastDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court2.length !== 0 ? lastDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court3.length !== 0 ? lastDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court4.length !== 0 ? lastDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court5.length !== 0 ? lastDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court6.length !== 0 ? lastDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court7.length !== 0 ? lastDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court8.length !== 0 ? lastDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court9.length !== 0 ? lastDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{lastDayfiltered6Court10.length !== 0 ? lastDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
                </th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered7.length !== 0 ? tomorrowfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered7.length !== 0 ? thirdDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered7.length !== 0 ? fourthDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered7.length !== 0 ? fifthDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered7.length !== 0 ? sixthDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered7.length !== 0 ? lastDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered8.length !== 0 ? tomorrowfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered8.length !== 0 ? thirdDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered8.length !== 0 ? fourthDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered8.length !== 0 ? fifthDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered8.length !== 0 ? sixthDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered8.length !== 0 ? lastDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered9.length !== 0 ? tomorrowfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered9.length !== 0 ? thirdDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered9.length !== 0 ? fourthDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered9.length !== 0 ? fifthDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered9.length !== 0 ? sixthDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered9.length !== 0 ? lastDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered10.length !== 0 ? tomorrowfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered10.length !== 0 ? thirdDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered10.length !== 0 ? fourthDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered10.length !== 0 ? fifthDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered10.length !== 0 ? sixthDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered10.length !== 0 ? lastDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered11.length !== 0 ? tomorrowfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered11.length !== 0 ? thirdDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered11.length !== 0 ? fourthDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered11.length !== 0 ? fifthDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered11.length !== 0 ? sixthDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered11.length !== 0 ? lastDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered12.length !== 0 ? tomorrowfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered12.length !== 0 ? thirdDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered12.length !== 0 ? fourthDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered12.length !== 0 ? fifthDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered12.length !== 0 ? sixthDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered12.length !== 0 ? lastDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered6Court1.length !== 0 ? todayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court2.length !== 0 ? todayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court3.length !== 0 ? todayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court4.length !== 0 ? todayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court5.length !== 0 ? todayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court6.length !== 0 ? todayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court7.length !== 0 ? todayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court8.length !== 0 ? todayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court9.length !== 0 ? todayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered6Court10.length !== 0 ? todayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered13.length !== 0 ? tomorrowfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered13.length !== 0 ? thirdDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered13.length !== 0 ? fourthDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered13.length !== 0 ? fifthDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered13.length !== 0 ? sixthDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered13.length !== 0 ? lastDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered14Court1.length !== 0 ? todayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court2.length !== 0 ? todayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court3.length !== 0 ? todayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court4.length !== 0 ? todayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court5.length !== 0 ? todayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court6.length !== 0 ? todayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court7.length !== 0 ? todayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court8.length !== 0 ? todayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court9.length !== 0 ? todayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered14Court10.length !== 0 ? todayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered14.length !== 0 ? tomorrowfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered14.length !== 0 ? thirdDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered14.length !== 0 ? fourthDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered14.length !== 0 ? fifthDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered14.length !== 0 ? sixthDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered14.length !== 0 ? lastDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered15Court1.length !== 0 ? todayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court2.length !== 0 ? todayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court3.length !== 0 ? todayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court4.length !== 0 ? todayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court5.length !== 0 ? todayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court6.length !== 0 ? todayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court7.length !== 0 ? todayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court8.length !== 0 ? todayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court9.length !== 0 ? todayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered15Court10.length !== 0 ? todayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered15.length !== 0 ? tomorrowfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered15.length !== 0 ? thirdDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered15.length !== 0 ? fourthDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered15.length !== 0 ? fifthDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered15.length !== 0 ? sixthDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered15.length !== 0 ? lastDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered16Court1.length !== 0 ? todayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court2.length !== 0 ? todayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court3.length !== 0 ? todayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court4.length !== 0 ? todayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court5.length !== 0 ? todayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court6.length !== 0 ? todayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court7.length !== 0 ? todayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court8.length !== 0 ? todayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court9.length !== 0 ? todayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered16Court10.length !== 0 ? todayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered16.length !== 0 ? tomorrowfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered16.length !== 0 ? thirdDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered16.length !== 0 ? fourthDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered16.length !== 0 ? fifthDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered16.length !== 0 ? sixthDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered16.length !== 0 ? lastDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered17Court1.length !== 0 ? todayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court2.length !== 0 ? todayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court3.length !== 0 ? todayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court4.length !== 0 ? todayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court5.length !== 0 ? todayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court6.length !== 0 ? todayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court7.length !== 0 ? todayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court8.length !== 0 ? todayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court9.length !== 0 ? todayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered17Court10.length !== 0 ? todayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered17.length !== 0 ? tomorrowfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered17.length !== 0 ? thirdDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered17.length !== 0 ? fourthDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered17.length !== 0 ? fifthDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered17.length !== 0 ? sixthDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered17.length !== 0 ? lastDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered18Court1.length !== 0 ? todayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court2.length !== 0 ? todayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court3.length !== 0 ? todayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court4.length !== 0 ? todayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court5.length !== 0 ? todayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court6.length !== 0 ? todayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court7.length !== 0 ? todayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court8.length !== 0 ? todayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court9.length !== 0 ? todayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered18Court10.length !== 0 ? todayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered18.length !== 0 ? tomorrowfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered18.length !== 0 ? thirdDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered18.length !== 0 ? fourthDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered18.length !== 0 ? fifthDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered18.length !== 0 ? sixthDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered18.length !== 0 ? lastDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered19Court1.length !== 0 ? todayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court2.length !== 0 ? todayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court3.length !== 0 ? todayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court4.length !== 0 ? todayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court5.length !== 0 ? todayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court6.length !== 0 ? todayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court7.length !== 0 ? todayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court8.length !== 0 ? todayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court9.length !== 0 ? todayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered19Court10.length !== 0 ? todayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered19.length !== 0 ? tomorrowfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered19.length !== 0 ? thirdDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered19.length !== 0 ? fourthDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered19.length !== 0 ? fifthDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered19.length !== 0 ? sixthDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered19.length !== 0 ? lastDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered20Court1.length !== 0 ? todayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court2.length !== 0 ? todayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court3.length !== 0 ? todayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court4.length !== 0 ? todayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court5.length !== 0 ? todayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court6.length !== 0 ? todayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court7.length !== 0 ? todayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court8.length !== 0 ? todayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court9.length !== 0 ? todayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered20Court10.length !== 0 ? todayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered20.length !== 0 ? tomorrowfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered20.length !== 0 ? thirdDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered20.length !== 0 ? fourthDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered20.length !== 0 ? fifthDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered20.length !== 0 ? sixthDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered20.length !== 0 ? lastDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered21Court1.length !== 0 ? todayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court2.length !== 0 ? todayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court3.length !== 0 ? todayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court4.length !== 0 ? todayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court5.length !== 0 ? todayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court6.length !== 0 ? todayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court7.length !== 0 ? todayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court8.length !== 0 ? todayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court9.length !== 0 ? todayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered21Court10.length !== 0 ? todayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
              <td className={styles.reservationBlock}>
              <div className={styles.courtBlock}>{todayfiltered22Court1.length !== 0 ? todayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court2.length !== 0 ? todayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court3.length !== 0 ? todayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court4.length !== 0 ? todayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court5.length !== 0 ? todayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court6.length !== 0 ? todayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court7.length !== 0 ? todayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court8.length !== 0 ? todayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court9.length !== 0 ? todayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div>
                <div className={styles.courtBlock}>{todayfiltered22Court10.length !== 0 ? todayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div>
              </td>
              <th className={styles.reservationBlock}>{tomorrowfiltered22.length !== 0 ? tomorrowfiltered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered22.length !== 0 ? thirdDayfiltered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered22.length !== 0 ? fourthDayfiltered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered22.length !== 0 ? fifthDayfiltered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered22.length !== 0 ? sixthDayfiltered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered22.length !== 0 ? lastDayfiltered22 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
          </tbody>
        </table>
    </div>
  )
}