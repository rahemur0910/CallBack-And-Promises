/*
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
*/

function fetchDataFromApi () {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'

  // use the fetch API to make thr HTTP request

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      console.log('Data fetched from the API:')
      console.log(data)
    })
    .catch(error => {
      console.error('An error occcurred: ', error)
    })
}
// call the function to fetch and log the data
fetchDataFromApi()
