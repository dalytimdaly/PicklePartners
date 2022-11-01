import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Login from '../Login/Login';
import Main from '../Main/Main';
import Account from '../Account/Account';
import Schedule from '../Schedule/Schedule';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EditAccount from '../EditAccount/EditAccount';


function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch(`/me`)
    .then(r => {
      if(r.ok) {
        r.json().then(userData => setUser(userData));
      }
    })
  }, [])

  function newUser(userData) {
    setUser(userData);
  }
  

  return (
    <div className={styles.App}>
    <Routes>
    <Route element={<Header />}>
      <Route path="/" element={<Main />} />
      <Route path='/login' element={<Login user={user} newUser={newUser}/>} />
      <Route path='/account' element={<Account user={user} newUser={newUser}/>} />
      <Route path='/schedule' element={<Schedule user={user} newUser={newUser}/>} />
      <Route path='/account-edit' element={<EditAccount user={user} newUser={newUser}/>} />
    </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
