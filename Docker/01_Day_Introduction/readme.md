# What is Docker?


- Docker is an open-source platform that automates the process of building, shipping, and running applications using containerization technology. Containers allow developers to package an application with all its dependencies, ensuring that it runs consistently across different computing environments. Docker simplifies the development lifecycle by providing a standardized and efficient way to manage application dependencies and runtime environments.



- Docker ek open-source platform hai jo applications ko lightweight aur portable containers ke andar deploy karne ko automate karta hai. Containers aise packages hain jo ek application aur uski saari dependencies ko encapsulate karte hain 


- "encapsulate" ka matlab hai ki ek container application aur uski saari dependencies (libraries, configuration files, etc.) ko ek single package mein pack kar deta hai. Isse application aur uske dependencies ek isolated environment mein hoti hain , 




- "Isolated" ka matlab hai ki container apna ek alag aur separate environment provide karta hai. Iska matlab hai ki container ke andar jo bhi chal raha hai, wo baaki system ya doosre containers se alag hota hai. Agar container ke andar koi problem aati hai, to wo baaki containers ya host system ko affect nahi karegi.

- Docker development, testing, aur deployment workflows ko simplify karta hai by providing an isolated aur reproducible environment for applications.



`Isolation Example`


- Isolated Containers: Jab aap Express aur MongoDB ko Docker containers mein run karte hain, to dono containers apne-apne isolated environments mein chalte hain. Express container sirf apne environment mein run karta hai aur MongoDB container apne environment mein run karta hai. Agar Express container ko koi problem hoti hai, to wo MongoDB container ya host system ko affect nahi karegi, aur vice versa.

- Communication: Dono containers ek Docker network ke through communicate kar sakte hain. Isse Express container MongoDB container se data fetch kar sakta hai, lekin dono containers ek dusre se isolated hain, jisse system ki stability aur security improve hoti hai.


