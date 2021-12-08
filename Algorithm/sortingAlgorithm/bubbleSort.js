


function bubbleSort(arr){
    for(let i = 0; i< arr.length; i++){
        for(let j= 0; j < arr.length;j++){
            if(arr[j]  > arr[j +1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]= temp
            }
        }
    }
    return arr
}

function bubbleSortModified(arr){
    let noSwap = true
    for(let i = arr.length; i< arr.length; i--){
        for(let j= 0; j < i+1;j++){
            if(arr[j]  > arr[j +1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]= temp
                noSwap = false
            }
        }
        if(noSwap) break;
    }
    return arr
}


console.log(bubbleSort([4,6,2,7,9,2,10,5]))