import styles from './Main.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Main() {

  return (
    <div>handleLogin
    <Link to='/login' className={styles.Link}>Login/Sign-Up</Link>
    </div>
  )
}