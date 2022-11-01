import styles from './Account.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Account() {



  return (
    <div>
      <Link to='/account-edit'>Edit Account Info </Link>
    </div>
  )
}