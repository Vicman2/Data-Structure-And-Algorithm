

function merge(arr1, arr2){
    let result = []
    let arr1Pointer = 0;
    let arr2Pointer = 0;
    while(arr1Pointer < arr1.length && arr2Pointer < arr2.length ){
        if(arr1[arr1Pointer] <arr2[arr2Pointer]){
            result.push(arr1[arr1Pointer])
            arr1Pointer++
        }else{
            result.push(arr2[arr2Pointer])
            arr2Pointer++
        }
    }

    while(arr1Pointer < arr1.length){
        result.push(arr1[arr1Pointer])
        arr1Pointer++
    }
    while(arr2Pointer < arr2.length){
        result.push(arr2[arr2Pointer])
        arr2Pointer++
    }
    return result

}

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let left = 0
    let right = arr.length 
    let midpoint = Math.floor((left + right)/2)
    let arr1 = mergeSort(arr.slice(left, midpoint))
    let arr2 = mergeSort(arr.slice(midpoint))
    
    let theMerged = merge(arr1, arr2)
    console.log(theMerged)
    return theMerged
}


console.log(mergeSort([1,10,502, 14, 99, 100]))