
const quickSort = (array) => { 
    const animations = []
    quickSortHelper(array, 0, array.length - 1, animations)
    return {array, animations}
} 

const quickSortHelper = (array, start, end, animations) => {
    if (start >= end) return
    const p = partition(array, start, end, animations)
    quickSortHelper(array, start, p-1, animations)
    quickSortHelper(array, p+1, end, animations)
}

const partition = (array, start, end, animations) => {
    const pivot = end
    let i = start - 1
    for (let j = start; j < end; j++) {
        animations.push([j, pivot])
        animations.push([j, pivot])
        if (array[j] <= array[pivot]) {
            i++
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        if (i < start) {
            animations.push([array[i+1], array[j], i+1, j])
        } else {
            animations.push([array[i], array[j], i, j])
        }
    }
    animations.push([i+1, pivot])
    animations.push([i+1, pivot])
    const pivotSwap = array[i+1]
    array[i + 1] = array[pivot]
    array[pivot] = pivotSwap
    animations.push([array[i+1], array[pivot], i+1, pivot])
    return i + 1
}

function quickSortAnimations (animations, speed, setisDisabled) {
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
          const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] = animations[i];
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

export {quickSort, quickSortAnimations};
