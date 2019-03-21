function palindrome(a){
   const arr = a.split("",a.length)
    console.log(arr)
    const reverseArray= arr.reverse().join()
    console.log(reverseArray)
    console.log(a.split('',a.length))
    const realArray=a.split('',a.length).join()
    console.log(realArray)
    if ( realArray == reverseArray)
    {
        return true
    }
    else
     {
        return false
    }

}
let a = 'malayalam'
console.log(palindrome(a))
let  b = 'english'
console.log(palindrome(b))