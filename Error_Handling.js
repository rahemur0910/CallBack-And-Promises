/*
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
to simulate an error, and then display an error message on the webpage.*/

// Define the URL of the API you want to retrieve data from
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789' // This URL intentionally returns a 404 error

// Select an element to display the error message on the webpage

const errorDisplay = document.getElementById('error-message')

// Use the Fetch method to make a GET request to the API

fetch(apiUrl)
  .then(response => {
    //Check if the response status is OK(status code 200)
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  })
  .then(data => {
    //Display the retrieved data on the webpage.
    console.log(('Data retrieved from the API:', data))
  })
  .catch(error => {
    //Handle errors and display an error message on the webpage
    console.log('Error', error)
    errorDisplay.textContent =
      'Error: Failed to retrieve data retrieve data from the API'
  })
