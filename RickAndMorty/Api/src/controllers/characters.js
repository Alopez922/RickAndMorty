const {getAllCharacters,getSingleCharacter,characterToDb, getDbInfo, getAllSpecies} = require("./services")


const getCharacter = async(req,res)=>{
    const name = req.query.name
    let charactersTotal = await getAllCharacters()

    if(name){
        const characterName = await charactersTotal.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()))
        characterName.length?
        res.status(200).send(characterName):
        res.status(404).send("No existe el Juego")
    }else{
        res.status(200).send(charactersTotal)
    }
}


const singleCharacter = async(req,res)=>{
    const id=req.params.id
    if(id.length<= 6){
        const found = await getSingleCharacter(id)
        return res.send(found)
    }
    const dbCharacter = await getDbInfo()
    
    const singleCharacter= dbCharacter.find((el)=>el.id===id)

    if(!singleCharacter){
        return res.status(404).send("Character not Found")
    }
    return res.send(singleCharacter)
}



const postCharacter = async(req,res)=>{
    const foundOrCreated = await characterToDb(req.body)
    if(!foundOrCreated){
        return res.status(400).send({message:"Character already exist"})
    }
        return res.status(200).send({message:"Character Created"})
}




module.exports={
getCharacter,
singleCharacter,
postCharacter,
}