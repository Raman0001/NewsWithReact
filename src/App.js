import React, { useState } from 'react'
import Navbar from './components/navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import { Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 8;
  // use your api key for this and create and .env file
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Navbar title="NewsMonkey" />
      <LoadingBar
        color='#fff'
        height={3}
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="General" country="in" category="General" />} />
        <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key="General" country="in" category="General" />} />
        <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="Technology" country="in" category="Technology" />} />
        <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="Business" country="in" category="Business" />} />
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" country="in" category="Entertainment" />} />
        <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="Health" country="in" category="Health" />} />
        <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="Science" country="in" category="Science" />} />
        <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="Sports" country="in" category="Sports" />} />
      </Routes >
    </div >
  )
}
export default App;
