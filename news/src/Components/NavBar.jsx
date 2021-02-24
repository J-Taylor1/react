import React from 'react'
import {Link} from 'react-router-dom';
function NavBar() {
    // const history = useHistory
    return (
        <nav>
            <h1><Link to="/">TEK News</Link></h1>
            <span>Add your &lt;Link/&gt;'s to the Pages Here in the NavBar</span>
            <p>You will need to use React Router's Navigation system as opposed to 'a' tags to achieve proper client side routing</p>
            <ul>
                <Link to="/jokes">Jokes</Link>
                <Link to="/movie">Studi Ghibli</Link>
                <Link to="/space">Space</Link>
            </ul>
        </nav>
    )
}

export default NavBar;