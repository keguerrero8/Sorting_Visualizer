
const insertionSort = (array) => { 
    const animations = []
    for (let i = 1; i < array.length; i++) {
        let count = 1
        let value = array[i]
        while (i - count >= 0 && value < array[i-count]) {
            animations.push([i-count+1, i-count])
            animations.push([i-count+1, i-count])
            let temp = array[i - count]
            array[i-count] = array[i - count+1]
            array[i - count + 1] = temp
            animations.push([array[i - count + 1], array[i - count]])
            count++
        }
    }
    return {array, animations}
} 

function insertionSortAnimations (animations, speed, setisDisabled) {
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

export {insertionSort, insertionSortAnimations};
