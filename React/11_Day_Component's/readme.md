##  React Component




- In React a Component is a small, reusable piece of code that represents a  user interface (UI), element  like a button, a form, or a header. You can combine these small components to build bigger and more complex UIs. This makes it easier to manage and organize your code.

- React mein, component ek chhota sa, reusable code ka hissa hota hai jo ek user interface (UI) ka part dikhata hai. Ye simple cheezein ho sakti hain jaise button, form, ya header, ya phir complex cheez jaise poora page layout. Aap in components ko mix aur match karke apna UI bana sakte ho. Isse aapka code modular, maintainable, aur reusable hota hai.


## Why Use Components?


**1. Reusability**


- Once you create a component, you can use it in many places without rewriting the same code. For example, you can create a button component and use it in different parts of your app.

-  Jab ek component ban jaata hai, to aap use apne app ke kisi bhi hissa mein use kar sakte ho bina dobara likhe. Jaise agar aapne ek button component banaya hai, to aap use app ke alag-alag parts mein use kar sakte ho.

**2. Modularity:**

- You can break your app into smaller parts. Each component does one job, which makes your app easier to build and maintain.

- React mein aap apne app ko chhote chhote parts mein tod sakte ho. Har component ka ek specific kaam hota hai, jo app ko manage karne mein asaan bana deta hai.


**3. Separation of Concerns:**

- Components separate the UI from the data or logic behind it. This makes your code cleaner and easier to understand.

- Components UI aur uske logic ko alag rakhte hain, jisse code clean aur samajhne mein aasan hota hai.


## Types of Components

**1. Functional Components:**

- These are simple JavaScript functions that take inputs (called props) and return HTML-like code (JSX) to show on the screen.

- Ye simple JavaScript functions hote hain jo props lete hain (jo inputs hote hain) aur JSX (HTML jaisa code) return karte hain jo UI ko dikhata hai.

```jsx

function Button({ label }) {
  return <button>{label}</button>;
}

export default Button;


```

- Is example mein, Button component ko label ek prop ke roop mein milta hai aur wo us label ko button par dikhata hai.

**2. Class Components:**


- These are ES6 classes that extend React.Component and must include a render() method that returns JSX. Class components are more powerful because they can manage state (data that can change over time) and lifecycle methods (methods that get called at different points in a component's life, like when it is created, updated, or destroyed).

- Ye thode complex hote hain, ye ES6 classes ke roop mein likhe jaate hain aur state (jo dynamic data hota hai) ko manage karte hain.


````jsx
import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}

export default Button;


````

## How React Components Work

**1. Props (Properties):**

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- Props wo data hote hain jo ek parent component se ek child component tak pass hote hain. Jaise ek parent component apne child ko button ka text dena chahe to wo props ke through karta hai.


````jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}



````
**2. State:**

- State is data that a component can change over time. For example, you can keep track of how many times a button has been clicked, and when it changes, the component automatically updates.

- State ek aise cheez hai jo component ke andar change ho sakti hai. Jaise ek button par click karne par uski count value badal sakti hai aur component apne aap update ho jaata hai.


````jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;


````


**3. Rendering:**


- When the props or state change, the component re-renders. This means React updates the part of the UI that needs to change based on the new data.

- Jab bhi props ya state change hote hain, to component re-render ho jaata hai, yani React apne aap UI ko update karta hai sirf uss part ko jo change hua hota hai.


## Combining Components


- You can combine small components to build larger and more complex UIs. For example, a Header, Body, and Footer can be separate components, and you can put them together in a parent component.

- Aap components ko combine karke complex UI bana sakte ho. Jaise ek Header, Body, aur Footer ko alag components bana ke unhe ek parent component mein laa sakte ho.

````jsx
function Header() {
  return <header><h1>My Website</h1></header>;
}

function Footer() {
  return <footer><p>© 2024 My Website</p></footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <p>Welcome to my website!</p>
      <Footer />
    </div>
  );
}

export default Page;

````



## Exporting Components

- When you create a component, you need to export it if you want to use it in other files.

**1. Default Export:**


- You can only have one default export per file. It’s the main thing you want to share from that file.

- When you import it in another file, you don’t need curly braces {}.

````jsx
// Button.js
export default function Button() {
  return <button>Click Me</button>;
}


````

- To import this component:


````jsx
import Button from './Button';  // No curly braces


````

**Named Export:**

- You can export multiple components from the same file using named export.

- When you import a named export, you must use curly braces {} around the component name.

```jsx
// Header.js
export function Header() {
  return <h1>Welcome to My Website</h1>;
}


```


- To import this component:

```jsx
import { Header } from './Header';  // With curly braces



```