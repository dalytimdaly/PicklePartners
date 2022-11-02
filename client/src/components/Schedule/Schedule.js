import styles from './Schedule.module.css';
import CourtSchedule from './CourtSchedule';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Search({ user }) {
  const [ results, setResults ] = useState([]);
  const [ errors, setErrors ] = useState([]);
  const [selection, setSelection] = useState([])

  
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch(`/courts`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setResults(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
    
  }, [])

  function handleSelect(event) {
      setSelection(event.target.value)
      
  }

   
  
  return (
    <div>
      <label for="courts" className={styles.categorylabel}>choose a court near you:</label>
      <select className={styles.categories} onChange={handleSelect}>
      {results.map(result=>(<option value={result.id} key={result.id}>{result.name}</option>))}
      </select>
      <div>
        {results.map(result => <CourtSchedule selection={selection} key={result.id} result={result} address={result.address} hours={result.hours} id={result.id} name={result.name} phone_number={result.phone_number}/>)}
      </div>     
    </div>
  )
}