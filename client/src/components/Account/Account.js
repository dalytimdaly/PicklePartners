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

  return (
    <div>
      <Link to='/account-edit'>Edit Account Info </Link>
    
    <div>
      
      <div className={styles.posts}>
      <div className={styles.post}>
        <div className={`${styles.manage} ${styles.heading}`}>My Pickles:</div>
      </div>
      {pickles ? pickles.map(pickle => <div key={pickle.id} className={styles.post}>
        
        <div className={styles.title}>{format(new Date(pickle.date), 'MM/dd')}</div>
        <div className={styles.area}><b>Location: {renderCourtName(pickle.court_id)}</b> Court: {pickle.court_number_id}</div>
        <div className={styles.area}><div>{pickle.user2_id ? pickle.user2_id : "spot open"}</div></div>
        <div className={pickle.size === 2 ? styles.userNone : styles.area}><div>{pickle.user3_id ? pickle.user3_id : "spot open" }</div></div>
        <div className={pickle.size === 2 ? styles.userNone : styles.area}><div>{pickle.user4_id ? pickle.user4_id : "spot open" }</div></div>
        <button>edit reservation</button>
        <button>cancel reservation</button>
      </div>)
      : null}
    </div>
    </div>
    
    </div>
  )
}