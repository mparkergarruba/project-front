import { Link } from 'react-router-dom';

function NavBar ({ pwentered }) {

    return(
        <div>
            <h1>Agency X</h1>
            <div className='navBar'>
                <br></br>
                <Link className="navDiv" to="/">Home Page</Link>
                <br></br>
                <Link className="navDiv" to="/athletes">Athletes</Link>
                <br></br>
                <Link className="navDiv" to="/sponsors">Sponsors</Link>
                <br></br>
                {
                    pwentered !== "12345" ? null :
                    <>
                        <Link className="navDiv" to="/signnewathlete">Sign New Athlete</Link>
                        <br></br>
                        <Link className="navDiv" to="/signathletetonewdeal">Sign Athlete to New Deal</Link>
                        <br></br>
                        <Link className="navDiv" to="/deals">Deals</Link>                
                        <br></br>
                    </>
                }
                <Link className="navDiv" to="/contact">Contact</Link>
                <br></br>
                <Link className="navDiv" to="/login">{pwentered !== "12345" ? "Login" : "Logout"}</Link>
            </div>
        </div>    
    )
}

export default NavBar