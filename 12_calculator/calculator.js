const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce(function (total, num) {return total + num}, 0);
};

const multiply = function(arr) {
  return arr.reduce(function(total, num) {return total * num;});
};

const power = function(base, exp) {
  let result = 1;
	for (let i = 1; i <= exp; ++i) {
    result = base * result; 
  }
  return result;
};

const factorial = function(a) {
	if (a === 0 || a === 1) return 1;
  let result = 1;
  for (let i = a; i > 0; --i) {
    result = result * i;
  }
  return result;
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
