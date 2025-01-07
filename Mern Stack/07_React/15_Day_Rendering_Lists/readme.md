## Conditional Rendering in react

- Conditional rendering refers to displaying different content or elements based on certain conditions.

- which means that the developer can decide which component to render on the screen on on the basis of some predefined conditions. This is known as conditional rendering.

- It's like saying, "If this is true, show this content. If it's not true, show something else."

Think about it like this: You might want to show a "Login" button when a user is not logged in and a "Logout" button when they are logged in.

**Key Points:**

- You can return different content based on conditions.

- You can include or exclude parts of your app based on conditions.

- React allows different shortcuts to make conditional rendering easy and clean.

### 1. Using if Statements

- The if statement is the easiest way to check a condition. Based on whether the condition is true or false, you can show different content.

````jsx
import React from 'react'

const If_Statements = () => {
  let age = 8;
  let message;
  if(age >= 18){
    message = <p>You are adult</p>
  }else{
    message = <p>You are minor</p>
  }

  return (
    <>
    <div>using If_Statements</div>
    <div className="">
      {message}
    </div>
    </>
  )
}

export default If_Statements

````
`Explanation:`

- If age is 18 or more, it shows "You are an adult."

- Otherwise, it shows "You are a minor."

### 2. Using the Ternary Operator (`?:`)

- The ternary operator is a shortcut for creating an if-else statement. 

**Syntax:**

````jsx
condition ? expression_if_true : expression_if_false

````

**Example**

````js
import React from 'react'

const Ternary_Operator = () => {
  let age = 20;
  return (
    <>
    <h3>using Ternary Operator</h3>
    <p>you Age is {age} and you are {age >= 18 ? "Adult" : "Minor"}</p>
    </>
  )
}

export default Ternary_Operator

````


### 3. Using the Ternary Operator (`?:`)

- The && operator can be used when you only need to render something if a condition is true. If the condition is false, nothing is rendered.

*Syntax*

````jsx
condition && expression

````

- If condition is true, the expression is evaluated and rendered.

- If condition is false, the expression is ignored, and nothing is rendered.


````jsx
const Logical_AND = () => {
 let isLoggedIn = true;
  return (
        <div>
          {isLoggedIn && <p>You are logged in.<p>}
           {/* Render only if true */}
          <h2>Welcome to the site!</h2>
      </div>
  )
}

export default Logical_AND

````


### 4. Using Immediately Invoked Function for Complex Conditions

- Sometimes, conditions can be complex, and it might be easier to put them inside a function and call that function inside the JSX.

**Syntax for Using Functions for Conditional Rendering:**

`syntax`

````jsx
{(() => {
  // function body
})()}
````


1. `(() => {...})`: This is an arrow function. It can be any function—regular or anonymous. In the context of JSX, it is used to execute a function right away.

2. `()` at the end: This is how you immediately invoke the function after it’s defined.


````jsx
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {(() => {
        if (isLoggedIn) {
          return <p>Welcome back!</p>;
        } else {
          return <p>Please log in.</p>;
        }
      })()}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login Status
      </button>
    </div>
  );
}

export default App;


````