import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import "./filtrado.css"

import { useDispatch, useSelector } from "react-redux";
import { filterByGender, filterBySpecies } from "../../actions";

export default function Filtrado({filterByStatus,setCurrentPage,filterBySpecies,filterByGender}){

    const dispatch = useDispatch()
    const allStatus = useSelector((state)=>state.status);

    function handleFilterStatus(e){
        e.preventDefault()
        dispatch(filterByStatus(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterSpecies(e){
      e.preventDefault()
      dispatch(filterBySpecies(e.target.value))
      setCurrentPage(1)
    }

    function handleFilterGender(e){
      e.preventDefault()
      dispatch(filterByGender(e.target.value))
      setCurrentPage(1)
    }

    let species = [
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "unknown",
      "Animal",
      "Disease",
      "Robot",
      "Cronenberg",
      
    ];


    return(
        <div className="filtro-Container">
            <div>
                <h4>Filters</h4>
            </div>
              

              

      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body>
          
          <div className="buttons">
<Button variant="outline-primary" onClick={e=>handleFilterStatus(e)} value="Alive">Alive</Button>
<Button variant="outline-primary" onClick={e=>handleFilterStatus(e)} value="Dead">Dead</Button> 
<Button variant="outline-primary" onClick={e=>handleFilterStatus(e)} value="unknown">unknown</Button>
            </div>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Species</Accordion.Header>
        <Accordion.Body>
        {species.map((item, index) => {
            return (
              <div className="buttons-species">
              <Button variant="outline-primary"
                onClick={e=>handleFilterSpecies(e)}
                name="species"
                index={index}
                key={index}
                input={item}
                value={item}
              >
                {item}
              </Button>

             </div>
            );
          })}


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
<Button variant="outline-primary" onClick={e=>handleFilterGender(e)} value="Female">Female</Button>
<Button variant="outline-primary" onClick={e=>handleFilterGender(e)} value="Male">Male</Button> 
<Button variant="outline-primary" onClick={e=>handleFilterGender(e)} value="unknown">Unknown</Button>
<Button variant="outline-primary" onClick={e=>handleFilterGender(e)} value="Genderless">Genderless</Button>


        </Accordion.Body>
        </Accordion.Item>
    </Accordion>

        </div>
    )
}



