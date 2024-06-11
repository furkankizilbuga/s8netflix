import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Login from './page/Login'
import Welcome from './page/Welcome'
import Home from './page/Home'
import { useState } from 'react'

function App() {

  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Netflix</h1>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route exact path="/home">
          <Header activeProfile={activeProfile} />
          <Home activeProfile={activeProfile} />
        </Route>
      </Switch>
    </>
  )
}

export default App
