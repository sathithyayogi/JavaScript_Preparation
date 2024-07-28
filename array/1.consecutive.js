var longestConsecutive = function(nums) {
    // check if the number is start of a sequence, 

    let value = new Set(nums);
    let best= 0;
    console.log('value',value)
    for (let x of value) {
console.log('value',x)
        if (!value.has(x-1)) {
            let y = x+1;
            while(value.has(y)){
                y++
            }

            best = Math.max(best, x-y)
        }

    }

    return best;
};



console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))