
// 1.
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 2.
function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

// 3.
function isVowel(v) {
    return ("aeiouAEIOU".indexOf(v) != -1);
}

// 4.
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}

// 5.
function reverse(str) {
    return str.split("").reverse().join("");
}

// 6.
function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
    return longest.length;
}

// 7.
function findLongerOne(arr, k) {
    let longestArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (k < arr[i].length) {
            longestArr.push(arr[i]);
        }
    }
    return longestArr;
}

// 8.
const a = [1, 3, 5, 3, 3];
document.writeln("array a: " + a + "<br/>");

/*multiply each element by 10; */
function multiply10(n) {
    return n * 10;
}
const x = a.map(multiply10)
document.writeln("multiply each element by 10 with map: " + x + "<br/>");

/* return array with all elements equal to 3; */
const equal3elements = a.filter(function (elem, i, a) {
    return elem == 3;
});
document.writeln("return array with all elements equal to 3 with filter: " + equal3elements + "<br/>")

/*return the product of all elements;*/
function product(a, b) {
    return a * b;
}
const produceElements = a.reduce(product);
document.writeln("return the product of all elements with reduce: " + produceElements + "<br/>")


/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTestForArray(expected, found) {
    const result= objectsEqual(expected, found)
    if (result==true) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => o1[p] === o2[p]);


console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20, 10, 30)));
console.log("Expected output of isVowel(u) is true  " + myFunctionTest(true, isVowel("u")));
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of (hi, hello, hey) is 5  " + myFunctionTest(5, findLongestWord(["hi", "hello", "hey"])));
console.log("Expected output of filterLongWords([hello, javascript, html, css], 4) is [hello, javascript]  " + myFunctionTestForArray(["hello", "javascript"], findLongerOne(["hello", "javascript", "html", "css"], 4)));