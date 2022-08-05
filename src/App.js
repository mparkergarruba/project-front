//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import NavBar from './NavBar';
import Athletes from './Athletes';
import Sponsors from './Sponsors';
import HomePage from './HomePage';
import EmployeeOnly from './EmployeeOnly';
import SignNewAthlete from "./SignNewAthlete";
import SignAthleteToNewDeal from "./SignAthleteToNewDeal";
import Deals from "./Deals";
import DealEdit from "./DealEdit";
import SponsorDetail from './SponsorDetail';
import Contact from './Contact';
import { Route, Switch } from "react-router-dom";

function App() {
  const [sponsors, setSponsors] = useState([])
  const [athletes, setAthletes] = useState([])
  const [pwentered, setPwEntered] = useState("")
  const [dealToEdit, setDealToEdit] = useState(null)
  const [sToEdit, setSToEdit] = useState(null)
  const [deals, setDeals] = useState([])
  
  useEffect (() => {
    fetch("http://localhost:9292/deals")
    .then(res => res.json())
    .then(data => setDeals(data))
  },[])

  useEffect (() => {
    fetch("http://localhost:9292/sponsors")
    .then(res => res.json())
    .then(data => setSponsors(data))
  },[])
  
  useEffect (() => {
    fetch("http://localhost:9292/athletes")
    .then(res => res.json())
    .then(data => setAthletes(data))
  },[])
  
  const idGetter = ((id) => {
    setDealToEdit(id)
  })

  const onDealEdit = (editedDeal) => {
    const updatedDeals = deals.map((ogDeal) => {
      if (ogDeal.id === editedDeal.id) {
        return editedDeal
      } else {
        return ogDeal
      }
    })
    setDeals(updatedDeals)
  }

  const onDealCancel = (xDeal) => {
    const updatedDeals = deals.filter((deal) => deal.id !== xDeal)
    setDeals(updatedDeals)
  }

  return (

      <div className="App">
        <NavBar pwentered={pwentered}/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/athletes">
            <Athletes athletes={athletes} />
          </Route>
          <Route path="/sponsors">
            <Sponsors sponsors={sponsors} setSToEdit={setSToEdit} />
          </Route>
          <Route path="/sponsordetail/:id">
            <SponsorDetail sponsors={sponsors} id={sToEdit}/>
          </Route>
          <Route exact path="/deals">
            <Deals athletes={athletes} sponsors={sponsors} deals={deals} idGetter={idGetter}/>
          </Route>
          <Route path="/signnewathlete">
            <SignNewAthlete setAthletes={setAthletes} />
          </Route>
          <Route path="/signathletetonewdeal">
            <SignAthleteToNewDeal athletes={athletes} sponsors={sponsors} setDeals={setDeals}/>
          </Route>
          <Route path="/dealedit/:id">
            <DealEdit athletes={athletes} sponsors={sponsors} setDeals={setDeals} onDealEdit={onDealEdit} deals={deals} id={dealToEdit} onDealCancel={onDealCancel}/>
          </Route>
          <Route path="/contact" render={() => <Contact/>}>
          </Route>
          <Route path="/login">
            <EmployeeOnly athletes={athletes} sponsors={sponsors} setAthletes={setAthletes} pwentered={pwentered} setPwEntered={setPwEntered} />
          </Route>
        </Switch>  
      </div>
  );
}

export default App;