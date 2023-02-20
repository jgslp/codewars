// DESCRIPTION:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    let resultA = string.replace(/a/gi, 1);
    let resultE = resultA.replace(/e/gi, 2);
    let resultI = resultE.replace(/i/gi, 3);
    let resultO = resultI.replace(/o/gi, 4);
    let resultU = resultO.replace(/u/gi, 5);
    return resultU;
}

function decode(string) {
    let result1 = string.replace(/1/g, 'a');
    let result2 = result1.replace(/2/g, 'e');
    let result3 = result2.replace(/3/g, 'i');
    let result4 = result3.replace(/4/g, 'o');
    let result5 = result4.replace(/5/g, 'u');
    return result5;
}