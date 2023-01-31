import React from "react";
import "./card.css"


export default function Card({name,status,species,type,gender,image, location}){
    
    return(
        
        <div className="Card-Container">


        <img className="image" width="230px" src={image} alt="" />
        
        <div className="Card-name">
        <h4>{name} </h4>
        </div>
        <div className="Card-location">
            <div>Last Location</div>
        </div>
        <div className="location">
        <span>{location}  </span>
        </div>

        <div className="status">
        <span><strong>{status}</strong></span>
        </div>


    
</div>       
)
}

    

