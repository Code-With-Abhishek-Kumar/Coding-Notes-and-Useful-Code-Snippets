
// In JSX, you can write plain HTML-like syntax, but if you need to include JavaScript expressions (like variables, functions, or calculations), you must wrap them in curly braces {}.

// JSX mein curly braces {} ka use karna kaafi zaroori hota hai jab humein dynamic values ya expressions render karni hoti hain. Jaise tumhare code mein {avatar} se image ka URL aur {description} se naam display ho raha hai. Tum conditional logic, arrays, objects, ya functions ko bhi curly braces mein pass kar sakte ho. Yeh React mein dynamic content ko efficiently manage karne ka tareeka hai.

import './App.css'


function App() {

  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'; // Declaring a JavaScript variable
  const description = 'Gregorio Y. Zara'; // Another JavaScript variable

  // You can Write your Js code inside html using Curly Braces
  return (
    <>
  <div className="card">
    {/* The image source is injected via curly braces */}
  <img src={avatar}  />
    {/* The description text is injected using curly braces */}
    <h1>
    {description}
    </h1>
  </div>
 {/* {this.state.userName} */}
    </>
  )
}

export default App
