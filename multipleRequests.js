/*
Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs.
*/

async function fetchDataFromTwoAPIs () {
  const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1'
  const postUrl = 'https://jsonplaceholder.typicode.com/posts/1'

  try {
    // Use Promise.all to fetch data from both Api request
    const [todoResponse, postResponse] = await Promise.all([
      fetch(todoUrl),
      fetch(postUrl)
    ])

    if (!todoResponse.ok || !postResponse.ok) {
      throw new Error('HTTP error in one or both API requests')
    }
    // parse the Json data from both response
    const todoData = await todoResponse.json()
    const postData = await postResponse.json()
    // // Create an object with the combined results
    const combinedData = {
      todo: todoData,
      post: postData
    }

    // Print the combined data
    console.log('Combined Data:')
    console.log(combinedData)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}
// call
fetchDataFromTwoAPIs()
