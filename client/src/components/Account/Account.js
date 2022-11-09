import styles from './Account.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { add, format } from 'date-fns';

export default function Account({ user, newUser }) {

  const [ errors, setErrors ] = useState([]);
  const [ pickleballs, setPickleballs ] = useState([])
  const [ pickles, setPickles ] = useState([])
  const [ opponent, setOpponent ] = useState([])
  const [ removeMe, setRemoveMe ] = useState(0)

  const navigate = useNavigate();


useEffect(() => {
  if(user !== null) {
  fetch(`/pickleballs/`)
  .then(r => {
    if(r.ok) {
      r.json().then(data => setPickleballs(data));
    } else {
      r.json().then(err => setErrors(err.errors));
    }
  })}
}, [user])


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

  
  const gameCreated = pickleballs.filter(pickle => pickle.user_id === user.id )
  const gamePlayed1 = pickleballs.filter(pickle => pickle.user2_id === user.id )
  const gamePlayed2 = pickleballs.filter(pickle => pickle.user3_id === user.id )
  const gamePlayed3 = pickleballs.filter(pickle => pickle.user4_id === user.id )

  const allGames = [...gameCreated, ...gamePlayed1, ...gamePlayed2, ...gamePlayed3]



 

  function renderCourtName(param) {
    if (param === 1)
    return "Gates Tennis Center"
    else if (param === 2)
    return "Congress Park"
    else if (param === 3)
    return "Huston Lake Park"
    else if (param === 4)
    return "Eisenhower Recreation Center"
    else if (param === 5)
    return "Cook Park Recreation Center"
    else if (param === 6)
    return "Bear Valley Park Pickleball Courts"
    else if (param === 7)
    return "Washington Park Recreation Center"
    else if (param === 8)
    return "Sheridan Recreation Center"
    else if (param === 9)
    return "Meadow Creek Tennis and Fitness Club"
    else if (param === 10)
    return "Johnson Recreation Center"
    else if (param === 11)
    return "Martin Luther King Jr. Recreation Center"
    else if (param === 12)
    return "Apex Pickleball Courts"
    else if (param === 13)
    return "Cornerstone Park"
    else return "error"
  }

  function renderTime(param) {
    if (param === 6)
    return "6AM"
    if (param === 7)
    return "7AM"
    if (param === 8)
    return "8AM"
    if (param === 9)
    return "9AM"
    if (param === 10)
    return "10AM"
    if (param === 11)
    return "11AM"
    if (param === 12)
    return "12"
    if (param === 13)
    return "1PM"
    if (param === 14)
    return "2PM"
    if (param === 15)
    return "3PM"
    if (param === 16)
    return "4PM"
    if (param === 17)
    return "5PM"
    if (param === 18)
    return "6PM"
    if (param === 19)
    return "7PM"
    if (param === 20)
    return "8PM"
    if (param === 21)
    return "9PM"
    if (param === 22)
    return "10PM"
  }

  function logout() {
    fetch('/destroy', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username: user.username}) 
    })
    .then(r => {
      if(r.ok) {
        newUser(null);
        navigate('/login');
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }

  function handleDelete(id) {
    fetch(`/pickleballs/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => {
      if(r.ok) {
        setPickleballs(pickle => pickle.filter(pickle => pickle.id !== id));
      } else {
        r.json().then(err => setErrors(err));
      }
    })
  }

  function editPickle(id) {
    navigate(`/edit/${id}`)
  }

  function renderName(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <div> <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link> 
    </div> )
  }

  function renderNamePlayer2(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <div> <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link> 
    {result.id === user.id ? <button onClick={() => renderCancellationPlayer2(result.id)}>double click to cancel reservation</button> : null}</div> )
  }

  function renderNamePlayer3(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <div> <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link> 
    {result.id === user.id ? <button onClick={() => renderCancellationPlayer3(result.id)}>double click to cancel reservation</button> : null}</div> )
  }

  function renderNamePlayer4(param) {
    let player = opponent.filter(name => name.id === param)
    return player.map(result => <div> <Link key={result.id} to={`/user/profile/${result.id}`}>{result.first_name} {result.last_name} </Link> 
    {result.id === user.id ? <button onClick={() => renderCancellationPlayer4(result.id)}>double click to cancel reservation</button> : null}</div> )
  }

  function renderCancellationPlayer2(param) {
    const player2 = pickleballs.filter(pickle => pickle.user2_id === param )
    player2.map(detail => {
      setRemoveMe(detail.id)
    })
    handleCancel2()
  }

  function renderCancellationPlayer3(param) {
   const player3 = pickleballs.filter(pickle => pickle.user3_id === param )
   player3.map(detail => {
    setRemoveMe(detail.id)
  })
  handleCancel3()
  }

  function renderCancellationPlayer4(param) {
  const player4 = pickleballs.filter(pickle => pickle.user4_id === user.id )
  player4.map(detail => {
    setRemoveMe(detail.id)
  })
  handleCancel4()
  }

  function handleCancel2() {

      const editedPickle = {
        "user2_id": null,
      }
  
      console.log(editedPickle)
      
      fetch(`/pickleballs/${removeMe}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPickle),
      })
      .then(r => r.json())
      .then((data) => {
        navigate(`/account`)
      })
    
    }
  

  function handleCancel3() {
  
      const editedPickle = {
        "user3_id": null,
      }
  
      console.log(editedPickle)
      
      fetch(`/pickleballs/${removeMe}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPickle),
      })
      .then(r => r.json())
      .then((data) => {
        navigate(`/account`)
      })
      
    }
  

  function handleCancel4() {
  
      const editedPickle = {
        "user4_id": null,
      }
  
      console.log(editedPickle)
      
      fetch(`/pickleballs/${removeMe}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPickle),
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
  
    
  return (
    <div>
      <Link to='/account-edit'>Edit Account Info </Link>
      <div>home of {user ? `${user.first_name} ${user.last_name}` : null}</div>
      <button className={styles.logoutBtn} onClick={logout}>[ Log out ]</button>
    <div>
    
    
      <div className={styles.posts}>
      <div className={styles.post}>
        <div className={`${styles.manage} ${styles.heading}`}><button onClick={()=>setPickles(allGames)}>View</button>My Pickles:</div>
      </div>
      {
      pickles.map(pickle => <div key={pickle.id} className={parseInt(format(date, 'y-M-d').substr(8,2)) > parseInt(pickle.date.substr(8,2)) ? styles.userNone : styles.post} >
      <div className={styles.title}>{`${pickle.date.substr(5,2)}/${pickle.date.substr(8,2)}`} Time: {renderTime(pickle.time)} Group Size: {pickle.size}</div>
      <div className={styles.area}><b>Location: {renderCourtName(pickle.court_id)}</b> Court: {pickle.court_number_id}</div>
      <div className={styles.area}>Created by/Player 1: {renderName(pickle.user_id)}</div>
      <div className={styles.area}><div>Player 2: {pickle.user2_id ? renderNamePlayer2(pickle.user2_id) : "spot open"}</div></div>
      <div className={pickle.size === 2 ? styles.userNone : styles.area}><div>Player 3: {pickle.user3_id ? renderNamePlayer3(pickle.user3_id) : "spot open" }</div></div>
      <div className={pickle.size === 2 ? styles.userNone : styles.area}><div>Player 4: {pickle.user4_id ? renderNamePlayer4(pickle.user4_id) : "spot open" }</div></div>
      <div className={pickle.user_id === user.id ? "" : styles.userNone}><button onClick={() => editPickle(pickle.id)}>edit reservation</button></div>
      <div className={pickle.user_id === user.id ? "" : styles.userNone}><button onClick={() => handleDelete(pickle.id)}>cancel reservation</button></div>
      </div>)
      }
    </div>
    </div>
    
    </div>
  )
}