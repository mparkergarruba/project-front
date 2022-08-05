function Athlete ({player}) {

    return(
        <li className="athlete">
            <p>Name: {player.name}, Age: {player.age}</p>
        </li>
    )
}

export default Athlete