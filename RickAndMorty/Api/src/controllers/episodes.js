const {getApiEpisodes} = require("./services")

const getEpisodes= async(req,res)=>{
    const name = req.query.name
     let allEpisodes =  await getApiEpisodes()

     if(name){
    const episodeName = await allEpisodes.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()))
    allEpisodes.length?
    res.status(200).send(episodeName):
    res.status(404).send("No existe el juego")
    }else{
        res.status(200).send(allEpisodes)
    }
}

module.exports={
    getEpisodes
}