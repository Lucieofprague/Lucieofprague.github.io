let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers1.forEach(number => {
    console.log(number);
});


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.forEach(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
    else{
        console.log("odd");
    }
    
});
