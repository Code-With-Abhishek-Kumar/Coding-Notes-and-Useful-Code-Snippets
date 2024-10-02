## Import and Export 

1. Make 2 file Script1.js and Script2.js
2. Go to Script1.js and use module.exports to export function or and variable


#####  Script1.js
```JavaScript
var d = 12345;
module.exports = d;

```


```JavaScript
function add(a,b){
    return a+b ;
}   

module.export={
    add;
}

```



3. Go to Script2.js and use `require()` to import any function or variable in javaScript
#####  Script2.js
```JavaScript
var fileImport = require('./Script1.js');
console.log(fileImport) // Output 12345


```