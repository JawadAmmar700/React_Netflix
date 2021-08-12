import React, { useState as State } from 'react'
import './plans.css'
import { StateValue } from '../StateProvider';
import { auth } from '../firebase';
import { useHistory as History } from 'react-router-dom';



const plans = () => {
    const [{ user }, dispatch] = StateValue();
    const [h1, setH1] = State('Select a Plan');
    const history = History();
    const handleSignUp = e => {
        e.preventDefault();
        if (user) {
            auth.signOut();
            history.push('/startPage')

        }
    }
    const handleStandard = (e, price) => {
        e.preventDefault()
        setH1('Edit Profile')
    }
    const handleBasic = (e, price) => {
        e.preventDefault()
        setH1('Edit Profile')
    }
    const handlePremium = (e, price) => {
        e.preventDefault()
        setH1('Edit Profile')
    }


    return (


        <div className="plans">

            <div className="overlay">

                <h1 id="Select">{h1}</h1>
                <div className="select_plan">
                    <img id="plan_logo" src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
                    <div className="sub">
                        <div className="email">
                            <h2>{user?.email}</h2>
                        </div>
                        <p>Plans</p>
                        <div className="plan">
                            <div className="info">
                                <p>Netflix Standard</p>
                                <p>1080p</p>
                            </div>
                            <button className="subscription" onClick={e => handleStandard(e, 9.99)}>Subscription</button>
                        </div>
                        <div className="plan">
                            <div className="info">
                                <p>Netflix Basic</p>
                                <p>480p</p>
                            </div>
                            <button className="subscription" onClick={e => handleBasic(e, 7.99)}>Subscription</button>
                        </div>
                        <div className="plan">
                            <div className="info">
                                <p>Netflix Premium</p>
                                <p>4k+HdR</p>
                            </div>
                            <button className="subscription" onClick={e => handlePremium(e, 11.99)}>Subscription</button>
                        </div>
                        <button className="signOut" onClick={handleSignUp}>Sign Out</button>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default plans
