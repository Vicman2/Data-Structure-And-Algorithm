const permute = (arr) => {
    const result = []

    const backTrack = (arr, temp)=>{
        if(arr.length === temp.length){
            result.push(temp.slice())
            return
        }
        for(let i = 0; i< arr.length; i++){
            console.log(result)
            if(!temp.includes(arr[i])){
                temp.push(arr[i])
                backTrack(arr, temp)
                temp.pop()
            }
        }

    }

    backTrack(arr, [])

    return result
}

console.log(permute([1,2,3,4]))