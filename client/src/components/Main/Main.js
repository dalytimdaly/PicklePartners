import styles from './Main.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Main() {

  return (
    <div>
    
    <div>
      <h1 className={styles.title}>PicklePartners</h1>
    </div>
    
    <div className={styles.buttonContainer}>
          <div className={styles.loginBtn}>
            <Link to='/login' className={styles.category}><img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/8bc05b287157/assets/img/svg_illustrations/40x40_food_v2.svg" alt="restaurants"/> Login/Sign-Up</Link>
          </div>  
          <button className={styles.category} >
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/488aeb87ef6e/assets/img/svg_illustrations/40x40_gift_shops_v2.svg" alt="shopping"/>
            Create
          </button>
          <button className={styles.category} >
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/1397897c21a5/assets/img/svg_illustrations/40x40_new_v2.svg" alt="nightlife" />
            <h4>Find</h4>
          </button>
          <button className={styles.category} >
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/0372f8e93aa9/assets/img/svg_illustrations/40x40_set_objective_v2.svg" alt="active"/>
            Connect
          </button>
          <button className={styles.category} >
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/5bd5d2648742/assets/img/svg_illustrations/40x40_barbers_v2.svg" alt="beautysvc"/>
            Play
          </button>
        </div>
        
      <div className={styles.heroBox} />
    </div>
  )
}