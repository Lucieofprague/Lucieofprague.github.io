let book = { nameAuthor: 'Antoine de Saint-Exupery', titleBook: 'The Little Prince', year: '2010'};
console.log(book['nameAuthor'], book['titleBook'], book['year']);
console.log('The author of the book is: ' + book['nameAuthor']);
console.log('The title of the book is: ' + book['titleBook']);
console.log('The year of the book is: ' + book['year']);


let book1 = { nameAuthor: 'Antoine de Saint-Exupery', titleBook: 'The Little Prince', year: 2010};
let book2 = { nameAuthor: 'William Shakespeare ', titleBook: 'Romeo a Julie', year: 1595};
let book3 = { nameAuthor: 'Sherlock Holmes', titleBook: 'The Hound of the Baskervilles', year: 1902};
let books = [book1, book2, book3];
books.forEach(book => {
    console.log(book['titleBook']);
    if (book['year'] >= 2010){
        console.log("I recommend reading: ", book['titleBook']);
    }
    else {
        console.log("You've probably already read: ", book['titleBook']);
    }
});


