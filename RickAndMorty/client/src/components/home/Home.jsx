import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card"
import "./home.css"
import { getCharacters, filterByStatus, filterBySpecies, filterByGender} from "../../actions";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from "../paginado/Paginado";
import Filtrado from "../filtrado/Filtrado";


export default function Home(){
    const dispatch = useDispatch()
    
    const allCharacters = useSelector((state)=>state.characters)


const [currentPage,setCurrentPage]= useState(1);
const [charactersPerPage]= useState(10);
const indexLastCharacter = currentPage * charactersPerPage;
const indexFirstCharacter = indexLastCharacter - charactersPerPage;
const currentCharacters = allCharacters.slice(
    indexFirstCharacter,
    indexLastCharacter
)
const [loaded, setLoaded] = useState(allCharacters.length?true:false) //esto es lo que dice marco
const [orden,setOrden]=useState("")
const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    useEffect(() => {
        if(!loaded){
        dispatch(getCharacters());
        }
      }, [loaded,dispatch]);


    return(
        <div className="Home-Container">
            <div className="Navbar-Home">
            <Navbar/>
            </div>

            <div className="SearchBar-Home">
                <h2>Characters</h2>
            <SearchBar setCurrentPage={setCurrentPage}/>

            </div>

            <div className="filter-card">

            <div className="filter">
            <Filtrado filterBySpecies={filterBySpecies} filterByStatus={filterByStatus} setCurrentPage={setCurrentPage} filterByGender={filterByGender} />
            </div>


            <div className="Card-Home">
                {currentCharacters.map((el)=>(
                <div key={el.id}>
            <Card name={el.name} status={el.status} species={el.species} type={el.type} gender={el.gender} image={el.image} location ={el.location} />
                 </div>
                ))
                
                
                
                }    
            </div>
            </div>


            <Paginado charactersPerPage={charactersPerPage} allCharacters={allCharacters.length}  paginado={paginado}/>

            
        </div>
        )
}
