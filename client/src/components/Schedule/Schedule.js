import styles from './Schedule.module.css';
import CourtSchedule from './CourtSchedule';
import { useEffect, useState } from 'react';

export default function Search({ user }) {
  const [ results, setResults ] = useState([]);
  const [ errors, setErrors ] = useState([]);

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

  console.log(results)
  return (
    <div>
      <label for="courts" className={styles.categorylabel}>choose a court near you:
      <div className={styles.courtsContainer}>
        {results.map(result => <CourtSchedule image={result.image} key={result.id} result={result} address={result.address} hours={result.hours} id={result.id} name={result.name} phone_number={result.phone_number} courtNumber1={result.court_number1} courtNumber2={result.court_number2} courtNumber3={result.court_number3} courtNumber4={result.court_number4} courtNumber5={result.court_number5} courtNumber6={result.court_number6} courtNumber7={result.court_number7} courtNumber8={result.court_number8} courtNumber9={result.court_number9} courtNumber10={result.court_number10}/>)}
      </div>
      </label>     
    </div>
  )
}