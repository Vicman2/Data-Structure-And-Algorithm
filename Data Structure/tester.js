function counterGame(n) {
    let thePlayer = 'Louise'
    if(n === 1) return 'Richard'
    if(n === 0) return 'Richard'
    while(n !== 1){
        let theLog =Math.log2(n)
        if(Number.isInteger(theLog)){
            n = n/2
        }else{

            n = n- Math.pow(2, Math.floor(theLog))
        }
    
        if(n <=1) return thePlayer
        if(thePlayer === 'Louise'){
            thePlayer = 'Richard'
        }else{
            thePlayer = 'Louise'
        }
    }
}

console.log(counterGame(1533726144))


function superDigit(n, k) {
    let theString = n
    const concatString = () => {

    }

}


