//I90494
module.exports.FizzBuzz = function (number) {
  if (number % 5 == 0 && number % 3 == 0) {
    return 'FizzBuzz'
  } else if (number % 5 == 0) {
    return 'Fizz'
  } else if (number % 3 == 0) {
    return 'Buzz'
  } else if (number % 11 == 0) {
    return 'BuzzBuzz'
  }
}

//I90490
module.exports.evenornot = function (num) {
  return num % 2 == 0 ? 'Even' : 'Odd'
}

//I90491
module.exports.oddornot = function (num) {
  return num % 2 == 0 ? 'Even' : 'Odd'
}

//I90502
module.exports.validateEmail = function (email) {
  var re = /\S+@\S+\.\S+/

  return re.test(email) ? 'Valid Email' : 'Invalid Email'
}

//i90511
module.exports.factorial = function (n) {
  let answer = 1
  if (n == 0 || n == 1) {
    return answer
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i
    }
    return answer
  }
}
//90501
module.exports.checkIsEven = function (num) {
  // Checks if given number is even or not
  return num % 2 == 0 ? true : false
}

//i90510

module.exports.sameornot = function (n) {
  return n == 10 ? 'Same' : 'not Same'
}

//I90512
module.exports.VoteEligibility = function (n) {
  return n >= 18 ? 'Eligible' : 'Not Eligible'
}
