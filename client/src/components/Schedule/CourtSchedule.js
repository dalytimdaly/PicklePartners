import styles from './CourtSchedule.module.css';
import Reservation from './Reservation';
import { useEffect, useState } from 'react';

export default function CourtSchedule({ loaded, selection, result, address, hours, id, name, phone_number, courtNumber1, courtNumber2, courtNumber3, courtNumber4, courtNumber5, courtNumber6, courtNumber7, courtNumber8, courtNumber9, courtNumber10}) {

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

  

  return (
    <div>
       {pickles.map(pickle => <Reservation pickle={pickle} key={pickle.id} id={pickle.id} skillLevel={pickle.skill_level} date={pickle.date}  size={pickle.size} time={pickle.time} typeOfPlay={pickle.type_of_play} user2={pickle.user2_id} user3={pickle.user3_id} user4={pickle.user4_id}/>)}
    </div>
  )
}