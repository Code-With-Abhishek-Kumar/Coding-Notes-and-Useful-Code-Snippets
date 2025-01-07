# Understanding useEffect in React

- React's useEffect is a hook that allows you to handle side effects. Side effects refer to tasks that React doesn't normally handle, .

- useEffect runs after a component has fully loaded or rendered it can run after the component is updated. In other words, useEffect takes a "dependencies array," and its job is to re-run the effect whenever any value in the dependencies array changes.




- React ka useEffect ek hook hai jo aapko side effects handle karne ki suvidha deta hai. Side effects ka matlab hai wo kaam jo React apne aap nahi kar pata.

- useEffect hook kisi component ke pura load hone ke baad chalti hai, ya phir component ke update hone ke baad bhi chal sakti hai. Iska matlab ye hai ki useEffect ek "dependencies array" leta hai, jiska kaam ye hota hai ki jab bhi dependencies array ke kisi element ki value change hoti hai, to useEffect ka pura code dobara se run hota hai.

- Maan lijiye ek number hai, jiska initial value 1 hai. jo ki kisi useEffect k dependencies array main pass hain Agar is number ki value kabhi bhi update hoti hai, to useEffect ka code run hoga.



## Basic Syntax of useEffect

```jsx
useEffect(() => {
  // Effect code goes here (like fetching data or adding event listeners)
}, [dependencies]);

```






- The first argument is a function that contains the effect code you want to run.

- Pehla part ek function hai jo effect ko define karta hai. Matlab, jo kaam aapko karwana hai woh likhte hain.

- The second argument is a dependency array. It tells React when to run the effect. If the values inside this array change, the effect runs again.

- Dusra part ek dependency array hai. Isse React ko pata chalta hai ki effect ko kab aur kis condition pe dobara run karwana hai. Agar aap empty array [] dete hain, toh effect sirf ek baar run hoga jab component pehli baar screen pe aaye (mount ho).




##  What is a Dependency Array in useEffect?














## How does useEffect work?


### 1. **Runs after every render**


````jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component render ho gaya ya count change ho gaya');
  }); // Dependency array nahi di hai, isliye har render ke baad chalega

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


````


## In this example:

- useEffect runs after every render (because there's no dependency array).

- useEffect har baar component ke render hone ke baad chalega.



- It prints a message to the console every time the component re-renders, which happens whenever the state count changes.

- Jab count change hoga, ya jab bhi component re-render hoga, useEffect apna kaam karega.


### 2. **Run Only Once (Like componentDidMount)**

````jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('This runs only once when the component mounts!');
  }, []); // Empty dependency array: this runs only once when the component first mounts.

  return <div>Welcome to the component!</div>;
}


````


## Here:

- useEffect runs only once, when the component is first added to the screen (mounted).

- useEffect sirf ek baar chalega, jab component pehli baar screen pe aayega (mount hoga).



- This is similar to the componentDidMount lifecycle method in class components.

- Yeh bilkul componentDidMount ke jaise kaam karta hai jo class components me hota tha.


### 3. **Run Effect When Specific Values Change**


````jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  // This effect runs whenever `count` changes
  useEffect(() => {
    console.log('Count changed to', count);
  }, [count]); // `count` is a dependency, so it runs when `count` changes.

  // This effect runs whenever `name` changes
  useEffect(() => {
    console.log('Name changed to', name);
  }, [name]); // `name` is a dependency, so it runs when `name` changes.

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}


````


## Here:

- The first useEffect runs only when count changes.

- Pehla useEffect tab chalega jab count change hoga.


- The second useEffect runs only when name changes.

- Dusra useEffect tab chalega jab name change hoga.


#### 4. Cleanup Example


- Agar aapko apne effect ke baad kuch clean up karna ho (jaise event listeners ko remove karna ya timer ko clear karna), toh aap useEffect ke andar ek cleanup function return kar sakte hain. Yeh function component ke unmount hone ke time ya next render ke liye effect run karne se pehle execute hota hai.


````jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(true);
    };

    const handleOfflineStatus = () => {
      setIsOnline(false);
    };

    // Event listeners ko add karna
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    // Cleanup: Component ke unmount hone pe event listeners ko remove karna
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []); // Empty array ka matlab hai effect ek baar hi chalega

  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}


````
