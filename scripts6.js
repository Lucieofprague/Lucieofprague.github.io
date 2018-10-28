let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30];
numbers.forEach(number => {
    if ((number % 5 === 0) && (number % 3 === 0)) {
        console.log("FizzBuzz");
    }
    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    else if (number % 3 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(number);
    }
});
