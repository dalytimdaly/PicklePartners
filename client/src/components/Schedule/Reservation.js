import styles from './Reservation.module.css'

export default function Reservation( pickle, date, id, size, skillLevel, time, typeOfPlay, creator, user2, user3, user4) {

  

  return (
    <div className={styles.pickleContainer}>
      <span>{pickle.date}</span>
      <span>{pickle.time}</span>
      <span>{pickle.size}</span>
      <span>{pickle.skillLevel}</span>
      <span>{pickle.typeOfPlay}</span>
      <span>{pickle.creator}</span>
      <span>{pickle.user2}</span>
      <div>{pickle.size === 4 ? <span>{pickle.user3}</span> : null }</div>
      <div>{pickle.size === 4 ? <span>{pickle.user4}</span> : null }</div>
    </div>
  )
}