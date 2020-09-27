import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormAddress from './FormAddress'
import FormPersonalData from './FormPersonalData'
import Summary from './Summary'
import './MultiForm.css'

export default function MultiForm() {
  return (
    //zmienilam sciezke personal data, zeby byla pierwsza, ktora sie laduje
    //jak chciales to rozwiazac?
    <Router>
      {/* <nav>
        <Link to="/">1</Link>
        <Link to="/address">2</Link>
        <Link to="/summary">3</Link>
      </nav> */}

      <Switch>
        <Route exact path="/" component={FormPersonalData} />
        <Route path="/address" component={FormAddress} />
        <Route path="/summary" component={Summary} />
      </Switch>
    </Router>
  )
}
