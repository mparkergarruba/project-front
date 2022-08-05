
import { useHistory } from "react-router-dom";
import { useState } from 'react'

function EmployeeOnly ({ athletes, sponsors, setAthletes, pwentered, setPwEntered}) {
  const [formState, setFormState] = useState("")
  const {password} = formState

  const history = useHistory()
    
  function handleFormChange(e) {
  const {name, value} = e.target
  setFormState((prevState) => ({...prevState, [name]:value}))
  }
    
  function handleSubmit(e) {
  e.preventDefault()
  setPwEntered(password)
  history.push("/deals")
  }

  function handleSubmitOut(e) {
  e.preventDefault()
  setFormState("")
  setPwEntered("")
  history.push("/")
  }
  


  return (
    <div className="Employee-only">{
      pwentered !== "12345" ? 
        <div>
          <form onSubmit={handleSubmit} className="form">
          <h4>Employee Login</h4>

          <label htmlFor="password">Password:</label>
          <input className="password" onChange={handleFormChange} type="password" id="password" name="password" placeholder="Thats the kinda thing an idiot would have on his luggage..." ></input>

          <button type="submit">Login</button>

          </form>
        </div>
          :
        <div>
            <form onSubmit={handleSubmitOut} className="form">
            <h3>Logout</h3>

            <button type="submit" >Logout</button>
            </form>
        </div>
        
    }</div>
  )
}

export default EmployeeOnly