## What is React and Its Data Flow?



- React is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components that manage their own state, making it easier to build complex user interfaces with a clear separation of concerns.


- React is a JavaScript library used to build user interfaces (UIs). It helps you create websites or apps that can update quickly without reloading the entire page. React makes it easier to build interactive UIs by breaking the UI into small, reusable pieces called components.


### React: One-Way Data Flow (Parent to Child)


 - React uses a one-way data flow, meaning that data only flows in one direction, from parent components to child components. This makes the app easier to manage and debug.


#### **Parent Component to Child Component** 

- In React, data is passed from a parent component to a child component via props. Props are read-only and are used to pass dynamic values to child components.

- A parent component can render one or more child components and pass data to those components through props.


`ParentComponent`

````jsx
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0); // State in the parent component

  // Function to update the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {count}</p>
      {/* Passing state and function as props to the child */}
      <ChildComponent count={count} increment={incrementCount} />
    </div>
  );
};

export default ParentComponent;

````

`ChildComponent`
````jsx
// ChildComponent.js
import React from 'react';

const ChildComponent = ({ count, increment }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Count: {count}</p>
      <button onClick={increment}>Increment in Parent</button>
    </div>
  );
};

export default ChildComponent;

````



## Explanation:

- **ParentComponent** manages the state (count).

- **ChildComponent** receives the state (count) via props.

    ChildComponent can change the count state by calling the increment function, which updates the state in the ParentComponent.


## Problem with Props and Prop Drilling

- In React, props and prop drilling are important concepts that help us pass data between components. However, as an app grows, these concepts can become tricky to handle. Let’s break it down in simpler terms.


### 1. What are Props?


- In React, props (short for "properties") are used to send data from a parent component to a child component. It’s like passing a note from one person to another.

For example, if you want to show a message in a child component, you pass that message from the parent component using props.


````jsx
// Parent component
function Parent() {
  const message = "Hello from Parent!";
  return <Child greeting={message} />;
}

// Child component
function Child(props) {
  return <h1>{props.greeting}</h1>;
}



````


### What is Prop Drilling?



- Prop Drilling is when you need to pass data (called "props" in React) through many layers of components, even though not every component in the chain needs that data.

- Imagine you have a parent component that has some data, and that data needs to go to a deeply nested child component. Instead of sending it directly, the data has to pass through each component in between, even if those intermediate components don’t need it.


