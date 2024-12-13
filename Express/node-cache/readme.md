#  Everything About Node.js Caching


- In Node.js applications, caching is a technique used to temporarily store data that can be retrieved quickly when needed, reducing the time spent on repeated expensive operations like database queries, API calls, or complex computations. By caching the results of these operations, the application can quickly serve data from the cache rather than having to repeat the operation each time it is requested. This results in faster response times, reduced load on the backend systems, and better overall performance.

- Node.js applications mein caching ek technique hai jisme hum data ko temporary store karte hain taaki jab wo dobara chahiye ho, toh jaldi se access ho sake. Caching se hum expensive operations jaise database queries, API calls, ya complex calculations ko repeat hone se rok sakte hain. Jab data cache mein store hota hai, toh baar-baar usi data ko nikalne ke liye backend systems ko load nahi karna padta.



- Caching can be done in-memory, using file storage, or with an external caching service like Redis or Memcached.


- Caching ka kaam hota hai data ko ek quick-access storage mein store karna (jaise RAM), jisse baar-baar data ko retrieve karna fast ho jaata hai. Isse response times improve hote hain, aur backend systems pe load kam padta hai.



### What is Caching?

- Caching is the process of temporarily storing data in a fast-access storage system, such as RAM (memory). The goal of caching is to reduce the time it takes to access frequently used data, instead of always retrieving it from a slower source like a database.


- When an application needs the same data again, it checks the cache. If the data is found, it is served from the cache (a cache hit). If the data is not found, it’s retrieved from the original source (e.g., a database) and stored in the cache for future use (a cache miss)..




- Node.js applications mein caching ek technique hai jisme hum data ko temporary store karte hain taaki jab wo dobara chahiye ho, toh jaldi se access ho sake. Caching se hum expensive operations jaise database queries, API calls, ya complex calculations ko repeat hone se rok sakte hain. Jab data cache mein store hota hai, toh baar-baar usi data ko nikalne ke liye backend systems ko load nahi karna padta.

- Caching ka kaam hota hai data ko ek quick-access storage mein store karna (jaise RAM), jisse baar-baar data ko retrieve karna fast ho jaata hai. Isse response times improve hote hain, aur backend systems pe load kam padta hai.




### Why Use Caching in Node.js?

1. Improved Performance:

- Caching significantly reduces response times. For example, instead of querying a database every time a piece of data is needed, the data is stored in memory for quick access.

- Jab hum caching use karte hain, toh response time bahut fast ho jaata hai. Jaise agar hume database se baar-baar data chahiye, toh hum us data ko cache mein store kar sakte hain, jisse next time data directly cache se mil jaaye.


2. Reduced Database Load:

- Repeated requests for the same data can overwhelm a database with traffic. By caching the data, you reduce the number of queries, allowing the database to handle other operations more efficiently.

- Agar ek hi data baar-baar database se fetch kiya jaa raha hai, toh database pe heavy load padta hai. Caching se hum data ko store karte hain aur database pe load kam karte hain.

3. Faster Response Times:


- Data retrieval from memory (cache) is much faster than from a database or an external API. Caching minimizes latency, leading to faster responses to user requests.

- Jab data memory mein stored hota hai (cache), toh usse access karna bahut fast hota hai. Isse response time improve hota hai aur user ko jaldi data milta hai.


4. Scalability:


- As an application grows and the number of requests increases, caching helps ensure that the system can scale without significant performance degradation by reducing unnecessary operations like database calls.

- Jaise-jaise application grow karta hai, aur requests zyada aati hain, caching se system efficiently scale kar sakta hai bina performance slow kiye. Agar hum baar-baar same data fetch kar rahe hain, toh caching se hum isko avoid kar sakte hain.

5. Cost-Effective:


- By caching expensive operations (such as frequent database queries), caching helps reduce server costs and avoid overload on backend systems, saving resources.


- Caching se expensive operations jaise database queries ko avoid kar sakte hain, jo server cost ko reduce karne mein madad karta hai. Isse hum resources save karte hain.


## How Does Caching Work in Node.js?




- The basic idea behind caching is to temporarily store the results of expensive operations (those that take a lot of time or resources). When the same operation is requested again, the system first checks the cache.

- If the data is already in the cache (a cache hit), it is served directly from there.


- If the data is not found in the cache (a cache miss), the system retrieves it from the original source (like a database or an external API), stores it in the cache, and then serves the result.


