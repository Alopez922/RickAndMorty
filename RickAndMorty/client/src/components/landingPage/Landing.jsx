import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

export default function landing(){
    return(
        <div className="landing-Container">
            <Link to= "/home">
            <button className="button"> 
            <strong> Welcome Rick</strong>
            </button>
            </Link>
        </div>
    )
}