import React, {useState} from 'react'
import { Button, Slider, Box, Typography } from '@mui/material';
import {bubbleSort, bubbleSortAnimations} from '../sorting_algorithms/BubbleSort';
import { mergeSort, mergeSortAnimations } from '../sorting_algorithms/MergeSort';
import { quickSort, quickSortAnimations } from '../sorting_algorithms/QuickSort';
import { heapSort, heapSortAnimations } from '../sorting_algorithms/HeapSort';
import { insertionSort, insertionSortAnimations } from '../sorting_algorithms/InsertionSort';
import { useDispatch, useSelector } from "react-redux"
import { arrayGenerated, arraySizeChange } from '../reducers/arraySlice';

function Header() {
  const [isDisabled, setisDisabled] = useState(false)
  const [speed, setSpeed] = useState(50)
  const dispatch = useDispatch()
  const array = useSelector(state => state.array.entities)
  const arraySize = useSelector(state => state.array.size)
  const copyArray = [...array]

  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const handleNewArray = () => {
    const newArray = []
    for (let i = 0; i < arraySize; i++) {
        newArray.push(randomInterval(0, 100))
    }
    dispatch(arrayGenerated(newArray))
  } 

  const handleBubbleSort = () => {
    setisDisabled(true)
    const { animations } = bubbleSort(copyArray)
    bubbleSortAnimations(animations, speed, setisDisabled)
  } 

  const handleMergeSort = () => {
    setisDisabled(true)
    const { animations } = mergeSort(copyArray)
    mergeSortAnimations(animations, speed, setisDisabled)
  }
  
  const handleQuickSort = () => {
    setisDisabled(true)
    const { animations } = quickSort(copyArray)
    quickSortAnimations(animations, speed, setisDisabled)
  }


  const handleHeapSort = () => {
    setisDisabled(true)
    const { animations } = heapSort(copyArray)
    heapSortAnimations(animations, speed, setisDisabled)
  } 


  const handleInsertionSort = () => {
    setisDisabled(true)
    const { animations } = insertionSort(copyArray)
    insertionSortAnimations(animations, speed, setisDisabled)
  } 
  
  // only used for testing sortss
  // const testSort = () => {
  //   for (let i = 0; i < 1000; i++) {
  //     const testArray = []
  //     for (let i = 0; i < 30; i++) {
  //       testArray.push(randomInterval(0, 100))
  //     }
  //     const {array} = insertionSort(testArray)
  //     const jsArray = [...testArray].sort((a,b) => a - b)

  //     let isEqual = true
  //     for (let i = 0; i < array.length; i++) {
  //       if (array[i] !== jsArray[i]) {
  //         isEqual = false
  //       }
  //     }
  //     console.log(isEqual)
  //   }
  // }

  function handleSizeSlider (event) {
    dispatch(arraySizeChange(event.target.value))
  }

  function handleSpeedSlider (event) {
    setSpeed(event.target.value)
  }

  return (
      <Box sx={{width: "100%", margin: "auto"}} id="mainDiv">
            <Box sx={{width: "100%", margin: "auto", display: "flex"}}>
              <Box sx={{width: "30%", margin: "auto"}} >
                  <Typography color="white">Speed</Typography>
                  <Slider value={speed} valueLabelDisplay="auto" disabled={isDisabled} onChange={handleSpeedSlider}/>
              </Box>
              <Box sx={{width: "30%", margin: "auto"}} >
                  <Typography color="white">Array Size</Typography>
                  <Slider value={arraySize} valueLabelDisplay="auto" disabled={isDisabled} onChange={handleSizeSlider}/>
              </Box>
            </Box>
            <Button variant="outlined" sx={{margin: "30px auto"}} onClick={handleNewArray} disabled={isDisabled}> Generate New Array</Button>
            <Box sx={{width: "80%", margin: "40px auto", display: "flex", justifyContent: "space-between"}}>
                <Button size="small" variant="outlined" onClick={handleBubbleSort} disabled={isDisabled}>Bubble Sort</Button>
                <Button size="small" variant="outlined" onClick={handleInsertionSort} disabled={isDisabled}>Insertion Sort</Button>
                <Button size="small" variant="outlined" onClick={handleMergeSort} disabled={isDisabled}>Merge Sort</Button>
                <Button size="small" variant="outlined" onClick={handleQuickSort} disabled={isDisabled}>Quick Sort</Button>
                <Button size="small" variant="outlined" onClick={handleHeapSort} disabled={isDisabled}>Heap Sort</Button>
            </Box>
            {/* <Button onClick={testSort}>Test Sort</Button> */}
      </Box>
  );
}

export default Header;

