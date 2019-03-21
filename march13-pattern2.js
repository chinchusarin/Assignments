function numberPattern(a){

  let line = ''
        if (a==1)
            line ='1'
        else {
            
          line = numberPattern(a-1)+a}
    console.log(line)
    return line   
}
numberPattern(5)
