function printNumbers(n){
    var result = "";
    var counter = 1;
    while (counter <= n) {
      result += counter;
      console.log(result);
      counter = counter + 1;
      console.log(counter)
    }
  }
  console.log(printNumbers(4));