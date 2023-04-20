const axios = require ("axios")
const {Character, Episode}= require("../db")



const getApiInfo = async()=>{
    const allInfo = []
    for(let i = 1; i<=42;i++){
    const apiUrl =  await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
    const charactersInfo = apiUrl.data.results.map(char =>{
        return{
            id:char.id,
            name:char.name,
            status:char.status,
            species:char.species,
            type:char.type,
            gender:char.gender,
            image:char.image,
            location:char.location.name
        }
    })
    allInfo.push(charactersInfo)
    }
    return allInfo.flat(1)
}


const getDbInfo = async()=>{
    const characterDb = await Character.findAll({
        include:{
            model:Episode,
            attributes:["name"],
        }
    })

const characterMap = characterDb.map((el)=>{
    return{
        id:el.dataValues.id,
        name:el.dataValues.name,
        status:el.dataValues.status,
        species:el.dataValues.species,
        type:el.dataValues.type,
        gender:el.dataValues.gender,
        images:el.dataValues.images
    }
})
return characterMap
}

const getSingleCharacter = async(id)=>{
const singleCharacter = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
const character ={

    id:singleCharacter.data.id,
    name:singleCharacter.data.name,
    status:singleCharacter.data.status,
    species:singleCharacter.data.species,
    type:singleCharacter.data.type,
    gender:singleCharacter.data.gender,
    image:singleCharacter.data.image,
}
return character;
}



const getAllCharacters = async()=>{
    const characterInfo = await getApiInfo();
    const dbInfo = await getDbInfo()
    const infoTotal = characterInfo.concat(dbInfo)
    return infoTotal
}



const characterToDb = async(data)=>{
    const {name, status, species,type,gender,image} = data;
    const [character,created] = await Character.findOrCreate({
        where:{name},
        defaults:{
            status,
            species,
            type,
            gender,
            image,
           
            

        }
    })

    if(created){
        const foundEpisodes = await Episode.findAll({
            where:{
                name:episodes
            }
        })
        await character.addEpisodes(foundEpisodes)
        return character
    }
}


const getApiEpisodes= async()=>{
    const allEpisodeInfo = []

    for(let i =0;i<=3;i++){
        apiUrl = await axios.get(`https://rickandmortyapi.com/api/episode?page=${i}`)
    
    const episodeInfo = apiUrl.data.results.map(episode=>{
        return {
            id:episode.id,
            name:episode.name,
            air_date:episode.air_date,
            characters:episode.characters
        }
        
    })
    allEpisodeInfo.push(episodeInfo)
        }
    return allEpisodeInfo.flat(1)
    
}





const getSingleEpisode = async (id) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

module.exports ={
    getApiInfo,
    getSingleCharacter,
    getAllCharacters,
    characterToDb,
    getDbInfo,
    getApiEpisodes,
    getSingleEpisode
    
}