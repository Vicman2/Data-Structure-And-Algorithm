function insertionSort(arr){

    for(let i = 1; i < arr.length;i++){
        let currentVal = arr[i];
        for(var j = i-1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }

        arr[j+1] = currentVal
    }

    return arr
}

console.log(insertionSort([2,5,3,44,5,6,23,4,2,3,2,71, 1]))