import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../actions";
import Navbar from "../components/navbar/Navbar";
import Form from 'react-bootstrap/Form';
import "./episode.css"
import Card from "../components/card/Card";


export default function Episodes(){
    const dispatch = useDispatch();

    const allepisodes = useSelector((state)=>state.episodes)

    const [loaded, setLoaded] = useState(allepisodes.length?true:false) //esto es lo que dice marco

    useEffect(()=>{
        if(!loaded){
            dispatch(getEpisodes());
        }
    },[loaded,dispatch])

    return(
        <div className="Episodes-Container">
            <div className="Navbar-Home">
            <Navbar/>
            </div>
            
            <div className="episode-name">
             <h2>Episode name: </h2>
             <h5>Aird Date:</h5>
            </div>

            <Form.Select className="select-episode" aria-label="Default select example">
            <option>choose...</option>

            {
              allepisodes.map((el)=>(
                <option>Episode- {el.id}</option>
              
              ))
                
            }
            </Form.Select>

        
            

        </div>

    )
}