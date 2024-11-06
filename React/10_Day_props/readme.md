# What Are React Props?






- In React, **props** are used to pass data from a **parent component** to a **child component** the data that we pass from the parent to the child is accessible through props, which is an object.





- React mein props ka matlab "properties" hota hai.  Props ka use hum data ko parent component se child component tak pass karne ke liye karte hain. Or jo Data hm log Parent se Clild main pass kr ange wo data hm log `props` main dekh skte hain jo ki ek  object hota hai. 


 - Props ek read-only concept hai, iska matlab hai ki child component ko jo data milta hai wo wo modify nahi kar sakta. Ye data ek direction mein flow karta hai—parent se child tak. 



# Why Props are Used in React?


- Props are used in React to pass data between components. In React, components are independent and reusable units, but sometimes one component needs to share data with another. Props make it possible to send data from a parent component to a child component. By using props, we ensure that the data flow is organized, making the application easier to manage. For instance, if the parent component wants to pass a piece of information like user data or a message to the child, it does so through props.

- React mein props ka use data ko ek component se doosre component tak pass karne ke liye hota hai. React mein components hote hain jo apne aap mein independent hoti hain. Agar kisi component ko dusre component se data chahiye, toh wo props ke through data request karta hai. Yeh data flow ko organize karta hai aur components ko modular aur reusable banata hai. Maan lo, ek parent component apne child ko user information pass karna chahta hai, toh parent apne data ko child ko props ke through de sakta hai.

### Key Points:
- **Props** ek **object** hota hai jo data ko store karta hai.
- Props ko hum **parent component** se **child component** ko pass karte hain.
- **Props** ko **child component** mein read kiya ja sakta hai, lekin child component **props** ko modify nahi kar sakta.



## How Do Props Work in React?

- In React, props are used to pass data from a parent component to a child component. Whenever you need to send data from the parent to the child, you pass it through props.

- React mein props ka use hum data ko ek parent component se child component tak pass karne ke liye karte hain. Jab bhi humein parent se child ko koi data bhejna hota hai, to hum wo data props ke through pass karte hain.

### **Step-by-Step Explanation:**

#### 1. Passing Data from Parent to Child

- When the parent component wants to send data to the child, it sends this data as props. The data can be of any type—strings, numbers, objects, arrays, or even functions.

- Jab parent component ko apna data child component ko bhejna hota hai, to parent child ko props ke roop mein data bhejta hai. Yeh data kisi bhi type ka ho sakta hai, jaise strings, numbers, objects, arrays, ya even functions.


#### 2. Accessing Props in the Child Component

- When the child component receives the props, it can access them through its function argument. The data passed by the parent is available in the child component as an object.


- If the parent component has a `user` object containing `name`, `age`, and `occupation`, the child component will access this data using `props.user`.



- Jab child component ko props milte hain, to wo props ko apne function ke through access karta hai. Child component ko jo data pass kiya gaya hota hai, wo uske props mein ek object ke roop mein hota hai.


Example: Agar parent component mein ek `user` object hai, jisme `name`, `age`, aur `occupation` ki values hain, to child component mein `props.user` ke through wo values milengi.



#### 3. Accessing Props in the Child Component


-  Props are a `read-only` concept, meaning the child component cannot modify the data it receives. If the child needs to change data, it must inform the parent through state or callbacks.

- Props ek `read-only` concept hai, iska matlab hai ki jo data child ko milta hai, wo child component modify nahi kar sakta. Agar child ko data modify karna hai, to usko apne parent ko inform karna padega, jaise state ko update karke.


#### 4. Data Flow:

- React follows a one-way data flow. This means that data flows from the parent to the child. The child cannot directly send data back to the parent via props. To send data back to the parent, you would typically use callbacks or state updates.


- React mein data ka flow ek direction mein hota hai—parent se child tak. Iska matlab hai ki parent child ko props ke through data pass kar sakta hai, lekin child parent ko data directly pass nahi kar sakta. Agar child ko apne parent se data wapas bhejna ho, to uske liye callbacks ya state ka use kiya jata hai.



## Example:

### 1. Parent Component:

- In the parent component, we define an object and pass it to the child through props.

`Parent.js`


````jsx

// Parent.js
import React from 'react';
import Child from './Child'; // Importing the Child component

function Parent() {
  // The data to pass to the child
  const personInfo = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing 'personInfo' as props to the child */}
      <Child user={personInfo} />
    </div>
  );
}

export default Parent;

````

<!--  -->

### 2. Child Component:

- In the child component, we access the props and display the data.

`Parent.js`


````jsx
// Child.js
import React from 'react';

function Child(props) {
  // Accessing 'user' prop passed from the Parent component
  const { name, age, occupation } = props.user;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
}

