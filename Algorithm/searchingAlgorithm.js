function linearSearch(arr, value){
    for(i =0; i < arr.length; i++){
        if(arr[i] === value){
            return i
        }
    }
}

// console.log(linearSearch([5,3,7,8,3,0,9,8], 9))


function binarySearchOnSortedNumbers(arr, value){
    // Get the midpoint 
    // check if the midpoint is greater than, equal or less than the search value
    // if it is greater than, make the left pointer the midpoint to be the let

    let left = 0
    let right = arr.length - 1
    let midPoint = Math.floor((left + right)/2)
    let val = null

    while(left <= right){
        
        if(arr[midPoint] === value){
            val = midPoint;
            break;
        }else if(arr[midPoint] > value ){
            right = midPoint
            midPoint = Math.floor((left + right)/2)
        }else if(arr[midPoint] < value){
            left = midPoint
            midPoint = Math.floor((left + right)/2)
        }
    }
    return val
}

//zahosdsdjkho

function naiveStringSearch(longerString, shorterString){
    let counter = 0
    let isMarch = true

    for(let i =0; i< longerString.length; i++){
        for(let j = 0; j < shorterString.length; j++){
            if(longerString[j+i] !== shorterString[j]){
                isMarch = false
                break
            }
        }
        if(isMarch) counter++
        isMarch = true
    }
    return counter
}

console.log(naiveStringSearch("zahosdsdjkho", "ho"))



console.log(binarySearchOnSortedNumbers([2,4,5,7,8,9,10,15], 10))

