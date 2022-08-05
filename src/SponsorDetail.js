function SponsorDetail ({id, sponsors}) {

    const sponsor = sponsors.find((sponsor) => sponsor.id === id)

    return(
        <div>
            <img src={sponsor.logo} className="App-logo" alt="logo" />
        <p>
          {sponsor.name}: {sponsor.statement}
        </p>
        
        </div>
    )
}

export default SponsorDetail