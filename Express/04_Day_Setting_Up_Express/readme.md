

<!-- TOC -->

- [Creating Your First Backend with Node.js: Step-by-Step Guide](#creating-your-first-backend-with-nodejs-step-by-step-guide)
    - [Step 1: Setting Up the Project](#step-1-setting-up-the-project)
    - [Step 2: Initialize Your Project:](#step-2-initialize-your-project)
    - [Step 3: Setup entry point:](#step-3-setup-entry-point)
    - [Step 4: Install Dependencies:](#step-4-install-dependencies)
    - [Step 5: Project Structure:](#step-5-project-structure)
        - [Two Express Project Structure](#two-express-project-structure)
            - [Structure One](#structure-one)
            - [Structure Two](#structure-two)

<!-- /TOC -->

## Creating Your First Backend with Node.js: Step-by-Step Guide



### Step 1: Setting Up the Project
Assuming you’ve already installed `Node.js`, create a directory to hold your application, and make that your working directory.

- Express 4.x requires Node.js 0.10 or higher.
- Express 5.x requires Node.js 18 or higher.

```bash
$ mkdir my-node-project
$ cd my-node-project

```

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*eez4CtAG9Ny9u6A9ZtUk8A.png">


<b> This will create a new directory called “my-node-project” and navigate you into it. </b> 


### Step 2: Initialize Your Project:

-  Inside your project directory, initialize a Node.js project by running the following command:

```bash
$ npm init
```

- This command will guide you through creating a package.json file. This file contains project metadata and dependencies.

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*6XzYcsk6k8-vDfEvvZrMcw.png">



### Step 3: Setup entry point:

```
entry point: (index.js)
```

- The entry point of a package is typically defined in the package.json file of that package. The entry point is the main JavaScript file that will be loaded when the package is imported or required into another Node.js application.

- Enter app.js, or whatever you want the name of the `main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

### Step 4: Install Dependencies:

- Now, install Express in the my-node-project directory and save it in the dependencies list.

- Dependencies in a project refer to external libraries, modules, or packages that are required for the project to function properly. In Node.js projects managed with npm (Node Package Manager) or Yarn, dependencies are listed in a package.json file.

```bash
$ npm install express
```

- To install Express temporarily and not add it to the dependencies list:

```bash
$ npm install express --no-save
```

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*EiCJ0OHs0O8HK4cxBpjSLg.png">

### Step 5: Project Structure: 

 Organize your project files and folders.` A common structure includes:`

`server.js:` This file serves as the entry point for your Node.js application.

`routes/:` Store route files here.

`controllers/:` Keep your route controllers in this folder.

`models/:` If your project involves a database, store database models here.

#### Two Express Project Structure

##### Structure One

<img src="https://miro.medium.com/v2/resize:fit:478/format:webp/1*Fjhb6xgiL4Jkp-HpIHYeNg.png">

- You can organize your project into subdirectories like:
controllers/: Store controller files that contain business logic and handle HTTP requests and responses.

1. models/: Keep database models here if your project involves a database. These models define how data is structured in your application.


2. middleware/: Place middleware functions, which are functions that can process requests before they reach route handlers.


3. routes/: Define route files to separate different API endpoints or web routes. This keeps your code modular and easy to maintain.


4. node_modules/: This folder is created when you install dependencies using npm. It contains all the packages and modules required for your project. You typically don't need to modify anything in this folder.


5. .git/ (if using Git): If you're using version control with Git, this folder stores Git's configuration and repository data. It helps you track changes and collaborate with others.


6. .env (Optional): Consider including a .env file to manage environment variables such as API keys and sensitive information. This file should be kept out of version control for security reasons.


7. package.json and package-lock.json: These files contain project metadata and dependencies. package.json is typically generated during the initialization of your project, and package-lock.json locks down the versions of your dependencies.


8. server.js (or app.js): This file serves as the entry point for your Node.js and Express application. It sets up the server and defines the server logic.


9. Static Assets (Optional): If your application serves static files like CSS, JavaScript, or images, you can create a directory for them (e.g., public/ or static/) to keep them separate from your application logic.

10. config/: Stores configuration files for database connections, environment variables, etc.

##### Structure Two
<img src="https://blog.logrocket.com/wp-content/uploads/2022/01/expressjs-project-structure.png">