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

//I90491
module.exports.oddornot=function(num){
    if(num%2==1){
       return "Odd";
    }else{
       return "Even";
    }
}

//I90502
module.exports.validateEmail= function(email) 
    {
        var re = /\S+@\S+\.\S+/;
    if(re.test(email)==true){
        return "valid email";
    }
    else{
        return "invalid email";
    }
}