import React, { useEffect, useState } from 'react'

export default function FormAddress(props) {
  const [street, setStreet] = useState('')
  const [code, setCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    setName(props.location.state.name)
    setSurname(props.location.state.surname)
    setAge(props.location.state.age)
    console.log(props)
    console.log(props.location.state)
  }, [])

  const handleChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const handleChangeCode = (e) => {
    setCode(e.target.value)
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }

  const handleChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const handleClick = () => {
    if (street === '' || code === '' || city === '' || country === '') {
      alert('Please fill out all the fields in the form')
    } else {
      props.history.push('/summary', {
        name,
        surname,
        age,
        street,
        code,
        city,
        country,
      })
    }
  }
  return (
    <div>
      <form>
        <label>
          Street/house number:
          <input
            type="text"
            name="address"
            onChange={handleChangeStreet}
            value={street}
          />
        </label>
        <label>
          Post code:
          <input
            type="number"
            name="code"
            onChange={handleChangeCode}
            value={code}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            onChange={handleChangeCity}
            value={city}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            onChange={handleChangeCountry}
            value={country}
          />
        </label>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}
