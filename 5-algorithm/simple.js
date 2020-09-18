// 数组中取下标-两个值得和等于目标值
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if(nums.includes(target - nums[i]) && i !== nums.indexOf(target-nums[i])){
            return [i,nums.indexOf(target-nums[i])]
        }
        
    }
};

arr = [1,2,3,4,5]
obj = {
    0:1,
    1:2,
    2:3,
    3:4,
    4:5
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};

var addTwoNumbers = function(l1, l2) {
    l1 = +(l1.reverse().join(''))
    l2 = +(l2.reverse().join(''))
    let result = (l1+l2).toString().split(',').reverse().splice(0,3)
    return result
};

l1 = [2,4,3]
l2 = [5,6,4]