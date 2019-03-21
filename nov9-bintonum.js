function binaryToNumber(a) {
    console.log(a)
    let aString = a.join('')
    let i=0
    

    console.log(aString)

    return parseInt(aString, 2)

    
}
console.log(binaryToNumber([0,0,0,1]))
console.log(binaryToNumber([0,0,1,0]))
console.log(binaryToNumber([0,1,0,1]))
console.log(binaryToNumber([1,0,0,1]))
console.log(binaryToNumber([0,0,1,0]))
console.log(binaryToNumber([0,1,1,0]))
console.log(binaryToNumber([1,1,1,1]))
console.log(binaryToNumber([1,0,1,1]))
console.log(binaryToNumber([0,1,1,1]))
console.log(binaryToNumber([0,0,0,0]))