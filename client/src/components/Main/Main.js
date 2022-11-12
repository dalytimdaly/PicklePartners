import styles from './Main.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Main() {

  const navigate = useNavigate()

  function navCreate() {
   console.log("hi")
  }

  function navFind() {
   console.log("hi")
  }

  function navConnect() {
   console.log("hi")
  }

  function navPlay() {
   console.log("hi")
  }

  return (
    <div>
    
    <div>
      <h1 className={styles.title}>PicklePartners</h1>
    </div>
    
    <div className={styles.buttonContainer}>
          <div className={styles.loginBtn}>
            <Link style={{textDecoration: 'none', padding: '5px' }} to='/login' className={styles.category}><img className={styles.icon} src="https://img.icons8.com/cute-clipart/2x/login-rounded-up.png" alt="restaurants"/><h4>Login/Sign-Up</h4></Link>
          </div>  
          <button className={styles.category} onClick={navCreate}>
            <img className={styles.icon} src="https://img.icons8.com/bubbles/2x/plus-2-math.png" alt="create"/>
            <h4>Create</h4>
          </button>
          <button className={styles.category} onClick={navFind}>
            <img className={styles.icon} src="https://img.icons8.com/external-happy-man-bomsymbols-/2x/external-find-happy-man-human-resource-and-life-style-set-2-happy-man-bomsymbols-.png" alt="find" />
            <h4>Find</h4>
          </button>
          <button className={styles.category} onClick={navConnect}>
            <img className={styles.icon} src="https://img.icons8.com/external-filled-outline-geotatah/2x/external-connect-recruitment-color-filled-outline-geotatah.png" alt="connect"/>
            <h4>Connect</h4>
          </button>
          <button className={styles.category} onClick={navPlay}>
            <img className={styles.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoN9ia7-iVJfn49QTWM1yEP4nu2xB38PtiA&usqp=CAU" alt="play"/>
            <h4>Play</h4>
          </button>
        </div>
        
      <div className={styles.heroBox} />
    </div>
  )
}