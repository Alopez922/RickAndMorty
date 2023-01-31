import axios  from "axios";

export function getCharacters(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/characters")
        return dispatch({
            type:"GET_CHARACTERS",
            payload:json.data
        })
    }
}

export function getEpisodes(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/episodes")
        return dispatch({
            type:"GET_EPISODES",
            payload:json.data
        })
    }
}

export function SearchCharacter(payload){
    return{
        type:"SEARCH_CHARACTER",
        payload:payload
    }
}

export function filterByStatus(payload){
    return{
        type:"FILTER_BY_STATUS",
        payload:payload
    }
}

export function filterBySpecies(payload){
    return{
        type:"FILTER_BY_SPECIES",
        payload:payload
    }
}

export function filterByGender(payload){
    return {
        type:"FILTER_BY_GENDER",
        payload:payload
    }
}