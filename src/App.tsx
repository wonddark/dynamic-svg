import React, {useEffect, useState} from 'react';
import "./App.css"
import SVGComponent from "./SVGComponent";

function App() {
    const [component, setComponent] = useState("")
  async function fetchImage() {
     const res = await fetch("https://assets.gyfted.io/occassions/anniversary.svg")
     const svg = await res.text();
     setComponent(svg);
  }
  function loadImage(){
    fetchImage().finally()
  }
  useEffect(loadImage, [])
  return (
    <div className="main-container">
        <SVGComponent component={component}/>
    </div>
  );
}

export default App;
