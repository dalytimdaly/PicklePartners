import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Login from '../Login/Login';
import Main from '../Main/Main';
import Account from '../Account/Account';
import Schedule from '../Schedule/Schedule';
import ReservationCalendar from '../Schedule/ReservationCalendar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EditAccount from '../EditAccount/EditAccount';
import CreateReservation from '../CreateReservation/CreateReservation';
import EditReservation from '../EditReservation/EditReservation';
import Today from '../Schedule/Reservation/Today';
import Tomorrow from '../Schedule/Reservation/Tomorrow';
import ThirdDay from '../Schedule/Reservation/ThirdDay';
import FourthDay from '../Schedule/Reservation/FourthDay';
import FifthDay from '../Schedule/Reservation/FifthDay';
import SixthDay from '../Schedule/Reservation/SixthDay';
import LastDay from '../Schedule/Reservation/LastDay';
import UserProfile from '../UserProfile/UserProfile';

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
    
    
    <Route element={<Header user={user} />}>
    <Route path="/" element={<Main user={user}/>} />
    <Route path='/login' element={<Login user={user} newUser={newUser}/>} />
    <Route path='/account-edit' element={<EditAccount user={user} newUser={newUser}/>} />
      
      <Route path='/account' element={<Account user={user} newUser={newUser}/>} />
      <Route path='/schedule' element={<Schedule user={user} newUser={newUser}/>} />
      
      <Route path='/schedule/:id' element={<ReservationCalendar user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/today' element={<Today user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/tomorrow' element={<Tomorrow user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/day3' element={<ThirdDay user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/day4' element={<FourthDay user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/day5' element={<FifthDay user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/day6' element={<SixthDay user={user} newUSer={newUser}/>} />
      <Route path='/schedule/:id/day7' element={<LastDay user={user} newUSer={newUser}/>} />
      <Route path='/create' element={<CreateReservation user={user}/>} />
      <Route path='/edit/:id' element={<EditReservation user={user}/>} />
      <Route path='/user/profile/:id' element={<UserProfile user={user} />} />
    </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
