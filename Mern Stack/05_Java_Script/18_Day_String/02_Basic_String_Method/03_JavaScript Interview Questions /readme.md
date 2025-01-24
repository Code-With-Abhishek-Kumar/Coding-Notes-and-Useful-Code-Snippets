## JavaScript Basic Interview Questions for Mastering String

### Q1:- Reverse a String

- Question: Write a function to reverse a string.

**`Ans`**

```js
function reverseString(str) {
    
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('hii')); // Output: "iih"


```

<a href="./Question/Question1.js">Code</a>

### Q2:- Check for Palindrome

- Question: Determine if a given string is a palindrome.

**`Ans`**

```js
function Check_Palindrome(str){

let reversed = str.split('').reverse().join('');
if(str === reversed){
    console.log(`${str} is a Palindreme Number`)
}else{
    console.log(`${str} is not a Palindreme Number`)
}

}

console.log(Check_Palindrome('11a'))
```

<a href="./Question/Question2.js">Code</a>

### Q3:- How do you remove whitespace from both ends of a string in JavaScript?

<a href="./Question/Question3.js">Code</a>

<!-- 
https://www.geeksforgeeks.org/javascript-string-programming-examples/ -->

### Q4:- How do you extract a section of a string in JavaScript?

You can use the `slice()` method in JavaScript to extract a section of a string and return it as a new string.

**Example:**

```javascript
let str = "Hello World!";
let slicedStr = str.slice(0, 5);
console.log(slicedStr); // "Hello"
```

<a href="./Question/Question4.js">Code</a>

### Q5:- Sort a String in JavaScript

You can use the `split()`, `sort()`, and `join()` methods to sort a string in JavaScript.

**Example:**

```javascript
let str = "IHGFEDCBA"
let Shorted_String = str.split('').sort().join()
console.log(Shorted_String) // A,B,C,D,E,F,G,H,I
```

<a href="./Question/Question5.js">Code</a>

### Q6:- Write Separate Functions for Each Social Media Platform to Extract Usernames from the URLs

Write separate functions for each of the following social media platforms that will extract the username from the URL. The URL format for each platform is provided below. Each function should take a URL as input and return the corresponding username from that URL.

- Question:

1. **Instagram**
   - URL format: `https://www.instagram.com/{username}/`

2. **Facebook**
    - URL format: `https://www.facebook.com/{username}`

3. **LinkedIn**
   - URL format: `https://www.linkedin.com/in/{username}/`

4. **Twitter**
   - URL format: `https://twitter.com/{username}`

5. **YouTube**
   - URL format: `https://www.youtube.com/c/{username}`

6. **Pinterest**
   - URL format: `https://www.pinterest.com/{username}/`

7. **Snapchat**
   - URL format: `https://www.snapchat.com/add/{username}`

8. **TikTok**
   - URL format: `https://www.tiktok.com/@{username}`

9. **Reddit**
   - URL format: `https://www.reddit.com/u/{username}/`

10. **GitHub**

- URL format: `https://github.com/{username}`

11. **WhatsApp**

- URL format: `https://wa.me/{username}`

12. **Tumblr**

- URL format: `https://{username}.tumblr.com/`

13. **Spotify**

- URL format: `https://open.spotify.com/user/{username}`

14. **Skype**

- URL format: `https://join.skype.com/{username}`

15. **Flickr**

- URL format: `https://www.flickr.com/photos/{username}/`

**`Exaple`**

```javascript

function getInstagramUsername(url) {
  return url.split('instagram.com/')[1].split('/')[0];
}

```


<a href="./Question/Question6.js">Code</a>
