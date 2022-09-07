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

//I90489
module.exports.divisible_by_5 = function (n) {
  return (n % 5 ==0) ? 'Yes' : 'No';
}

//I90499
module.exports.VoteEligibility= (age)=>{
    if(age>18) return true
    else if(age<=0) return msg="age must be a positive value";
    else return false
};

// I90500

module.exports.Armstrong=function(n)
{
    let sum = 0;
    let temp = n;
    if (n<0)
    {
        return 'please enter positive number';
    }
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;

        sum += remainder * remainder * remainder;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == n) {
        return true;
    }
    else {
        return false;
    }
}
//90498
module.exports.primeornot=function(n)
{

  if (n==1)
  {
    return false;
  }
  else if(n == 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x == 0)
      {
        return false;
      }
    }
    return true;  
  }
}

//I90488
module.exports.odd = function (n) {
  return (n % 2 ==0) ? 'No' : 'Yes';
}

//I90495
module.exports.divisible_by_11 = function (n) {
  return (n % 11 ==0) ? 'Yes' : 'No';
}

//I90493

module.exports.divisible_by_11 = function (n) {
  return (n % 100 ==0) ? 'Yes' : 'No';
}