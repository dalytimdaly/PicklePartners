import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'


export default function ReservationCalendar({ user }) {
  const [ results, setResults ] = useState([]);
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

  const reservation = results.map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4>RESERVED</h4>
    <p>Type: {result.type_of_play}</p>
    <p>Group Size: {result.size}</p>
    <p>Skill Level: {result.skill_level}</p>
    <p>Court Number: {result.court_number_id}</p>
    <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
    <p>{result.time}</p>
    <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
  </div>)

    const filtered6 = results.filter(result => result.time === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)
    const filtered7 = results.filter(result => result.time === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{result.date.substring(5,10)}</p>
    </div>)
    const filtered8 = results.filter(result => result.time === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{result.date.substring(5,10)}</p>
    </div>)
    const filtered9 = results.filter(result => result.time === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)
    const filtered10 = results.filter(result => result.time === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)

    

// HOUR 11

    const filtered11 = results.filter(result => result.time === 11).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)


// HOUR 12


    const filtered12 = results.filter(result => result.time === 12).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)


// HOUR 13


    const filtered13 = results.filter(result => result.time === 13).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)


// HOUR 14

    const filtered14 = results.filter(result => result.time === 14).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)

// HOUR 15

    const filtered15 = results.filter(result => result.time === 15).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)


// HOUR 16


    const filtered16 = results.filter(result => result.time === 16).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)

// HOUR 17

    const filtered17 = results.filter(result => result.time === 17).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)

// HOUR 18

    const filtered18 = results.filter(result => result.time === 18)


 // HOUR 19


    const filtered19 = results.filter(result => result.time === 19).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)


// HOUR 20


    const filtered20 = results.filter(result => result.time === 20)


// HOUR 21

  const filtered21 = results.filter(result => result.time === 21)
    const todayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(date, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p></p>
    </div>)

    const tomorrowFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(tomorrow, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p></p>
    </div>)

    const thirdDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day3, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p>{result.time}</p>
      <p></p>
    </div>)


  const fourthDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  <p>{result.time}</p>
  <p></p>
  </div>)

  const fifthDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day5, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  <p>{result.time}</p>
  <p></p>
  </div>)

    
  const sixthDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day6, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4>RESERVED</h4>
  <p>Type: {result.type_of_play}</p>
  <p>Group Size: {result.size}</p>
  <p>Skill Level: {result.skill_level}</p>
  <p>Court Number: {result.court_number_id}</p>
  <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
  <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
  <p>{result.time}</p>
  <p></p>
  </div>)

    
  const lastDayFiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd')).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4>RESERVED</h4>
    <p>Type: {result.type_of_play}</p>
    <p>Group Size: {result.size}</p>
    <p>Skill Level: {result.skill_level}</p>
    <p>Court Number: {result.court_number_id}</p>
    <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
    </div>)
    

    // HOUR 22

    const filtered22 = results.filter(result => result.time === 22)

      console.log(lastday)
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
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
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
              <td className={styles.reservationBlock}>{todayFiltered21.length !== 0 ? todayFiltered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{tomorrowFiltered21.length !== 0 ? tomorrowFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{thirdDayFiltered21.length !== 0 ? thirdDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fourthDayFiltered21.length !== 0 ? fourthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{fifthDayFiltered21.length !== 0 ? fifthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{sixthDayFiltered21.length !== 0 ? sixthDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{lastDayFiltered21.length !== 0 ? lastDayFiltered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
          </tbody>
        </table>
    </div>
  )
}