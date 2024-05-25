# Express application generator


- Express Generator ek command-line tool hai jo aapko jaldi se ek Express.js application ka scaffold bana kar deta hai, ek pehle se tay kiye gaye directory structure aur boilerplate code ke saath. Ye tool aapko project structure ko manually set up karne se bachata hai aur samay bachata hai.

- Express Generator ek set ke predefined templates provide karta hai jo alag alag prakar ke Express applications ko generate karne mein madad karta hai, jaise basic web applications, view engines ke saath applications (jaise EJS, Pug), aur REST API endpoints ke saath applications.

- Use the application generator tool, express-generator, to quickly create an application skeleton.

## Step1: install express-generator 


```bash
$ npm install -g express-generator
```

- The generator has a number of options, which you can view on the command line using the `--help` (or `-h`) command:

```bash

> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain CSS)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information


```


- For example, the following creates an Express app named myapp. The app will be created in a folder named myapp in the current working directory and the view engine will be set to ejs:

```bash

$ express --view=ejs myapp

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.ejs
   create : myapp/views/layout.ejs
   create : myapp/views/error.ejs
   create : myapp/bin
   create : myapp/bin/www


   change directory:
     > cd myapp

   install dependencies:
     > npm install

   run the app (Bash (Linux or macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   run the app (PowerShell (Windows))
     > $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start

```


Then install dependencies:


```bash
$ cd myapp
$ npm install
```

On MacOS or Linux, run the app with this command:

```bash
$ DEBUG=myapp:* npm start

```

On Windows Command Prompt, use this command:

```bash
> set DEBUG=myapp:* & npm start
```

On Windows PowerShell, use this command:

```bash
PS> $env:DEBUG='myapp:*'; npm start
```

Then, load http://localhost:3000/ in your browser to access the app.

- The generated app has the following directory structure:

```arduino
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files

```