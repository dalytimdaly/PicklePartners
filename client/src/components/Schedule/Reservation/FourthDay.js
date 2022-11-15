import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function FourthDay({user}) {

  const [ results, setResults ] = useState([]);
  const [ court, setCourt ] = useState([])
  const [ errors, setErrors ] = useState([]);
  const { term } = useParams();

  const [ opponent, setOpponent ] = useState([])
  useEffect(() => {
    if(user !== null) {
    fetch(`/users`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setOpponent(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })}
    
  }, [user])

  const navigate = useNavigate()
  const courtId = window.location.href.toString().substring(31,33).replace("/","")
  useEffect(() => {
    if(user !== null) {
    fetch(`/pickleballs?q=${courtId}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setResults(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }
  }, [courtId])

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

  console.log(user)
 
  
    // FUNCTIONS


    function reserveSpotUser2(event) {
    
      event.preventDefault()
  
      const editedPlayer = {
          "user2_id": user.id
      }
  
      fetch(`/pickleballs/${event.target.value}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPlayer),
      })
      .then(r => r.json())
      .then(
        navigate('/account')
      )
     
    }
  

  function reserveSpotUser3(event) {

      event.preventDefault()
  
      const editedPlayer = {
        "user3_id": user.id
    }

    console.log(editedPlayer)

    fetch(`/pickleballs/${event.target.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlayer),
    })
    .then(r => r.json())
    .then(
      navigate('/account')
    )
   
  }
  
    function reserveSpotUser4(event) {

      event.preventDefault()
    
        const editedPlayer = {
          "user4_id": user.id
      }
  
      fetch(`/pickleballs/${event.target.value}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPlayer),
      })
      .then(r => r.json())
      .then(
        navigate('/account')
      )
    }
  

  const day4 = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


  // HOUR 6  


  const filtered6 = results.filter(result => result.time === 6)

    // DAY 4
    
    const fourthDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered6Court1 = fourthDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const fourthDayfiltered6Court2 = fourthDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const fourthDayfiltered6Court3 = fourthDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court4 = fourthDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court5 = fourthDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court6 = fourthDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court7 = fourthDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court8 = fourthDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court9 = fourthDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered6Court10 = fourthDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)


//HOUR 7

const filtered7 = results.filter(result => result.time === 8)


    // DAY 4
    
    const fourthDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered7Court1 = fourthDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const fourthDayfiltered7Court2 = fourthDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const fourthDayfiltered7Court3 = fourthDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court4 = fourthDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court5 = fourthDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court6 = fourthDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court7 = fourthDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court8 = fourthDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court9 = fourthDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered7Court10 = fourthDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

// HOUR 8


const filtered8 = results.filter(result => result.time === 8)

    


    //DAY 4

    
    const fourthDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered8Court1 = fourthDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const fourthDayfiltered8Court2 = fourthDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const fourthDayfiltered8Court3 = fourthDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court4 = fourthDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court5 = fourthDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court6 = fourthDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court7 = fourthDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court8 = fourthDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court9 = fourthDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered8Court10 = fourthDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)



// HOUR 9


const filtered9 = results.filter(result => result.time === 9)


        
    //DAY 4


    const fourthDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

    const fourthDayfiltered9Court1 = fourthDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const fourthDayfiltered9Court2 = fourthDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const fourthDayfiltered9Court3 = fourthDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court4 = fourthDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court5 = fourthDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court6 = fourthDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court7 = fourthDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court8 = fourthDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court9 = fourthDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered9Court10 = fourthDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

// HOUR 10


const filtered10 = results.filter(result => result.time === 10)

      
    //DAY 4

    
    const fourthDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))


    const fourthDayfiltered10Court1 = fourthDayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

    const fourthDayfiltered10Court2 = fourthDayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
      <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
      <p className={styles.reserveP}>Type: {result.type_of_play}</p>
      <p className={styles.reserveP}>Group Size: {result.size}</p>
      <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
      
      <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
      <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
      <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
      </div>)

const fourthDayfiltered10Court3 = fourthDayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court4 = fourthDayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court5 = fourthDayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court6 = fourthDayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court7 = fourthDayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court8 = fourthDayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court9 = fourthDayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered10Court10 = fourthDayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
<p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

    // HOUR 11


    const filtered11 = results.filter(result => result.time === 11)


      
    //DAY 4

    
      const fourthDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered11Court1 = fourthDayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered11Court2 = fourthDayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered11Court3 = fourthDayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court4 = fourthDayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court5 = fourthDayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court6 = fourthDayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court7 = fourthDayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court8 = fourthDayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court9 = fourthDayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered11Court10 = fourthDayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)
            

