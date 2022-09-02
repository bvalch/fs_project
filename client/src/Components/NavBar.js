import React from 'react'
import {Link} from 'react-router-dom'


const NavBar=()=>{

return(
    
    
    <ul>
        <li><Link to="/">Look up Dino</Link> </li>
        <li><Link to="/randomdino">Random Dino</Link> </li>
        <li><Link to="/">Learn about Dinos</Link> </li>
        <li><Link to="/dinolist">All Dinos</Link> </li> 
    </ul>
    
    )


};
export default NavBar;