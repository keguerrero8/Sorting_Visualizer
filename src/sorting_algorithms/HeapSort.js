const heapSort = (array) => {
    const animations = []
    heapify(array, animations)
    deleteSort(array, animations)
    return {array, animations}
} 

const heapify = (array, animations) => {
    for (let i = array.length - 1; i >= 0; i--) {
        siftDown(array, i, array.length - 1, animations)
    }
}

const deleteSort = (array, animations) => {
    for (let i = array.length - 1; i > 0; i--) {
        let temp = array[0]
        array[0] = array[i]
        array[i] = temp
        animations.push([0, i])
        animations.push([0, i])
        animations.push([array[0], array[i]])
        siftDown(array, 0, i-1, animations)
    }
}


const siftDown = (array, start, endIdx, animations) => {
    let childToCompare
    let currentIdx = start
    let leftChild = 2*currentIdx + 1
    while (leftChild <= endIdx) {
        let rightChild = 2*currentIdx + 2
        if (rightChild > endIdx) {
            childToCompare = leftChild
        } else {
            childToCompare = array[leftChild] > array[rightChild] ? leftChild : rightChild
        }
        animations.push([currentIdx, childToCompare])
        animations.push([currentIdx, childToCompare])
        if (array[currentIdx] < array[childToCompare]) {
            let temp = array[currentIdx]
            array[currentIdx] = array[childToCompare]
            array[childToCompare] = temp
            animations.push([array[currentIdx], array[childToCompare]])
            currentIdx = childToCompare
            leftChild = 2*currentIdx + 1
        } 
        else {
            animations.push([array[currentIdx], array[childToCompare]])
            break
        }
    }
}

function heapSortAnimations (animations, speed, setisDisabled) {
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

export {heapSort, heapSortAnimations};