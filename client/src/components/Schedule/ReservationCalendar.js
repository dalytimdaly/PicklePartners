import styles from './ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { add, format } from 'date-fns'



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




    // FUNCTIONS

    
  

  function reserveSpotUser2(event) {
    console.log(event.target.value)
    console.log("hi")
    /*
      event.preventDefault()
  
      const editedPlayer = {
          "user2_id": user.id
      }
  
      fetch(`/pickleballs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPlayer),
      })
      .then(r => r.json())
      .then((data) => {
        window.location.reload()
      })
      */
    }
  

  function reserveSpotUser3(event) {
    console.log(event.target.value)
    console.log("hi")
    /*
      event.preventDefault()
  
      const editedPlayer = {
        "user3_id": user.id
    }

    fetch(`/pickleballs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlayer),
    })
    .then(r => r.json())
    .then((data) => {
      window.location.reload()
    })
    */
  }

  function reserveSpotUser4(event) {
    console.log(event.target.value)
    console.log("hi")
    /*
    event.preventDefault()
  
      const editedPlayer = {
        "user4_id": user.id
    }

    fetch(`/pickleballs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlayer),
    })
    .then(r => r.json())
    .then((data) => {
      window.location.reload()
    })
    */
  }

  

  return (
    <div>
    <Link>Reservations {date}</Link>
    <Link>Reservations {tomorrow}</Link>
    <Link>Reservations {day3}</Link>
    <Link>Reservations {day4}</Link>
    <Link>Reservations {day5}</Link>
    <Link>Reservations {day6}</Link>
    <Link>Reservations {day7}</Link>
    </div>
  )
}