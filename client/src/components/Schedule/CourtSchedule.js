import styles from './Schedule.module.css';
import Reservation from './Reservation';
import { useEffect, useState } from 'react';

export default function CourtSchedule({ selection, result, address, hours, id, name, phone_number}) {

  const [ pickles, setPickles ] = useState([]);
  const [ errors, setErrors ] = useState([]);
  
  
  useEffect(() => {
    fetch(`/pickleballs?q=${selection}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setPickles(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
    
  }, [selection])

  console.log(pickles)

  return (
    <div>
      {pickles.map(pickle => <Reservation key={pickle.id} date={pickle.date} id={pickle.id} size={pickle.size} skillLevel={pickle.skill_level} time={pickle.time} typeOfPlay={pickle.type_of_play} creator={pickle.user_id} user2={pickle.user2_id} user3={pickle.user3_id} user4={pickle.user4_id}/>)}
    </div>
  )
}