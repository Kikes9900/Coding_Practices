var alwaysHungry = ([3.14, "food", "pie", true, "food"]);

function checkHunger(arr) {
    var foodChecker = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy")
            foodChecker ++
        }
    }
    if(foodChecker == 0) {
        console.log("I'm hungry")
    }
}

var highpass = ([6, 8, 3, 10, -2, 5, 9]);
var cut = 5;

function filter(arr, cutoff) {
    var newArr = [];

    for( var i = 0; i< arr.length; i++) {
        if(arr[i] > cutoff) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

var betterThanAverage = ([6, 8, 3, 10, -2, 5, 9]);

function findBetter(arr) {
    var total = 0;
    var count = 0;

    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    avg = total / arr.length;
    for(var i = 0; i < arr.length; i++) {
        if( arr[i] > avg) {
            count++
        }
    }
    return count
    console.log(count);

}

var reverseNum = (["a", "b", "c", "d", "e"]);

function reverse(arr) {
    var newList = arr.reverse();
    console.log(newList);
}

var fibonacciArray(10);

function nacciArray(num) {
    var fibArr = [0, 1]
    while(fibArr.length < num) {
        var pre = fibArr[fibArr.length-1];
        var newPrev = fibArr[fibArr.length-2];
        fibArr.push(pre + newprev);
    }
    return fibArr
}
