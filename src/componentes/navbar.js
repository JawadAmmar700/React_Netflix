import React, { useState as State } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const navbar = () => {
    const [appear, setAppear] = State(false);

    const handlescroll = () => {
        if (window.scrollY > 100) {
            setAppear(true);
        }
        if (window.scrollY < 100) {
            setAppear(false);
        }


    }
    window.addEventListener('scroll', handlescroll);

    return (
        <>
            <div className={!appear ? "nav" : "nav_black"}>
                <Link to='/home'>
                    <img className={!appear ? "logo" : "black_logo"} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                </Link>
                <Link to='/plans'>
                    <img className="rightOne" id={appear && "logo1"} src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
                </Link>

            </div>

        </>
    )
}

export default navbar
