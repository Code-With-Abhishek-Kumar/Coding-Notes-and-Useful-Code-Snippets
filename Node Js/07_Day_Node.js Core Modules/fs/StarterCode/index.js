console.log("Hello World")
console.log('Print file name with src', __filename)
console.log('Print file dir name with src', __dirname)


//  Global vs non Golbal


const fs = require('fs')


fs.writeFileSync('hello.txt', "Code with Abhishek Gupta")
console.log("File Created if file already created then it change the content of file")



// Creates a new file or overwrites an existing file with the specified content
fs.writeFile(filePath, 'Hello, this is a sample text file!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created and written successfully.');
});