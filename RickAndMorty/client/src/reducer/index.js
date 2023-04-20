const initialState={
    characters:[],
    singlecharacter:[],
    allcharacters:[],
    episodes:[],
    allEpisodes:[]
}

function rootReducer(state = initialState,action){
    switch(action.type){
        case "GET_CHARACTERS":
            return{
                ...state,
                characters:action.payload,
                allcharacters:action.payload
            }

        case "GET_SINGLECHARACTER":
            return{
                ...state,
                singleCharacter:action.payload,

            }

        case "GET_EPISODES":
            return{
                ...state,
                episodes:action.payload,
                allEpisodes:action.payload
            }

        case "SEARCH_CHARACTER":
            return{
                ...state,
                characters:state.allcharacters.filter((cha)=>cha.name.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
            }

        case "FILTER_BY_STATUS":

            return{
                ...state,
                characters:state.allcharacters.filter(function (el){
                    if(action.payload ==="All"){
                        return state.allcharacters;
                    }else if (el.status){
                        return el.status.includes(action.payload)
                    }else if (!el.status) return state.allcharacters
                })
            }
        
        case "FILTER_BY_SPECIES":
            return{
                ...state,
                characters:state.allcharacters.filter(function(el){
                    if(action.payload === "All"){
                        return state.allcharacters;
                    }else if (el.species){
                        return el.species.includes(action.payload)
                    }else if (!el.species) return state.allcharacters
                })
            }

        case "FILTER_BY_GENDER":
            return{
                ...state,
                characters:state.allcharacters.filter(function(el){
                    if(action.payload ==="All"){
                        return state.allcharacters;
                    }else if(el.gender){
                        return el.gender.includes(action.payload)
                    }else if (!el.gender){
                        return state.allcharacters
                    }
                })
            }

            default:
                return state;
    }
   
}

export default rootReducer;