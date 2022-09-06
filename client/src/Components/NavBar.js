import React from 'react'

import { Link } from 'react-router-dom'
import './style/NavBar.css';


const NavBar = () => {

    return (


        <nav className='navbar'>
            <button className='button'>
                <Link className='link' to="/">Home</Link>
            </button>
            <button className='button'>
                <Link className='link' to="/finddino">Look up Dino</Link>
            </button>
            <button className='button'>
                <Link className='link' to="/randomdino">Random Dino</Link>
            </button>
            <button className='button'>
                <Link className='link' to="/dinolist">All Dinos</Link>
            </button>
            <button className='button'>
                <Link className='link' to="/favdinos">My Dinos</Link>
            </button>
            <button className='button'>
                <Link className='link' to="/kerimquiz">Take a quiz</Link>
            </button>
            <button className='button'>
                <Link className='link' to="/flappydino">Flappy Dino</Link>
            </button>


        </nav>


    )


};
export default NavBar;