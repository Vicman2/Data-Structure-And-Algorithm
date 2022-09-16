// function alphabetPosition(text) {
//     var result = "";
//     for (var i = 0; i < text.length; i++) {
//       var code = text.toUpperCase().charCodeAt(i)
//       console.log(code)
//       if (code > 64 && code < 91) result += (code - 64) + " ";
//     }
  
//     return result.slice(0, result.length - 1);
//   }
//   console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function gridChallenge(grid) {
    function swipe(arr, index1, index2){
        let index1Value = arr[index1];
        arr[index1] = arr[index2]
        arr[index2] = index1Value
    }
    let giantArray = []
    for(let i = 0; i < grid.length; i++){
        let each = grid[i].split('');
        for(let j = 0; j< each.length; j++ ){
            for(let k =0; k< each.length  && k !== j; k++){
                if(each[j].toUpperCase().charCodeAt(0) < each[k].toUpperCase().charCodeAt(0)){
                    swipe(each, j, k)
                }
                
            }
        }
        giantArray.push(each)
    }
    let reformed = []
    for(let i= 0; i <giantArray[0].length; i++ ){
        let expanded = []
        for(let k = 0; k<giantArray.length; k++ ){
            expanded.push(giantArray[k][i])
        }
        reformed.push(expanded)
    }



    for(let i = 0; i < reformed.length; i++){
        let each = reformed[i];
        for(let j = 0; j< each.length; j++ ){
            for(let k =0; k< each.length  && k !== j; k++){
                console.log(each[j].toUpperCase().charCodeAt(0), each[k].toUpperCase().charCodeAt(0))
                if(each[j].toUpperCase().charCodeAt(0) < each[k].toUpperCase().charCodeAt(0)){
                    return 'No'
                }
                
            }
        }
    }
    return 'Yes'
   
}

console.log(gridChallenge(['agce', 'adec', 'pfgb']))




