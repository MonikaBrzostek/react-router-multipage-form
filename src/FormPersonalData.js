import React from 'react'
import './Main.css'
import { useState } from 'react'

export default function FormPersonalData(props) {
  const [formData, setFormData] = useState({ name: '', surname: '', age: '' })

  const handleChangeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    if (
      formData.name === '' ||
      formData.surname === '' ||
      formData.age === ''
    ) {
      alert('Please fill out all the fields in the form')
    } else {
      props.history.push('/address', { formData })
    }
  }

  return (
    <>
      <h1>Multipage form using React Router</h1>
      <div className="form-div">
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChangeData}
              value={formData.name}
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              onChange={handleChangeData}
              value={formData.surname}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              onChange={handleChangeData}
              value={formData.age}
            />
          </label>
          <button onClick={handleClick}>Continue</button>
        </form>
      </div>
    </>
  )
}
