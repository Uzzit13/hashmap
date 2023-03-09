// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:


function containsDupes(arr) {
    let numsMap = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (numsMap[num]) {
            return true
        } else {
            numsMap[num] = true
        }
    }
    return false
}