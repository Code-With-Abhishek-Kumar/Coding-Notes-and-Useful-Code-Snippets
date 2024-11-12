
# Redux and Context API to Solve Prop Drilling Problem


## Option 1: React Context API


- React Context API ek tarika hai jisse aap global state ko components ke beech easily share kar sakte ho bina props ko har level tak pass kiye. Isme do main components hote hain: Provider (data dene ke liye) aur Consumer (data lene ke liye). React.createContext() se aap ek context bana ke values (jaise themes, authentication status) ko share kar sakte ho. Yeh prop drilling ko avoid karta hai, jo code ko clean aur maintainable banata hai. Par agar state frequently update ho ya complex logic ho, toh Redux zyada suitable ho sakta hai.

- The React Context API is a way to manage and share global state across components in React without passing props down through every level. It provides two main components: Provider (to provide the data) and Consumer (to access the data). By using React.createContext(), you can create a context to store values like themes, authentication status, or language settings and make them accessible to any component in your app. It helps avoid prop drilling (passing props through many components), making your code cleaner and easier to maintain. However, it's not ideal for frequently updated state or complex logic—Redux may be more suitable for those cases.


## Option 2: Redux 



````scss

+---------------------+       +----------------------+        +---------------------+
|   Component (UI)    |       |    useDispatch()      |        |     Redux Store     |
|   (User Clicks)     | ----> |  (Dispatch Action)    | ---->  |   (Global State)    |
|  (Trigger Action)   |       |  (Add Item to Cart)   |        |   (Data Stored)     |
+---------------------+       +----------------------+        +---------------------+
                |                                                    ^
                |                                                    |
                v                                                    |
        +---------------------+       +------------------------+    |
        |  Component (UI)      | <---- |   useSelector()         |    |
        | (Read Cart State)    |       |  (Get Updated Cart)     |    |
        +---------------------+       +------------------------+    |
                |                                                     |
                +-----------------------------------------------------+
                       (Read the Updated Cart Data)


````

- Redux ek state management library hai jo large applications mein global state ko manage karne mein help karti hai. Yeh app ka saara data ek central store mein store karti hai aur actions aur reducers ke through data ko update karti hai. Redux Toolkit ek official library hai jo Redux ke upar built hai, taaki Redux ka code likhna asaan ho jaye. Yeh common tasks jaise actions, reducers banana, aur store configure karna simple banata hai. Redux complex apps ke liye achha hai, lekin Redux Toolkit ise use karna bahut aasaan aur fast bana deta hai, bina zyada code likhe.


- Redux is a state management library that helps you manage global state in large applications. It stores all the app's data in a central store and uses actions and reducers to update the data. Redux Toolkit is an official library built on top of Redux to make it easier to write Redux logic. It simplifies common tasks like creating actions, reducers, and configuring the store. Redux is great for complex apps, but Redux Toolkit makes it simpler and faster to use by reducing boilerplate code.




## Option 2: Redux  Tool kit



````scss

+---------------------+      +--------------------------+        +---------------------+
|   Component (UI)    |      |    useDispatch()          |        |     Redux Store     |
|   (User Clicks)     | ---> |  (Dispatch Action)        | ---->  |   (Global State)    |
|  (Trigger Action)   |      |  (Add Item to Cart)       |        |   (Data Stored)     |
+---------------------+      +--------------------------+        +---------------------+
                |                                                       ^
                |                                                       |
                v                                                       |
        +---------------------+       +------------------------+     |
        |  Component (UI)      | <---- |   useSelector()         |     |
        | (Display Cart State) |       |  (Get Updated Cart)     |     |
        +---------------------+       +------------------------+     |
                |                                                        |
                +--------------------------------------------------------+
                      (Access Updated Cart Data & Re-render UI)



````



- Redux is a state management library that helps manage global state in large applications. It stores all of the application's data in a single central store and uses actions and reducers to update and modify this data.

- Redux ek state management library hai jo large applications mein global state ko manage karne mein help karti hai. Yeh app ka saara data ek central store mein store karti hai aur actions aur reducers ke through data ko update karti hai.


- However, Redux can get a bit complicated, especially when the application grows. It involves writing a lot of boilerplate code for creating action creators, reducers, and configuring the store.

- Lekin, Redux thoda complex ho sakta hai, khaas kar jab application bada ho. Ismein boilerplate code kaafi zyada likhna padta hai, jaise action creators, reducers banane, aur store ko configure karna.

- This is where Redux Toolkit comes in. Redux Toolkit is an official library that sits on top of Redux and makes writing Redux logic easier and faster by reducing the need for boilerplate code.


- Yeh problem solve karne ke liye Redux Toolkit hai. Redux Toolkit ek official library hai jo Redux ke upar build hui hai aur Redux logic ko asaan aur tezi se likhne mein madad karti hai, bina zyada code likhe.



