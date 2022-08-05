
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function SignAthleteToNewDeal ({ athletes, sponsors, setDeals }) {
    const [formState, setFormState] = useState({})

    const history = useHistory()
    
    const {athlete_id, annual_amount, year_term, sponsor_id} = formState
    
    const athleteSelectorMap = athletes.map((player) => {
        return <option key={player.id} value={player.id}>{player.name}</option>
    })
    
    const sponsorSelectorMap = sponsors.map((company) => {
        return <option key={company.id} value={company.id}>{company.name}</option>
    })
    
    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            athlete_id: athlete_id,
            annual_amount: annual_amount,
            year_term: year_term,
            sponsor_id: sponsor_id
        }

        console.log(newFormObj)
        
        fetch("http://localhost:9292/deals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setDeals((prevState) => ([...prevState, data])))
        history.push("/deals")
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">

            <h3>Lets get you a new Deal!</h3>
            <label htmlFor="athlete_id">Athlete</label>
            <select onChange={handleFormChange} id="athlete_id" name="athlete_id" >
                <option>Select One</option>
                {athleteSelectorMap}
            </select>

            <label htmlFor="annual_amount">Annual Amount</label>
            <input onChange={handleFormChange} type="number" id="annual_amount" name="annual_amount" ></input>

            <label htmlFor="year_term">Years</label>
            <input onChange={handleFormChange} type="number" id="year_term" name="year_term" ></input>

            <label htmlFor="sponsor_id">Sponsor</label>
            <select onChange={handleFormChange} id="sponsor_id" name="sponsor_id" >
                <option>Select One</option>
                {sponsorSelectorMap}
            </select>

            <button type="submit">Sign Deal!</button>

            </form>
        </div>
    )

}

export default SignAthleteToNewDeal