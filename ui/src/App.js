import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage'
import { HomePage } from './pages/HomePage'
import { PrivateRoute } from './_components'

export default class App extends React.PureComponent {
  render() {
    return (
      <HashRouter ref='router'>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/welcome" component={WelcomePage} />
            <Redirect to="/"/>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
