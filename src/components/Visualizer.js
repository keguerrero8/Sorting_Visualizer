import React from 'react'
import "../App.css"
import { useSelector } from "react-redux";

function Visualizer() {
  const reduxArray = useSelector(state => state.array.entities)

  return (
    <div style={{width: "100%"}}>
        {reduxArray.map((value, i) => (
            <div key={i}
            className="array-bar"
            style={{height: `${value*4}px`, width: `${reduxArray.length > 50 ? "0.5%" : "0.9%"}`}}
              >
                {value}
            </div>
        ))}
    </div>
  );
}

export default Visualizer;