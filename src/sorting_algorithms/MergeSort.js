const mergeSort = (array) => {
    if (array.length <= 1) return array
    const animations = []
    const auxArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations)
    return {array, animations}
} 

const mergeSortHelper = (mainArray, start, end, auxArray, animations) => {
    if (start >= end) return
    const mid = Math.floor((start + end) / 2)
    mergeSortHelper(auxArray, start, mid, mainArray, animations)
    mergeSortHelper(auxArray, mid + 1, end, mainArray, animations)
    doMerge(mainArray, start, mid, end, auxArray, animations)
}

const doMerge = (mainArray, start, mid, end, auxArray, animations) => {
    let k = start
    let i = start
    let j = mid + 1
    while (i <= mid && j <= end) {
        animations.push([i, j])
        animations.push([i, j])
        if (auxArray[i] < auxArray[j]) {
            animations.push([k, auxArray[i]]);
            mainArray[k] = auxArray[i]
            i++
        } else {
            animations.push([k, auxArray[j]]);
            mainArray[k] = auxArray[j]
            j++    
        }
        k++
    }

    while (i <= mid) {
        animations.push([i, i])
        animations.push([i, i])
        animations.push([k, auxArray[i]])
        mainArray[k] = auxArray[i]
        k++
        i++
    }

    while (j <= end) {
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, auxArray[j]])
        mainArray[k] = auxArray[j]
        k++
        j++
    }
}

function mergeSortAnimations (animations, speed, setisDisabled) {
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
          const [barOneIdx, barOneHeight] = animations[i];
          arrayBars[barOneIdx].style.height = `${barOneHeight*4}px`;
        }, i * 1000/speed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setisDisabled(false)
        }, i * 1000/speed)
      }
    }
}

export {mergeSort, mergeSortAnimations};