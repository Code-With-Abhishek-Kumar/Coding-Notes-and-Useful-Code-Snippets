## npm (Node Package Manager)


### What is npm, and why is it used?
**English:**  
npm (Node Package Manager) is a tool that helps developers manage and install packages (libraries) for their Node.js projects. It makes it easy to add new features without writing everything from scratch.

**Hinglish:**  
npm (Node Package Manager) ek tool hai jo developers ko unke Node.js projects ke liye packages (libraries) manage aur install karne mein madad karta hai. Ye naye features add karna asaan banata hai bina sab kuch scratch se likhe.


## Key Features of npm
1. **Package Installation:**  
   You can easily install third-party libraries and tools with simple commands. npm connects to its vast repository of packages to fetch the necessary code.

   **Hinglish:**  
   Aap simple commands se aasani se third-party libraries aur tools install kar sakte hain. npm apne vast repository se zaroori code ko fetch karta hai.

2. **Version Control:**  
   npm allows you to manage the versions of your packages, ensuring compatibility and stability in your applications.

   **Hinglish:**  
   npm aapko apne packages ke versions manage karne ki suvidha deta hai, jo aapki applications mein compatibility aur stability ko ensure karta hai.

3. **Scripts:**  
   You can define scripts in your `package.json` file to automate tasks like testing, building, and starting your application.

   **Hinglish:**  
   Aap apne `package.json` file mein scripts define kar sakte hain taaki tasks jaise testing, building, aur application ko start karne ko automate kiya ja sake.

4. **Dependency Management:**  
   npm automatically installs the packages that your project depends on and keeps track of them.

   **Hinglish:**  
   npm automatically un packages ko install karta hai jinpar aapka project dependent hai aur unka track rakhta hai.

---


### Using npm Commands


- Here are some common npm commands:

**1. Initialize a New Project:**

To start  a new Node.js project, use:

```bash
$ npm init

```

Ye command aapko package.json file banane mein guide karega.

This command will guide you through creating a package.json file interactively.

**2. Install a Package:**


```bash
$ npm install <package-name>

```

- This command installs the package and updates your package.json file automatically.

- Ye command package ko install karta hai aur aapki package.json file ko automatically update karta hai.


**3. Install a Package Globally:**

```bash

$ npm install -g <package-name>

```

- This installs a package globally, making it accessible from anywhere on your system.

- Ye package ko globally install karta hai, taaki ye aapke system par kahin se bhi accessible ho sake.



**4. Update a Package:**

To update a specific package to its latest version, run:

```bash
$ npm update <package-name>


```


- Ye command package ko update karta hai.


<!-- Uninstall a Package: -->

**5. Uninstall a Package:**

- If you need to remove a package, use:

- Agar aapko kisi package ko remove karna hai

```bash
$ npm uninstall <package-name>

```


<!-- List Installed Packages: -->


**5. List Installed Packages:**

- To see what packages are currently installed in your project, run:

- Aapke project mein abhi installed packages dekhne ke liye

```bash
$ npm list --depth=0


```


## The `package.json` File
The `package.json` file is a crucial part of any Node.js project. It serves multiple purposes:

### Key Components of `package.json`
1. **Basic Information:**
   - **name:** The name of your project.
   - **version:** The current version of your project, following semantic versioning (e.g., `1.0.0`).
   - **description:** A brief explanation of what your project does.

   **Hinglish:**  
   - **name:** Aapke project ka naam.  
   - **version:** Aapke project ki current version, jo semantic versioning ko follow karti hai (e.g., `1.0.0`).  
   - **description:** Aapke project ke kaam ka chhota sa explanation.

2. **Scripts:**
   This section allows you to define custom commands that can be run using npm. For example:

   Ye section aapko aise commands define karne ki suvidha deta hai jo npm ke zariye run kiye ja sakte hain. Jaise:

   ```json
   "scripts": {
       "start": "node app.js",
       "test": "jest"
   }

   ```


3. **Dependencies:**

- This section lists all the packages that your project needs to run. 

