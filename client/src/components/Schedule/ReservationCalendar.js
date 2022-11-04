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


    const todayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      const tomorrowfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      const thirdDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
    
      const fourthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
      const fifthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
        
      const sixthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
        
      const lastDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
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


    const todayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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

    const todayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


    const todayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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


  const todayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  </div>)

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


    const todayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>Spots Available:</p>
      <p>{result.user2_id ? "taken" : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? "taken" : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? "taken" : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      
      </div>)
    
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
              <td className={styles.reservationBlock}>{todayfiltered6.length !== 0 ? todayfiltered6 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered6.length !== 0 ? tomorrowfiltered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered6.length !== 0 ? thirdDayfiltered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered6.length !== 0 ? fourthDayfiltered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered6.length !== 0 ? fifthDayfiltered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered6.length !== 0 ? sixthDayfiltered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered6.length !== 0 ? lastDayfiltered6 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
              <td className={styles.reservationBlock}>{todayfiltered7.length !== 0 ? todayfiltered7 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered7.length !== 0 ? tomorrowfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered7.length !== 0 ? thirdDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered7.length !== 0 ? fourthDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered7.length !== 0 ? fifthDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered7.length !== 0 ? sixthDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered7.length !== 0 ? lastDayfiltered7 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
              <td className={styles.reservationBlock}>{todayfiltered8.length !== 0 ? todayfiltered8 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered8.length !== 0 ? tomorrowfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered8.length !== 0 ? thirdDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered8.length !== 0 ? fourthDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered8.length !== 0 ? fifthDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered8.length !== 0 ? sixthDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered8.length !== 0 ? lastDayfiltered8 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              <td className={styles.reservationBlock}>{todayfiltered9.length !== 0 ? todayfiltered9 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered9.length !== 0 ? tomorrowfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered9.length !== 0 ? thirdDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered9.length !== 0 ? fourthDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered9.length !== 0 ? fifthDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered9.length !== 0 ? sixthDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered9.length !== 0 ? lastDayfiltered9 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              <td className={styles.reservationBlock}>{todayfiltered10.length !== 0 ? todayfiltered10 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered10.length !== 0 ? tomorrowfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered10.length !== 0 ? thirdDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered10.length !== 0 ? fourthDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered10.length !== 0 ? fifthDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered10.length !== 0 ? sixthDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered10.length !== 0 ? lastDayfiltered10 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              <td className={styles.reservationBlock}>{todayfiltered11.length !== 0 ? todayfiltered11 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered11.length !== 0 ? tomorrowfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered11.length !== 0 ? thirdDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered11.length !== 0 ? fourthDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered11.length !== 0 ? fifthDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered11.length !== 0 ? sixthDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered11.length !== 0 ? lastDayfiltered11 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              <td className={styles.reservationBlock}>{todayfiltered12.length !== 0 ? todayfiltered12 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered12.length !== 0 ? tomorrowfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered12.length !== 0 ? thirdDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered12.length !== 0 ? fourthDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered12.length !== 0 ? fifthDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered12.length !== 0 ? sixthDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered12.length !== 0 ? lastDayfiltered12 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              <td className={styles.reservationBlock}>{todayfiltered13.length !== 0 ? todayfiltered13 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered13.length !== 0 ? tomorrowfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered13.length !== 0 ? thirdDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered13.length !== 0 ? fourthDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered13.length !== 0 ? fifthDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered13.length !== 0 ? sixthDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered13.length !== 0 ? lastDayfiltered13 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              <td className={styles.reservationBlock}>{todayfiltered14.length !== 0 ? todayfiltered14 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered14.length !== 0 ? tomorrowfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered14.length !== 0 ? thirdDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered14.length !== 0 ? fourthDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered14.length !== 0 ? fifthDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered14.length !== 0 ? sixthDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered14.length !== 0 ? lastDayfiltered14 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              <td className={styles.reservationBlock}>{todayfiltered15.length !== 0 ? todayfiltered15 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered15.length !== 0 ? tomorrowfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered15.length !== 0 ? thirdDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered15.length !== 0 ? fourthDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered15.length !== 0 ? fifthDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered15.length !== 0 ? sixthDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered15.length !== 0 ? lastDayfiltered15 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
              <td className={styles.reservationBlock}>{todayfiltered16.length !== 0 ? todayfiltered16 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered16.length !== 0 ? tomorrowfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered16.length !== 0 ? thirdDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered16.length !== 0 ? fourthDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered16.length !== 0 ? fifthDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered16.length !== 0 ? sixthDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered16.length !== 0 ? lastDayfiltered16 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
              <td className={styles.reservationBlock}>{todayfiltered17.length !== 0 ? todayfiltered17 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered17.length !== 0 ? tomorrowfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered17.length !== 0 ? thirdDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered17.length !== 0 ? fourthDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered17.length !== 0 ? fifthDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered17.length !== 0 ? sixthDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered17.length !== 0 ? lastDayfiltered17 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
              <td className={styles.reservationBlock}>{todayfiltered18.length !== 0 ? todayfiltered18 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered18.length !== 0 ? tomorrowfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered18.length !== 0 ? thirdDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered18.length !== 0 ? fourthDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered18.length !== 0 ? fifthDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered18.length !== 0 ? sixthDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered18.length !== 0 ? lastDayfiltered18 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
              <td className={styles.reservationBlock}>{todayfiltered19.length !== 0 ? todayfiltered19 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered19.length !== 0 ? tomorrowfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered19.length !== 0 ? thirdDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered19.length !== 0 ? fourthDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered19.length !== 0 ? fifthDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered19.length !== 0 ? sixthDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered19.length !== 0 ? lastDayfiltered19 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
              <td className={styles.reservationBlock}>{todayfiltered20.length !== 0 ? todayfiltered20 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowfiltered20.length !== 0 ? tomorrowfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayfiltered20.length !== 0 ? thirdDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayfiltered20.length !== 0 ? fourthDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayfiltered20.length !== 0 ? fifthDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayfiltered20.length !== 0 ? sixthDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayfiltered20.length !== 0 ? lastDayfiltered20 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
              <td className={styles.reservationBlock}>{todayfiltered22.length !== 0 ? todayfiltered22 : <Link to='/create'>OPEN</Link>}</td>
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