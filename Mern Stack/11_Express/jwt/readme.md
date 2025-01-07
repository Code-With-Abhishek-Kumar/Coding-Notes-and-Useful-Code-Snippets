# JWT Handbook: Understanding JSON Web Tokens


## What is JSON Web Token (JWT)?


JSON Web Token (JWT) is an open standard defined by RFC 7519 that allows for secure information exchange between a client and a server, represented as a JSON object. This format is compact and easy to transfer over the web. JWTs are digitally signed, which ensures that the information hasn't been altered, making them trustworthy.

You can sign JWTs using a secret key (HMAC) or a public/private key pair (RSA or ECDSA). While JWTs can also be encrypted, our focus is on signed tokens. Signed tokens verify the integrity of the information they contain, while encrypted tokens keep that information private.

JSON Web Token (JWT) ek open standard hai jo RFC 7519 dwara define kiya gaya hai. Iska istemal client aur server ke beech secure information exchange ke liye hota hai. Yeh ek JSON object ke roop mein represent kiya jata hai, jo compact aur web par transfer karne mein asaan hai. JWTs digitally signed hote hain, jo ensure karte hain ki information ko badla nahi gaya hai, isliye yeh trustworthy hote hain.


# What is RFC 7519?

RFC 7519 khas taur par JSON Web Token (JWT) standard ko define karta hai. Is document mein bataya gaya hai ki JWTs kaise secure information ko parties ke beech transmit karte hain ek compact aur self-contained tareeke se. Yeh JWT ka structure teen parts—header, payload, aur signature—mein hota hai, jise Base64 URL format mein encode kiya jata hai. RFC 7519 claims ke types ko bhi samjhata hai, jo payload mein shamil hote hain, jaise registered claims. Yeh document JWTs ko sign karne aur verify karne ki techniques ko bhi explain karta hai, jaise HMAC aur RSA. Ismein JWTs ke use cases, jaise authentication aur authorization, aur security best practices ka bhi zikr hai, jaise signature validation aur token expiry management.


### Example: Abhishek's Use Case



Let’s take the example of Abhishek, a user who wants to log in to an online shopping website.

1. **Login Process:**




   - When Abhishek logs in with his credentials (username and password), the server verifies his information.

   - Jab Abhishek apne credentials (username aur password) ke saath login karta hai, server uski information ko verify karta hai.

   - If everything is correct, the server generates a JWT that contains Abhishek's user ID and roles (like "customer") in the payload.

   - Agar sab kuch sahi hota hai, server ek JWT generate karta hai jo Abhishek ke user ID aur roles (jaise "customer") ko payload mein rakhta hai.


2. **Token Generation:**

   - The server signs the JWT and returns it to Abhishek.

  - Server JWT ko sign karta hai aur is token ko Abhishek ko return karta hai.


3. **Subsequent Requests:**


   - Server is token ko verify karta hai. Agar token valid hai, to server Abhishek ki request process karta hai aur access deta hai.

- Abhishek jab bhi koi secure request bhejta hai (jaise shopping cart dekhna ya payment karna), wo is JWT ko request ke sath attach karta hai.

   - Whenever Abhishek makes a secure request (like viewing his shopping cart or making a payment), he attaches this JWT to the request.




   - The server verifies the token, and if it is valid, processes Abhishek's request and grants access.

### Benefits

- **Security:** 

- JWTs are digitally signed, so no unauthorized person can modify them.

-  JWTs digitally signed hote hain, isliye koi bhi unauthorized person inhe modify nahi kar sakta.




- **Scalability:** 

- JWTs can be easily shared, which is beneficial in distributed systems.


- JWTs ko easily share kiya ja sakta hai, jo distributed systems mein kaam aata hai.

- **Compact Format:** 

- Being in JSON format makes them easy to transfer over the web.

- JSON format mein hone ki wajah se, yeh easily web par transfer kiya ja sakta hai.


## When to Use JSON Web Tokens

**Common Use Cases:**

1. Authorization:

- JWTs ka primary use user authentication ke liye hota hai. Jab users login karte hain, unhe ek JWT diya jata hai jisse wo protected routes aur resources access kar sakte hain. Yeh method Single Sign-On (SSO) applications ke liye zaroori hai.


- After logging in, users receive a JWT that they can use to access protected resources, like user profiles or dashboards. This is especially useful in Single Sign-On (SSO) applications.


2. Information Exchange:

 JWTs can securely transmit information between parties. For example, a server can send user details to a client in a way that ensures the data can’t be altered.


