const fibonacci = function(numIteration) {

    if (numIteration <= 0) return "OOPS";
    if (numIteration === 1) return 1;

    let a = 0
    let b = 1;
    
    for (let i = 2; i <= numIteration; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
    
};

// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8

// Do not edit below this line
module.exports = fibonacci;
