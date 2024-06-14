import { Route, Switch } from 'react-router-dom'
import './App.css'
import LoginPage from './page/LoginPage'
import Welcome from './page/Welcome'
import Home from './page/Home'
import { useState } from 'react'
import First from './page/First'
/* import Header from './components/Header' */

function App() {

  const initialFormData = {
    email: "",
    password: "",
    terms: false
}

  const [activeProfile, setActiveProfile] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [startEmail, setStartEmail] = useState("");

  return (
    <>
      <Switch>
        <Route exact path="/">
          <First formData={formData} setFormData={setFormData} startEmail={startEmail} setStartEmail={setStartEmail} />
        </Route>
        <Route exact path="/login">
          <LoginPage formData={formData} setFormData={setFormData} initialFormData={initialFormData} />
        </Route>
        <Route exact path="/welcome">
          <Welcome setActiveProfile={setActiveProfile}  />
        </Route>
        <Route exact path="/home">
          <Home setActiveProfile={setActiveProfile} activeProfile={activeProfile} />
        </Route>
      </Switch>
    </>
  )
}

export default App
