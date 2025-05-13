import { useState } from 'react'
import './App.css'
import Input from "./components/inputs/Input"
import Text from "./components/text/Text"
import Plan from "./components/plan/Plan"

function App() {

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [validated, setValidated] = useState([])


  return (
    <>
      <Text />
      <div className='form-container'>
        <Plan />
        <form action="">
          <Input firstName={firstName} lastName={lastName} email={email} password={password} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} />
          <button onClick={e => {
            e.preventDefault()
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
          }}>CLAIM YOUR FREE TRIAL</button>
          <h5>By clicking the button, you are agreeing to our <span>Terms and Services</span></h5>
        </form>
      </div>
    </>
  )
}

export default App
