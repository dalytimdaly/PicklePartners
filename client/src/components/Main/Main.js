import styles from './Main.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Main() {

  return (
    <div>
    
    <div>
      <h1>Welcome to PicklePartners</h1>
      <h4>Create. Find. Connect. Play.</h4>
    </div>
    <Link to='/login' className={styles.Link}>Login/Sign-Up</Link>
    <div>
      New to Pickleball?
     <Link> Check out our partners at Pickleball USA for all you need to get started!</Link>
    </div>
    </div>
  )
}