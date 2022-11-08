import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { add, format } from 'date-fns'



export default function ReservationCalendar({ user }) {
  const [ results, setResults ] = useState([]);
  const [ court, setCourt ] = useState([])
  const [ errors, setErrors ] = useState([]);
  

  const courtId = window.location.href.toString().substring(31,33).replace("/","")
  console.log(courtId)

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
    <div>
     
    <Link to={`/schedule/${courtId}/today`}>{format(date, 'MM/dd')}</Link>
    <br></br>
    <Link to={`/schedule/${courtId}/today`}>{format(tomorrow, 'MM/dd')}</Link>
    <br></br>
    <Link to={`/schedule/${courtId}/today`}>{format(day3, 'MM/dd')}</Link>
    <br></br>
    <Link to={`/schedule/${courtId}/today`}>{format(day4, 'MM/dd')}</Link>
    <br></br>
    <Link to={`/schedule/${courtId}/today`}>{format(day5, 'MM/dd')}</Link>
    <br></br>
    <Link to={`/schedule/${courtId}/today`}>{format(day6, 'MM/dd')}</Link>
    <br></br>
    <Link to={`/schedule/${courtId}/today`}>{format(lastday, 'MM/dd')}</Link>
    <br></br>
    </div>
  )
}