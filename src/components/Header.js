import { Link } from "react-router-dom";
const Header=() =>{
    return(
        <header>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">Event</Link></li>
            <li><Link to ="">Programs</Link></li>
            <li><Link to ="">Contact</Link></li>
            <li><Link to ="/Form">Join Us</Link></li>

            </ul>
        </header>
    )
}
export default Header;