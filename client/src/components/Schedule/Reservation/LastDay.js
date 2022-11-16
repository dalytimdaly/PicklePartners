import styles from '../ReservationCalendar.module.css'
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { add, format } from 'date-fns'

export default function LastDay({user}) {

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
      .then((data) => {
        navigate('/account')
        window.location.reload()
      })
     
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
    .then((data) => {
      navigate('/account')
      window.location.reload()
    })
   
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
      .then((data) => {
        navigate('/account')
        window.location.reload()
      })
 
      
    }
  

  // HOUR 6  


  const filtered6 = results.filter(result => result.time === 6)

  // DAY 7
        
  const lastDayfiltered6 = filtered6.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

  const lastDayfiltered6Court1 = lastDayfiltered6.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

  const lastDayfiltered6Court2 = lastDayfiltered6.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court3 = lastDayfiltered6.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court4 = lastDayfiltered6.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court5 = lastDayfiltered6.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court6 = lastDayfiltered6.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court7 = lastDayfiltered6.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court8 = lastDayfiltered6.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court9 = lastDayfiltered6.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered6Court10 = lastDayfiltered6.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    
    //DAY 7
        
    const lastDayfiltered7 = filtered7.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered7Court1 = lastDayfiltered7.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered7Court2 = lastDayfiltered7.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court3 = lastDayfiltered7.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court4 = lastDayfiltered7.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court5 = lastDayfiltered7.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court6 = lastDayfiltered7.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court7 = lastDayfiltered7.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court8 = lastDayfiltered7.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court9 = lastDayfiltered7.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered7Court10 = lastDayfiltered7.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    

    
    //DAY 7
        
    const lastDayfiltered8 = filtered8.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered8Court1 = lastDayfiltered8.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered8Court2 = lastDayfiltered8.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court3 = lastDayfiltered8.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court4 = lastDayfiltered8.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court5 = lastDayfiltered8.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court6 = lastDayfiltered8.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court7 = lastDayfiltered8.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court8 = lastDayfiltered8.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court9 = lastDayfiltered8.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered8Court10 = lastDayfiltered8.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


     
    //DAY 7
        
    const lastDayfiltered9 = filtered9.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))


    const lastDayfiltered9Court1 = lastDayfiltered9.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered9Court2 = lastDayfiltered9.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court3 = lastDayfiltered9.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court4 = lastDayfiltered9.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court5 = lastDayfiltered9.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court6 = lastDayfiltered9.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court7 = lastDayfiltered9.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court8 = lastDayfiltered9.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court9 = lastDayfiltered9.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered9Court10 = lastDayfiltered9.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    
    //DAY 7    

    const lastDayfiltered10 = filtered10.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered10Court1 = lastDayfiltered10.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered10Court2 = lastDayfiltered10.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court3 = lastDayfiltered10.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court4 = lastDayfiltered10.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court5 = lastDayfiltered10.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court6 = lastDayfiltered10.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court7 = lastDayfiltered10.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court8 = lastDayfiltered10.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court9 = lastDayfiltered10.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered10Court10 = lastDayfiltered10.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


    //DAY 7
        
    const lastDayfiltered11 = filtered11.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered11Court1 = lastDayfiltered11.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered11Court2 = lastDayfiltered11.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court3 = lastDayfiltered11.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court4 = lastDayfiltered11.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court5 = lastDayfiltered11.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court6 = lastDayfiltered11.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court7 = lastDayfiltered11.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court8 = lastDayfiltered11.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court9 = lastDayfiltered11.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered11Court10 = lastDayfiltered11.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



  //DAY 7
      
    const lastDayfiltered12 = filtered12.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))


    const lastDayfiltered12Court1 = lastDayfiltered12.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered12Court2 = lastDayfiltered12.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court3 = lastDayfiltered12.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court4 = lastDayfiltered12.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court5 = lastDayfiltered12.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court6 = lastDayfiltered12.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court7 = lastDayfiltered12.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court8 = lastDayfiltered12.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court9 = lastDayfiltered12.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered12Court10 = lastDayfiltered12.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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
    

  //DAY 7
      
    const lastDayfiltered13 = filtered13.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered13Court1 = lastDayfiltered13.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered13Court2 = lastDayfiltered13.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court3 = lastDayfiltered13.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court4 = lastDayfiltered13.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court5 = lastDayfiltered13.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court6 = lastDayfiltered13.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court7 = lastDayfiltered13.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court8 = lastDayfiltered13.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court9 = lastDayfiltered13.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered13Court10 = lastDayfiltered13.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


  //DAY 7
      
    const lastDayfiltered14 = filtered14.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered14Court1 = lastDayfiltered14.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered14Court2 = lastDayfiltered14.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court3 = lastDayfiltered14.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court4 = lastDayfiltered14.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court5 = lastDayfiltered14.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court6 = lastDayfiltered14.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court7 = lastDayfiltered14.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court8 = lastDayfiltered14.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court9 = lastDayfiltered14.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered14Court10 = lastDayfiltered14.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


  //DAY 7
      
    const lastDayfiltered15 = filtered15.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered15Court1 = lastDayfiltered15.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered15Court2 = lastDayfiltered15.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court3 = lastDayfiltered15.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court4 = lastDayfiltered15.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court5 = lastDayfiltered15.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court6 = lastDayfiltered15.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court7 = lastDayfiltered15.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court8 = lastDayfiltered15.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court9 = lastDayfiltered15.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered15Court10 = lastDayfiltered15.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



  //DAY 7    

    const lastDayfiltered16 = filtered16.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered16Court1 = lastDayfiltered16.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered16Court2 = lastDayfiltered16.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court3 = lastDayfiltered16.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court4 = lastDayfiltered16.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court5 = lastDayfiltered16.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court6 = lastDayfiltered16.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court7 = lastDayfiltered16.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court8 = lastDayfiltered16.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court9 = lastDayfiltered16.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered16Court10 = lastDayfiltered16.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


  
  //DAY 7
      
    const lastDayfiltered17 = filtered17.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered17Court1 = lastDayfiltered17.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered17Court2 = lastDayfiltered17.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court3 = lastDayfiltered17.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court4 = lastDayfiltered17.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court5 = lastDayfiltered17.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court6 = lastDayfiltered17.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court7 = lastDayfiltered17.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court8 = lastDayfiltered17.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court9 = lastDayfiltered17.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered17Court10 = lastDayfiltered17.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


  //DAY 7
      
    const lastDayfiltered18 = filtered18.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered18Court1 = lastDayfiltered18.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered18Court2 = lastDayfiltered18.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court3 = lastDayfiltered18.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court4 = lastDayfiltered18.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court5 = lastDayfiltered18.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court6 = lastDayfiltered18.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court7 = lastDayfiltered18.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court8 = lastDayfiltered18.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court9 = lastDayfiltered18.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered18Court10 = lastDayfiltered18.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


    //DAY 7
  
      
    const lastDayfiltered19 = filtered19.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered19Court1 = lastDayfiltered19.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered19Court2 = lastDayfiltered19.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court3 = lastDayfiltered19.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court4 = lastDayfiltered19.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court5 = lastDayfiltered19.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court6 = lastDayfiltered19.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court7 = lastDayfiltered19.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court8 = lastDayfiltered19.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court9 = lastDayfiltered19.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered19Court10 = lastDayfiltered19.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


    //DAY 7
  
      
    const lastDayfiltered20 = filtered20.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered20Court1 = lastDayfiltered20.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered20Court2 = lastDayfiltered20.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court3 = lastDayfiltered20.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court4 = lastDayfiltered20.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court5 = lastDayfiltered20.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court6 = lastDayfiltered20.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court7 = lastDayfiltered20.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court8 = lastDayfiltered20.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court9 = lastDayfiltered20.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered20Court10 = lastDayfiltered20.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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



