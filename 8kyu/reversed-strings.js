// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let array = str.split('');
    let reverseArray = array.reverse();
    return reverseArray.join('');
  }