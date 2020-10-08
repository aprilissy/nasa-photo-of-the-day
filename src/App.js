import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import DisplayAPOD from './components/DisplayAPOD/DisplayAPOD'
import Nav from './components/Nav/Nav'

function App() {
  const [nasaAPOD, setNasaAPOD] = useState({})

  useEffect(() => {
    const fetchNasaAPOD = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
          setNasaAPOD(res.data)
          // console.log("fetchNasaAPOD -> res.data", res.data)

        })
        .catch(err => {
          debugger
        })
    }
    fetchNasaAPOD()

  }, [])
  console.log('sup I am data', nasaAPOD)

  return (
    <div className="App">
      <h1>Let's take a look at NASA's EPIC Astronomy Photo of the Day!</h1>
      <DisplayAPOD nasaAPOD={nasaAPOD} />
    </div>
  );
}

export default App;
