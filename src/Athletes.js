import Athlete from "./Athlete"

function Athletes ({athletes}) {

    const mapAthletes = athletes.map((player) => {
        return <Athlete player={player} key={player.id} />
    })
    return(
        <div>
            <h1>Athletes</h1>
            <div className="athletes">
                <ul>{mapAthletes}</ul>
            </div>
        </div>
    )
}

export default Athletes