// HOUR 12


    const filtered12 = results.filter(result => result.time === 12)

      
    //DAY 4

    
      const fourthDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered12Court1 = fourthDayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered12Court2 = fourthDayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered12Court3 = fourthDayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court4 = fourthDayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court5 = fourthDayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court6 = fourthDayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court7 = fourthDayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court8 = fourthDayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court9 = fourthDayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered12Court10 = fourthDayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)
      
 

// HOUR 13


    const filtered13 = results.filter(result => result.time === 13)

    
      
    //DAY 4

      const fourthDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered13Court1 = fourthDayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered13Court2 = fourthDayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered13Court3 = fourthDayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court4 = fourthDayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court5 = fourthDayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court6 = fourthDayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court7 = fourthDayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court8 = fourthDayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court9 = fourthDayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered13Court10 = fourthDayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)


// HOUR 14


    const filtered14 = results.filter(result => result.time === 14)


      
    //DAY 4

    
      const fourthDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered14Court1 = fourthDayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered14Court2 = fourthDayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered14Court3 = fourthDayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court4 = fourthDayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court5 = fourthDayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court6 = fourthDayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court7 = fourthDayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court8 = fourthDayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court9 = fourthDayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered14Court10 = fourthDayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)


// HOUR 15


    const filtered15 = results.filter(result => result.time === 15)


    //DAY 4

    
      const fourthDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered15Court1 = fourthDayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered15Court2 = fourthDayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered15Court3 = fourthDayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court4 = fourthDayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court5 = fourthDayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court6 = fourthDayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court7 = fourthDayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court8 = fourthDayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court9 = fourthDayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered15Court10 = fourthDayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

  
// HOUR 16


    const filtered16 = results.filter(result => result.time === 16)


    //DAY 4

      const fourthDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered16Court1 = fourthDayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered16Court2 = fourthDayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered16Court3 = fourthDayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court4 = fourthDayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court5 = fourthDayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court6 = fourthDayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court7 = fourthDayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court8 = fourthDayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court9 = fourthDayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered16Court10 = fourthDayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

            


// HOUR 17


    const filtered17 = results.filter(result => result.time === 17)

    
      
    //DAY 4

      const fourthDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered17Court1 = fourthDayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered17Court2 = fourthDayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered17Court3 = fourthDayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court4 = fourthDayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court5 = fourthDayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court6 = fourthDayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court7 = fourthDayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court8 = fourthDayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court9 = fourthDayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered17Court10 = fourthDayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)


// HOUR 18


    const filtered18 = results.filter(result => result.time === 18)

      
    //DAY 4

    
      const fourthDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered18Court1 = fourthDayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered18Court2 = fourthDayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered18Court3 = fourthDayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court4 = fourthDayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court5 = fourthDayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court6 = fourthDayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court7 = fourthDayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court8 = fourthDayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court9 = fourthDayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered18Court10 = fourthDayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)



 // HOUR 19


    const filtered19 = results.filter(result => result.time === 19)



      
    //DAY 4

      const fourthDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))


      const fourthDayfiltered19Court1 = fourthDayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered19Court2 = fourthDayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered19Court3 = fourthDayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court4 = fourthDayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court5 = fourthDayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court6 = fourthDayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court7 = fourthDayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court8 = fourthDayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court9 = fourthDayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered19Court10 = fourthDayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

            


// HOUR 20


    const filtered20 = results.filter(result => result.time === 20)

    //DAY 4

    
      const fourthDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered20Court1 = fourthDayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered20Court2 = fourthDayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered20Court3 = fourthDayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court4 = fourthDayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court5 = fourthDayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court6 = fourthDayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court7 = fourthDayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court8 = fourthDayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court9 = fourthDayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered20Court10 = fourthDayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)
    

        
// HOUR 21


  const filtered21 = results.filter(result => result.time === 21)



  
    //DAY 4


  const fourthDayfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

  const fourthDayfiltered21Court1 = fourthDayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
    </div>)

  const fourthDayfiltered21Court2 = fourthDayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
    <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
    <p className={styles.reserveP}>Type: {result.type_of_play}</p>
    <p className={styles.reserveP}>Group Size: {result.size}</p>
    <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
    
    <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
    <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
    <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
    </div>)

