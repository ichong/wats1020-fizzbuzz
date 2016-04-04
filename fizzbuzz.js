// Count through the range limit 1-20 and figure out which numbers are divisible by 3, 5 or both
var rangeLimit = 20;
for (var i = 1; i <= rangeLimit; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('FizzBuzz');
  }
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}