import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Login from '../Login/Login';
import Main from '../Main/Main';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='login' element={<Login />} />
        
    </Routes>

  );
}

export default App;
