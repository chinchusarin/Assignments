function anagramCheck(str1,str2){

console.log(str1,str2)
  const  strArrayOne = str1.split('',str1.length).sort().join('')
  const strArrayTwo =str2.split('',str2.length).sort().join('')
  console.log(strArrayOne, strArrayTwo)
    if (strArrayOne===strArrayTwo){
        return true
    }
    else 
    {
        return false
    }
}
console.log(anagramCheck('mary','army'))