JWTs securely information ko parties ke beech transmit karte hain. Kyunki inhe sign kiya ja sakta hai, isliye senders ko verify kiya ja sakta hai aur claims ko badla nahi ja sakta.


## Structure of a JSON Web Token

- JWT teen parts mein hota hai jo dots (.) se alag kiye gaye hote hain:

    1. `Header` :- Contains information about the token type and signing algorithm.

    2. `Payload` ;- Contains claims about the user or entity. This can include standard claims like who issued the token and when it expires.

    3. `Signature` :- Created by combining the encoded header, encoded payload, and a secret key to ensure the token's integrity.


**Example JWT Format:**

`xxxxx.yyyyy.zzzzz`


- A complete JWT might look something like this:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwibWFya2V0IjpmYWxzZX0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`


## Breaking Down the Components

**Header**

The header typically includes two parts:

- Token Type: Always "JWT"

- Signing Algorithm: For example, HMAC SHA256 or RSA.

````json

{
  "alg": "HS256",
  "typ": "JWT"
}
````




**Payload**

Payload entity (usually user) ke baare mein claims aur additional data rakhta hai. Claims teen types ke hote hain:

The payload contains claims about the entity (usually the user) and additional data. There are three types of claims:


1. **Registered Claims:** Predefined claims like iss (issuer), exp (expiration), sub (subject), aud (audience).

2. **Public Claims:** Custom claims defined to avoid collisions, preferably registered with IANA.


3. **Private Claims:** Custom claims agreed upon by parties sharing the token.



````json

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}


````

<!--  -->


**Signature**

Signature banane ke liye, aap encoded header, encoded payload, aur ek secret key ko combine karte hain, phir specified algorithm ka istemal karke sign karte hain.

To create the signature, you combine the encoded header, encoded payload, and a secret key, then sign it using the specified algorithm.




````plaintext

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)


````

## How JSON Web Tokens Work


When a user successfully logs in with their credentials, a JSON Web Token (JWT) is returned. Since tokens act like credentials, it's important to handle them carefully to avoid security issues. Generally, you shouldn't keep tokens longer than necessary.

You should also avoid storing sensitive session data in browser storage because it lacks security.

Whenever a user wants to access a protected route or resource, the client (like a web browser) should send the JWT in the Authorization header, following this format:


Jab user apne credentials se successfully login karta hai, to ek JSON Web Token (JWT) diya jata hai. Kyunki tokens credentials ki tarah kaam karte hain, inhe sambhalne mein bahut dhyan dena zaroori hai taaki security issues na ho. Aam tor par, tokens ko zaroorat se zyada samay tak nahi rakhna chahiye.

Aapko sensitive session data ko browser storage mein nahi rakhna chahiye kyunki wahan security ka kami hoti hai.

Jab bhi user kisi protected route ya resource ko access karna chahta hai, to client (jaise web browser) JWT ko Authorization header mein bhejta hai, is format mein:


````makefile
Authorization: Bearer <token>
````


Yeh ek stateless authorization method ho sakta hai. Server Authorization header mein valid JWT check karta hai, aur agar yeh wahan hai, to user protected resources access kar sakta hai. Agar JWT mein zaroori information hai, to server kuch tasks ke liye database se query karne ki zaroorat nahi pad sakti, lekin yeh hamesha nahi hota.

Yeh dhyan rakhein ki agar aap JWTs ko HTTP headers ke through bhej rahe hain, to inhe chhota rakhne ki koshish karein. Kuch servers 8 KB se zyada headers nahi lete. Agar aap JWT mein bahut zyada information daal rahe hain, jaise user ke saare permissions, to aapko alternatives jaise Auth0 Fine-Grained Authorization par vichar karna padega.

JWT ko Authorization header mein bhejne se CORS issues nahi aate, kyunki yeh cookies ka istemal nahi karte.


This can be a stateless authorization method. The server checks for a valid JWT in the Authorization header, and if it's there, the user can access the protected resources. If the JWT has all the necessary information, the server might not need to query the database for certain tasks, although this isn't always the case.

Keep in mind that if you're sending JWTs through HTTP headers, you should try to keep them small. Some servers don't accept headers larger than 8 KB. If you're embedding too much information in the JWT, like all of a user's permissions, you might need to consider alternatives like Auth0 Fine-Grained Authorization.

Sending the JWT in the Authorization header avoids CORS issues, as it doesn’t use cookies.


