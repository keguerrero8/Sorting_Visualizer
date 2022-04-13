
const bubbleSort = (array) => {
    let isSorted = false
    let end = array.length
    const animations = []
    while (!isSorted) {
        isSorted = true
        end -= 1
        for (let j = 0; j < end; j++) {
            animations.push([j, j+1])
            animations.push([j, j+1])
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                isSorted = false
            }
            animations.push([array[j], array[j+1]])
        } 
    }
    return {array, animations}
} 

function bubbleSortAnimations (animations, speed, setisDisabled) {
    const arrayBars = document.getElementsByClassName("array-bar")
    for (let i = 0; i < animations.length; i++) {
      //change color when using index 0 and 1
      const isColorChange = i % 3 !== 2
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        //when i is 0, 3 turn red, when i is 1, 4 turn turqoiuse, so second animation
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color
          arrayBars[barTwoIdx].style.backgroundColor = color
        }, i * 1000/speed)
      } else {
        setTimeout(() => {
          const [barOneHeight, barTwoHeight] = animations[i];
          const [barOneIdx, barTwoIdx] = animations[i-1]
          arrayBars[barOneIdx].style.height = `${barOneHeight*4}px`;
          arrayBars[barTwoIdx].style.height = `${barTwoHeight*4}px`;
        }, i * 1000/speed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setisDisabled(false)
        }, i * 1000/speed)
      }
    }
}

export {bubbleSort, bubbleSortAnimations};
