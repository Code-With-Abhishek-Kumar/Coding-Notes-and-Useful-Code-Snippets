

<!-- TOC -->

- [What is Node js](#what-is-node-js)
    - [Node.js vs Browser:](#nodejs-vs-browser)

<!-- /TOC -->





# What is Node js



- Hum log Jante hain ki JavaScript ka use hum log client side Scripting Langugage k roop main kr te hain jo  ki Hum logo k web pages ko Intrective banane main help kr ta hain .


- Lekin 2009 mein Ryan Dahl ko ek naya idea aaya Wo Idea ye tha ki kyu na JavaScript ko Client-side programming language se  zyada istemal karke server-side programming mein bhi upyog kiya jaye .



- Pehle servers par PHP aur Java jaise languages istemal hoti thi, lekin inmein kuch challenges thay. PHP ka performance kabhi-kabhi slow ho jata tha aur Java ki complexity zyada hoti thi, jo servers ko manage karna mushkil bana deta tha.





- Ryan Dahl developed Node.js by leveraging the Google Chrome V8 engine, which was originally written in C++ and open-sourced for public use. Dahl wrapped the V8 engine in JavaScript, making Node.js capable of server-side programming. This adaptation allows Node.js to efficiently handle asynchronous operations and event-driven tasks, distinguishing it from traditional synchronous approaches.



- Ryan Dahl ne Node.js ka vikas kiya, jisme unhone Google Chrome ka V8 engine ka upyog kiya. V8 engine pehle se hi C++ mein likha gaya tha aur open-source hai, jiska koi bhi istemal kar sakta hai. Dahl ne V8 engine ko JavaScript mein wrap kiya, jisse Node.js server-side programming ke liye capable ho gaya. Is badlav ne Node.js ko asynchronous operations aur event-driven tasks ko efficient tareeke se handle karne ki shamta di hai, jo traditional synchronous approaches se alag hai.


- Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on servers or desktops, not just browsers. 


- Node Js Asynchronous Programming ka use kr ta hain Yeh allow karta hai tasks ko concurrently aur independently execute kiya jaye. Jab ek task start hota hai, dusre tasks ko wait ya Block  kiye bina process kiya ja sakta hai. Isse application ka responsiveness aur efficiency improve hota hai, khaaskar jab I/O operations ya network communication involved ho.


- Iske alawa, Node.js ka ecosystem, jisme NPM shamil hai, developers ko ek wide range of libraries aur modules provide karta hai jo development ko tezi se aage badhane mein madad karte hain. Yeh sabhi factors milakar Node.js ko ek preferred choice banate hain real-time applications, microservices architectures, aur scalable web servers ke nirman ke liye.

- Samanya shabdo mein kaha jaye toh, Node.js ne JavaScript ko server-side programming mein popular banaya hai kyunki yeh PHP aur Java ke thay drawbacks ko overcome karta hai aur developers ko ek unified language experience provide karta hai web stack ke dono sides par.





## Node.js vs Browser:


`Node.js `

- Node.js is a JavaScript runtime environment designed to run JavaScript code outside of the browser, typically on servers or desktops. It provides access to file system operations, networking capabilities, and other system-level functions, making it ideal for server-side applications and backend development.


- Node.js is commonly used for building web servers, APIs, real-time applications (e.g., chat applications, streaming services), microservices architectures, and command-line tools.



- Node.js has a vast ecosystem of modules and packages available via npm (Node Package Manager). These modules extend Node.js functionality, covering areas such as web servers (e.g., Express.js), database operations (e.g., MongoDB drivers), and utilities for asynchronous programming.



- Node.js ek JavaScript runtime environment hai jo browser ke bahar JavaScript code ko run karne ke liye banaya gaya hai, aam taur par servers ya desktops par. Isme file system operations, networking capabilities, aur dusre system-level functions available hai, jo ki server-side applications aur backend development ke liye suitable hai.


`Browser`


- Browsers interpret and execute JavaScript within the context of web pages to provide interactive features and user interfaces. They operate within a sandboxed environment, utilizing APIs like the DOM for manipulating HTML and CSS, handling user events, and making AJAX requests.


- Browsers web pages ke context mein JavaScript ko interpret aur execute karte hain taki interactive features aur user interfaces provide kar sakein. Ye ek sandboxed environment mein operate karte hain, jisme DOM jaise APIs ka use hota hai HTML aur CSS ko manipulate karne ke liye, user events handle karne ke liye, aur AJAX requests bhejne ke liye.


- Browsers support client-side libraries and frameworks like React.js, AngularJS, and jQuery, which provide utilities and components for building dynamic web interfaces and managing client-side data.

- Browsers are used for developing frontend components of web applications, including interactive websites, single-page applications (SPAs), progressive web apps (PWAs), browser extensions, and web-based games.