//DAY 7
  
const lastDayfiltered21 = filtered21.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

const lastDayfiltered21Court1 = lastDayfiltered21.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court2 = lastDayfiltered21.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court3 = lastDayfiltered21.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court4 = lastDayfiltered21.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court5 = lastDayfiltered21.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court6 = lastDayfiltered21.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court7 = lastDayfiltered21.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court8 = lastDayfiltered21.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court9 = lastDayfiltered21.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered21Court10 = lastDayfiltered21.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


  //DAY 7
      
    const lastDayfiltered22 = filtered22.filter(result => `${result.date.substring(5,7)}/${result.date.substring(8,10)}` === format(lastday, 'MM/dd'))

    const lastDayfiltered22Court1 = lastDayfiltered22.filter(result => result.court_number_id === 1).map(result => <div key={result.id} className={styles.reservedBlock}>
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

    const lastDayfiltered22Court2 = lastDayfiltered22.filter(result => result.court_number_id === 2).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court3 = lastDayfiltered22.filter(result => result.court_number_id === 3).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court4 = lastDayfiltered22.filter(result => result.court_number_id === 4).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court5 = lastDayfiltered22.filter(result => result.court_number_id === 5).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court6 = lastDayfiltered22.filter(result => result.court_number_id === 6).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court7 = lastDayfiltered22.filter(result => result.court_number_id === 7).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court8 = lastDayfiltered22.filter(result => result.court_number_id === 8).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court9 = lastDayfiltered22.filter(result => result.court_number_id === 9).map(result => <div key={result.id} className={styles.reservedBlock}>
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

const lastDayfiltered22Court10 = lastDayfiltered22.filter(result => result.court_number_id === 10).map(result => <div key={result.id} className={styles.reservedBlock}>
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


const [change, setChange] = useState(`/schedule/1/day7`)

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
      <h4 className={styles.pageDate}>{format(lastday, 'eee, MM/dd')}</h4>
      </div>
      <div className={styles.bottomDiv}>
      <div className={styles.changeCourt}>
      <div>View other courts:</div>
      <form onSubmit={handleSubmit}>
      <select onChange={(e) => setChange(e.target.value)}>
      <option value={`/schedule/1/day7`}>Gates Tennis Center</option>
      <option value={`/schedule/2/day7`}>Congress Park</option>
      <option value={`/schedule/3/day7`}>Huston Lake Park</option>
      <option value={`/schedule/4/day7`}>Eisenhower Recreation Center</option>
      <option value={`/schedule/5/day7`}>Cook Park Recreation Center</option>
      <option value={`/schedule/6/day7`}>Bear Valley Park Pickleball Courts</option>
      <option value={`/schedule/7/day7`}>Washington Park Recreation Center</option>
      <option value={`/schedule/8/day7`}>Sheridan Recreation Center</option>
      <option value={`/schedule/9/day7`}>Meadow Creek Tennis and Fitness Club</option>
      <option value={`/schedule/10/day7`}>Johnson Recreation Center</option>
      <option value={`/schedule/11/day7`}>Martin Luther King Jr. Recreation Center</option>
      <option value={`/schedule/12/day7`}>Apex Pickleball Courts</option>
      <option value={`/schedule/13/day7`}>Cornerstone Park</option>
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
      <option value={`/schedule/${courtId}/day4`}>{format(day4, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day5`}>{format(day5, 'eee, MM/dd')}</option>
      <option value={`/schedule/${courtId}/day6`}>{format(day6, 'eee, MM/dd')}</option>
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
            <tr className={court.open_hour > 6 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>6AM</td>
            
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court1.length !== 0 ? lastDayfiltered6Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court2.length !== 0 ? lastDayfiltered6Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court3.length !== 0 ? lastDayfiltered6Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court4.length !== 0 ? lastDayfiltered6Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court5.length !== 0 ? lastDayfiltered6Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court6.length !== 0 ? lastDayfiltered6Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court7.length !== 0 ? lastDayfiltered6Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court8.length !== 0 ? lastDayfiltered6Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court9.length !== 0 ? lastDayfiltered6Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered6Court10.length !== 0 ? lastDayfiltered6Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={court.open_hour > 7 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>7AM</td>
             
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court1.length !== 0 ? lastDayfiltered7Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court2.length !== 0 ? lastDayfiltered7Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court3.length !== 0 ? lastDayfiltered7Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court4.length !== 0 ? lastDayfiltered7Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court5.length !== 0 ? lastDayfiltered7Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court6.length !== 0 ? lastDayfiltered7Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court7.length !== 0 ? lastDayfiltered7Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court8.length !== 0 ? lastDayfiltered7Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court9.length !== 0 ? lastDayfiltered7Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered7Court10.length !== 0 ? lastDayfiltered7Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
              
            </tr>
            <tr className={court.open_hour > 8 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>8AM</td>
             
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court1.length !== 0 ? lastDayfiltered8Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court2.length !== 0 ? lastDayfiltered8Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court3.length !== 0 ? lastDayfiltered8Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court4.length !== 0 ? lastDayfiltered8Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court5.length !== 0 ? lastDayfiltered8Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court6.length !== 0 ? lastDayfiltered8Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court7.length !== 0 ? lastDayfiltered8Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court8.length !== 0 ? lastDayfiltered8Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court9.length !== 0 ? lastDayfiltered8Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered8Court10.length !== 0 ? lastDayfiltered8Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
             
            </tr>
            <tr className={court.open_hour > 9 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>9AM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court1.length !== 0 ? lastDayfiltered9Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court2.length !== 0 ? lastDayfiltered9Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court3.length !== 0 ? lastDayfiltered9Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court4.length !== 0 ? lastDayfiltered9Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court5.length !== 0 ? lastDayfiltered9Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court6.length !== 0 ? lastDayfiltered9Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court7.length !== 0 ? lastDayfiltered9Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court8.length !== 0 ? lastDayfiltered9Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court9.length !== 0 ? lastDayfiltered9Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered9Court10.length !== 0 ? lastDayfiltered9Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
            </tr>
            <tr className={court.open_hour > 10 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>10AM</td>
              
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court1.length !== 0 ? lastDayfiltered10Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court2.length !== 0 ? lastDayfiltered10Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court3.length !== 0 ? lastDayfiltered10Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court4.length !== 0 ? lastDayfiltered10Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court5.length !== 0 ? lastDayfiltered10Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court6.length !== 0 ? lastDayfiltered10Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court7.length !== 0 ? lastDayfiltered10Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court8.length !== 0 ? lastDayfiltered10Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court9.length !== 0 ? lastDayfiltered10Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered10Court10.length !== 0 ? lastDayfiltered10Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={court.open_hour > 11 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>11AM</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court1.length !== 0 ? lastDayfiltered11Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court2.length !== 0 ? lastDayfiltered11Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court3.length !== 0 ? lastDayfiltered11Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court4.length !== 0 ? lastDayfiltered11Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court5.length !== 0 ? lastDayfiltered11Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court6.length !== 0 ? lastDayfiltered11Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court7.length !== 0 ? lastDayfiltered11Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court8.length !== 0 ? lastDayfiltered11Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court9.length !== 0 ? lastDayfiltered11Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered11Court10.length !== 0 ? lastDayfiltered11Court10 : <Link to='/create'>OPEN</Link>}</div></th>
             
             </tr> 
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>12</td>
              
            
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court1.length !== 0 ? lastDayfiltered12Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court2.length !== 0 ? lastDayfiltered12Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court3.length !== 0 ? lastDayfiltered12Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court4.length !== 0 ? lastDayfiltered12Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court5.length !== 0 ? lastDayfiltered12Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court6.length !== 0 ? lastDayfiltered12Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court7.length !== 0 ? lastDayfiltered12Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court8.length !== 0 ? lastDayfiltered12Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court9.length !== 0 ? lastDayfiltered12Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered12Court10.length !== 0 ? lastDayfiltered12Court10 : <Link to='/create'>OPEN</Link>}</div></th>
               
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>1PM</td>
              
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court1.length !== 0 ? lastDayfiltered13Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court2.length !== 0 ? lastDayfiltered13Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court3.length !== 0 ? lastDayfiltered13Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court4.length !== 0 ? lastDayfiltered13Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court5.length !== 0 ? lastDayfiltered13Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court6.length !== 0 ? lastDayfiltered13Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court7.length !== 0 ? lastDayfiltered13Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court8.length !== 0 ? lastDayfiltered13Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court9.length !== 0 ? lastDayfiltered13Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered13Court10.length !== 0 ? lastDayfiltered13Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>2PM</td>
              
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court1.length !== 0 ? lastDayfiltered14Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court2.length !== 0 ? lastDayfiltered14Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court3.length !== 0 ? lastDayfiltered14Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court4.length !== 0 ? lastDayfiltered14Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court5.length !== 0 ? lastDayfiltered14Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court6.length !== 0 ? lastDayfiltered14Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court7.length !== 0 ? lastDayfiltered14Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court8.length !== 0 ? lastDayfiltered14Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court9.length !== 0 ? lastDayfiltered14Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered14Court10.length !== 0 ? lastDayfiltered14Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>3PM</td>
              
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court1.length !== 0 ? lastDayfiltered15Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court2.length !== 0 ? lastDayfiltered15Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court3.length !== 0 ? lastDayfiltered15Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court4.length !== 0 ? lastDayfiltered15Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court5.length !== 0 ? lastDayfiltered15Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court6.length !== 0 ? lastDayfiltered15Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court7.length !== 0 ? lastDayfiltered15Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court8.length !== 0 ? lastDayfiltered15Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court9.length !== 0 ? lastDayfiltered15Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered15Court10.length !== 0 ? lastDayfiltered15Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>4PM</td>
             
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court1.length !== 0 ? lastDayfiltered16Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court2.length !== 0 ? lastDayfiltered16Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court3.length !== 0 ? lastDayfiltered16Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court4.length !== 0 ? lastDayfiltered16Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court5.length !== 0 ? lastDayfiltered16Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court6.length !== 0 ? lastDayfiltered16Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court7.length !== 0 ? lastDayfiltered16Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court8.length !== 0 ? lastDayfiltered16Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court9.length !== 0 ? lastDayfiltered16Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered16Court10.length !== 0 ? lastDayfiltered16Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>5PM</td>
           
             
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court1.length !== 0 ? lastDayfiltered17Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court2.length !== 0 ? lastDayfiltered17Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court3.length !== 0 ? lastDayfiltered17Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court4.length !== 0 ? lastDayfiltered17Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court5.length !== 0 ? lastDayfiltered17Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court6.length !== 0 ? lastDayfiltered17Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court7.length !== 0 ? lastDayfiltered17Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court8.length !== 0 ? lastDayfiltered17Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court9.length !== 0 ? lastDayfiltered17Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered17Court10.length !== 0 ? lastDayfiltered17Court10 : <Link to='/create'>OPEN</Link>}</div></th>
              
             
            </tr>
            <tr className={styles.tableRow}></tr>
            <tr className={court.close_hour < 19 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>6PM</td>
           
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court1.length !== 0 ? lastDayfiltered18Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court2.length !== 0 ? lastDayfiltered18Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court3.length !== 0 ? lastDayfiltered18Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court4.length !== 0 ? lastDayfiltered18Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court5.length !== 0 ? lastDayfiltered18Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court6.length !== 0 ? lastDayfiltered18Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court7.length !== 0 ? lastDayfiltered18Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court8.length !== 0 ? lastDayfiltered18Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court9.length !== 0 ? lastDayfiltered18Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered18Court10.length !== 0 ? lastDayfiltered18Court10 : <Link to='/create'>OPEN</Link>}</div></th>
         
             
            </tr>
            <tr className={court.close_hour < 20 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>7PM</td>
           
           
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court1.length !== 0 ? lastDayfiltered19Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court2.length !== 0 ? lastDayfiltered19Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court3.length !== 0 ? lastDayfiltered19Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court4.length !== 0 ? lastDayfiltered19Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court5.length !== 0 ? lastDayfiltered19Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court6.length !== 0 ? lastDayfiltered19Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court7.length !== 0 ? lastDayfiltered19Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court8.length !== 0 ? lastDayfiltered19Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court9.length !== 0 ? lastDayfiltered19Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered19Court10.length !== 0 ? lastDayfiltered19Court10 : <Link to='/create'>OPEN</Link>}</div></th>
       
             
            </tr>
            <tr className={court.close_hour < 21 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>8PM</td>
             
         
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court1.length !== 0 ? lastDayfiltered20Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court2.length !== 0 ? lastDayfiltered20Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court3.length !== 0 ? lastDayfiltered20Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court4.length !== 0 ? lastDayfiltered20Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court5.length !== 0 ? lastDayfiltered20Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court6.length !== 0 ? lastDayfiltered20Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court7.length !== 0 ? lastDayfiltered20Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court8.length !== 0 ? lastDayfiltered20Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court9.length !== 0 ? lastDayfiltered20Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered20Court10.length !== 0 ? lastDayfiltered20Court10 : <Link to='/create'>OPEN</Link>}</div></th>
           
            </tr>
            <tr className={court.close_hour < 22 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDate}>9PM</td>
          
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court1.length !== 0 ? lastDayfiltered21Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court2.length !== 0 ? lastDayfiltered21Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court3.length !== 0 ? lastDayfiltered21Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court4.length !== 0 ? lastDayfiltered21Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court5.length !== 0 ? lastDayfiltered21Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court6.length !== 0 ? lastDayfiltered21Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court7.length !== 0 ? lastDayfiltered21Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court8.length !== 0 ? lastDayfiltered21Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court9.length !== 0 ? lastDayfiltered21Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered21Court10.length !== 0 ? lastDayfiltered21Court10 : <Link to='/create'>OPEN</Link>}</div></th>
            
             </tr> 
            <tr className={court.close_hour < 23 ? styles.userNone : styles.tableRow}>
              <td className={styles.tableDateLast}>10PM</td>
       
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court1.length !== 0 ? lastDayfiltered22Court1 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court2.length !== 0 ? lastDayfiltered22Court2 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court3.length !== 0 ? lastDayfiltered22Court3 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court4.length !== 0 ? lastDayfiltered22Court4 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court5.length !== 0 ? lastDayfiltered22Court5 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court6.length !== 0 ? lastDayfiltered22Court6 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court7.length !== 0 ? lastDayfiltered22Court7 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court8.length !== 0 ? lastDayfiltered22Court8 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court9.length !== 0 ? lastDayfiltered22Court9 : <Link to='/create'>OPEN</Link>}</div></th>
                <th className={styles.reservationBlock}><div className={styles.courtBlock}>{lastDayfiltered22Court10.length !== 0 ? lastDayfiltered22Court10 : <Link to='/create'>OPEN</Link>}</div></th>
        
             
               
            </tr>
          </tbody>
        </table>
    </div>
  )
}