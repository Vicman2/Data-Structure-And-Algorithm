function sumZero(arr){
    let theArrayOfZeroSum = []
    let leftPointer = 0
    let rightPointer = arr.length-1
    while(leftPointer < rightPointer){
        let theSum = arr[leftPointer] + arr[rightPointer]
        if(theSum < 0){
            leftPointer++
        }else if(theSum > 0 ){
            rightPointer--
        }else{
            theArrayOfZeroSum.push([arr[leftPointer], arr[rightPointer]])
            leftPointer++
            rightPointer--
        }
    }
    return theArrayOfZeroSum
}

// console.log(sumZero([-4, -3, -2, 1, 2, 3, 5]))

function countUniqueValues(arr){
    let firstPointer = 0;

    for(let i =1; i<arr.length; i++){
        if(arr[firstPointer] !== arr[i]){
            firstPointer++
            arr[firstPointer] = arr[i]
        }
    }
    return firstPointer +1
}

console.log(countUniqueValues([2,3,4,4,4,5,5,6,7,7,7,8,9,10,10]))
