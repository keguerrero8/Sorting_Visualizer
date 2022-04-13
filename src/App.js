import './App.css';
import Header from './components/Header';
import Visualizer from './components/Visualizer';
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { arrayGenerated } from './reducers/arraySlice';

function App() {
  const dispatch = useDispatch()

  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    const newArray = []
    for (let i = 0; i < 50; i++) {
        newArray.push(randomInterval(0, 100))
    }
    dispatch(arrayGenerated(newArray))
  }, [dispatch])

  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1 style={{color: "white", margin: "50px auto"}} >Sorting Visualizer</h1>
      <Header />
      <Visualizer />
    </div>
  );
}

export default App;
