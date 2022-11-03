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
    const filtered18 = results.filter(result => result.time === 18).map(result => <div key={result.id} className={styles.reservedBlock}>
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
    const filtered20 = results.filter(result => result.time === 20).map(result => <div key={result.id} className={styles.reservedBlock}>
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
    const filtered21 = results.filter(result => result.time === 21).map(result => <div key={result.id} className={styles.reservedBlock}>
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
    const filtered22 = results.filter(result => result.time === 22).map(result => <div key={`${result.date.substring(5,7)}/${result.date.substring(8,10)}`} className={styles.reservedBlock}>
      <h4>RESERVED</h4>
      <p>Type: {result.type_of_play}</p>
      <p>Group Size: {result.size}</p>
      <p>Skill Level: {result.skill_level}</p>
      <p>Court Number: {result.court_number_id}</p>
      <p>{result.user2_id ? result.user2_id : <button onClick={reserveSpotUser2}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button onClick={reserveSpotUser3}>sign up!</button>}</p>
      <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button onClick={reserveSpotUser4}>sign up!</button>}</p>
      <p value={`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}>{`${result.date.substring(5,7)}/${result.date.substring(8,10)}`}</p>
    </div>)

      console.log(filtered21)
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
              <td className={styles.reservationBlock} value="6TODAY">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="6TOMORROW">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="6DAY3">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="6DAY4">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="6DAY5">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="6DAY6">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="6DAY7">{filtered6.length !== 0 ? filtered6 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
              <td className={styles.reservationBlock} value="7TODAY">{filtered7.length !== 0 ? filtered7 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="7TOMORROW">{filtered7.length !== 0 ? filtered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="7DAY3">{filtered7.length !== 0? filtered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="7DAY4">{filtered7.length !== 0 ? filtered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="7DAY5">{filtered7.length !== 0 ? filtered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="7DAY6">{filtered7.length !== 0 ? filtered7 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="7DAY7">{filtered7.length !== 0 ? filtered7 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
              <td className={styles.reservationBlock} value="8TODAY">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="8TOMORROW">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="8DAY3">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="8DAY4">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="8DAY5">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="8DAY6">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="8DAY7">{filtered8.length !== 0 ? filtered8 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              <td className={styles.reservationBlock} value="9TODAY">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="9TOMORROW">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="9DAY3">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="9DAY4">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="9DAY5">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="9DAY6">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="9DAY7">{filtered9.length !== 0 ? filtered9 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              <td className={styles.reservationBlock} value="10TODAY">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="10TOMORROW">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="10DAY3">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="10DAY4">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="10DAY5">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="10DAY6">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="10DAY7">{filtered10.length !== 0 ? filtered10 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              <td className={styles.reservationBlock} value="11TODAY">{filtered11.length !== 0 ? filtered11 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="11TOMORROW">{filtered11.length !== 0 ? filtered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="11DAY3">{filtered11.length !== 0? filtered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="11DAY4">{filtered11.length !== 0 ? filtered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="11DAY5">{filtered11.length !== 0 ? filtered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="11DAY6">{filtered11.length !== 0 ? filtered11 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="11DAY7">{filtered11.length !== 0 ? filtered11 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              <td className={styles.reservationBlock} value="12TODAY">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="12TOMORROW">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="12DAY3">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="12DAY4">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="12DAY5">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="12DAY6">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="12DAY7">{filtered12.length !== 0 ? filtered12 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              <td className={styles.reservationBlock} value="13TODAY">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="13TOMORROW">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="13DAY3">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="13DAY4">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="13DAY5">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="13DAY6">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="13DAY7">{filtered13.length !== 0 ? filtered13 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              <td className={styles.reservationBlock} value="14TODAY">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="14TOMORROW">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="14DAY3">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="14DAY4">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="14DAY5">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="14DAY6">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="14DAY7">{filtered14.length !== 0 ? filtered14 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              <td className={styles.reservationBlock} value="15TODAY">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="15TOMORROW">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="15DAY3">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="15DAY4">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="15DAY5">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="15DAY6">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="15DAY7">{filtered15.length !== 0 ? filtered15 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
              <td className={styles.reservationBlock} value="16TODAY">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="16TOMORROW">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="16DAY3">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="16DAY4">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="16DAY5">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="16DAY6">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="16DAY7">{filtered16.length !== 0 ? filtered16 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
              <td className={styles.reservationBlock} value="17TODAY">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="17TOMORROW">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="17DAY3">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="17DAY4">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="17DAY5">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="17DAY6">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="17DAY7">{filtered17.length !== 0 ? filtered17 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
              <td className={styles.reservationBlock} value="18TODAY">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="18TOMORROW">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="18DAY3">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="18DAY4">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="18DAY5">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="18DAY6">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="18DAY7">{filtered18.length !== 0 ? filtered18 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
              <td className={styles.reservationBlock} value="19TODAY">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="19TOMORROW">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="19DAY3">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="19DAY4">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="19DAY5">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="19DAY6">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="19DAY7">{filtered19.length !== 0 ? filtered19 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
              <td className={styles.reservationBlock} value="20TODAY">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="20TOMORROW">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="20DAY3">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="20DAY4">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="20DAY5">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="20DAY6">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="20DAY7">{filtered20.length !== 0 ? filtered20 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
              <td className={styles.reservationBlock} value="21TODAY">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="21TOMORROW">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="21DAY3">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="21DAY4">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="21DAY5">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="21DAY6">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="21DAY7">{filtered21.length !== 0 ? filtered21 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
              <td className={styles.reservationBlock} value="22TODAY">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock} value="22TOMORROW">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="22DAY3">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="22DAY4">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="22DAY5">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="22DAY6">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock} value="22DAY7">{filtered22.length !== 0 ? filtered22 : <Link to='/create'>OPEN</Link>}</th>
            </tr>
          </tbody>
        </table>
    </div>
  )
}