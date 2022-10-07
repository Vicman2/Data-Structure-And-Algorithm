let list = [3,3,3,4,4,4,4,5,5,5,5,4,6,6,6,6,7,6,7,6]

let n = 1
console.log(nth_most_rate(list,n))
function nth_most_rate(list,n){

    // arrange the arrays in number of occurence 
    // and this will result to object with key value pair
    // key being the numbers in the array while value being the number of occurence
    let counts = {}
    for(let i = 0; i < list.length; i ++){
        if(counts[list[i]]){
            counts[list[i]] += 1
        }else{
            counts[list[i]] =1
        }
    }

    // sort the data with frequency
    let theSorted = []
    function permute(obj){
        let theKeys = Object.keys(obj)
        if(theKeys.length === 0) return false
        let least1 = theKeys[0]
        for(let key in obj){
            if(counts[key] < counts[least1]){
                least1 = parseInt(key)
            }
        }
        theSorted.push(parseInt(least1))
        delete obj[least1.toString()]
        return permute(obj)
    }
    permute(counts)

    console.log(theSorted)

    return theSorted[n -1]
  
}

console.log(2**4)