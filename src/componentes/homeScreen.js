import React from 'react'
import './homeScreen.css';
import Banner from './banner';
import Navbar from './navbar';
import Rows from './row';
import requests from '../requests'

const homeScreen = () => {

    return (
        <div className="home">
            {/*NavBar*/}
            <Navbar />
            {/*banner*/}
            <Banner />
            {/*Movie rows*/}
            <Rows title="Netflix Originals" fetUrl={requests.fetchNetflixOriginals} />
            <Rows title="Trending Now" fetUrl={requests.fetchTrending} />
            <Rows title="Top Rated " fetUrl={requests.fetchTopRated} />
            <Rows title="Action Movies" fetUrl={requests.fetchActionMovies} />
            <Rows title="Comedy Movies" fetUrl={requests.fetchComedyMovies} />
            <Rows title="Horror Movies" fetUrl={requests.fetchHorrorMovies} />
            <Rows title="Romance Movies" fetUrl={requests.fetchRomanceMovies} />
            <Rows title="Documanteries" fetUrl={requests.fetchDocumantaries} last={true} />

        </div>
    )
}

export default homeScreen
