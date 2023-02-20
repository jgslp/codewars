// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
    sum += array[i]
    } 
    if (array.length > 0) {
    return sum/array.length}
    return 0;
}