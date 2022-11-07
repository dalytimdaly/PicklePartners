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

  console.log(postObject.id)


  const navigate = useNavigate();
  
  const [userId, setUserId] = useState("")
  const [courtId, setCourtId] = useState("")
  const [type, setType] = useState("")
  const [size, setSize] = useState("")
  const [time, setTime] = useState(0)
  const [dateOfGame, setDateOfGame] = useState(false)
  const [courtNumber, setCourtNumber] = useState("")
  const [skillLevel, setSkillLevel] = useState("")
  

  function handleCourtId(event) {
    setCourtId(event.target.value)
  }

  function handleType(event) {
    setType(event.target.value)
  }

  function handleSkillLevel(event) {
    setSkillLevel(event.target.value)
  }

  function handleSize(event) {
    setSize(event.target.value)
  }

  function handleTime(event) {
    setTime(event.target.value)
  }

  function handleDate(event) {
    setDateOfGame(event.target.value)
  }

  function handleCourtNumber(event) {
    setCourtNumber(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    const createdPickle = {
        "user_id": userId,
        "court_id": courtId,
        "type": type,
        "size": size,
        "time": time,
        "date": date,
        "skill_level": skillLevel,
        "court_number_id": courtNumber,
        "user2_id": 0,
        "user3_id": 0,
        "user4_id": 0
    }
    console.log(createdPickle)
/*
    fetch("/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdPickle),
    })
    .then(r => r.json())
    .then((data) => {
      navigate(`/posts/${data.id}`)
    })
    */
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

  console.log(format(date, 'eee, MM/dd'))

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
      <label for="skill" className={styles.citylabel}>court number:
      <input type='text' className={styles.city} onChange={handleCourtNumber}/>
      </label>
      </div> 
      <button className={styles.button} type="submit">Submit Reservation</button>
      </form>
    </div>
  )

}