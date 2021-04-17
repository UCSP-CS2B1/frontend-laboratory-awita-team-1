// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
  for (var i = 1; i < numbers.length; i++) {
    var current = numbers[i];
    var j = i-1; 
    while ((j > -1) && (current < numbers[j])) {
        numbers[j+1] = numbers[j];
        j--;
    }
    numbers[j+1] = current;
  }
  return numbers;
}


// Param number: single integer
// Returns a single integer
function factorial(number) {

    //Write your code here

    return -1;
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

    //Write your code here
    var result=[0,1];
    for (var i = 2; i < number; i++)
    {
      result[i] = result[i - 2] + result[i - 1];
    }
    
    return result;
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {

    //Write your code here

    return -1
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
