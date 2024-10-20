# JWT Usage

To create a JWT, you can use the following function:

```javascript

jwt.sign(payload, secretOrPrivateKey, [options, callback])

```

### Asynchronous

- If you provide a callback, it will be called with either an error or the JWT.

- Agar aap callback dete hain, to yeh error ya JWT ke saath call hoga.

### Synchronous:

- Agar callback nahi diya, to JWT string ke roop mein return hota hai.

- If no callback is provided, it returns the JWT as a string.

### Payload can be:


- An object (e.g., { user: 'John' })

- A buffer

- A string that represents valid JSON.

`Example: Synchronous Signing`

````js

const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

````

#### `Example: Asynchronous Signing`

````js
jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, (err, token) => {
  console.log(token);
});


````

`Token Expiration

````js
jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), data: 'foobar' }, 'secret');


````

or 

````js
jwt.sign({ data: 'foobar' }, 'secret', { expiresIn: '1h' });


````


## Verifying a JWT

- To verify a JWT, use the `jwt.verify` method:

````js

jwt.verify(token, secretOrPublicKey, [options, callback])

````

- `Token:` The JWT string.
- `secretOrPublicKey:` String, buffer, or KeyObject.

- `Options:` Similar to the signing options, including algorithms, audience, issuer, etc.

#### `Example: Synchronous Verification`


````js

const decoded = jwt.verify(token, 'shhhhh');
console.log(decoded.foo); // bar


````


#### `Example: Asynchronous Verification`



````js
jwt.verify(token, 'shhhhh', (err, decoded) => {
  if (err) {
    console.error(err);
  } else {
    console.log(decoded.foo); // bar
  }
});



````


# Supported Algorithms

`jsonwebtoken` supports various algorithms for signing and verifying tokens. Below is a table summarizing the available algorithms:

| Algorithm | Description                                                    |
|-----------|----------------------------------------------------------------|
| HS256     | HMAC using SHA-256 hash algorithm                             |
| RS256     | RSASSA-PKCS1-v1_5 using SHA-256 hash algorithm               |
| ES256     | ECDSA using P-256 curve and SHA-256 hash algorithm           |
| PS256     | RSASSA-PSS using SHA-256 hash algorithm (Node >= 6.12.0)     |
| none      | No digital signature or MAC value included                    |



### `Example: Complete Flow`

`Signing a Token`

```js
const jwt = require('jsonwebtoken');
const privateKey = fs.readFileSync('private.key');
const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });


```

`Verifying a Token`


````js

const publicKey = fs.readFileSync('public.key');
jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
  if (err) {
    console.error(err);
  } else {
    console.log(decoded); // { foo: 'bar', ... }
  }
});

````