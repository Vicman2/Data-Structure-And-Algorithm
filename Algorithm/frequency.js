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

function validAnagram(ana1, ana2){
    if(ana1.length !== ana2.length) return false

    let ana1Frequency = {}
    let ana2Frequency = {}

    for(let i = 0; i<ana1.length; i++){
        ana1Frequency[ana1[i]] =  (ana1Frequency[ana1[i]] || 0) + 1
    }

    for(let i = 0; i<ana2.length; i++){
        ana2Frequency[ana2[i]] =  (ana2Frequency[ana2[i]] || 0) + 1
    }

    for(let val in ana1Frequency){
        if(!(val in ana2Frequency)) return false

        if(ana2Frequency[val] !==ana1Frequency[val] ) return false

    }

    return true


}

console.log(validAnagram("cinemaa", "icemanA").toString())