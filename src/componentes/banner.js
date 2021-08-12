import React, { useState as State, useEffect as Effect } from 'react'
import './banner.css'
import axios from '../axios';
import requests from '../requests';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

const banner = () => {
    const [randomMovie, setRandomMovie] = State('');


    const HandleText = (text, n) => {
        return text?.substr(0, n) + "...";
    }

    Effect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setRandomMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);

        }
        fetchData();
    }, [])


    return (
        <div className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
            backgroundSize: "cover",
            objectFit: "contain",
            width: "100%",
            height: "400px",
            marginTop: "-70px",
            zIndex: "-1"
        }}>
            <div className="movie__info">
                <p className="movie__name">{randomMovie?.name}</p>
                <p className="movie__description">{HandleText(randomMovie?.overview, 150)}</p>
                <div className="btns">
                    <button className="btn"><PlayArrowIcon /><span id="play">Play</span></button>
                    <button className="btn" id="list"><AddIcon style={{ color: "white" }} /><span id="mylist">My List</span></button>
                </div>

            </div>
        </div >
    )
}

export default banner
