import Sponsor from "./Sponsor"

function Sponsors ({sponsors, setSToEdit}) {

    const mapSponsors = sponsors.map((company) => {
        return <Sponsor company={company} key={company.id} setSToEdit={setSToEdit}/>
    })

    return(
        <div>
            <h1>Sponsors</h1>
            <div className="athletes">
                <ul>{mapSponsors}</ul>
            </div>
        </div>
    )
}

export default Sponsors