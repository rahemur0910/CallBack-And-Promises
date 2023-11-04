/* Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
of posts, and then display them to the browser console.*/

// Define the URL of the API youwant to retrieve data from

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// User the Fetch method to make a GET request to the API

fetch(apiUrl)
  .then(response => {
    // check if the response status is OK(ststus code 200)
    if (response.status === 200) {
      //parse the Json data in the response
      return response.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  })
  .then(data => {
    // Log the retrived data to the console
    console.log('Data retrieved from the API')
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error)
  });