- Caching ka basic concept ye hai ki jab koi expensive operation (jaise database query) hota hai, toh uska result temporary store kar liya jaata hai taaki next time jab wo data chahiye ho, toh direct cache se mil jaye.


**Example:**


1. Cache Hit

- When a client requests a resource, and it is already in the cache, the response is served immediately from the cache.

- Jab requested data cache mein hota hai, toh hum directly cache se data le lete hain. Isse response time fast hota hai.

2. Cache Miss

- When the data is not found in the cache, the application queries the database or fetches it from an external API, stores the result in the cache, and then serves the data.

- Jab data cache mein nahi hota, toh hum database ya API se data lete hain, usko cache mein store karte hain, aur phir serve karte hain.

## Types of Caching in Node.js

Caching ek technique hai jisme data temporarily store kiya jata hai taaki future mein us data ko jaldi access kiya ja sake. Node.js applications mein, alag-alag types of caching use kiye jaate hain jo application ki needs ke hisaab se choose kiye jaate hain. Yahan pe hum Node.js mein commonly use hone wale 4 types of caching ko detail mein samjhenge.

### 1. **In-Memory Caching**:

- **Description**: In-memory caching sabse simple aur common caching type hai. Ismein data application ke memory (RAM) mein store hota hai, jo bahut fast access hota hai.

- **How it works**: Jab koi request repeat hoti hai, to data ko server ke RAM se directly fetch kiya jata hai. Yeh method bahut fast hoti hai, kyunki memory access database ya API call se zyada tezi se hoti hai.

- **Example**: Libraries jaise `node-cache`, `memory-cache`, ya Redis ko in-memory caching ke liye use kiya jaata hai.

- **Pros**:
  - **Bahut fast**: RAM se data ko access karna bahut fast hota hai.
  - **Low latency**: Response times bahut kam ho jaate hain, jo user experience ko improve karta hai.

- **Cons**:
  - **Limited scalability**: Agar application ke multiple instances hain, to in-memory caching sirf ek instance ke liye kaam karta hai, jab tak distributed cache (jaise Redis) use na ho.
  - **Volatile**: Agar server crash ya restart hota hai, to memory mein stored data chala jaata hai.

- **When to use**:
  - Jab aapko simple aur fast caching ki zarurat ho.
  - Small to medium-sized applications ke liye jahan performance important ho par scalability ki zarurat na ho.

---

### 2. **Distributed Caching**:

- **Description**: Distributed caching mein data multiple servers ya application instances ke across cached hota hai, taaki cached data sabhi instances mein shared ho sake. Isse application scalable aur fault-tolerant ban jaati hai.

- **How it works**: Distributed caching systems jaise Redis ya Memcached cached data ko application server se alag store karte hain, typically ek central memory-based store mein. Yeh data multiple machines ya instances ke across share hota hai.

- **Example**: Redis aur Memcached ko distributed caching ke liye use kiya jata hai. Yeh systems data ko memory mein store karte hain, jo multiple servers se access ho sakta hai.

- **Pros**:
  - **Scalable**: Yeh caching system easily large traffic handle karne ke liye scale ho sakta hai.
  - **Fault tolerance**: Agar koi instance ya server fail ho jata hai, tab bhi cached data accessible rahega.
  - **Data sharing**: Data ko multiple instances ke across share kiya ja sakta hai.

- **Cons**:
  - **Complex setup**: Redis ya Memcached ka setup aur management thoda complex ho sakta hai.
  - **Network latency**: Memory access ke comparison mein distributed cache se data retrieve karna thoda slow ho sakta hai, depending on network speed.

- **When to use**:
  - Jab aapko large-scale applications build karne ho, jisme multiple servers ho aur data ko share karna ho.
  - Jab application ko bahut zyada traffic handle karna ho.

---

### 3. **File-Based Caching**:

- **Description**: File-based caching mein data ko memory ke bajaye disk par store kiya jata hai. Yeh caching in-memory caching ke comparison mein thodi less efficient hoti hai, lekin large datasets ya static content ke liye useful hoti hai.

- **How it works**: Data server ke disk par store hota hai aur jab data ki zarurat hoti hai, to woh disk se retrieve kiya jata hai. Yeh static content jaise images, HTML files, ya large JSON files ke liye suitable hota hai.

- **Example**: Images, videos, ya static HTML content ko cache karna taaki bar-bar us content ko regenerate na karna pade.

