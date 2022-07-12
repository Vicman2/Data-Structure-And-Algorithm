function binarySearch(arr, value){
    let leftPointer = 0
    let rightPointer = arr.length-1;
    let midPoint = Math.floor((leftPointer + rightPointer)/2)

    if(arr[leftPointer] > value || arr[rightPointer]< value) return null
    
    while(leftPointer <= rightPointer){
        console.log(leftPointer, rightPointer, midPoint)
        if(arr[midPoint] === value){
            return midPoint
        }else if(value < arr[midPoint]){
            rightPointer = midPoint
            midPoint = Math.floor((midPoint + leftPointer)/2)
        }else if(arr[midPoint] < value){
            leftPointer = midPoint
            midPoint = Math.floor((midPoint + rightPointer)/2)
        }else{
            return null
        }
        if(value === arr[rightPointer]) return rightPointer
    }


}

console.log(binarySearch([3,4,5,6,7,8,9,10], 10))