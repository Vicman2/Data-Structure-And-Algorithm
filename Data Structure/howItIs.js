function isValid(s) {
    const splittedString = s.split('')
    let theStringFreq = {}
    for(let i = 0; i < splittedString.length; i++){
        theStringFreq[splittedString[i]] = theStringFreq[splittedString[i]] ? theStringFreq[splittedString[i]] + 1 : 1;
        
    }

    let theNumFreq = {}
    
    const theValues = Object.values(theStringFreq)
    for(let i = 0; i < theValues.length; i++){
        theNumFreq[theValues[i]] = theNumFreq[theValues[i]] ? theNumFreq[theValues[i]] + 1 : 1;
    }

    let theMax = 0
    let theActualKey = null
    for(let theJ in theNumFreq){
        if(theNumFreq[theJ] > theMax){
            theMax = theNumFreq[theJ]
            theActualKey = theJ
        }
    }
    let hasRemoved = false;

    
    for(let theKey in theStringFreq){
        let theCurrentFreq = theStringFreq[theKey]
        if(parseInt(theCurrentFreq) !== parseInt(theActualKey)){
            if(hasRemoved) return 'NO'
            console.log(theKey)
            if((parseInt(theCurrentFreq) -1) === 0){
                hasRemoved = true
            } else if((theCurrentFreq -1) !== parseInt(theActualKey)){
                return 'NO'
            }else {
                hasRemoved = true
            }
        }
    }
    
    return 'YES'

}

console.log(isValid('aabbccddeefghi'))

