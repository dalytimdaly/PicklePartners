import styles from './CourtSchedule.module.css';
import { Link } from 'react-router-dom';

export default function CourtSchedule({ image, address, hours, id, name, phone_number}) {

  const path = `/schedule/${id}/today`
  

  return (
      <Link to={path} className={styles.postcardcontainer}>
          <img src={image} alt="item" width="500" height="600" className={styles.image}/>
          <span className={styles.price}>{hours}</span>
          <div className={styles.metacontainer}>
            <span className={styles.title}>{name}</span>
            <span className={styles.price2}>{address}</span>
            <span className={styles.area}>{phone_number}</span>
          </div>
      </Link>
    )
  
}