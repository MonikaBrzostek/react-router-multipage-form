import React, { useEffect, useState } from 'react'
import './Summary.css'

export default function Summary(props) {
  const [data, setData] = useState({})

  useEffect(() => {
    console.log(props)
    console.log(props.location.state)
    setData(props.location.state)
  }, [])
  return (
    <>
      <h1>Summary</h1>
      <div className="summary-div">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Surname</th>
              <td>{data.surname}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{data.age}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>Street</th>
              <td>{data.street}</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{data.code}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{data.city}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{data.country}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