- **Pros**:
  - **Useful for large datasets**: Badi files ya data ko store karne ke liye helpful, jo memory mein store nahi kar sakte.
  - **Persistent**: Data disk par stored hota hai, jo server restart hone ke baad bhi available rehta hai.

- **Cons**:
  - **Slower than in-memory caching**: Disk se data fetch karna memory se karne se slow hota hai.
  - **Not ideal for frequently accessed data**: File-based caching un data ke liye best hai jo frequently access na ho.

- **When to use**:
  - Jab aapko large datasets cache karne ho ya jab data static ho, jaise images, videos, ya HTML files.
  - Jab aapko frequently changing data ko cache karne ki zarurat na ho.

---

### 4. **Persistent Caching**:

- **Description**: Persistent caching mein cached data ko aise store kiya jata hai ki jab system restart ho ya crash ho, to data wapis se available ho sake. Yeh method data durability ko ensure karta hai.

- **How it works**: Redis jaise systems persistent caching ko support karte hain, jisme cached data ko periodically disk par save kiya jata hai. Agar system down ho jata hai, to cached data ko recover karna possible hota hai.

- **Example**: Redis offers features like snapshots aur append-only files, jo data ko disk par periodically save karte hain.

- **Pros**:
  - **Data recovery**: Agar system crash ho jata hai, to cached data recover ho sakta hai.
  - **Long-term caching**: Data ko long time tak store kiya ja sakta hai.

- **Cons**:
  - **Slower than in-memory caching**: Disk se data fetch karna thoda slow hota hai, RAM se fetch karne ke comparison mein.
  - **Requires more storage**: Persistent cache ko zyada disk space ki zarurat hoti hai.

- **When to use**:
  - Jab aapko data persistence aur recovery chahiye ho.
  - Large-scale applications ke liye, jahan aapko data ko long-term ke liye cache karna ho.

---





## Common Node.js Caching Libraries

Caching is an essential technique for optimizing the performance of Node.js applications. It helps store frequently accessed data temporarily, reducing the need for repetitive and expensive operations like querying a database or making API calls. In the Node.js ecosystem, there are several caching libraries that offer different features and functionalities to meet various caching needs. Below, we provide detailed descriptions of some of the most commonly used caching libraries.

## 1. **node-cache**
   - **Description**: `node-cache` is a lightweight, simple, and in-memory caching library designed for Node.js. It provides basic key-value caching functionality and is typically used in small to medium-sized applications.
   
   - **Features**:
     - **Key-Value Caching**: Allows you to store data in a simple key-value pair format, where you can easily set, get, and delete cached data.
     - **Expiration Time**: You can set an expiration time (TTL - Time To Live) for the cached data, meaning that after a certain period, the cached data will automatically be removed.
     - **TTL Support**: You can control how long data should remain in the cache before it is considered expired and needs to be refreshed.
     - **Simple API**: `node-cache` provides a very simple and easy-to-understand API for working with caches.

   **Use Cases**:
   - Ideal for applications with relatively low traffic or those that don't require distributed caching.
   - Suitable for small, single-instance applications where caching requirements are straightforward.

   **Hinglish Explanation**:
   `node-cache` ek simple in-memory caching library hai jo small to medium-sized applications ke liye suitable hai. Yeh basic key-value caching provide karta hai, jisme aap easily data store kar sakte hain, get kar sakte hain, aur delete kar sakte hain. Isme expiration time ka option bhi hota hai, jisse aap set kar sakte hain ki data kitni der tak cache mein rahega.

---

## 2. **Redis**
   - **Description**: Redis is a powerful, advanced in-memory data structure store that can be used as a cache. It is capable of handling a large amount of data and supports high-performance operations, making it ideal for large-scale applications and distributed systems.
   
   - **Features**:
     - **In-Memory Data Store**: Redis stores data in memory, making it very fast for read and write operations.
     - **Distributed Caching**: Redis can be used in a distributed environment, which means it can scale horizontally across multiple machines to handle high traffic.
     - **Data Persistence**: Unlike in-memory caches like `node-cache`, Redis can persist data to disk. This means even if the server is restarted, cached data can be restored from disk.
     - **Pub/Sub and Advanced Features**: Redis supports advanced features such as pub/sub messaging, transactions, and atomic operations, making it suitable for complex use cases.

   **Use Cases**:
   - **Large-scale applications**: Redis is often used in high-traffic applications where performance and scalability are critical.
   - **Distributed systems**: It is ideal for applications that run on multiple servers or instances, ensuring consistent access to cached data across all instances.
   - **Session Management**: Redis is frequently used to store session data for web applications due to its ability to persist and handle high access rates.

   **Hinglish Explanation**:
   Redis ek powerful in-memory data structure store hai, jo large-scale applications ke liye best hai. Yeh distributed environments mein bhi use ho sakta hai, aur data ko memory mein store karta hai, jisse fast read and write operations hoti hain. Redis ka ek khaas feature yeh hai ki yeh data ko disk pe save kar sakta hai, jisse system restart ke baad bhi data loss nahi hota. Redis ko complex use cases aur large-scale applications mein use kiya jata hai.

