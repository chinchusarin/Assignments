function isPrime(a){
    if (a<=1){
        return `${a} is not a prime as Number less than or equal to 1`
    }
    else if (Number.isInteger(a)==false) {
        return "a is not a whole number"
    }
    else if (a == 3 || a== 5|| a==7)
        return "a is a prime number"
    else if ((a%2==0) || (a%3==0) || (a%5==0) || (a%7==0)) {
        return " a is not a prime number"
    }
    else {
        return "a is a prime number"
    }

}
console.log(isPrime(0))
console.log(isPrime(-2))
console.log(isPrime(4.56))
console.log(isPrime(10))
console.log(isPrime(7))
console.log(isPrime(13))
console.log(isPrime(1001))
console.log(isPrime(1000))
console.log(isPrime(401))