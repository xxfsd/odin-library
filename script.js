const addBook = document.querySelector(".add-book");


//array to store books
const myLibrary = [
    {
        title: "American Psycho",
        author: "Bret Easton Ellis",
        pages: 399
    },
    {
        title: "The Shining",
        author: "Stephen King",
        pages: 477
    },
    {
        title: "I, Robot",
        author: "Isaac Asimov",
        pages: 253
    }
];

//object constructor to add books
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

