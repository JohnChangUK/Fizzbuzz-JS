function FizzBuzz() {

};

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return "FizzBuzz";
  } else if (this._isDivisibleBy(3, number)) {
    return "Fizz";
  } else if (this._isDivisibleBy(5, number)) {
    return "Buzz";
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

// var fizzBuzz = new FizzBuzz();
// for (var i = 0; i <= 100; i++) {
//   console.log(fizzBuzz.play(i));
// }
