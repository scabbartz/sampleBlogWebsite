import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {

    function switchPages(){
        return  console.log("I got clicked");        
    }

    return (
        <nav className = "active">
            
                <NavLink to='/'  exact = {true }>
                    <button onClick = {switchPages}>Home</button>
                </NavLink>
                <NavLink to='/recipies'  >
                <button onClick = {switchPages}>Recipies</button>
                </NavLink>
                <NavLink to='/about'  >
                <button onClick = {switchPages}>About Us</button>
                </NavLink>
            
        </nav>    )
}

export default Nav;
