/* Basic 13 Algorithms                                                          
TEAM MEMBERS: Tom, Josh, Alberto
1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/

function print1To255() {
    // code goes here
    // build a for loop start at 1 end at 256 increment by 1
    // print the value of i
    // invoke function print1to255()
  
    for (var i = 1; i < 256; i++) {
      console.log(i);
    }
  }
  print1To255();
  
  /*
  2. Print Odds 1-255
  PrintOdds1To255()
  Print all odd integers from 1 to 255.
  oupput: 1 3 5 7 9 11 13 15 ... 253 255
  */
  function printOdds1To255() {
    // code goes here
    for (var i = 1; i < 256; i += 2) {
      console.log(i);
    }
  }
  
  // 3. Print Ints and Sum 0-255
  // PrintIntsAndSum0To255()
  // Print integers from 0 to 255, and with each integer print the sum so far.
  // output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
  function PrintIntsAndSum0To255() {
    var sum = 0;
    for (var i = 0; i < 256; i++) {
      sum += i;
      console.log(i, sum);
    }
  }
  
  // 4. Iterate and Print Array
  // Iterate through a given array, printing each value.
  
  // Input array: [1,4,65,34,78]
  // Output: 1, A4, 65, 34, 78
  function printArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  printArrayVals([1, 4, 65, 34, 78]);
  
  // 5. Find and Print Max
  // PrintMaxOfArray(arr)
  // Given an array, find and print its largest element.
  function PrintMaxOfArray(arr) {
    // code goes here
    var max = Math.max(...arr);
    return max;
  }
  PrintMaxOfArray([1, 4, 65, 34, 78]);
  
  // 6. Get and Print Average
  // PrintAverageOfArray(arr)
  // Analyze an array’s values and print the average.
  function PrintAverageOfArray(arr) {
    return arr.reduce(function (a, b) {
      return (a+b)
    })/arr.length;
  }
  
  // 7. Array with Odds
  // ReturnOddsArray1To255()
  // Create an array with all the odd integers between 1 and 255 (inclusive).
  function ReturnOddsArray1To255() {
    // code goes here
    var newArray = [];
    for(var i=1; i<=255; i += 2) {
      newArray.push(i);
    }
    return newArray;
  }
  
  // 8. Square the Values
  // SquareArrayVals(arr)
  // Square each value in a given array, returning that same array with changed values.
  function SquareArrayVals(arr) {
    // code goes here
    for(var i=0; i<arr.length; ++i) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
  }
  
  // 9. Greater than Y
  // ReturnArrayCountGreaterThanY(arr, y)
  // Given an array and a value Y, count and print the number of array values greater than Y.
  function returnArrayCountGreaterThanY(arr, y) {
    // code goes here
    var count=0;
    for(var i=0; i<arr.length; ++i) {
        if (arr[i] > y) {
            ++count;
        }
    }
    return count; 
  }
  
  // 10. Zero Out Negative Numbers
  // ZeroOutArrayNegativeVals(arr)
  // Return the given array, after setting any negative values to zero.
  function ZeroOutArrayNegativeVals(arr) {
    // code goes here
    for(var i=0; i<arr.length; ++i) {
        if (arr[i] < 0) {
            arr[i]=0;
        }
    }
    return arr; 
  }
  
  // 11. Max, Min, Average
  // PrintMaxMinAverageArrayVals(arr)
  // Given an array, print the max, min and average values for that array.
  function PrintMaxMinAverageArrayVals(arr) {
    // code goes here
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for(var i=0; i<arr.length; ++i) {
        if (arr[i] > max) {
            max=arr[i];
        }
        if (arr[i] < min) {
            min=arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(`Max:${max} Min:${min} Avg:${avg}`);
  }
  
  // 12. Shift Array Values
  // ShiftArrayValsLeft(arr)
  // Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
  function ShiftArrayValsLeft(arr) {
    // code goes here
    arr.shift();
    arr.push(0);
    return arr;
  }
  
  // 13. Swap String For Array Negative Values
  // SwapStringForArrayNegativeVals(arr)
  // Given an array of numbers, replace any negative values with the string 'Dojo'.
  function SwapStringForArrayNegativeVals(arr) {
    // code goes here
    for(var i=0; i<arr.length; ++i) {
        if (arr[i] < 0) {
            arr[i]='Dojo';
        }
    }
  }
  