const fourthDayfiltered21Court3 = fourthDayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court4 = fourthDayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court5 = fourthDayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court6 = fourthDayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court7 = fourthDayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court8 = fourthDayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court9 = fourthDayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)

const fourthDayfiltered21Court10 = fourthDayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
<h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
<p className={styles.reserveP}>Type: {result.type_of_play}</p>
<p className={styles.reserveP}>Group Size: {result.size}</p>
<p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>

<p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
<p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
</div>)
        

    // HOUR 22

    const filtered22 = results.filter(result => result.time === 22)



    //DAY 4

      const fourthDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(day4, 'MM/dd'))

      const fourthDayfiltered22Court1 = fourthDayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

      const fourthDayfiltered22Court2 = fourthDayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
        <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
        <p className={styles.reserveP}>Type: {result.type_of_play}</p>
        <p className={styles.reserveP}>Group Size: {result.size}</p>
        <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
        
        <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
        <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
        <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
        </div>)

const fourthDayfiltered22Court3 = fourthDayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court4 = fourthDayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court5 = fourthDayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court6 = fourthDayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court7 = fourthDayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court8 = fourthDayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court9 = fourthDayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

const fourthDayfiltered22Court10 = fourthDayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
  <h4 className={styles.reservedH4}>COURT {result.court_number_id} RESERVED</h4>
  <p className={styles.reserveP}>Type: {result.type_of_play}</p>
  <p className={styles.reserveP}>Group Size: {result.size}</p>
  <p className={styles.reserveP}>Skill Level: {result.skill_level}</p>
    <p className={styles.reserveP}>Created by: {renderName(result.user_id)}</p>
  
  <p className={user.id === result.user_id || user.id === result.user2_id || user.id === result.user3_id || user.id === result.user4_id || result.user2_id && result.user3_id && result.user4_id || result.size === 2 && result.user2_id ? styles.userNone : styles.reserveP}>Spot(s) Available:
  <p className={styles.reserveP}>{result.user2_id ? <div>{renderNamePlayer2(result.user2_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser2(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user3_id ? <div>{renderNamePlayer3(result.user3_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser3(event)} value={result.id}>Spot Open</button>}</p>
  <p className={result.size === 4 ? styles.userId : styles.userNone}>{result.user4_id ? <div>{renderNamePlayer4(result.user4_id)}</div> : <button className={styles.spotBtn} onClick={(event) => reserveSpotUser4(event)} value={result.id}>Spot Open</button>}</p></p>
  </div>)

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

const [change, setChange] = useState(`/schedule/1/day4`)

function handleSubmit(e) {
  e.preventDefault()
  console.log(change)
  navigate(change)
}

const [changeDate, setChangeDate] = useState(`/schedule/${courtId}/today`)

function handleSubmitDate(e) {
  e.preventDefault()
  console.log(changeDate)
  navigate(changeDate)
}

 

  function renderName(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <div> <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link> 
    </div> )
  }
  
  function renderNamePlayer2(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <div> <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link> 
    </div> )
  }

  function renderNamePlayer3(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link>  )
  }

  function renderNamePlayer4(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link>)
  }


  return (
    <div className={styles.pickleContainer}>
      <div className={styles.topDiv}>
      <h1 className={styles.pageCourt}>{court.name} </h1>
      <h4 className={styles.pageDate}>{format(day4, 'eee, MM/dd')}</h4>
      </div>
      <div className={styles.bottomDiv}>
      <div className={styles.changeCourt}>
      <div>View other courts:</div>
      <form onSubmit={handleSubmit}>
      <select onChange={(e) => setChange(e.target.value)}>
      <option value={`/schedule/1/day4`}>Gates Tennis Center</option>
      <option value={`/schedule/2/day4`}>Congress Park</option>
      <option value={`/schedule/3/day4`}>Huston Lake Park</option>
      <option value={`/schedule/4/day4`}>Eisenhower Recreation Center</option>
      <option value={`/schedule/5/day4`}>Cook Park Recreation Center</option>
      <option value={`/schedule/6/day4`}>Bear Valley Park Pickleball Courts</option>
      <option value={`/schedule/7/day4`}>Washington Park Recreation Center</option>
      <option value={`/schedule/8/day4`}>Sheridan Recreation Center</option>
      <option value={`/schedule/9/day4`}>Meadow Creek Tennis and Fitness Club</option>
      <option value={`/schedule/10/day4`}>Johnson Recreation Center</option>
      <option value={`/schedule/11/day4`}>Martin Luther King Jr. Recreation Center</option>
      <option value={`/schedule/12/day4`}>Apex Pickleball Courts</option>
      <option value={`/schedule/13/day4`}>Cornerstone Park</option>
      </select>
      <button type="submit">Go</button>
      </form>
      </div>
      <div className={styles.changeDate}>
      <div>View other dates: </div>
      <form onSubmit={handleSubmitDate}> 
      <select onChange={(e) => setChangeDate(e.target.value)}>
      <option value={`/schedule/${courtId}/today`}>{format(date, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/tomorrow`}>{format(tomorrow, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day3`}>{format(day3, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day5`}>{format(day5, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day6`}>{format(day6, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day7`}>{format(lastday, 'eee, MM/dd')}</option>
      </select>
      <button type="submit">Go</button>
     </form>
     </div>
     </div>
      <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRowDays}>
              <th></th>
           
              <th className={styles.tableHead}>Court 1</th>
              <th className={styles.tableHead}>Court 2</th>
              <th className={styles.tableHead}>Court 3</th>
              <th className={styles.tableHead}>Court 4</th>
              <th className={styles.tableHead}>Court 5</th>
              <th className={styles.tableHead}>Court 6</th>
              <th className={styles.tableHead}>Court 7</th>
              <th className={styles.tableHead}>Court 8</th>
              <th className={styles.tableHead}>Court 9</th>
              <th className={styles.tableHead}>Court 10</th>
        
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6AM</td>
            
       
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court1.length !== 0 ? fourthDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court2.length !== 0 ? fourthDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court3.length !== 0 ? fourthDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court4.length !== 0 ? fourthDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court5.length !== 0 ? fourthDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court6.length !== 0 ? fourthDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court7.length !== 0 ? fourthDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court8.length !== 0 ? fourthDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court9.length !== 0 ? fourthDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered6Court10.length !== 0 ? fourthDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court1.length !== 0 ? fourthDayfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court2.length !== 0 ? fourthDayfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court3.length !== 0 ? fourthDayfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court4.length !== 0 ? fourthDayfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court5.length !== 0 ? fourthDayfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court6.length !== 0 ? fourthDayfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court7.length !== 0 ? fourthDayfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court8.length !== 0 ? fourthDayfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court9.length !== 0 ? fourthDayfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered7Court10.length !== 0 ? fourthDayfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court1.length !== 0 ? fourthDayfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court2.length !== 0 ? fourthDayfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court3.length !== 0 ? fourthDayfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court4.length !== 0 ? fourthDayfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court5.length !== 0 ? fourthDayfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court6.length !== 0 ? fourthDayfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court7.length !== 0 ? fourthDayfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court8.length !== 0 ? fourthDayfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court9.length !== 0 ? fourthDayfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered8Court10.length !== 0 ? fourthDayfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
          
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court1.length !== 0 ? fourthDayfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court2.length !== 0 ? fourthDayfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court3.length !== 0 ? fourthDayfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court4.length !== 0 ? fourthDayfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court5.length !== 0 ? fourthDayfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court6.length !== 0 ? fourthDayfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court7.length !== 0 ? fourthDayfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court8.length !== 0 ? fourthDayfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court9.length !== 0 ? fourthDayfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered9Court10.length !== 0 ? fourthDayfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court1.length !== 0 ? fourthDayfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court2.length !== 0 ? fourthDayfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court3.length !== 0 ? fourthDayfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court4.length !== 0 ? fourthDayfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court5.length !== 0 ? fourthDayfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court6.length !== 0 ? fourthDayfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court7.length !== 0 ? fourthDayfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court8.length !== 0 ? fourthDayfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court9.length !== 0 ? fourthDayfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered10Court10.length !== 0 ? fourthDayfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court1.length !== 0 ? fourthDayfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court2.length !== 0 ? fourthDayfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court3.length !== 0 ? fourthDayfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court4.length !== 0 ? fourthDayfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court5.length !== 0 ? fourthDayfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court6.length !== 0 ? fourthDayfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court7.length !== 0 ? fourthDayfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court8.length !== 0 ? fourthDayfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court9.length !== 0 ? fourthDayfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered11Court10.length !== 0 ? fourthDayfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
        
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court1.length !== 0 ? fourthDayfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court2.length !== 0 ? fourthDayfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court3.length !== 0 ? fourthDayfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court4.length !== 0 ? fourthDayfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court5.length !== 0 ? fourthDayfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court6.length !== 0 ? fourthDayfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court7.length !== 0 ? fourthDayfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court8.length !== 0 ? fourthDayfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court9.length !== 0 ? fourthDayfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered12Court10.length !== 0 ? fourthDayfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court1.length !== 0 ? fourthDayfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court2.length !== 0 ? fourthDayfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court3.length !== 0 ? fourthDayfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court4.length !== 0 ? fourthDayfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court5.length !== 0 ? fourthDayfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court6.length !== 0 ? fourthDayfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court7.length !== 0 ? fourthDayfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court8.length !== 0 ? fourthDayfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court9.length !== 0 ? fourthDayfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered13Court10.length !== 0 ? fourthDayfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court1.length !== 0 ? fourthDayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court2.length !== 0 ? fourthDayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court3.length !== 0 ? fourthDayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court4.length !== 0 ? fourthDayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court5.length !== 0 ? fourthDayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court6.length !== 0 ? fourthDayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court7.length !== 0 ? fourthDayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court8.length !== 0 ? fourthDayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court9.length !== 0 ? fourthDayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered14Court10.length !== 0 ? fourthDayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court1.length !== 0 ? fourthDayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court2.length !== 0 ? fourthDayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court3.length !== 0 ? fourthDayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court4.length !== 0 ? fourthDayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court5.length !== 0 ? fourthDayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court6.length !== 0 ? fourthDayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court7.length !== 0 ? fourthDayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court8.length !== 0 ? fourthDayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court9.length !== 0 ? fourthDayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered15Court10.length !== 0 ? fourthDayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
               
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court1.length !== 0 ? fourthDayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court2.length !== 0 ? fourthDayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court3.length !== 0 ? fourthDayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court4.length !== 0 ? fourthDayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court5.length !== 0 ? fourthDayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court6.length !== 0 ? fourthDayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court7.length !== 0 ? fourthDayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court8.length !== 0 ? fourthDayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court9.length !== 0 ? fourthDayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered16Court10.length !== 0 ? fourthDayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
        
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court1.length !== 0 ? fourthDayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court2.length !== 0 ? fourthDayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court3.length !== 0 ? fourthDayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court4.length !== 0 ? fourthDayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court5.length !== 0 ? fourthDayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court6.length !== 0 ? fourthDayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court7.length !== 0 ? fourthDayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court8.length !== 0 ? fourthDayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court9.length !== 0 ? fourthDayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered17Court10.length !== 0 ? fourthDayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court1.length !== 0 ? fourthDayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court2.length !== 0 ? fourthDayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court3.length !== 0 ? fourthDayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court4.length !== 0 ? fourthDayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court5.length !== 0 ? fourthDayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court6.length !== 0 ? fourthDayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court7.length !== 0 ? fourthDayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court8.length !== 0 ? fourthDayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court9.length !== 0 ? fourthDayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered18Court10.length !== 0 ? fourthDayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court1.length !== 0 ? fourthDayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court2.length !== 0 ? fourthDayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court3.length !== 0 ? fourthDayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court4.length !== 0 ? fourthDayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court5.length !== 0 ? fourthDayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court6.length !== 0 ? fourthDayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court7.length !== 0 ? fourthDayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court8.length !== 0 ? fourthDayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court9.length !== 0 ? fourthDayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered19Court10.length !== 0 ? fourthDayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court1.length !== 0 ? fourthDayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court2.length !== 0 ? fourthDayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court3.length !== 0 ? fourthDayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court4.length !== 0 ? fourthDayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court5.length !== 0 ? fourthDayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court6.length !== 0 ? fourthDayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court7.length !== 0 ? fourthDayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court8.length !== 0 ? fourthDayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court9.length !== 0 ? fourthDayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered20Court10.length !== 0 ? fourthDayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
          
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court1.length !== 0 ? fourthDayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court2.length !== 0 ? fourthDayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court3.length !== 0 ? fourthDayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court4.length !== 0 ? fourthDayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court5.length !== 0 ? fourthDayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court6.length !== 0 ? fourthDayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court7.length !== 0 ? fourthDayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court8.length !== 0 ? fourthDayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court9.length !== 0 ? fourthDayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered21Court10.length !== 0 ? fourthDayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
     
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court1.length !== 0 ? fourthDayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court2.length !== 0 ? fourthDayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court3.length !== 0 ? fourthDayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court4.length !== 0 ? fourthDayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court5.length !== 0 ? fourthDayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court6.length !== 0 ? fourthDayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court7.length !== 0 ? fourthDayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court8.length !== 0 ? fourthDayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court9.length !== 0 ? fourthDayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{fourthDayfiltered22Court10.length !== 0 ? fourthDayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
             
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}