import styles from './Schedule.module.css';
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

  

  return (
    <div>
      
    </div>
  )
}