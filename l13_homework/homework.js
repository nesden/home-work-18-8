//ex 1
// days1.forEach(function (element) {
//     console.log(element);

// });
//can also print
const days1 = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
console.log(days1);

days1.sort();
console.log(days1);

function sorta(arr) {
    return arr.sort();
}

function print(arr) {
    console.log(arr);

}

const nums = [1, 43, 62, 13, 8, 61, 23, 53]

//ex2
function findWithIndex2(arr, i) {
    if (arr.length <= i) {
        console.log(`sorry no value in array in position number ${i}`);
    }
    else
        console.log(arr[i]);
    //without else will print this as well
    //we havent used break outside of switches and case
}
findWithIndex2(nums, 8)
//ex3
function odd3(arr) {
    let flag = true;
    arr.forEach(function (element) {
        if (element % 2 == 0) {
            flag = false;
        }
    });
    if (flag) {
        console.log("odds");

    }
    else
        console.log("not odds");

}
const oddnums = [1, 45, 23, 53]
odd3(nums)
odd3(oddnums)

//ex4
function raising4(arr) {
    arr.forEach(function (element, i) {
        if (element < 10) {
            console.log("true");
            arr[i] += 5;
        }
    })

}
raising4(nums);
console.log(nums);
//ex5

function findWithValue5(arr, num) {
    let flag = false;
    arr.forEach(function (element) {
        if (element == num) {
            flag = true;
        }
    })
    if (flag) {
        return 'found';
    }
    return 'not found'
}

console.log(findWithValue5(nums, 13));


//ex6


function range6(arr, n1, n2) {

    if (arr[0] == n1 && arr[arr.length - 1] == n2) {
        return true
    }
    return false
}

console.log(nums);

console.log(range6(nums, 6, 23));
console.log(range6(nums, 6, 53));
//ex7
function cond7(arr) {
    let flagArr = arr.filter(function (element) {
        return element < 50
    })
    if (flagArr.length == arr.length) {
        return "smaller than 50"
    }

    flagArr = arr.filter(function (element) {
        return element > 51 && element < 100
    })
    if (flagArr.length == arr.length) {
        return "between 51 to 100"
    }

    flagArr = arr.filter(function (element) {
        return element > 101 && element < 200
    })
    if (flagArr.length == arr.length) {
        return "between 101 to 200"
    }

    flagArr = arr.filter(function (element) {
        return element > 201
    })
    if (flagArr.length == arr.length) {
        return "greater than 200"
    }

    return "no condition is met"
}

const numbers7 = [252, 269, 273, 283, 290, 253]
const numberz7 = [52, 69, 73, 83, 90, 53]
console.log(cond7(numbers7));
console.log(cond7(numberz7));
console.log(cond7(nums));
//trying ex 7 with switch and case

// function switchCond7(arr) {

//     switch (true) {
//         case arr.forEach(function(element){if (element<50){}}):
            
//             break;
    
//         default:
//             break;
//     }



// }