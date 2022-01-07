// Declare library array that will store user's books.
let myLibrary = [];

function Book() {
  // Constructor
}

function addBookToLibrary() {
  let bookInput = capitalize(prompt("Which book would you like to add?"))
  if (!bookInput == "") {
    myLibrary.push(bookInput)
  }
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