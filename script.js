let content = document.getElementById("content");

const popup = document.getElementById("popup-wrapper");
const addBook = document.getElementById("add-book");
const popupClose = document.getElementById("popup-close");
const saveBook = document.getElementById("save-book");
const cancel = document.getElementById("cancel");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

//array to store books
const myLibrary = [];

//object constructor to add books
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

//save button creates book object in myLibrary from values in popup forms input fields
saveBook.addEventListener("click", () => {
    const newBook = new Book(title.value, author.value, pages.value);
    myLibrary.push(newBook);
    popup.style.display = "none";
    createBookObject(newBook);
});

function createBookObject (newBook) {

        const bookWrapper = document.createElement("div");
            bookWrapper.className = "book-wrapper";
            content.appendChild(bookWrapper);

        const bookTitleDiv = document.createElement("div");
            bookTitleDiv.className = "book-title";
            bookTitleDiv.textContent = newBook.title;
            bookWrapper.appendChild(bookTitleDiv);

        const bookAuthorDiv = document.createElement("div");
            bookAuthorDiv.className = "book-author";
            bookAuthorDiv.textContent = newBook.author;
            bookWrapper.appendChild(bookAuthorDiv);

        const bookPagesDiv = document.createElement("div");
            bookPagesDiv.className = "book-pages";
            bookPagesDiv.textContent = newBook.pages;
            bookWrapper.appendChild(bookPagesDiv);
}

addBook.addEventListener("click", () => {
    popup.style.display = "block";
});

popupClose.addEventListener("click", () => {
    popup.style.display = "none";
});

cancel.addEventListener("click", () => {
    popup.style.display = "none";
});