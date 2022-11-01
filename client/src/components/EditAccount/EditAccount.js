import styles from './EditAccount.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditAccount({user}) {

  const [postObject, setPostObject] = useState({})
  const [patch, setPatch] = useState(0);

  useEffect(() => {
    fetch(`/user/${user.id}`)
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

  function selectCat(event) {
    setCat(event.target.value)
  }

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handlePrice(event) {
    setPrice(event.target.value)
  }

  function handleCity(event) {
    setCity(event.target.value)
  }

  function handlePostal(event) {
    setPostal(event.target.value)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
  }

  function handleImage(event) {

    setImage(event.target.value)
  }

  function renderAddImageInput() {
      setPatch(1)
      setAddImage(!addImage)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const editedUser = {
        "first_name": firstName,
        "last_name": lastName,
        "bio": bio,
        "profile_picture": image,
        "area": city,
        "phone_number": phoneNumber,
        "skill_level": skillLevel
    }

    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
    .then(r => r.json())
    .then((data) => {
      navigate(`/users/${data.id}`)
    })
  }

  return (
    <div className={styles.post}>
      <form className={styles.form} onSubmit={handleSubmit} onChange={startPatch}>
      <div className={styles.groupcontainer}>
      <label for="postingtitle" className={styles.postlabel}>first name
      <input type='text' className={styles.postingtitle} onChange={handleTitle} value={patch > 0 ? title : postObject.title}/>
      </label>
      <label for="price" className={styles.pricelabel}>last name
      <input type="number" className={styles.price} title="Please enter a number" onChange={handlePrice} value={patch > 0 ? price : postObject.price}/>
      </label>
      <label for="cityorneighborhood" className={styles.citylabel}>area
      <input type='text' className={styles.city} onChange={handleCity} value={patch > 0 ? city : postObject.area}/>
      </label>
      <label for="postalcode" className={styles.postallabel}>phone number
      <input type='text' className={styles.postalcode} onChange={handlePostal} value={patch > 0 ? postal : postObject.postal_code}/>
      </label>
      <label for="cityorneighborhood" className={styles.citylabel}>skill level
      <input type='text' className={styles.city} onChange={handleCity} value={patch > 0 ? city : postObject.area}/>
      </label>
      </div>
      <div className={styles.descriptioncontainer}>
      <label htmlFor="description" className={styles.descriptionlabel}>your bio
      <textarea className={styles.description} onChange={handleDescription} value={patch > 0 ? description : postObject.description}></textarea>
      </label>
      </div>
      
      <button className={styles.button} type="submit">Continue</button>
      </form>
      <div className={styles.imagecontainer}>
        <img src={image} alt="your profile picture" />
      {addImage ? <label for="imageInput" className={styles.imagelabel}>profile picture url
      <input type="text" className={styles.imageInput} onChange={handleImage} value={patch > 0 ? image : postObject.image}/>
      </label> : 
      <button onClick={renderAddImageInput} className={styles.imageButton}>edit profile picture</button>}
      </div>
    </div>
  )

}