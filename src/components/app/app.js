import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "../../pages/home-page";
import AboutPage from "../../pages/about-page";
import Alert from "../alert";
import Header from "../header";
import {AlertState} from "../../context/alert/alert-state";
import {FirebaseState} from "../../context/firebase/firebase-state";

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Header/>
          <div className='container pt-4'>
            <Alert/>
            <Switch>
              <Route path={'/'} exact component={HomePage}/>
              <Route path={'/about'} component={AboutPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  )
};

export default App;