---

## 3. **Memcached**
   - **Description**: Memcached is a high-performance, distributed memory caching system designed for speed. It is a widely-used caching solution for storing large sets of data or frequently accessed data in memory. Like Redis, Memcached is often deployed in a distributed environment to support large-scale systems.
   
   - **Features**:
     - **High Performance**: Memcached is optimized for speed and can handle many cache operations per second. It is particularly suited for caching frequently accessed data.
     - **Distributed Caching**: It supports caching across multiple servers, allowing you to scale horizontally and handle large volumes of data.
     - **Simple Key-Value Store**: Memcached is a simple key-value store designed specifically for caching, which makes it very efficient for this purpose.
     - **No Data Persistence**: Unlike Redis, Memcached does not provide data persistence. If the system goes down, all cached data is lost.

   **Use Cases**:
   - **High Traffic Applications**: Memcached is often used for caching frequently accessed data such as database query results, session data, or user profiles.
   - **Distributed Systems**: Suitable for distributed applications that need fast, large-scale caching across multiple servers.

   **Hinglish Explanation**:
   Memcached ek high-performance caching system hai jo speed ke liye optimize kiya gaya hai. Yeh large data sets aur frequently accessed data ko memory mein cache karta hai aur distributed environment mein use hota hai. Memcached ek simple key-value store hai jo caching ke liye designed hai. Lekin yeh data persistence nahi provide karta, yani agar system down ho jaye toh cache ka data lost ho jata hai.

---

## 4. **Memory-cache**
   - **Description**: `memory-cache` is a lightweight, simple in-memory caching library for Node.js. It is similar to `node-cache` but offers a simpler and more minimalist API, making it very easy to use.
   
   - **Features**:
     - **Simple API**: Provides a very basic API for storing, retrieving, and deleting cached data.
     - **No Advanced Features**: Unlike Redis or Memcached, `memory-cache` does not offer advanced features like persistence or pub/sub. It is purely in-memory and is best suited for simple caching needs.
     - **Basic TTL**: Allows you to set a TTL (Time To Live) for cached data, but lacks the more advanced TTL management options that are available in Redis or Memcached.

   **Use Cases**:
   - **Small Applications**: Ideal for small projects or applications that don’t require distributed caching or advanced features.
   - **Simple Caching**: Best suited for scenarios where caching is required without any complex configuration or additional features.

   **Hinglish Explanation**:
   `memory-cache` ek simple aur lightweight caching library hai jo in-memory caching provide karti hai. Yeh `node-cache` ki tarah hi kaam karta hai, lekin iska API kaafi simple hota hai, jo use karna bahut aasan hota hai. Yeh advanced features jaise persistence ya pub/sub support nahi karta, aur basic TTL management offer karta hai.

---


**Basic Example Using node-cache**


````js
const NodeCache = require("node-cache");
const myCache = new NodeCache();

// Setting cache with a key and value
myCache.set("user123", { name: "John", age: 30 }, 10000); // Cache expires in 10 seconds

// Getting cache value by key
const user = myCache.get("user123");
if (user) {
    console.log("User found in cache:", user);
} else {
    console.log("User not found in cache.");
}

// Deleting a cache entry
myCache.del("user123");


````


### 1. set(key, value, ttl)

**Description:**


set() method ka use data ko cache mein store karne ke liye hota hai. Aap data ko ek specific key ke saath store kar sakte hain, aur optional TTL (Time-to-Live) specify kar sakte hain.


- The set() method is used to store data in the cache. You can store the data with a specific key, and optionally specify a TTL (Time-to-Live).


- gar TTL specify nahi kiya jata, toh data cache mein forever store hota hai.

- If no TTL is provided, the data will remain in the cache indefinitely.


