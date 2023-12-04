function bubbleSort(nums) {
    const length = nums.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1; i++) {
            if (nums[j] > nums[j + 1]) {
                // Swap
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

module.exports = bubbleSort;