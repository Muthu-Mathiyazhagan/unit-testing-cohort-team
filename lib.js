//I90494
module.exports.FizzBuzz = function (number) {
    if(number%5==0 && number%3==0){
        return "FizzBuzz";
    }
    else if(number%5==0){
        return "Fizz";
    }
    else if(number%3==0){
        return "Buzz";
    }
    else if(number%11==0){
        return "BuzzBuzz"
    }

}

//I90490
module.exports.evenornot=function(num){
     if(num%2==0){
        return "Even";
     }else{
        return "Odd";
     }
}