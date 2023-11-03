import './App.css';
import React, { useState } from 'react'
import Navbar from './component/navbar.js';
import News from './component/News.js';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(){
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar title="NewsMonkey" />
          <LoadingBar
        color='#fff'
        height={3}
        progress={progress}
      />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="General" country="in" category="General" /></Route>
            <Route exact path="/General"><News setProgress={setProgress} apiKey={apiKey} key="General" country="in" category="General" /></Route>
            <Route exact path="/Technology"><News setProgress={setProgress} apiKey={apiKey} key="Technology" country="in" category="Technology" /></Route>
            <Route exact path="/Business"><News setProgress={setProgress} apiKey={apiKey} key="Business" country="in" category="Business" /></Route>
            <Route exact path="/Entertainment"><News setProgress={setProgress} apiKey={apiKey} key="Entertainment" country="in" category="Entertainment" /></Route>
            <Route exact path="/Health"><News setProgress={setProgress} apiKey={apiKey} key="Health" country="in" category="Health" /></Route>
            <Route exact path="/Science"><News setProgress={setProgress} apiKey={apiKey} key="Science" country="in" category="Science" /></Route>
            <Route exact path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="Sports" country="in" category="Sports" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
export default App;