### Why Use Redux Toolkit?

- **Less Boilerplate Code:** Redux requires a lot of repetitive code. Redux Toolkit eliminates this by providing built-in functions for most common Redux tasks (e.g., setting up the store, creating slices).


- **Simplified API**: RTK provides a simpler API to interact with Redux, making it much easier for beginners and experienced developers alike.

- **Best Practices Built-In:** It follows best practices by default, so you don’t have to worry about setting things up correctly.


- **Improved Developer Experience:** It integrates with tools like Redux DevTools for debugging and offers better error messages.



## Redux Toolkit Flow (Step-by-Step)

Understanding the flow of data and actions in Redux Toolkit (RTK) is crucial to effectively manage the state in your React application. Below is a step-by-step breakdown of how Redux Toolkit works and why each step is necessary. By following this flow, you ensure that your app's state management is predictable and consistent.


### Redux Toolkit Data Flow (Step-by-Step)


**1. Create a Slice**


- A slice in Redux Toolkit is a small, self-contained unit of state management that combines state, actions, and reducers into one bundle. Each slice represents a specific feature or part of the application’s state (like a user, counter, todos, etc.).

- The main advantage of slices is that they allow you to manage state in a modular way. Instead of having one large reducer for the entire app, slices help you break down your state into smaller, manageable pieces, each with its own logic.



# Redux Toolkit - Slices

## What is a Slice in Redux Toolkit?

### English Explanation:

A **slice** in **Redux Toolkit** is a small, self-contained unit that handles a specific piece of your app's **state**. A slice includes the **state**, **reducers**, and **actions** needed to manage that piece of data. Instead of keeping all the logic for managing state in one large file, **slices** break it down into smaller, manageable parts. Each slice is responsible for one feature or area of your application, like **user information**, **cart**, or **todos**.

Redux Toolkit me slice ek chhota, self-contained unit hota hai jo ek specific part of app ki state ko handle karta hai. Ek slice me state, reducers, aur actions hoti hain jo uss part ko manage karte hain. Isse aap apni app ke state ko chhote, manageable pieces me divide kar sakte hain, jaise ki user data, cart items, ya todos.




In traditional Redux, you had to write a lot of extra code (like **action types** and **action creators**), but with **Redux Toolkit**, **slices** automatically handle these things, making the code cleaner and easier to maintain.


- Traditional Redux me hume action types aur action creators likhna padta tha, lekin Redux Toolkit me slices automatically yeh sab kaam kar dete hain, jo aapko code likhne ki bohot mushkil kaam se bachata hai.



### Key Benefits of Using Slices:
- **Modular and Scalable**: You can manage different parts of your app’s state independently.
- **Less Boilerplate**: Redux Toolkit generates the action creators and reducers automatically.
- **Cleaner Code**: No need for separate action types or action creators. Everything is in one place.
- **Easier to Maintain**: As your app grows, adding or modifying features is easier.

### Example:

Imagine you have two parts of your app: one for managing **user data** (like login status) and one for managing a **shopping cart**.

```jsx
// User Slice (handles user data like login)
import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState  = {
  userName: '',
  loggedIn: false,
};,
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.userName = action.payload;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.userName = '';
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
```

State Explanation

    The state starts with an empty userName and a loggedIn value of false (because the user is not logged in initially).

    initialState is the initial value of the state when the slice is first created.

Actions Explanation

    logIn action: This action is triggered when a user logs in. The payload of this action will be the user's name, which will update the userName in the state, and it will set loggedIn to true.

    logOut action: This action is triggered when a user logs out. It sets loggedIn to false and clears the userName.



````jsx

// Cart Slice (cart data manage kar raha hai)
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


````


### How to Use Redux Toolkit Slices in the App?


````jsx
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;



````

- Now, in your React components, you can use useSelector to access the data from the slices and useDispatch to dispatch actions or set the data:


## Example Usage in a Component


````jsx


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './userSlice';

const App = () => {
  const user = useSelector(state => state.user);  // Accessing the state of the user slice
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome, {user.userName ? user.userName : 'Guest'}</h1>
      <p>{user.loggedIn ? 'You are logged in.' : 'You are not logged in.'}</p>
      
      <button onClick={() => dispatch(logIn('John Doe'))}>Log In</button>  {/* Dispatching logIn action */}
      <button onClick={() => dispatch(logOut())}>Log Out</button>  {/* Dispatching logOut action */}
    </div>
  );
};

export default App;


````


useSelector is used to access the current state of the user slice. It returns the userName and loggedIn values from the state.
useDispatch is used to dispatch actions.
When the "Log In" button is clicked, it triggers the logIn action and passes 'John Doe' as the payload.
When the "Log Out" button is clicked, it triggers the logOut action.