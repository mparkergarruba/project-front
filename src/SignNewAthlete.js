import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function SignNewAthlete ({setAthletes}) {
    const [formState, setFormState] = useState({})

    const history = useHistory()

    const {name, team, age} = formState

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            name: name,
            team: team,
            age: age
        }
        fetch("http://localhost:9292/athletes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setAthletes((prevState) => ([...prevState, data])))
        history.push("/athletes")
    }

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <form onSubmit={handleSubmit} className="form">

            <h3>Let's sign a new Athlete!</h3>
            <label htmlFor="name">Name</label>
            <input onChange={handleFormChange} type="text" id="name" name="name" ></input>
            
            <label htmlFor="team">Team</label>
            <input onChange={handleFormChange} type="text" id="team" name="team" ></input>

            <label htmlFor="age">Age</label>
            <input onChange={handleFormChange} type="number" id="age" name="age" ></input>

            <button type="submit">Sign!</button>

        </form>
    )

}

export default SignNewAthlete