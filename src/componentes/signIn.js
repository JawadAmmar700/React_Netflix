import React, { useState as State, useEffect as Effect } from 'react'
import './signIn.css'
import { Link, useHistory as History, useParams as Params } from 'react-router-dom';
import { auth } from '../firebase';
import { StateValue } from '../StateProvider';
const signIn = () => {
    const [{ user, value }, dispatch] = StateValue();
    const [email, setEmail] = State('');
    const [password, setPassword] = State('');
    const history = History();
    const { Email } = Params();

    Effect(() => {
        if (Email !== "null") {
            setEmail(Email)
        }
    }, [])

    const handleSignup = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/plans')
            })
            .catch(err => alert(err.message))
        setEmail('')
        setPassword('')
    }



    const handleSignin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/plans")
                }
            })
            .catch(err => alert(err.message))

        setEmail('')
        setPassword('')
    }


    return (
        <div className="signIn_page">
            <img id="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/c7e2fa11-b77d-486e-aa0f-6f6329a5afbf/LB-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            <Link to="/startPage">
                <img id="logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

            </Link>

            <div className="sign_form">
                <h3>Sign In</h3>
                <form className="signIn_out">
                    <input className="input" type="email" value={email} placeholder="Email address or phone number" onChange={e => setEmail(e.target.value)} />
                    <input className="input" type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button className="sign_in_button" onClick={handleSignin}>Sign In</button>
                    <p><span>New to Netflix?</span> <Link className="signup" onClick={handleSignup}>Sign up now</Link></p>
                </form>
            </div>

        </div>
    )
}

export default signIn
