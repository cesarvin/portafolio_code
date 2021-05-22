import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './layout/style.css'
import profilepic from './images/foto.jpg'

import Menu from './components/Menu'
import HashLinkPage from './components/HashLinkPage'

const App = () => (
  <div className="row">
    <Router>
      <div className="panel-menu">
        <div className="profilepic">
          <img className="imgprofile" src={profilepic} width="175px" alt="Profile pic" />
        </div>
        <Menu />
      </div>
      <div className="contenido">
        <Switch>
          {/* <Route exact path="/16776/proyectof/index.html" component={HashLinkPage} />
          <Route exact path="/16776/proyectof/index.html" component={HashLinkPage} />
          <Route render={() => <Redirect to="/16776/proyectof/index.html" />} /> */}
          <Route exact path="/portafolio16776/index.html" component={HashLinkPage} />
          <Route exact path="/portafolio16776/index.html" component={HashLinkPage} />
          <Route render={() => <Redirect to="/portafolio16776/index.html" />} />
        </Switch>
      </div>
    </Router>
  </div>
)

export default App
