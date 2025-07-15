const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
    return arr.reduce((total, num) => total + num,0);
  };

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod * num, 1);
};

const power = function(n, p) {
	return n ** p;
};

const factorial = function(n) {

    let prod = 1;
    for (let x = n; x > 0; x--) {
      prod *= x;
    }
    return prod;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
