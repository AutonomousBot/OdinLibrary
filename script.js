// Declare library array that will store user's books.
let myLibrary = [];

// Declare libraryDisplay as a constant.  
const display = document.getElementById("libraryDisplay")

// Add book to library
function addBookToLibrary() {
  let bookInput = capitalize(prompt("Which book would you like to add?"))
  // Gets book title.
  if (!bookInput == "") {
    // Asks questions for user to fill known info about the book.
    const author = capitalize(prompt("Enter the author's name.", "Unknown"))
    const year = prompt("Enter the year of publication.", "Unknown")
    const pages = prompt("Enter the number of pages.")
    const read = (prompt("Have you read this book?", "Not Read"))
    // Check if book already exists.
    if (checkDuplicateBook(`${bookInput}${year}`)) {
      alert("Book is already in library!")
    }
    else {
      const bookObject = new Book(bookInput, author, year, pages, read)
      // Book Object is added to myLibrary.
      myLibrary.push(bookObject)
    }
    displayBooks();
  }
}

// Class version of book objects instead of constructor.
class Book {
  constructor(title, author, year, pages, read) {
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages 
    this.read = read
  }

  // Create displayed book.
  createBookDisplay() {
    // Creates a div for new books.
    const cardBook = document.createElement("div");
    cardBook.setAttribute("id", `${this.title}${this.year}`);
    cardBook.style.position = "relative"
    cardBook.setAttribute("text-align", "center")
    cardBook.setAttribute("libraryindex", `${myLibrary.indexOf(this)}`)
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
    cardBook.appendChild(cardBookTitle);
  
    // Adds button that toggles the read status of the book.
    const readButton = document.createElement("button")
    readButton.textContent = this.read
    // Toggles read status.
    function toggleRead() {
      let readStatus = myLibrary[this.parentElement.getAttribute("libraryindex")].read;
      capitalize(readStatus) != "Not Read"? readStatus = "Not Read" : readStatus = "Read"
      myLibrary[this.parentElement.getAttribute("libraryindex")].read = readStatus
      readButton.textContent = readStatus
    }
    // Adds on click event to button
    readButton.addEventListener("click", toggleRead)
    // Appends created button to book display div and sets position
    readButton.style.position = "absolute"
    readButton.style.left = "33%"
    readButton.style.bottom = "20%"
    cardBook.appendChild(readButton);
  }

  removeBookButton() {
    const domBook = document.getElementById(`${this.title}${this.year}`)
    domBook.addEventListener("click", removeLibrary, false)
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

// // Constructor for book.
// function Book(title, author, year, pages, read) {
//   this.title = title
//   this.author = author
//   this.year = year
//   this.pages = pages 
//   this.read = read
// }

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
    if (checkDuplicateBook(`${myLibrary[i].title}${myLibrary[i].year}`)) {
      continue
    }
    // myLibrary[i].prototype = Object.create(Book.prototype)
    myLibrary[i].createBookDisplay();
  }
}

// // Create displayed book.
// Book.prototype.createBookDisplay = function() {
//   // Creates a div for new books.
//   const cardBook = document.createElement("div");
//   cardBook.setAttribute("id", `${this.title}${this.year}`);
//   cardBook.style.position = "relative"
//   cardBook.setAttribute("text-align", "center")
//   cardBook.setAttribute("libraryindex", `${myLibrary.indexOf(this)}`)
//   display.appendChild(cardBook);

//   // Creates image inside book div.
//   const cardBookImg = document.createElement("img")
//   cardBookImg.setAttribute("src", "images/LibraryBook.png");
//   cardBookImg.setAttribute("alt", "Card template edited from Slay the Spire.");
//   cardBook.appendChild(cardBookImg)

//   // Adds title of book to div.
//   const cardBookTitle = document.createElement("div")
//   cardBookTitle.textContent = `${this.title}`
//   cardBookTitle.style.position = "absolute"
//   cardBookTitle.style.left = "30%"
//   cardBookTitle.style.top = "30%"
//   cardBook.appendChild(cardBookTitle);

//   // Adds button that toggles the read status of the book.
//   const readButton = document.createElement("button")
//   readButton.textContent = this.read
//   // Toggles read status.
//   function toggleRead() {
//     let readStatus = myLibrary[this.parentElement.getAttribute("libraryindex")].read;
//     capitalize(readStatus) != "Not Read"? readStatus = "Not Read" : readStatus = "Read"
//     myLibrary[this.parentElement.getAttribute("libraryindex")].read = readStatus
//     readButton.textContent = readStatus
//   }
//   // Adds on click event to button
//   readButton.addEventListener("click", toggleRead)
//   // Appends created button to book display div and sets position
//   readButton.style.position = "absolute"
//   readButton.style.left = "33%"
//   readButton.style.bottom = "20%"
//   cardBook.appendChild(readButton);
// }

// // Adds button to remove book from library
// Book.prototype.removeBookButton = function() {
//   const domBook = document.getElementById(`${this.title}${this.year}`)
//   domBook.addEventListener("click", removeLibrary, false)
// }

// Removes book from library
function removeLibrary() {
  console.log(this)
  console.log(typeof(this))
  // Removes book from the library.
  myLibrary.splice(this.getAttribute("libraryindex"), 1);
  // Removes DOM element of the book.
  this.remove();
  // Removes click event after a book has been removed.
  for (let i = 0; i < display.childElementCount; i++) {
    document.getElementById(display.children[i].id).removeEventListener("click", removeLibrary, false)
  }
}
// Solution attempt: 'this' will be document.get...(element that was clicked). add attribute to element: libraryindex.

// Adds click event to bookRemoval image.
const bookRemoval = document.getElementById("bookRemoval")
bookRemoval.onclick = function() {
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].removeBookButton();
  }
}

// Side stuff
// Add conditionals to skip conjunctions/determiners. (make function with array)
// Add border colors/ button on click effects for users to see they buttons they've clicked/ are clicking. 