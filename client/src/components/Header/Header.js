import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Header({ user }) {

  const path = user ? '/account' : '/login';
  const path2 = user ? '/create' : '/login';
  const path3 = user ? '/schedule' : '/login';
  const navigate = useNavigate()

  function renderProfile() {
      navigate(user ? `/user/profile/${user.id}` : '/login')
      window.location.reload()
    }
  

  return (
    <>
    <div className={styles.header}>
      <div className={styles.homeBtn}>
        <Link to='/'><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png" alt="create"/></Link>
      </div>
      <div>
      <h4 className={styles.slogan}>Create. Find. Connect. Play.</h4>
      </div>
      <div className={styles.links}>
      {user ? `Hi, ${user.first_name}!` : "Log in or Sign up!" } | <Link to={path2}>create a pickle</Link> | <Link to={path3}>find a pickle</Link> | <Link to={path}>account</Link> | <button className={styles.buttonLink} onClick={renderProfile}>profile</button>
      </div>
    </div>
    <Outlet />
    </>
  )
}