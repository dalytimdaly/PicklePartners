import styles from './EditAccount.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditAccount({user}) {

  const [postObject, setPostObject] = useState({})
  const [patch, setPatch] = useState(0);

  useEffect(() => {
    fetch(`/me`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setArea(data.area)
      setPhoneNumber(data.phone_number)
      setBio(data.bio)
      setImage(data.image)
    })
  }, [])

  console.log(postObject.id)

  function startPatch() {
    setPatch(1)
  }

  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [area, setArea] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bio, setBio] = useState("")
  const [editImage, setEditImage] = useState(false)
  const [image, setImage] = useState("")
  const [skillLevel, setSkillLevel] = useState("")

 
  function handleFirstName(event) {
    setFirstName(event.target.value)
  }

  function handleLastName(event) {
    setLastName(event.target.value)
  }

  function handleArea(event) {
    setArea(event.target.value)
  }

  function handleSkillLevel(event) {
    setSkillLevel(event.target.value)
  }

  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value)
  }

  function handleBio(event) {
    setBio(event.target.value)
  }

  function handleImage(event) {
    setImage(event.target.value)
  }

  function handleEditImage(event) {
    setEditImage(event.target.value)
  }

  function renderEditImageInput() {
      setPatch(1)
      setEditImage(!editImage)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const editedUser = {
        "first_name": firstName,
        "last_name": lastName,
        "bio": bio,
        "profile_picture": image,
        "area": area,
        "phone_number": phoneNumber,
        "skill_level": skillLevel
    }
    console.log(editedUser)
    fetch(`/users/${postObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
    .then(r => r.json())
    .then((data) => {
      navigate('/account')
    })
  }

  return (
    <div className={styles.post}>
      <div>Add some info to your account:</div>
      <form className={styles.form} onSubmit={handleSubmit} onChange={startPatch}>
      <div className={styles.groupcontainer}>
      <label for="firstname" className={styles.postlabel}>first name
      <input type='text' className={styles.postingtitle} onChange={handleFirstName} value={patch > 0 ? firstName : postObject.first_name}/>
      </label>
      <label for="lastname" className={styles.pricelabel}>last name
      <input type="text" className={styles.price} onChange={handleLastName} value={patch > 0 ? lastName : postObject.last_name}/>
      </label>
      <label for="area" className={styles.citylabel}>area
      <input type='text' className={styles.city} onChange={handleArea} value={patch > 0 ? area : postObject.area}/>
      </label>
      <label for="postalcode" className={styles.postallabel}>phone number
      <input type='text' className={styles.postalcode} onChange={handlePhoneNumber} value={patch > 0 ? phoneNumber : postObject.phone_number}/>
      </label>
      <label for="skill" className={styles.citylabel}>skill level
      <input type='text' className={styles.city} onChange={handleSkillLevel} value={patch > 0 ? skillLevel : postObject.skill_level}/>
      </label>
      </div>
      <div className={styles.descriptioncontainer}>
      <label htmlFor="description" className={styles.descriptionlabel}>your bio
      <textarea className={styles.description} onChange={handleBio} value={patch > 0 ? bio : postObject.bio}></textarea>
      </label>
      </div>
      
      <button className={styles.button} type="submit">Continue</button>
      </form>
      <div className={styles.imagecontainer}>
        <img src={image} alt="your profile picture" className={styles.imageDisplay}/>
      {editImage ? <label for="imageInput" className={styles.imagelabel}>profile picture url
      <input type="text" className={styles.imageInput} onChange={handleImage} value={patch > 0 ? image : postObject.profile_picture}/>
      </label> : 
      <button onClick={renderEditImageInput} className={styles.imageButton}>edit profile picture</button>}
      </div>
    </div>
  )

}