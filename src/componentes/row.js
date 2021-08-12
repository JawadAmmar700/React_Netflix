import React, { useState as State, useEffect as Effect } from 'react'
import './row.css'
import axios from '../axios';
const row = ({ title, fetUrl, last }) => {
    const [movies, setMovies] = State([]);
    Effect(() => {
        async function fetchData() {
            const request = await axios.get(fetUrl);
            setMovies(request.data.results);

        }
        fetchData();
    }, [])

    return (
        <div className="Row">
            <h1 className="title">{title}</h1>
            <div className={last ? "lastRow" : "rows"}>
                {
                    movies.map(movie => (

                        <img className="img" key={movie?.id} src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
                    )


                    )
                }

            </div>
        </div>
    )
}

export default row
