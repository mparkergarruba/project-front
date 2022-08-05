import {useState} from 'react'
import { useHistory } from 'react-router-dom'

function DealEdit ({ athletes, sponsors, setDeals, deals, id, onDealEdit, onDealCancel}) {
    const [formState, setFormState] = useState({})
    const {annual_amount, year_term} = formState

    const history = useHistory()
    
    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            annual_amount: annual_amount,
            year_term: year_term
        }

        
        fetch(`http://localhost:9292/deals/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => onDealEdit(data))
        history.push("/deals")
    }

    function handleSubmitDestroy(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/deals/${id}`, {
            method: "DELETE"
        })
        onDealCancel(id)
        history.push("/deals")
    }

    const deal = deals.find((deal) => deal.id === id)

    return(
        <div>
            <p>
            {athletes[deal.athlete_id - 1].name} has a {deal.year_term} year deal for ${deal.annual_amount} per year with {sponsors[deal.sponsor_id -1].name}
            </p>
            <form onSubmit={handleSubmit} className="form">

            <h3>How can we change your Deal?</h3>

            <label htmlFor="annual_amount">Annual Amount</label>
            <input onChange={handleFormChange} type="number" id="annual_amount" name="annual_amount" placeholder={deal.annual_amount} step={10000} ></input>

            <label htmlFor="year_term">Years</label>
            <input onChange={handleFormChange} type="number" id="year_term" name="year_term"placeholder={deal.year_term}></input>

            <button type="submit">Update Deal!</button>

            </form>
            <form onSubmit={handleSubmitDestroy} className="form">

            <h3>Cancel your Deal</h3>

            <button type="submit">CANCEL DEAL!</button>

            </form>
        </div>
    )
}

export default DealEdit