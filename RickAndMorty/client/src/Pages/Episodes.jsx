import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../actions";
import Navbar from "../components/navbar/Navbar";
import Form from 'react-bootstrap/Form';
import "./episode.css"
import Card from "../components/card/Card";

export default function Episodes(){
    const dispatch = useDispatch();
    const allepisodes = useSelector((state) => state.episodes);
    const [loaded, setLoaded] = useState(allepisodes.length ? true : false);
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [episodeDetails, setEpisodeDetails] = useState(null);
    const [characterDetails, setCharacterDetails] = useState([]);

    useEffect(() => {
        if (!loaded) {
            dispatch(getEpisodes());
        }
    }, [loaded, dispatch]);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            if (episodeDetails) {
                const promises = episodeDetails.characters.map((url) =>
                    fetch(url).then((res) => res.json())
                );
                const charactersData = await Promise.all(promises);
                setCharacterDetails(charactersData);
            }
        };
        fetchCharacterDetails();
    }, [episodeDetails]);

    const handleEpisodeSelect = async (event) => {
        const episodeID = event.target.value;
        const api = `https://rickandmortyapi.com/api/episode/${episodeID}`;
        const episodeData = await fetch(api).then((res) => res.json());
        setEpisodeDetails(episodeData);
        setSelectedEpisode(episodeID);
    };

    return(
        <div className="Episodes-Container">
            <div className="Navbar-Home">
                <Navbar />
            </div>

            <div className="episode-name">
                <h2>Episode name: {episodeDetails?.name || "Unknown"}</h2>
                <h5>Air Date: {episodeDetails?.air_date || "Unknown"}</h5>
            </div>

    <Form.Select
      className="select-episode"
      aria-label="Default select example"
      value={selectedEpisode}
      onChange={handleEpisodeSelect}
    >
      <option value={null}>Choose...</option>

      {allepisodes.map((episode) => (
        <option key={episode.id} value={episode.id}>
          Episode - {episode.id}
        </option>
      ))}
    </Form.Select>
  

  <div className="card-episode">
    {characterDetails.length > 0 &&
      characterDetails.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
          location={character.location.name}
          page="/characters/"
          id={character.id}
        />
      ))}
  </div>
</div>

    );
}
