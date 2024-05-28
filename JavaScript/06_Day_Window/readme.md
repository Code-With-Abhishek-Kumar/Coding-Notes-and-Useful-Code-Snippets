# Window in js 

- There are many feature which are frquently used in js and they are not the part of js , they are not part of js the language but they are available in the browser and when you use them in js they are called from the browser and not the js



- JavaScript mein, kai aise features hain jo seedhe JavaScript language ka part nahi hain, lekin ve browser environment mein uplabdh hote hain. Jab aap in features ko JavaScript code mein istemal karte hain, tab yeh browser se access hote hain, aur seedhe JavaScript language se nahi.

- window ek bucket samaj lo jismein saari wo cheeje availabe hain jo browser deta hain js main use kr ne k liye kyu ki wo saari cheejein js ka part nhi balki Browser ka part hain which is availabe to use in js , we can also they're provided by browser to use js , all these features which are make availabe via browser areput inside window.


var a = 12,


 - go to your Browser and open console and write this code to see which thing is not a part of js
````javascript
console.log(window)


````





## Yahaan kuch key aspects of the Window object hai:

`Global Scope:`

-  Objects, functions, aur variables jo bina kisi parent object ke declare kiye jaate hain, wo automatic taur par Window object se attach ho jaate hain. Iska matlab hai ki ye global taur par pure JavaScript code mein access karne ke liye available hote hain.

`Document Object Model (DOM):`

-  Window object access provide karta hai current document ke DOM ka. Ye HTML elements, unke attributes, aur content ko dynamically JavaScript ke through manipulate karne ki anumati deta hai.

`Browser Properties aur Methods:`

-  Window object browser environment se judi properties aur methods ko contain karta hai. Ye properties jaise window.location current page ki URL ko access karne ke liye aur methods jaise window.open() naye browser windows ya tabs open karne ke liye, aur dialogs ko display karne ke liye (window.alert(), window.confirm(), window.prompt()).

`Event Handling:` 

- Window object event handling ko facilitate karta hai JavaScript mein. Ye users ke interactions jaise clicks, keyboard inputs, aur page loading events ke liye event listeners register karne ki anumati deta hai.

`Navigation Control: `

- Window object browser navigation, history, aur window management ke liye methods provide karta hai. Isme window.history browser history mein aage ya peeche navigate karne ke liye aur window.close() current browser window ya tab ko band karne ke liye methods shamil hain.