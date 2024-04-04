## => Table of Contents

- [=\> What is packets](#-what-is-packets)
- [=\> What is Back-end](#-what-is-back-end)
  - [Why backend](#why-backend)
  - [Why do we need backend development?](#why-do-we-need-backend-development)
- [=\> Setup Express](#-setup-express)
    - [1. Download Node Js](#1-download-node-js)
    - [2. Visit Node Js](#2-visit-node-js)
    - [3. Initialize Node.js Project:](#3-initialize-nodejs-project)
    - [4. Install Express](#4-install-express)
    - [5. Install Nodemon](#5-install-nodemon)
    - [5. Use of Nodemon](#5-use-of-nodemon)

# => What is packets

- In networking packets are the units of data that travel across a network

- Packets Split data into Smaller units for sending across network . Each packets has a header (With Source / Destination info) and data.

- Mobile se Mag nikla in the form of packets or apne nearest taver tak pahucha Nearest taver se data nikla using optical fiber optical fiber se data gaya jiss k pass send kr na hain us k nearast taver tak then wo packets main convert ho gya and message recived hua . 

# => What is Back-end

- Backend Developer wo banda hota hain jo ki server and data base program karta hain unka kaam Data ko Store Kr na or access krna hota hain information process karna , aur front - end se aane wale request ko manage kr na hota hain.

## Why backend

- Backend development sikhna kaafi important hai agar tum web development mein apne career ko aage badhana chahte ho. Backend development ka matlab hota hai woh hissa jahan data store hota hai aur processing hoti hai, jo ki user ke samne nahi dikhta. 
  
- Agar tum frontend development seekhte ho toh backend sikhna tumhare skills ko pura karega aur tum ek full-stack developer banoge. Isse tumhein web applications ko end-to-end build karne ka knowledge milega. Backend development seekhne se tumhein kai job opportunities milenge, kyun ki companies backend developers ko apne applications ke liye hire karti hain.

## Why do we need backend development?

- Backend development kaam karta hai jaise website ya applications ka engine. Ye saari data ko store, organize aur process karta hai background mein. Ye ensure karta hai ki sab kuch smooth chal raha ho, website ko hackers se secure rakhta hai, aur bahut saare users ko ek saath handle kar sakta hai bina slow huye. Backend development ke bina, websites sahi se kaam nahi karti aur wo jo cool cheezein karti hai jaise online shopping ya social media par friends se connect karna, wo nahi hoti.

- Backend development is essential for managing data, implementing business logic, ensuring security, enabling scalability, integrating with external services, optimizing performance, and facilitating maintenance in web applications.

# => Setup Express

### 1. Download Node Js

- Go to any Browser and type download node JS

### 2. Visit Node Js

- https://nodejs.org/en/download/ Click on LTS (` Long  Term Support`) version for Mac OS  / Windows / Linux and Download Recommended Version and install Node JS

### 3. Initialize Node.js Project: 

Open your command line or terminal, navigate to your project directory, and run the following command to initialize a new Node.js project:

````bash
npm init -y
````

### 4. Install Express

- Install Express: Run the following command to install Express as a dependency in your project:

```bash
npm install express
```

### 5. Install Nodemon

- Use Install -g nodemon to globally install nodemon. The -g flag stands for global Which  means it will be available throughout all of our system.

```bash
npm install -g nodemon
```
- This package will allow you to automatically restart your server whenever you make changes to your code.


### 5. Use of Nodemon

- Nodemon is a tool that helps in the development tool , it saves us from manually restarting our server every time there are some cha02_Day_BasicSyntexnges made in our file
Inside the `scripts` section of your `package.json`, add this line: `"start": "nodemon src/index.js"`


- This tells npm that when we run `npm
Now, when you run `npm start` from the terminal, it will use nodemon to monitor your files for changes and restart the server
This tells npm that when we run `npm  

```bash
nodemon filename
```