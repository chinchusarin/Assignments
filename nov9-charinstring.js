function strCount(a,b){
    let charCount =0
 //   console.log(a)
 //   console.log(b)
    if(a.length==0){
        return charCount=0
    }
    
        for(i=0;i<a.length;i++){
            if(a[i]== b){
                charCount =charCount+1
            }
        }
        return charCount  
}

console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('','z'))