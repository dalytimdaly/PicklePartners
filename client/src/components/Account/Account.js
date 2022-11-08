import styles from './Account.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function Account({ user, newUser }) {

  const [ errors, setErrors ] = useState([]);
  const [ pickles, setPickles ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(user !== null) {
    fetch(`/pickleballs?my_id=${user.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setPickles(data));
      } else {
        r.json().then(err => setErrors(err.error));
      }
    })}
  }, [user])

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
    console.log("hi")
  }

  function handleDelete(id) {
    console.log("hi")
    fetch(`/pickleballs/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => {
      if(r.ok) {
        setPickles(pickle => pickle.filter(pickle => pickle.id !== id));
      } else {
        r.json().then(err => setErrors(err));
      }
    })
  }

  function editPickle(id) {
    navigate(`/edit/${id}`)
  }

  return (
    <div>
      <Link to='/account-edit'>Edit Account Info </Link>
      <div>home of {user ? `${user.first_name} ${user.last_name}` : null}</div>
      <button className={styles.logoutBtn} onClick={logout}>[ Log out ]</button>
    <div>
    
    
      <div className={styles.posts}>
      <div className={styles.post}>
        <div className={`${styles.manage} ${styles.heading}`}>My Pickles:</div>
      </div>
      {pickles ? pickles.map(pickle => <div key={pickle.id} className={styles.post}>
        
        <div className={styles.title}>{`${pickle.date.substr(5,2)}/${pickle.date.substr(8,2)}`} Time: {renderTime(pickle.time)} Group Size: {pickle.size}</div>
        <div className={styles.area}><b>Location: {renderCourtName(pickle.court_id)}</b> Court: {pickle.court_number_id}</div>
        <div className={styles.area}><div>Player 2: {pickle.user2_id ? pickle.user2_id : "spot open"}</div></div>
        <div className={pickle.size === 2 ? styles.userNone : styles.area}><div>Player 3: {pickle.user3_id ? pickle.user3_id : "spot open" }</div></div>
        <div className={pickle.size === 2 ? styles.userNone : styles.area}><div>Player 4: {pickle.user4_id ? pickle.user4_id : "spot open" }</div></div>
        <button onClick={() => editPickle(pickle.id)}>edit reservation</button>
        <button onClick={() => handleDelete(pickle.id)}>cancel reservation</button>
      </div>)
      : null}
    </div>
    </div>
    
    </div>
  )
}