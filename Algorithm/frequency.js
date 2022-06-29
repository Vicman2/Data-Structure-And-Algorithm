// Same 
// Check if the length of the arrays are equal and return accordingly
// 
function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2 )
        if(correctIndex == -1){
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true


}

function frequencyCounter(ana1, ana2){
    if(ana1.length !== ana2.length) return false

    let ana1Frequency = {}
    let ana2Frequency = {}
    
    for(let val of ana1){
        ana1Frequency[val] = (ana1Frequency[val] || 0) + 1
    }
    
    for(let val of ana2){
        ana2Frequency[val] = (ana2Frequency[val] || 0) + 1
    }
    
    for(let key in ana1Frequency){
        if(!(key ** 2 in ana2Frequency)) return false
        if(ana1Frequency[key] !== ana2Frequency[key ** 2]) return false
    }

    return true


}

function anagram(ana1, ana2){
    ana1 = ana1.split('')
    ana2 = ana2.split('')
    if(ana1.length !== ana2.length) return false

    let ana1Frequency = {}
    let ana2Frequency = {}

    
    for(let val of ana1){
        ana1Frequency[val] = (ana1Frequency[val] || 0) + 1
    }
    
    for(let val of ana2){
        ana2Frequency[val] = (ana2Frequency[val] || 0) + 1
    }
    
    for(let key in ana1Frequency){
        if(!(key  in ana2Frequency)) return false
        if(ana1Frequency[key] !== ana2Frequency[key]) return false
    }

    return true


}

// console.log(frequencyCounter([2,1,3,4], [16,9,1,4]))

console.log(anagram("car", "arc"))