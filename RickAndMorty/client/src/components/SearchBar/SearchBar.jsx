import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchCharacter } from "../../actions";
import "./searchbar.css"


export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name,setName]=useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(SearchCharacter(name))
        setName("")
        setCurrentPage(1)
    }

    return(
    <div className="SearchBar-Container">
    
    <input className="inputSearchBar" value={name} type="text" placeholder="Buscar..." onChange={(e)=>handleInputChange(e)} />
    <div  className="buttonSearch">
    <button className="inputButton" type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
    </div>
    </div>
    
    )
}