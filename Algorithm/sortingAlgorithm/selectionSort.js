const swap = (arr, index1, index2) => {
    let temp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = temp
}

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            swap(arr, i, lowest)
        }
    }

    return arr
}




console.log(selectionSort([4,6,2,7,9,2,10,5]))