function pivot(arr, start=0, end=arr.length){
    
    let pivot = arr[start]
    let swapIndex = start;

    for(let i = start+1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    
    return swapIndex
}

function swap(array, i,j){
    var temp = array[i];
    array[i] = array[j]
    array[j] = temp
}

function quickSort(arr, left= 0, right= arr.length-1){
    if(left < right){
        
        let pivotIndex = pivot(arr, left, right)
    
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+ 1 , right)
    }
    return arr;
}


console.log(quickSort([1,10,502, 14, 99, 100]))


