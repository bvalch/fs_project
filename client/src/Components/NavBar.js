import React from 'react'
import {Link} from 'react-router-dom'


const NavBar=()=>{

return(
    
    
    <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/finddino">Look up Dino</Link> </li>
        <li><Link to="/randomdino">Random Dino</Link> </li>
        <li><Link to="/dinolist">All Dinos</Link> </li> 
        <li><Link to="/favdinos">My Dinos</Link> </li> 
        <li><Link to="/quiz">Take a quiz</Link> </li> 
    </ul>
    
    )


};
export default NavBar;