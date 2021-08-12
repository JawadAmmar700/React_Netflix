import React, { useEffect as Effect } from 'react';
import './App.css';
import HomeScreen from './componentes/homeScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Plans from './componentes/plans';
import Navbar from './componentes/navbar';
import SignIn from './componentes/signIn';
import StartPage from './componentes/startPage';
import { StateValue } from './StateProvider'
import { auth } from './firebase';


function App() {

  const [{ user, value }, dispatch] = StateValue();
  Effect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "ADD_USER",
          user: authUser
        })

      }
      else {

        dispatch({
          type: "ADD_USER",
          user: null
        })

      }
    })


  }, [])

  return (
    <div className="App">

      <Router>
        <Switch>
          {
            user &&
            <Route path="/home">
              <HomeScreen />
            </Route>
          }
          <Route path="/startPage">
            <StartPage />
          </Route>
          <Route path="/signIn/:Email">
            <SignIn />
          </Route>
          {
            user ?
              <Route path="/plans">
                <Navbar />
                <Plans />
              </Route>
              : <StartPage />
          }
          <Route exact path="/">
            <StartPage />
          </Route>
        </Switch>
      </Router>


    </div>






  );
}

export default App;
