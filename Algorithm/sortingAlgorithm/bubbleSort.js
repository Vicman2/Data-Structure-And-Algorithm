const swap = (arr, index1, index2) => {
    let temp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = temp
}



const bubbleSort = (arr) => {
    let noSwap;
    for(let i = arr.length ; i >=0 ; i--){
        noSwap = true
        for(let j =0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}

console.log(bubbleSort([2,5,3,44,5,6,23,4,2,3,2,71, 1]))