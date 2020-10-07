import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [nasaAPOD, setNasaAPOD] = useState([])

  useEffect(() => {
    const fetchNasaAPOD = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
          setNasaAPOD(res.data)
          console.log("fetchNasaAPOD -> res.data", res.data)

        })
        .catch(err => {
          debugger
        })
    }
    fetchNasaAPOD()
  }, [])

  return (
    <div className="App">
      <h1>Let's take a look at NASA's EPIC Astronomy Photo of the Day!</h1>
      <h2>Photo date: {nasaAPOD.date}</h2>
    </div>
  );
}

export default App;