**Parameters:**

- `key:` The unique identifier for the data.

- `value:` The data you want to store.

- `ttl (optional):` The time (in seconds) after which the data will expire in the cache. If no TTL is provided, the data will stay in the cache forever.


````js
const NodeCache = require("node-cache");
const cache = new NodeCache();

// Storing data with a TTL of 10 seconds
cache.set("username", "john_doe", 10);

// Data will remain in the cache indefinitely without TTL
cache.set("city", "New York");


````


### 2. get(key)

**Description:**


- The `get()` method is used to retrieve cached data.

- If the data exists in the cache, it returns the value (cache hit).

- If the data is not found in the cache, it returns `undefined` (cache miss).

**Parameters:**

- `key:` The key for the data you want to retrieve.


````js
const cachedData = cache.get("username");
console.log(cachedData);  // Output: "john_doe"
````

### 3. del(key)

**Description:**

- The del() method is used to remove a specific key from the cache.

- If the key exists, the data will be removed. If the key doesn't exist, nothing happens.

**Parameters:**

- `key:` The key for the data you want to remove.


````js
cache.del("username"); // Removes "username" from the cache
const deletedData = cache.get("username");
console.log(deletedData);  // Output: undefined

````

### 4. getStats()


**Description:**

- The getStats() method is used to get statistics about the cache, such as total keys, hits, misses, etc.


````js

const stats = cache.getStats();
console.log(stats);
// Output will show stats like:
{
  keys: 2, // Total number of keys in cache
  hits: 1, // Number of successful cache hits
  misses: 0, // Number of cache misses
  loadHits: 0, // Number of cache hits for loaded keys
  loadMisses: 0 // Number of cache misses for loaded keys
}

````

### 5. delMulti(keys)

**Description:**

- The delMulti() method is used to remove multiple keys from the cache at once.

- If a key doesn't exist in the cache, it will be skipped.

**Parameters:**


- `keys:` An array of keys that you want to remove from the cache.


````js

cache.set("name", "Alice");
cache.set("age", 25);
cache.set("city", "London");

cache.delMulti(["name", "age"]); // Removes "name" and "age" from the cache
console.log(cache.get("name"));  // Output: undefined
console.log(cache.get("city")); // Output: "London"

````


### 6. flushAll()


**Description:**

- The `flushAll()` method is used to completely clear the cache. It removes all the data stored in the cache.

- If a key doesn't exist in the cache, it will be skipped.

**Parameters:**


- `keys:` An array of keys that you want to remove from the cache.


````js
cache.set("name", "Alice");
cache.set("age", 25);
console.log(cache.get("name"));  // Output: "Alice"

cache.flushAll();  // Clears all cache
console.log(cache.get("name"));  // Output: undefined


````



### 7. keys()


**Description:**

- The keys() method is used to retrieve all the keys that are currently stored in the cache.


````js
cache.set("name", "Alice");
cache.set("age", 25);
const allKeys = cache.keys();
console.log(allKeys);  // Output: ["name", "age"]



````




### 8. setMulti(keysValues, ttl)


**Description:**

- The setMulti() method is used to store multiple key-value pairs in the cache at once.

- You can specify a TTL for all the data, which will apply to all the keys.


**Parameters:**



- `keysValues:` An object containing multiple key-value pairs.

- `ttl (optional):` A TTL for all the data (in seconds).



````js
const keyValuePairs = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

cache.setMulti(keyValuePairs, 10);  // Stores the data with a TTL of 10 seconds

````



### 9. replace(key, value, ttl)


**Description:**

- The replace() method is used to update the value of an existing key in the cache.

- If the key exists, its value will be updated. If the key doesn't exist, it returns false.


**Parameters:**



- key: The key of the data you want to update.

- value: The new value for the key.

- ttl (optional): The TTL for the data when updated.

````JS
cache.set("name", "John");
console.log(cache.get("name")); // Output: "John"

cache.replace("name", "Doe");
console.log(cache.get("name")); // Output: "Doe"


````

### 10. mget(keys)

**Description:**

- The mget() method is used to retrieve multiple keys from the cache at once.

- It returns an array containing the values corresponding to the provided keys.

**Parameters:**

- `keys:` An array of keys whose values you want to retrieve.


````js
cache.set("name", "John");
cache.set("age", 30);
const values = cache.mget(["name", "age"]);
console.log(values); // Output: ["John", 30]


````