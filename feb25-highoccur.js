function highestOccurance(a){
    arrString = a.split('', a.length)
console.log(arrString)
    const uniqueArray = [...new Set(arrString)]
 //   console.log(uniqueArray)
 let maxLength = 0
let maxChar=[]
    uniqueArray.forEach((uniqueChar)=>{
        
  console.log(arrString.filter((arrayChar)=>uniqueChar==arrayChar).length)
        if (arrString.filter((arrayChar)=>uniqueChar==arrayChar).length > maxLength){
            maxLength = arrString.filter((arrayChar)=>uniqueChar==arrayChar).length
            maxChar.pop()
            maxChar.push(uniqueChar)
        }
        else if (arrString.filter((arrayChar)=>uniqueChar==arrayChar).length == maxLength){
            maxChar.push(uniqueChar)
        }

  
    })
    console.log(maxChar, maxLength)
    return ` the charcater with highest occurance is ${[maxChar]} with the length of ${maxLength}`
 
}
  //  const countMap = new Map(uniqueArray.map((x)=>[x,arrString.filter((y)=>y===x).length]))
  //  console.log(countMap)
  
console.log(highestOccurance("aaaaabbbbbbbbbbbbcccccaadddddddddddeeeeeeaa"))