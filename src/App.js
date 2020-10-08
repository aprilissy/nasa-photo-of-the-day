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
      <Nav />
      <DisplayAPOD nasaAPOD={nasaAPOD} />
    </div>
  );
}

export default App;
