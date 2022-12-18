import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import AddTopic from './components/AddTopic'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={DashBoard} />
        <Route exact path="/addTopic" component={AddTopic} />
      </Switch>
    )
  }
}

export default App
