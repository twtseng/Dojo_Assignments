function sigma(num) {
    let sum = 0;
    for(let i=1; i <= num; ++i) {
        sum += i;
    }
    return sum;
}
console.log(`sigma(5) = ${sigma(5)}`);

function factorial(num) {
    let fac = 1;
    for(let i=1; i <= num; ++i) {
        fac *= i;
    }
    return fac;    
}
console.log(`factorial(5) = ${factorial(5)}`);

function fibonacci(num) {
    let fibValues = [0, 1];
    for(let i=2; i <= num; ++i) {
        fibValues.push(fibValues[i-2] + fibValues[i-1]);
    }
    return fibValues[num];    
}
console.log(`fibonacci(1) = ${fibonacci(1)}`);
console.log(`fibonacci(6) = ${fibonacci(6)}`);
console.log(`fibonacci(7) = ${fibonacci(7)}`);

function secondToLast(array) {
    if (array.length < 2) {
        return null;
    } else {
        return array[array.length-2];
    }
}
console.log(`secondToLast([1,2,3,4,5]) = ${secondToLast([1,2,3,4,5])}`);
console.log(`secondToLast([1]) = ${secondToLast([1])}`);

function nthToLast(array, n) {
    if (array.length < n) {
        return null;
    } else {
        return array[array.length-n];
    }   
}
console.log(`nthToLast([1,2,3,4,5],3) = ${nthToLast([1,2,3,4,5],3)}`);
console.log(`nthToLast([1,2,3,4,5],6) = ${nthToLast([1,2,3,4,5],6)}`);

function secondLargest(array) {
    if (array.length < 2) {
        return null;
    } else {
        return array.sort((x,y) => { return x-y;})[array.length-2];
    }   
}
console.log(`secondLargest([42,1,4,3.14,7]) = ${secondLargest([42,1,4,3.14,7])}`);

function doubleTrouble(array) {
    let newArray = [];
    array.forEach(x => {
        newArray.push(x);
        newArray.push(x);
    });
    return newArray;
}
console.log(`doubleTrouble([42,1,4,3.14,7]) = ${doubleTrouble([42,1,4,3.14,7])}`);
