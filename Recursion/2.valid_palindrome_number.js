let pNumber = 42324;

// with converting to string
if (pNumber == +pNumber.toString().split('').reverse().join('')){
     console.log(true)
} else {
    console.log(false)
}

// without converting to string

let originalNumber = pNumber;
let revereseNumber = 0;

while(pNumber > 0){
    const lastDigit = pNumber % 10;
    console.log('lastDigit',lastDigit);
    revereseNumber = (revereseNumber*10) +lastDigit 

    pNumber = Math.floor(pNumber/10)

}

console.log(originalNumber , revereseNumber);
console.log(originalNumber == revereseNumber)
