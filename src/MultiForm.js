import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormAddress from './FormAddress'
import FormPersonalData from './FormPersonalData'
import Summary from './Summary'
import './MultiForm.css'

export default function MultiForm() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormPersonalData} />
        <Route path="/address" component={FormAddress} />
        <Route path="/summary" component={Summary} />
      </Switch>
    </Router>
  )
}
