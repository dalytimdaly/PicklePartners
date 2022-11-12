import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Header({ user }) {

  const path = user ? '/account' : '/login';
  const navigate = useNavigate()

  function renderProfile() {
      navigate(user ? `/user/profile/${user.id}` : '/login')
      window.location.reload()
    }
  

  return (
    <>
    <div className={styles.header}>
      <div className={styles.homeBtn}>
        <Link to='/'>PP</Link>
      </div>
      <div className={styles.links}>
        <Link to='/create'>create a pickle</Link> | <Link to='/schedule'>find a pickle</Link> | <Link to={path}>account</Link> | <button className={styles.buttonLink} onClick={renderProfile}>profile</button>
      </div>
    </div>
    <Outlet />
    </>
  )
}