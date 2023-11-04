/*
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.
*/

function logBookTitles (books, callback) {
  // use the map fu7nction to create a new list containig only the titles
  const bookTitles = books.map(book => book.title)
  // Sort the titles in alphabetical order.
  bookTitles.sort()
  //Pass the sorted list bof titles to the call back function
  callback(bookTitles)
}

//Define a sample list of book object

const bookList = [
  { title: 'Psychology of Money', author: 'Morgan Housel', year: 2020 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
]

// Define a callback function to log titles in alphabetical order

function logTitles(titles)
{
    console.log('Book Titles in Alphabetical Order');
    titles.forEach(title => console.log(title));
}

// call main function
logBookTitles(bookList,logTitles);