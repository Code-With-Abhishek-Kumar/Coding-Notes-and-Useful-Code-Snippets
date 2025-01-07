



# Asynchronous Programming Approach


`Asynchronous Programming Example `


- When a client sends a request to a server, an asynchronous server starts processing that request and can handle other tasks concurrently while waiting for the original request to complete. For example, in file downloads, an asynchronous server can manage multiple download requests simultaneously without blocking other clients' requests. This non-blocking approach improves application responsiveness and efficiency, especially when tasks involve I/O operations or network communication. Developers use callbacks, promises, or async/await syntax to effectively manage asynchronous tasks, ensuring that the application remains responsive even under high load conditions.


- Jab ek client server ko request bhejta hai, asynchronous server us request ko start karta hai aur phir dusre tasks ko process karte hue original request ko wait karta hai. For example, file download mein, asynchronous server multiple download requests ko ek saath handle kar sakta hai bina dusre clients ke requests ko block kiye. Is non-blocking approach se application ka responsiveness aur efficiency improve hota hai, khaaskar jab tasks mein I/O operations ya network communication involved hoti hai. Callbacks, promises, ya async/await syntax ka istemal karke developers asynchronous tasks ko effectively manage kar sakte hain, ensuring ki application high load conditions mein bhi responsive rahe.



- In languages like PHP, Java, and Python, synchronous programming is widely used. In this approach, tasks are executed sequentially, one after another. When a client makes a request, it has to wait until each task completes before the next one can start. 



# Synchronous  Programming Approach


- Synchronous programming mein tasks ek sequence mein execute hote hain aur ek task ko shuru karne ke baad dusre tasks ka wait karna padta hai jab tak pehla task complete na ho jaye. Jab ek client server ko request bhejta hai, synchronous model mein server us request ko process karta hai uske baad hi dusre requests ko handle karta hai. 


- For example, agar ek client large file ko download kar raha hai, to server pehle us file ko puri tarah se download karne tak dusre clients ke requests ko block kar deta hai. Is tarah ke approach mein tasks predictable order mein execute hote hain lekin isme efficiency kam ho sakti hai, khaaskar jab tasks mein I/O operations ko wait karna padta hai.


- Is waiting period mein server dusre tasks ko handle nahi karta jab tak current file upload complete na ho jaye.


- Large file uploads se dusre clients ke requests delay ho sakte hain, jisse overall server efficiency aur responsiveness pe asar padta hai.











