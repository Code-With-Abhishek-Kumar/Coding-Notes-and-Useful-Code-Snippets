
- [The `app.get()` Function in Express](#the-appget-function-in-express)
- [Example](#example)
  - [Sending HTML](#sending-html)
  - [Sending JSON:](#sending-json)
  - [Handling Query Parameters:](#handling-query-parameters)
  - [Dynamic Route Parameters:](#dynamic-route-parameters)
- [Some important Question](#some-important-question)
  - [1. What is the purpose of a GET request in web development?](#1-what-is-the-purpose-of-a-get-request-in-web-development)
  - [2.  How does a GET request differ from a POST request?](#2--how-does-a-get-request-differ-from-a-post-request)
  - [3. Explain the structure of a typical GET request URL.](#3-explain-the-structure-of-a-typical-get-request-url)
  - [4. How are query parameters passed in a GET request?](#4-how-are-query-parameters-passed-in-a-get-request)
  - [5. In Express.js, how do you handle a GET request for a specific route?](#5-in-expressjs-how-do-you-handle-a-get-request-for-a-specific-route)
  - [6. What is the role of the req and res objects in handling a GET request in Express.js?](#6-what-is-the-role-of-the-req-and-res-objects-in-handling-a-get-request-in-expressjs)
  - [7. How do you extract query parameters from a GET request in Express.js?](#7-how-do-you-extract-query-parameters-from-a-get-request-in-expressjs)
  - [8. What are dynamic route parameters in Express.js, and how do you use them?](#8-what-are-dynamic-route-parameters-in-expressjs-and-how-do-you-use-them)
  - [9. Give an example of a scenario where you would use a GET request to fetch data from an API.](#9-give-an-example-of-a-scenario-where-you-would-use-a-get-request-to-fetch-data-from-an-api)
  - [10. How do you send a response back to the client after handling a GET request in Express.js?](#10-how-do-you-send-a-response-back-to-the-client-after-handling-a-get-request-in-expressjs)


## The `app.get()` Function in Express


- The `app.get()` function in Node is designed to route HTTP GET requests to the specified path, associating them with designated callback functions. Its primary purpose is to link middleware to your application, facilitating the handling of GET requests at the specified route.


Syntax:
```javascript
app.get( path, callback )
```

##  Example 

```javascript
app.get('/', (request , response) => {
    response.send("<h1>Hello world</h1>")
})
```


###  Sending HTML


```javascript
// Define a route that sends HTML
app.get('/html', (req, res) => {
  res.send('<h1>Hello, HTML!</h1>');
});

```
### Sending JSON:
```javascript

// Define a route that sends JSON
app.get('/json', (req, res) => {
  res.json({ message: 'Hello, JSON!' });
});


```

###  Handling Query Parameters:

```javascript

// Define a route with query parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});

```

Jab client /search?q=somequery par GET request bhejta hai, tab yeh route handler request URL se q query parameter ka maan extract karta hai (jaise ki somequery) aur uss search query ke saath ek response bhejta hai. Jaise agar client /search?q=express maangta hai, toh server Search query: express ke saath uttar bhejega.

In this URL:
- ? marks the beginning of the query parameters.
- q=query is a query parameter where q is the key and query is the value.
- & separates multiple query parameters.


### Dynamic Route Parameters:

```javascript
// Define a route with a dynamic parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

```

- Is udaharan mein, `/:id `ek gatishil route parameter hai jo upyogakarta ke ID ko darshata hai. Jab bhi ` /user/123 ` jaise URL aata hai, Express.js aapke dvara nirdharit route ko pakadta hai aur req.params.id ka maan 123 hota hai. Fir aap usse upyogakarta ke ID ke roop mein upyog kar sakte hain aur usse uttar mein bhej sakte hain.

- Maan lijiye, humein har user ke alag ID ke saath unki profile dikhani hai. Toh hum ek route bana sakte hain `/user/:id,` jahaan :id ek gatishil parameter hai. Jab bhi koi URL /user/123 par jaata hai, Express.js uss route ko samajhta hai aur ID ko req.params.id mein daalta hai. Hum phir uss ID ka upyog karke user ki profile ko dikhate hain.

## Some important Question

### 1. What is the purpose of a GET request in web development?
`Ans :-` Purpose of a GET request:
     - GET requests are one of the HTTP methods used for retrieving data from a specified resource, typically a web server.
    - They are commonly used to fetch HTML pages, images, stylesheets, scripts, or any other resource that is publicly accessible on the web.
    - GET requests are considered "safe" and "idempotent," meaning they should not modify the server state and should produce the same result if repeated.
### 2.  How does a GET request differ from a POST request?
`Ans :-`  Difference between GET and POST requests:
    - GET requests are used to retrieve data from a specified resource, while POST requests are used to submit data to be processed to a specified resource.
    - GET requests are typically used for fetching data, such as loading a web page or fetching information from an API.
    - POST requests are commonly used for submitting form data, uploading files, or making changes to server-side data.
### 3. Explain the structure of a typical GET request URL.
`Ans :-` Structure of a typical GET request URL:
    - A typical GET request URL consists of the base URL followed by optional query parameters.
        Query parameters are appended to the URL after a question mark (?), and multiple parameters are separated by ampersands (&).
### 4. How are query parameters passed in a GET request?
`Ans :-` Passing query parameters in a GET request:
    - Query parameters allow additional data to be passed in the URL along with the request.
    - They are key-value pairs separated by ampersands (&), where the key and value are separated by an equal sign (=).
    - For example, in the URL ` https://example.com/search?q=query&page=2`, q and page are query parameters with values query and 2 respectively.
### 5. In Express.js, how do you handle a GET request for a specific route?
`Ans :-` Handling a GET request in Express.js:
    - In Express.js, you handle GET requests by defining a route using the app.get() method.
    - The first argument to app.get() is the URL path, and the second argument is a callback function that defines what happens when a request is made to that path.

### 6. What is the role of the req and res objects in handling a GET request in Express.js?
`Ans :-` Role of req and res objects in Express.js:
    - In Express.js, the req object represents the HTTP request and contains information about the request, such as parameters, headers, and body.
    - The res object represents the HTTP response and is used to send a response back to the client, such as HTML content, JSON data, or status codes.
### 7. How do you extract query parameters from a GET request in Express.js?
`Ans :-`Extracting query parameters in Express.js:
    - In Express.js, query parameters can be extracted from a GET request using the req.query object.
    - The req.query object contains key-value pairs of all the query parameters passed in the URL.
### 8. What are dynamic route parameters in Express.js, and how do you use them?
`Ans :-` Dynamic route parameters in Express.js:
    - Dynamic route parameters in Express.js allow you to create routes with variable parts in the URL.
    - They are defined in the route path with a colon (:) followed by the parameter name, such as :id.
    - These parameters can then be accessed in the route handler using req.params.
### 9. Give an example of a scenario where you would use a GET request to fetch data from an API.
`Ans :-` Example scenario for using a GET request:
        A common scenario for using a GET request is fetching data from an external API, such as retrieving user information, fetching product details, or getting weather data.
### 10. How do you send a response back to the client after handling a GET request in Express.js?
`Ans :-` Sending a response back to the client in Express.js:
    - After handling a GET request in Express.js, you send a response back to the client using methods like res.send(), res.json(), or res.sendFile().
    - These methods allow you to send different types of responses, such as plain text, JSON data, or files.