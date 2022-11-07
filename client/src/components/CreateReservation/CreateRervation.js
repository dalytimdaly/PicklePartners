import styles from './CreateReservation.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { format, add } from 'date-fns'
export default function CreateReservation({user}) {

  const [postObject, setPostObject] = useState({})
  const [patch, setPatch] = useState(0);

  useEffect(() => {
    fetch(`/me`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
      setUserId(data.id)
    })
  }, [])




  const navigate = useNavigate();
  
  const [userId, setUserId] = useState("")
  const [courtId, setCourtId] = useState(1)
  const [type, setType] = useState("casual")
  const [size, setSize] = useState(2)
  const [time, setTime] = useState(6)
  const [dateOfGame, setDateOfGame] = useState("")
  const [courtNumber, setCourtNumber] = useState(1)
  const [skillLevel, setSkillLevel] = useState("beginner")
  

  function handleCourtId(event) {
    setCourtId(event.target.value)
    console.log(courtId)
  }

  function handleType(event) {
    setType(event.target.value)
    console.log(type)
  }

  function handleSkillLevel(event) {
    setSkillLevel(event.target.value)
    console.log(skillLevel)
  }

  function handleSize(event) {
    setSize(event.target.value)
    console.log(size)
  }

  function handleTime(event) {
    setTime(event.target.value)
    console.log(time)
  }

  function handleDate(event) {
    setDateOfGame(event.target.value)
    console.log(dateOfGame)
  }

  function handleCourtNumber(event) {
    setCourtNumber(event.target.value)
    console.log(courtNumber)
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    const createdPickle = {
        "user_id": userId,
        "court_id": courtId,
        "type": type,
        "size": size,
        "time": time,
        "date": dateOfGame,
        "skill_level": skillLevel,
        "court_number_id": courtNumber,
    }
    console.log(createdPickle)

    fetch("/pickleballs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdPickle),
    })
    .then(r => r.json())
    .then((data) => {
      navigate(`/account`)
    })
    
  }

  

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
    <div className={styles.post}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.groupcontainer}>
      <label for="court" className={styles.postlabel}>court
      <select className={styles.categories} onChange={handleCourtId}>
        <option value="1">Gates Tennis Center</option>
        <option value="2">Congress Park</option>
        <option value="3">Huston Lake Park</option>
        <option value="4">Eisenhower Recreation Center</option>
        <option value="5">Cook Park Recreation Center</option>
        <option value="6">Bear Valley Park Pickleball Courts</option>
        <option value="7">Washington Park Recreation Center</option>
        <option value="8">Sheridan Recreation Center</option>
        <option value="9">Meadow Creek Tennis and Fitness Club</option>
        <option value="10">Johnson Recreation Center</option>
        <option value="11">Martin Luther King Jr. Recreation Center</option>
        <option value="12">Apex Pickleball Courts</option>
        <option value="13">Cornerstone Park</option>
      </select>
      </label>
      <label for="size" className={styles.citylabel}>size
      <select className={styles.categories} onChange={handleSize}>
        <option value="2">Singles</option>
        <option value="4">Doubles</option>
      </select>
      </label>
      <label for="type" className={styles.pricelabel}>type of play
      <select className={styles.categories} onChange={handleType}>
        <option value="casual">casual</option>
        <option value="competitive">competitive</option>
        <option value="practice">practice</option>
      </select>
      </label>    
      <label for="skill" className={styles.citylabel}>skill level
      <select className={styles.categories} onChange={handleSkillLevel}>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="advanced">advanced</option>
        <option value="pro">pro</option>
      </select>
      </label>  
      <label for="postalcode" className={styles.postallabel}>time
      <select className={styles.categories} onChange={handleTime}>
        <option value="6">6AM</option>
        <option value="7">7AM</option>
        <option value="8">8AM</option>
        <option value="9">9AM</option>
        <option value="10">10AM</option>
        <option value="11">11AM</option>
        <option value="12">12</option>
        <option value="13">1PM</option>
        <option value="14">2PM</option>
        <option value="15">3PM</option>
        <option value="16">4PM</option>
        <option value="17">5PM</option>
        <option value="18">6PM</option>
        <option value="19">7PM</option>
        <option value="20">8PM</option>
        <option value="21">9PM</option>
        <option value="22">10PM</option>
      </select>
      </label>
      <label for="skill" className={styles.citylabel}>date
      <select className={styles.categories} onChange={handleDate}>
        <option value={format(date, 'eee MMM MM/dd y')}>{format(date, 'eee, MM/dd')}</option>
        <option value={format(tomorrow, 'eee MMM MM/dd y')}>{format(tomorrow, 'eee, MM/dd')}</option>
        <option value={format(day3, 'eee MMM MM/dd y')}>{format(day3, 'eee, MM/dd')}</option>
        <option value={format(day4, 'eee MMM MM/dd y')}>{format(day4, 'eee, MM/dd')}</option>
        <option value={format(day5, 'eee MMM MM/dd y')}>{format(day5, 'eee, MM/dd')}</option>
        <option value={format(day6, 'eee MMM MM/dd y')}>{format(day6, 'eee, MM/dd')}</option>
        <option value={format(lastday, 'eee MMM MM/dd y')}>{format(lastday, 'eee, MM/dd')}</option>
      </select>
      </label>
      <label for="skill" className={styles.citylabel}>court number:
      <select className={styles.categories} onChange={handleCourtNumber}>
        <option value="1">Court 1</option>
        <option value="2">Court 2</option>
        <option value="3">Court 3</option>
        <option value="4">Court 4</option>
        <option value="5">Court 5</option>
        <option value="6">Court 6</option>
        <option value="7">Court 7</option>
        <option value="8">Court 8</option>
        <option value="9">Court 9</option>
        <option value="10">Court 10</option>
      </select>
      </label>
      </div> 
      <button className={styles.button} type="submit">Submit Reservation</button>
      </form>
    </div>
  )

}