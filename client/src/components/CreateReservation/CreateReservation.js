import styles from './CreateReservation.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { format, add } from 'date-fns'
export default function CreateReservation({user}) {

  const [postObject, setPostObject] = useState({})

  useEffect(() => {
    fetch(`/me`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
      setUserId(data.id)
      setDateOfGame(date)
    })
  }, [])

  const navigate = useNavigate();
  
  const [userId, setUserId] = useState("")
  const [courtId, setCourtId] = useState(1)
  const [type, setType] = useState("casual")
  const [size, setSize] = useState(2)
  const [time, setTime] = useState(6)
  const [courtNumber, setCourtNumber] = useState(1)
  const [skillLevel, setSkillLevel] = useState("beginner")
  const [court, setCourt] = useState({close_hour: 22})
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
    if(user !== null) {
    fetch(`/courts/${courtId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setCourt(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }
  }, [courtId])


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
    console.log(parseInt(time))
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
        "type_of_play": type,
        "size": size,
        "time": parseInt(time),
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

  const [dateOfGame, setDateOfGame] = useState(date)

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
        <h1 className={styles.h1Title}>Create your Pickleball Reservation</h1>
        <div className={styles.leftColumn}>
        <h4> Where would you like to play? </h4>
      <label for="court" className={styles.postlabel}>
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
      <h4>What size game do you want to play?</h4>
      <label for="size" className={styles.citylabel}>
      <select className={styles.categories} onChange={handleSize}>
        <option value="2">Singles</option>
        <option value="4">Doubles</option>
      </select>
      </label>
      <h4>What type of play do you want?</h4>
      <label for="type" className={styles.pricelabel}>
      <select className={styles.categories} onChange={handleType}>
        <option value="casual">casual</option>
        <option value="competitive">competitive</option>
        <option value="practice">practice</option>
      </select>
      </label>
      <h4>What skill level are you seeking?</h4>    
      <label for="skill" className={styles.citylabel}>
      <select className={styles.categories} onChange={handleSkillLevel}>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="advanced">advanced</option>
        <option value="pro">pro</option>
      </select>
      </label>
      </div>
      <div className={styles.rightColumn}>
      <h4>What day do you want to play?</h4>
      <label for="skill" className={styles.citylabel}>
      <select className={styles.categories} onChange={handleDate}>
        <option value={format(date, 'eee MMM dd y')}>{format(date, 'eee, MM/dd')}</option>
        <option value={format(tomorrow, 'eee MMM dd y')}>{format(tomorrow, 'eee, MM/dd')}</option>
        <option value={format(day3, 'eee MMM dd y')}>{format(day3, 'eee, MM/dd')}</option>
        <option value={format(day4, 'eee MMM dd y')}>{format(day4, 'eee, MM/dd')}</option>
        <option value={format(day5, 'eee MMM dd y')}>{format(day5, 'eee, MM/dd')}</option>
        <option value={format(day6, 'eee MMM dd y')}>{format(day6, 'eee, MM/dd')}</option>
        <option value={format(lastday, 'eee MMM dd y')}>{format(lastday, 'eee, MM/dd')}</option>
      </select>
      </label> 
      <h4>What time do you want to play?</h4> 
      <label for="postalcode" className={styles.postallabel}>
      <select className={styles.categories} onChange={handleTime}>
        <option className={court.open_hour > 6 ? styles.userNone : null} value="6">6AM</option>
        <option className={court.open_hour > 7 ? styles.userNone : null}  value="7">7AM</option>
        <option className={court.open_hour > 8 ? styles.userNone : null}  value="8">8AM</option>
        <option className={court.open_hour > 9 ? styles.userNone : null}  value="9">9AM</option>
        <option className={court.open_hour > 10 ? styles.userNone : null}  value="10">10AM</option>
        <option className={court.open_hour > 11 ? styles.userNone : null}  value="11">11AM</option>
        <option value="12">12</option>
        <option value="13">1PM</option>
        <option value="14">2PM</option>
        <option value="15">3PM</option>
        <option value="16">4PM</option>
        <option value="17">5PM</option>
        <option className={court.close_hour < 19 ? styles.userNone : null}  value="18">6PM</option>
        <option className={court.close_hour < 20 ? styles.userNone : null}  value="19">7PM</option>
        <option className={court.close_hour < 21 ? styles.userNone : null}  value="20">8PM</option>
        <option className={court.close_hour < 22 ? styles.userNone : null}  value="21">9PM</option>
        <option className={court.close_hour < 23 ? styles.userNone : null}  value="22">10PM</option>
      </select>
      </label>
      <h4>Which court would you like to play on?</h4>
      <label for="skill" className={styles.citylabel}>
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
      </div> 
      <br></br>
      <div className={styles.butDiv}>
      <button className={styles.button} type="submit"><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/5307/5307921.png" alt="submit"/><h4 className={styles.h4but}>Submit your Reservation</h4></button>
      </div>
      </form>
    </div>
  )

}