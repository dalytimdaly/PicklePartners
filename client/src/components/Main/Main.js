import styles from './Main.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Main({ user }) {

  const navigate = useNavigate()
  const path = user ? '/account' : '/login';
  const path2 = user ? '/create' : '/login';
  const path3 = user ? '/schedule' : '/login';

  function navCreate() {
   navigate(path2)
  }

  function navFind() {
   navigate(path3)
  }

  function navConnect() {
   alert("coming soon")
  }

  function navPlay() {
   navigate(path)
  }

  console.log(user)

  return (
    <div>
    
    <div>
      <h1 className={styles.title}>PicklePartners</h1>
    </div>
    
    <div className={styles.buttonContainer}>
          <div className={ user ? styles.userNone : styles.loginBtn}>
            <Link style={{textDecoration: 'none', padding: '5px', margin: '0px' }} to='/login' className={styles.category}><img className={styles.loginIcon} src="https://img.icons8.com/cute-clipart/2x/login-rounded-up.png" alt="restaurants"/><h4 className={styles.h4butLog}>Login/Sign-Up</h4></Link>
          </div>  
          <button className={styles.category} onClick={navCreate}>
            <img className={styles.icon} src="https://img.icons8.com/bubbles/2x/plus-2-math.png" alt="create"/>
            <h4 className={styles.h4but}>Create</h4>
          </button>
          <button className={styles.category} onClick={navFind}>
            <img className={styles.icon} src="https://img.icons8.com/external-happy-man-bomsymbols-/2x/external-find-happy-man-human-resource-and-life-style-set-2-happy-man-bomsymbols-.png" alt="find" />
            <h4 className={styles.h4butFind}>Find</h4>
          </button>
          <button className={styles.category} onClick={navConnect}>
            <img className={styles.icon} src="https://img.icons8.com/external-filled-outline-geotatah/2x/external-connect-recruitment-color-filled-outline-geotatah.png" alt="connect"/>
            <h4 className={styles.h4butConnect}>Connect</h4>
          </button>
          <button className={styles.category} onClick={navPlay}>
            <img className={styles.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoN9ia7-iVJfn49QTWM1yEP4nu2xB38PtiA&usqp=CAU" alt="play"/>
            <h4 className={styles.h4butPlay}>Play</h4>
          </button>
        </div>
        
      <div className={styles.heroBox} />
    </div>
  )
}