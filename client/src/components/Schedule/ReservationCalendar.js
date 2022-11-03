import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
              <td className={styles.tableDate}><a href="localhost:4000">6AM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">7AM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">8AM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">9AM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">10AM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">11AM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">12</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">1PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">2PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">3PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">4PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">5PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">6PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">7PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">8PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="localhost:4000">9PM</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}><a href="localhost:4000">10PM</a></td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}