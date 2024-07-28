function productExceptSelf(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const result = new Array(n);

    // Fill left array
    console.log('left start',left);
    for (let i = 1; i < n; i++) {
        console.log('left',left[i - 1],nums[i - 1], ' | ',left[i - 1] * nums[i - 1])
        left[i] = left[i - 1] * nums[i - 1];
    }

    console.log('left end',left);
    // Fill right array

    console.log('right start',right);
    for (let i = n - 2; i >= 0; i--) {
        console.log('right',right[i + 1] , nums[i + 1], ' | ',right[i + 1] * nums[i + 1])
        right[i] = right[i + 1] * nums[i + 1];
    }
    console.log('right end',right);
    // Construct the result array
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));  // Output: [24, 12, 8, 6]