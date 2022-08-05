import { Link } from 'react-router-dom';

function Deal ({ deal, athletes, sponsors, idGetter }) {
    const {id} = deal
    
    
    function clickHandler() {
        idGetter(id)
        }

    return(
        <li className='athlete'>{deal.athlete.name} has a {deal.year_term} year deal for ${deal.annual_amount} per year with {deal.sponsor.name}!
            <Link to={`/dealedit/${id}`} >
                <button onClick={clickHandler}>Edit Deal</button>
            </Link>    
        </li>
        
    )

}

export default Deal