````lua
-----------------------------------
|           App Component         |   (Holds the state "userRole")
|----------------------------------|
| userRole = 'admin'              |   
-----------------------------------|
         |     (pass userRole)
         |
   ------------------------------
   |        Page Component        |  (Doesn't need "userRole")
   ------------------------------
         |     (pass userRole)
         |
   ------------------------------
   |      Section Component       |  (Doesn't need "userRole")
   ------------------------------
         |     (pass userRole)
         |
   ------------------------------
   |      Dashboard Component     |  (Uses "userRole")
   ------------------------------
         | "Welcome, admin!"




````



#### Step-by-Step Explanation:

- App Component has the userRole state (e.g., "admin").
    It passes the userRole down to Page Component.

- App Component mein userRole state hai (jaise "admin").

- The Page Component doesn't use the userRole, but it passes it to Section Component.

- App Component yeh userRole Page Component ko pass karta hai.

- The Section Component also doesn't use the userRole, but it passes it down to Dashboard Component.

- Page Component ko userRole ki zarurat nahi hai, lekin phir bhi woh isse Section Component ko pass karta hai.

- Section Component ko bhi userRole ki zarurat nahi hai, lekin woh isse Dashboard Component ko pass karta hai.

- Finally, the Dashboard Component uses the userRole and displays it ("Welcome, admin!").


- Dashboard Component finally userRole ka use karta hai aur display karta hai "Welcome, admin!" (ya jo bhi role ho).

#### The Problem:

- Even though Page and Section don't need the userRole, they still have to pass it down, leading to prop drilling.

Page aur Section components ko userRole ki zarurat nahi thi, lekin unhe phir bhi woh prop pass karna pada.






- If there are more layers or more data to pass, it becomes harder to manage and more confusing to maintain.


- Jaise-jaise app bada hota hai, aur data ko zyada layers ke through pass karna padta hai, code complicated ho jaata hai.




- Isse code maintain karna mushkil ho jaata hai, aur debugging   karte waqt samajhna bhi tough ho sakta hai.


### Simple Example:


- Let’s say you have a userRole (like "admin" or "student") in the App component, and you want to pass this userRole to the Dashboard component.

**App Component → Page Component → Section Component → Dashboard Component**


**Example One**

````jsx
import React, { useState } from 'react';

// The parent component that has the state
const App = () => {
  // 'userRole' ki state ko define kar rahe hain. Initial value 'admin' hai, aap chahein toh isse 'student' bhi kar sakte hain.
  const [userRole, setUserRole] = useState('admin');  // userRole is 'admin' ya 'student'

  return (
    <div>
      {/* userRole ko Page component ko pass kar rahe hain */}
      <Page userRole={userRole} />
    </div>
  );
};

// Page component - Ye component userRole ko receive karta hai, lekin khud use nahi karta, bas agle component ko pass kar raha hai
const Page = ({ userRole }) => {
  return <Section userRole={userRole} />;  // userRole ko Section component ko pass kar rahe hain
};

// Section component - Ye bhi userRole ko receive karta hai, par use nahi karta, bas pass kar raha hai Dashboard ko
const Section = ({ userRole }) => {
  return <Dashboard userRole={userRole} />;  // userRole ko Dashboard component ko pass kar rahe hain
};

// Dashboard component - Yeh wo component hai jahan userRole ka actual use ho raha hai
const Dashboard = ({ userRole }) => {
  return <h1>Welcome, {userRole}!</h1>;  // userRole ko display kar rahe hain, jaise "Welcome, admin!"
};

export default App;


````


### Problem with Prop Drilling

````less

+-------------------+      +-------------------+      +-------------------+      +-------------------+
|      App          |----->|      Hero          |----->|     About         |----->|     Notice        |
|  (userRole: "admin") |      | (userRole: "admin") |      | (userRole: "admin")|      | (userRole: "admin")|
+-------------------+      +-------------------+      +-------------------+      +-------------------+


````


## Step by Step Explanation

**1. The App Component (Top-Level Parent):**


- The App component holds the state (userRole: "admin") that needs to be shared with other components.


- App component mein humne ek state banayi hai (userRole: "admin") jo humne share karni hai baaki components ke saath.



- In this case, the App component is the "root" of our component tree, and it holds the value userRole which indicates the role of the user ("admin" in this case).

- Yahan par App component hai jo "root" hai aur yeh userRole ko hold karta hai jo user ka role dikhata hai ("admin").


**2. Passing Down Props:**



- Since App wants to share userRole with Hero, it passes userRole as a prop to the Hero component.


- App component userRole ko Hero component ko pass karta hai, jo prop ke through Hero ko milta hai.





- The Hero component doesn’t directly use userRole, but it needs to pass it further down to the About component.


- Hero component ko userRole ki zarurat nahi hai, lekin fir bhi wo isse About component ko pass karta hai.




**3. Hero Component:**

- Hero component receives userRole from App but doesn't use it at all. It simply passes it further down to About.



- Hero ko userRole mila hai, lekin use directly uski zarurat nahi hai. Bas wo userRole ko About component ko pass kar raha hai.

- Here’s where the prop drilling starts. Even though Hero doesn't need userRole, it must pass it on to About.

- Yeh ho gaya prop drilling ka start. Hero ko userRole ki zarurat nahi thi, fir bhi usne usse pass kiya.



<!--  -->


**4.  About Component:**








 - The About component also doesn’t use the userRole, but it must pass it further down to the Notice component.

- About component ko bhi userRole ki zarurat nahi hai, lekin usse Notice component ko pass karna padta hai.


- So again, the userRole is being passed down through a layer (even though About doesn't need it)

- Matlab, userRole ko ek aur layer ke through pass kiya jaa raha hai, jo actually usse use nahi kar raha.

dfasd
<!--  -->


**5. Notice Component (Final Destination):**


- Finally, the Notice component is where the userRole is used. It shows a message, like "Important notice for admin."




- Notice component finally wo component hai jo userRole ko use karta hai aur kuch message show karta hai jaise "Important notice for admin".


- Yeh final component hai jahan userRole ka use ho raha hai, lekin usse pehle humein userRole ko Hero aur About components ke through pass karna pad raha hai jo usse directly use nahi karte.


- This is the final component in the chain that uses userRole, but to get there, we’ve had to pass userRole through two components (Hero and About) that don’t need it.

## To learn To to Solve This Problem to to <a href="./redux.md"> Redux.md Page</a>

