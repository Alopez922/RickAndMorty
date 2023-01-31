import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar(){
    return(
        <div className="Navbar-Container">
                <div className="titulo">
                    <h3 className="rick">Rick & Morty</h3>
                </div>
                <ul className="lista">
                    <Link to="home">
                    <li>Characters</li>
                    </Link>
                    <Link to="Episodes">
                    <li>Episodes</li>
                    </Link>
                    <Link>
                    <li>Location</li>
                    </Link>
                </ul>
                </div>
    )
}