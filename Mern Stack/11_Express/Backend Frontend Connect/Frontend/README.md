

# proxy 



`During Development:`

- Jab aap ek web application banate hain, aapka frontend (jisme users interact karte hain) often backend server se data fetch karna ya services ke saath interact karna chahta hai. For example, aapka frontend jo Vite par chal raha hai woh port 3000 par ho sakta hai, jabki backend API kisi aur port par ho sakta hai (jaise 4567) ya ek alag domain par (jaise jsonplaceholder.typicode.com) ho skta hain ye ek Big Problem hain kyu ki 









- Seedhe frontend se kisi dusre domain ya port par API requests bhejne se security issues ho sakte hain. Ek common problem CORS (Cross-Origin Resource Sharing) policy restrictions hai, jisme browsers security ke liye aisi requests ko block karte hain.




- CORS (Cross-Origin Resource Sharing) ek security feature hai jo web browsers mein implement ki gayi hai taki JavaScript code jo ek origin se (domain, protocol, ya port) dusre origin par request bhej raha hai usko restrict kiya ja sake. Origin ka matlab hota hai ki koi web resource ka combination hai protocol (HTTP ya HTTPS), domain (jaise example.com), aur port (jaise 80 HTTP ke liye ya 443 HTTPS ke liye).

- Jab ek web page se JavaScript code kisi dusre origin par se resource request karta hai, tab CORS decide karta hai ki web browser us request ko allow kare ya restrict kare. Yeh security ke liye important hai kyunki bina CORS ke restrictions ke, ek malicious website dusri site se user ke sensitive data ko access kar sakti hai jahan user logged in hai.


- Jab ek web browser ek website se dusre website ko data mangta hai, jaise ki http://frontend.com se http://backend.com, tab browser backend server se response mein CORS headers check karta hai. Ye headers browser ko batate hain ki kya frontend ko requested data tak access karne ki permission hai ya nahi.

`Simple Requests:` 


- Jab request simple hota hai, jaise GET, POST, HEAD methods aur kuch specific content types ke saath, tab browser pehle backend server ko ek preflight request bhejta hai. Yeh request OPTIONS method se hota hai. Server fir CORS headers ke saath respond karta hai jo yeh batate hain ki request ko allow kiya ja sakta hai ya nahi.

`Preflight Requests:` 

- Jab request complex hota hai, jaise ki GET, POST, HEAD ke alawa aur methods ya custom headers ke saath, tab browser pehle server ko OPTIONS request bhejta hai. Is request ka purpose hai permission check karna. Agar yeh preflight request successful hota hai, to browser actual request ko proceed karta hai.



- In simple words, CORS headers help browsers decide whether to allow a website to fetch data from another website. Simple requests are checked directly, while complex requests first undergo a permission check through an OPTIONS request before proceeding.


# CORS Restrictions Example:


Agar aap local development kar rahe hain:

- Aapka frontend http://localhost:3000 par chal raha hai.

- Aapka backend API http://localhost:4567 par chal raha hai.


Agar aapka frontend seedhe backend API se data fetch karne ki koshish karta hai (http://localhost:4567/api/data), to browser CORS restrictions ki wajah se request block kar dega, khas kar development mein jab frontend aur backend usually alag ports par hote hain.







## Proxy Proxy Server: Forwarding Frontend Port to Backend Port and Avoiding CORS




- Jab aap ek web application develop karte hain, to frontend (jahan users interact karte hain) often backend API ya server se alag port ya domain par chalta hai jo data provide karta hai. Is situation mein CORS (Cross-Origin Resource Sharing) issues aate hain kyunki browsers security reasons ke liye frontend JavaScript code ko allow nahi karte hain ki woh dusre origin (domain, protocol, ya port) par requests bheje.



- Agar aapka frontend seedhe backend API se data fetch karne ki koshish karta hai (http://localhost:4567/api/data), to browsers jaise Chrome ya Firefox CORS policies ki wajah se in requests ko block kar denge, agar backend explicitly frontend origin (http://localhost:3000) ko allow nahi karta hai.



- Is problem ko solve karne ke liye hum proxy server ka istemal karte hain. Proxy server frontend aur backend ke beech mein ek intermediary role ada karta hai. Jab frontend localhost:3000 pe run ho raha hai aur backend localhost:4567 pe hai, tab proxy server 





 - frontend ke request ko direct na karke backend port pe forward kar deta hai. Isse frontend aur backend ka port ek jaisa ho jata hai, jisse CORS (Cross-Origin Resource Sharing) restrictions ko avoid kiya ja sakta hai. CORS restrictions tab aate hain jab do alag-alag ports ek dusre ko direct request karte hain. 




- Yahaan pe proxy server ke istemal se, frontend aur backend ek hi port pe chalte hain, isliye yahan pe CORS policy ka koi issue nahi aata. Browsers ke security policies tab apply hote hain jab alag-alag origins (ports ya domains) se request hoti hai. Proxy server ke istemal se, frontend aur backend ko ek jaisa port dikhta hai, jisse communication seamless hota hai aur CORS policy ka koi issue nahi hota.







<!-- 
if you create your app using npm create react then use  this doc https://create-react-app.dev/docs/proxying-api-requests-in-development/ -->