import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'


export default function ReservationCalendar({ user }) {
  const [ results, setResults ] = useState([]);
  const [reserved, setReserved] = useState(false)
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
    <p>{result.court_number_id}</p>
    <p>{result.user2_id}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user3_id ? result.user3_id : <button>sign up!</button>}</p>
    <p className={result.size === 4 ? styles.userId : "display: none"}>{result.user4_id ? result.user4_id : <button>sign up!</button>}</p>
  </div>)

  function renderReservation() {
    return "hi"
  }

  
  return (
    <div className={styles.pickleContainer}>
      <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRowDays}>
              <th></th>
              <th className={styles.tableHead}>{format(date, 'MM/d')}</th>
              <th className={styles.tableHead}>{format(tomorrow, 'MM/d')}</th>
              <th className={styles.tableHead}>{format(day3, 'MM/d')}</th>
              <th className={styles.tableHead}>{format(day4, 'MM/d')}</th>
              <th className={styles.tableHead}>{format(day5, 'MM/d')}</th>
              <th className={styles.tableHead}>{format(day6, 'MM/d')}</th>
              <th className={styles.tableHead}>{format(lastday, 'MM/d')}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6AM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reservation[1]}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
              <td className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</td>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
              <th className={styles.reservationBlock}>{reserved ? renderReservation : <Link to='/create'>OPEN</Link>}</th>
            </tr>
          </tbody>
        </table>
    </div>
  )
}