export default Child;


````

## Summary:

- Props are used to pass data from the parent to the child component.

- Props ka use parent se child tak data pass karne ke liye hota hai.

- Props are read-only, meaning the child cannot modify the data it receives.

- Props ek read-only concept hain, iska matlab child component props ko change nahi kar sakta.

- Data flows in one direction, from parent to child.

- Data ek direction mein flow karta hai—parent se child tak.

- The child can access the props passed to it, but it cannot modify them.


- Child ko jo props milte hain, wo uske liye accessible hote hain, par wo unhe modify nahi kar sakta.

- If the child needs to send something back to the parent, it uses callback functions or state.

- Agar child ko parent ko kuch return karna ho, to callback functions ya state ka use kiya jata hai.


### Question Related to Props

#### 1. What are React Props?

- In React, props (short for "properties") are a mechanism that allows data to be passed from one component to another. It’s a way for a parent component to send information to its child component. For example, if a parent component needs to display a specific piece of information in a child component, it will pass that data to the child through props. Props are read-only in the child component, meaning the child can access and display the data but cannot modify it. Props follow a one-way data flow — they go from parent to child, not the other way around.


- React mein props ka matlab "properties" hota hai. Ye ek mechanism hai jisse ek component apne data ko doosre component ko bhej sakta hai. Props ka use hum data ko parent component se child component tak pass karne ke liye karte hain. Jaise ki agar ek parent component ko kisi specific data ko show karna hai, toh wo data child component ko props ke through pass karega. Props ek read-only concept hai, iska matlab hai ki child component ko jo data milta hai wo wo modify nahi kar sakta. Ye data ek direction mein flow karta hai—parent se child tak.


#### 2. Why Props are Used in React?

- Props are used in React to pass data between components. In React, components are independent and reusable units, but sometimes one component needs to share data with another. Props make it possible to send data from a parent component to a child component. By using props, we ensure that the data flow is organized, making the application easier to manage. For instance, if the parent component wants to pass a piece of information like user data or a message to the child, it does so through props.

- React mein props ka use data ko ek component se doosre component tak pass karne ke liye hota hai. React mein components hote hain jo apne aap mein independent hoti hain. Agar kisi component ko dusre component se data chahiye, toh wo props ke through data request karta hai. Yeh data flow ko organize karta hai aur components ko modular aur reusable banata hai. Maan lo, ek parent component apne child ko user information pass karna chahta hai, toh parent apne data ko child ko props ke through de sakta hai.


#### 3. How Do We Pass Props from Parent to Child Component?

- Passing props from a parent to a child component is very straightforward. When you want to send data from a parent to a child, you simply provide the prop as an attribute on the child component. Here’s how it works:


- Props ko pass karna kaafi simple hai. Jab aap ek parent component se child component ko data dena chahte ho, toh aap child component ko render karte waqt props pass karte ho. Ye ek tarika hota hai data ko parent se child tak bhejne ka.

**Example**
````jsx
function ParentComponent() {
  const message = "Hello from Parent!";
  return <ChildComponent message={message} />;
}

function ChildComponent(props) {
  return <h1>{props.message}</h1>;
}


````

- Yahan, ParentComponent ne ChildComponent ko ek prop diya message. Ab ChildComponent mein, hum props.message ka use karke wo message display kar rahe hain.

**Important Point:** Props ek one-way data flow ko represent karte hain. Parent se child ko data flow hota hai, lekin child se parent tak data directly flow nahi hota.


#### 4. Can Child Component Modify the Props Data?
- No, the child component cannot modify the props data. Props are immutable in the child component, meaning that the child can only read the data passed by the parent, but it cannot change it. If the child needs to modify its own data, it should use state rather than props.

- Nahi, React mein child component ko jo props milte hain, wo immutable (read-only) hote hain. Child component in props ko modify nahi kar sakta. Agar child ko apne data ko change karna hai, toh usse apna state use karna padta hai.



**Example**

````jsx
function ParentComponent() {
  const userData = { name: "John", age: 25 };
  return <ChildComponent user={userData} />;
}

function ChildComponent(props) {
  // Ye galat hai! Props ko change nahi kar sakte.
  // props.user.name = "Alice"; // Ye error dega.

  return <h1>{props.user.name}</h1>;
}


````


#### 5. Why Are Props Immutable in React?


- Props are immutable to ensure that React's rendering process remains efficient. If the child component were allowed to modify props, React would not be able to track changes easily. React uses an efficient algorithm called reconciliation to decide which components need to be re-rendered. If the child could change the props, React would lose track of which changes happened, leading to potential bugs and inefficiencies. By keeping props immutable, React can ensure that data flows in a predictable manner and that the UI updates properly.


