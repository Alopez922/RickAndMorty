const { Router } = require('express');
const {getCharacter,singleCharacter, postCharacter, getSpecies}= require("../controllers/characters")
const {getEpisodes, getEpisodeById}= require("../controllers/episodes")


const router = Router()

router.get("/characters",getCharacter)
router.get(`/characters/:id`,singleCharacter)
router.get("/episodes",getEpisodes)
router.get(`/episodes/:id`,getEpisodeById)
router.post("/characters",postCharacter)


module.exports = router;