// check if all numbers in our array to

// let nums = [10, 20, 30, 40];

// let ans = nums.reduce ( (el) => el % 10 == 0);

// console.log(ans);

//

function getMin(nums){
    let min = nums.reduce( (min, el) => {
    if(min < el){
        return min;
    }else {
        return el;
    }
});
    return min;
}

let nums = [10, 20, 30, 40, 5];
