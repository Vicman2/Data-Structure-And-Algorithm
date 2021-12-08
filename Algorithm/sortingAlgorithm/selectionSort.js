

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let indexOfSmallestValue = i
        for(let j = i; j<arr.length; j++){
            if(arr[j] < arr[indexOfSmallestValue]){
                indexOfSmallestValue = j 
            }
        }
        let temp = arr[i]
        arr[i] = arr[indexOfSmallestValue]
        arr[indexOfSmallestValue]= temp
    }
    return arr
}




console.log(selectionSort([4,6,2,7,9,2,10,5]))