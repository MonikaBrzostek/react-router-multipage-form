import React from 'react'
import './FormPersonalData.css'
import { useState } from 'react'

export default function FormPersonalData(props) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState(0)

  const handleChangeName = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleChangeSurname = (e) => {
    setSurname(e.target.value)
    console.log(surname)
  }

  const handleChangeAge = (e) => {
    setAge(e.target.value)
    console.log(age)
  }

  const handleClick = () => {
    if (name === '' || surname === '' || age === 0) {
      alert('Please fill out all the fields in the form')
    } else {
      props.history.push('/address', { name, surname, age })
    }
  }

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChangeName}
            value={name}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            onChange={handleChangeSurname}
            value={surname}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            onChange={handleChangeAge}
            value={age}
          />
        </label>
        <button onClick={handleClick}>Continue</button>
      </form>
    </div>
  )
}
