// Declare library array that will store user's books.
let myLibrary = [];

// Add book to library
function addBookToLibrary() {
  let bookInput = capitalize(prompt("Which book would you like to add?"))
  if (!bookInput == "") {
    const author = capitalize(prompt("Enter the author's name."))
    const pages = prompt("Enter the number of pages.")
    const read = prompt("Have you read this book?")
    const bookObject = new Book(bookInput, author, pages, read)
    myLibrary.push(bookObject)
  }
}

// Constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages 
  this.read = read
}

// Capitalizes title.
function capitalize(string) {
  let newTitle = [];
  const title = string.split(' ')
  for (i = 0; i< title.length; i++) {
  newTitle[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1)
  }
  return newTitle.join(" ")
}

const button = document.getElementById("addBook")
button.onclick = addBookToLibrary;

// Side stuff
// Add conditionals to skip conjunctions/determiner. (make function with array)