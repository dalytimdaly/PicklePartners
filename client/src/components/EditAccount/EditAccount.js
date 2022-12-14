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
      setSkillLevel(data.skillLevel)
    })
  }, [])

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
  const [skillLevel, setSkillLevel] = useState("beginner")

 
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
      window.location.reload()
    })

  }



  function handleSubmitPicture(e) {
    e.preventDefault()
    const file = e.target['avatar'].files[0]
    const formData = new FormData();
    formData.append('avatar', file)
    
  fetch(`/setavatar/${postObject.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(res => res.json())
        .then((data) => alert('Avatar submitted!'))
        
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
      <select className={styles.categories} onChange={handleSkillLevel}>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="advanced">advanced</option>
        <option value="pro">pro</option>
      </select>
      </label>  
      </div>
      <div className={styles.descriptioncontainer}>
      <label htmlFor="description" className={styles.descriptionlabel}>your bio
      <textarea className={styles.description} onChange={handleBio} value={patch > 0 ? bio : postObject.bio}></textarea>
      </label>
      </div>
      
      <button className={styles.button} type="submit">Submit Account Info</button>
      </form>
      <div className={styles.imagecontainer}>
      {editImage ? <form onSubmit={(e) => handleSubmitPicture(e)}>
                <input type="file" name="avatar" className={styles.avatarInput}/>
                <button type="submit" className={styles.avatarButton}>Submit</button>
            </form> : 
      <button onClick={renderEditImageInput} className={styles.imageButton}>edit avatar</button>}
      </div>
    </div>
  )

}