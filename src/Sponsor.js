import { Link } from 'react-router-dom';

function Sponsor ({company, setSToEdit}) {
    const {id} = company

    function clickHandler() {
        setSToEdit(id)
    }    

    return(
        <li className='athlete'>{company.name}
            <Link to={`/sponsordetail/${id}`} >
                <button onClick={clickHandler}>Learn More!</button>
            </Link> 
        </li>
    )
}

export default Sponsor