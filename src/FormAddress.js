import React, { useEffect, useState } from 'react'

export default function FormAddress(props) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    street: '',
    code: '',
    city: '',
    country: '',
  })

  useEffect(() => {
    console.log(props.location.state)
    setFormData({
      ...formData,
      name: props.location.state.formData.name,
      surname: props.location.state.formData.surname,
      age: props.location.state.formData.age,
    })
  }, [])

  const handleChangeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = () => {
    if (
      formData.street === '' ||
      formData.code === '' ||
      formData.city === '' ||
      formData.country === ''
    ) {
      alert('Please fill out all the fields in the form')
    } else {
      props.history.push('/summary', formData)
    }
  }
  return (
    <div className="form-div">
      <form>
        <label>
          Street/house number:
          <input
            type="text"
            name="street"
            onChange={handleChangeData}
            value={formData.street}
          />
        </label>
        <label>
          Post code:
          <input
            type="number"
            name="code"
            onChange={handleChangeData}
            value={formData.code}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            onChange={handleChangeData}
            value={formData.city}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            onChange={handleChangeData}
            value={formData.country}
          />
        </label>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}
