import { Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './page/Login'
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
  const [startEmail, setStartEmail] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <First startEmail={startEmail} setStartEmail={setStartEmail} formData={formData} setFormData={setFormData} />
        </Route>
        <Route exact path="/login">
          <Login formData={formData} setFormData={setFormData} initialFormData={initialFormData} />
        </Route>
        <Route exact path="/welcome">
          <Welcome setActiveProfile={setActiveProfile}  />
        </Route>
        <Route exact path="/home">
          {/* <Header activeProfile={activeProfile} /> */}
          <Home activeProfile={activeProfile} />
        </Route>
      </Switch>
    </>
  )
}

export default App
