// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1 squared + 2 squared + 2 squared = 9

function squareSum(numbers){
    let square = 0;
    for ( i = 0; i < numbers.length; i++){
      square += Math.pow(numbers[i], 2);
    }
    return square;
  } 