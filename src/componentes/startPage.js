import React, { useEffect as Effect, useState as State } from 'react'
import { Link, useHistory as History } from 'react-router-dom';
import './startPage.css';
import { StateValue } from '../StateProvider';
const startPage = () => {
    const [{ user, value }, dispatch] = StateValue();
    const [email, setEmail] = State('');
    const [err, setErr] = State(true);
    console.log(email)

    Effect(() => {
        setErr(false);
    }, [])



    const handleChange = e => {
        setEmail(e.target.value)
        if (!email) {
            setErr(true);
        }
    }

    return (
        <div className="start">
            <img className="background_logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/c7e2fa11-b77d-486e-aa0f-6f6329a5afbf/LB-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            <div className="start_nav">
                <img className="start_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <Link to={!email && `/signIn/${null}`}>
                    <button className="signIn">Sign In</button>
                </Link>
            </div>

            <div className="content">
                <h1>Unlimited Movies,Tv <br /> <span>shows,and more.</span></h1>
                <h3>Watch anywhere.Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership</p>
                <form className="form">
                    <input id="Email" value={email} onChange={handleChange} type="text" placeholder="Email Address" />
                    <Link to={email && `/signIn/${email}`} >
                        <button type="submit" className="form_button">Get Started</button>
                    </Link>
                </form>

                {!email && err ? <p className="err" style={{ color: "yellowgreen" }}>Field Empty!</p> : ''}


            </div>


        </div>
    )
}

export default startPage