- Props ko immutable (change na hone wale) rakha gaya hai taaki React ka rendering process efficient ho sake. Agar child component props ko modify karne lage, toh React ko pata nahi chalega ki actual data kab change hua, aur kis component ko update karna hai.

- React ka main goal hai predictable data flow aur efficient re-rendering. Agar data ko directly modify karne diya jaye, toh React ko diffing algorithm use karte waqt bahut complexities face karni padti hain. Isliye, props ko immutable rakha gaya hai taaki har component ko apne data ke state par control ho, aur React ko efficiently track kar sake ki kya update karna hai.


#### 6. How Do Props Help in Reusability of Components?


- Props ka use React components ko reusable banane mein hota hai. Aap ek single component ko multiple times use kar sakte ho, bas props ko change karke. Isse hum components ko ek baar define karte hain aur unhe different situations mein use kar sakte hain without re-writing the same code.


- Props are a key feature for making React components reusable. By passing different props to the same component, you can use the same component in various places with different data. This allows you to write a component once and use it multiple times without having to duplicate the code.


````jsx
function Button({ label, color }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}

function App() {
  return (
    <div>
      <Button label="Click Me" color="blue" />
      <Button label="Submit" color="green" />
      <Button label="Cancel" color="red" />
    </div>
  );
}



````

- In this example, the Button component is reused multiple times with different labels and colors. By using props, we can make the component dynamic and reusable without having to rewrite the same code.




#### 7. What Are Default Props in React?

- Default props are used when a parent component does not pass a specific prop to the child component. You can define default values for props so that if the parent doesn't send a value, the child will use the default one. This helps prevent errors or undefined behavior in the application.



- Default props ka use tab hota hai jab koi prop parent se pass nahi hoti. Aap ek default value define kar sakte ho jise agar parent se prop pass nahi hoti, toh woh default value child component mein use ho jaayegi.


1. Using `defaultProps Property`: You can set the `defaultProps` property on your component class or function.

**Example**
````jsx
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

MyComponent.defaultProps = {
  message: 'Hello, World!',
};

export default MyComponent;
````

- In this example, if MyComponent is rendered without a message prop, it will default to "Hello, World!".


2. Using Function Parameters (for Functional Components): If you're using a functional component, you can set default values directly in the function parameters.

**Example**
````jsx
import React from 'react';

const MyComponent = ({ message = 'Hello, World!' }) => {
  return <div>{message}</div>;
};

export default MyComponent;


````


#### 8. What is the Purpose of PropTypes in React?

- PropTypes is a library used in React for prop validation. It allows you to define the types of props that a component should receive, and if the wrong type is passed, React will display a warning in the console. This helps catch errors during development and ensures that your components receive the correct data type.


-  PropTypes ka use React mein prop validation ke liye hota hai. Aap ensure karte hain ki jo data parent se child mein pass ho raha hai, wo correct type ka ho. Agar wrong data type pass hota hai, toh React console mein warning show kar deta hai. Ye development ke dauraan errors ko jaldi pakad lene mein madad karta hai.



**Example**

````jsx
import PropTypes from 'prop-types';

function UserProfile({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

````

- Here, UserProfile expects a name prop of type string and an age prop of type number. If the parent component sends the wrong type (e.g., a string for age), React will log a warning in the console.

####  9. What is the children Prop in React?


- The children prop is a special prop in React that allows you to pass child elements into a component. It’s used when you want to wrap content inside a component, such as passing other components or elements inside a wrapper component.

- React mein children ek special prop hai jo ek component ke andar kisi bhi content ko pass karne ke kaam aata hai. Jab aap ek component ke andar HTML tags ya dusre components pass karte ho, toh wo content children prop ke roop mein access hota hai.




**Example**

````jsx
function Box({ children }) {
  return <div className="box">{children}</div>;
}

function App() {
  return (
    <Box>
      <h2>This is inside the Box!</h2>
      <p>This is also inside the Box!</p>
    </Box>
  );
}

````

- Here, UserProfile expects a name prop of type string and an age prop of type number. If the parent component sends the wrong type (e.g., a string for age), React will log a warning in the console.


#### 10. Can Props Be Used for Event Handlers?

- Yes, props can be used to pass event handlers (like onClick, onChange, etc.) from a parent component to a child component. This is especially useful when you want the child component to handle events, but the parent component controls the logic.

- Haan, props ko event handlers ke liye bhi use kiya ja sakta hai. Agar parent component ko child component ko koi event handle karne ke liye function pass karna ho, toh wo function ko prop ke roop mein pass karta hai.



**Example**

````jsx
function ParentComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <ChildComponent onButtonClick={handleClick} />;
}

function ChildComponent(props) {
  return <button onClick={props.onButtonClick}>Click Me</button>;
}


````