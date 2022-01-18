// Declare library array that will store user's books.
let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read"), new Book("eyo", "man", 29, "read"), new Book("John", "Does", 95, "not read")];

// Declare libraryDisplay as a constant.  
const display = document.getElementById("libraryDisplay")

// Add book to library
function addBookToLibrary() {
  let bookInput = capitalize(prompt("Which book would you like to add?"))
  // Gets book title.
  if (!bookInput == "") {
    // Asks questions for user to fill known info about the book.
    const author = capitalize(prompt("Enter the author's name.", "Unknown"))
    const pages = prompt("Enter the number of pages.")
    const read = prompt("Have you read this book?", "Not Read")
    // Check if book already exists.
    if (checkDuplicateBook(`${bookInput}By${author}`)) {
      alert("Book is already in library!")
    }
    else {
      const bookObject = new Book(bookInput, author, pages, read)
      // Book Object is added to myLibrary.
      myLibrary.push(bookObject)
    }
    displayBooks();
  }
}

// Check if book is already in library
function checkDuplicateBook(book) {
  for (let i = 0; i < display.childElementCount; i++) {
    if (book == display.children[i].id) {
      return true
    }
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

// Adds click event to "Add new book" image.
const button = document.getElementById("addBook")
button.onclick = addBookToLibrary;

// Displays books.
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (checkDuplicateBook(`${myLibrary[i].title}By${myLibrary[i].author}`)) {
      continue
    }
    myLibrary[i].prototype = Object.create(Book.prototype)
    myLibrary[i].createBookDisplay();
  }
}

// Create displayed book.
Book.prototype.createBookDisplay = function() {
  // Creates a div for new books.
  const cardBook = document.createElement("div");
  cardBook.setAttribute("id", `${this.title}By${this.author}`);
  cardBook.style.position = "relative"
  cardBook.setAttribute("text-align", "center")
  display.appendChild(cardBook);
  // Creates image inside book div.
  const cardBookImg = document.createElement("img")
  cardBookImg.setAttribute("src", "images/LibraryBook.png");
  cardBookImg.setAttribute("alt", "Card template edited from Slay the Spire.");
  cardBook.appendChild(cardBookImg)
  // Adds title of book to div.
  const cardBookTitle = document.createElement("div")
  cardBookTitle.textContent = `${this.title}`
  cardBookTitle.style.position = "absolute"
  cardBookTitle.style.left = "30%"
  cardBookTitle.style.top = "30%"
  cardBook.appendChild(cardBookTitle)
}

// Side stuff
// Add conditionals to skip conjunctions/determiner. (make function with array)