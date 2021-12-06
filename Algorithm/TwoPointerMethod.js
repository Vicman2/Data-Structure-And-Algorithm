function sumZero(){
    let left = 0 ; 
    let right = arr.length - 1; 

    while(left <right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum >0){
            right--;
        }else{
            left++;
        }
    }
}

function countCountUniqueValues(sArray){
    if(sArray.length === 0) return 0
    if(sArray.length === 1) return 1
    let first = 0
    let second = 1

    while(second <sArray.length){
        if(sArray[first] === sArray[second]){
           
            second++
        }else{
            first++
            sArray[first] = sArray[second]
        }
    }
    return first + 1

}

console.log(countCountUniqueValues([1,1,2,2,2,2,2]))