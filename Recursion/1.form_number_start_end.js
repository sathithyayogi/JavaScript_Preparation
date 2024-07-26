// with forloop

const start = 1;

const end = 5;

const arr = [];
for(let i=1; i<=5; i++){
    arr.push(i)
}

// console.log(arr);


const rangeOfNumber = (start, end) =>{
    console.log(start, end)
    if (end < start){
        console.log('return empty', start, end);
        return [];
    } else {
        const num = rangeOfNumber(start, end-1)
        console.log('push', num)
        num.push(end)
        return num;
    }

}

console.log(rangeOfNumber(1,5));