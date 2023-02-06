"use strict"

function worker(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    };
    return sum;
};

function makeWork(arrOfArr,func) {
 let max = -Infinity;
 for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
        max = func(arrOfArr[i]);
    }; 
};
return max;
};

const arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
console.log(makeWork(arrOfArr,worker));