- Ye  un saare packages ki list rakhta hai jo aapke project ko chalane ke liye chahiye hote hain. Jaise:



```json
"dependencies": {
    "express": "^4.17.1"
}

```

<!--  -->


3. **devDependencies:**

- Lists the packages that your project needs to run. For example

- Ye dependencies ki tarah hai, lekin ye section sirf un packages ki list rakhta hai jo sirf development ke dauraan chahiye hote hain, jaise testing tools ya build systems



```json
"dependencies": {
    "express": "^4.17.1"
}

```

## Example of a package.json File

```json

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "test": "jest"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.10.9"
  },
  "devDependencies": {
    "jest": "^26.6.0"
  }
}


```








### Versioning Symbols in `package.json`
In `package.json`, you can use specific symbols to define how npm should handle version updates. Here are the most common ones:

1. **Exact Version (`1.0.0`)**:  
   This specifies an exact version of the package to install. Using this approach guarantees that no unexpected changes will occur, as only that specific version will be used.

   **Hinglish:**  
   Ye package ka exact version install karne ke liye specify karta hai. Is approach ka use karke aap ensure karte hain ki koi unexpected changes nahi honge, kyunki sirf wahi specific version use hoga.

2. **Caret (`^`)**:  
   The caret symbol allows updates to the latest minor version. For example, `^1.0.0` means any version from `1.0.0` up to (but not including) `2.0.0` can be installed. This is useful for allowing new features and improvements without breaking changes.

   **Hinglish:**  
   Caret symbol latest minor version tak updates ki permission deta hai. Jaise, `^1.0.0` ka matlab hai ki `1.0.0` se lekar `2.0.0` tak koi bhi version install kiya ja sakta hai. Ye naye features aur improvements ko allow karta hai bina breaking changes ke.

3. **Tilde (`~`)**:  
   The tilde symbol allows updates for the last digit (patch updates). For example, `~1.0.0` permits updates to any version from `1.0.0` to (but not including) `1.1.0`. This ensures that only minor bug fixes are applied.

   **Hinglish:**  
   Tilde symbol last digit (patch updates) ke liye updates ki permission deta hai. Jaise, `~1.0.0` aise versions ko allow karta hai jo `1.0.0` se lekar `1.1.0` tak ho. Ye ensure karta hai ki sirf minor bug fixes apply hon.

4. **Asterisk (`*`)**:  
   The asterisk symbol allows any version to be installed. This is the least restrictive option, but it may lead to unexpected issues if newer versions introduce breaking changes.

   **Hinglish:**  
   Asterisk symbol kisi bhi version ko install karne ki permission deta hai. Ye sabse kam restrictive option hai, lekin agar naye versions breaking changes laaye to unexpected issues ho sakte hain.

### Example of Version Specification in `package.json`
Here’s how you might see version specifications in a `package.json` file:
```json
{
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "~5.10.0",
    "lodash": "*"
  }
}

```

**Is example mein:**

- `express` ko koi bhi version >=4.17.1 <5.0.0 tak update kiya ja sakta hai.

- `mongoose` sirf patch versions >=5.10.0 <5.11.0 tak hi update hoga.

- `lodash` koi bhi version ho sakta hai.





   <!--  -->

### What is `package.json`, and what information does it contain?
**English:**  
`package.json` is a file that contains important information about your project. It includes the project name, version, description, and a list of packages (dependencies) your project needs to work.

**Hinglish:**  
`package.json` ek file hai jo aapke project ke baare mein important information rakhti hai. Isme project ka naam, version, description, aur woh packages (dependencies) ki list hoti hai jo aapke project ko kaam karne ke liye chahiye hoti hai.

---

### What is the difference between dependencies and devDependencies in `package.json`?
**English:**  
Dependencies are packages that your application needs to run in production, while devDependencies are packages that are only needed during development (like testing tools).

**Hinglish:**  
Dependencies woh packages hote hain jo aapki application ko production mein chalane ke liye chahiye hote hain, jabki devDependencies woh packages hote hain jo sirf development ke dauraan (jaise testing tools) chahiye hote hain.

---
