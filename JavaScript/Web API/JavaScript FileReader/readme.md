# JavaScript FileReader Api


- When you upload a file through a web browser, such as by dragging and dropping a file or selecting it via an ` <input type="file">` , JavaScript can work with that file using a special object called a File object

## What is the File Object?




- The File object is a representation of the file you select. It gives you access to information about the file, like its name, type, size, and more. This object allows JavaScript to interact with the file in the browser.



```html
  <input type="file" id="fileInput">

```
```js

// Select the file input element by its ID, 
const fileInput = document.getElementById('fileInput');

// Add an event listener for the 'change' event. This event is triggered when the user selects a file.
fileInput.addEventListener('change', function(event) {
  // Get the file selected by the user from the input element.
  // The 'files' property of the input element holds the list of files selected.
  // Since only one file can be selected in this case, we take the first file (index 0).
  const file = event.target.files[0];

  // Check if a file was actually selected
  if (file) {
    // Log the File object to the console for debugging purposes.
    // The 'file' is an instance of the File object, which provides properties about the file.
    console.log('File Object:', file);
    
    // The File object contains important properties about the selected file:
    // 1. 'file.name' - The name of the file, including its extension (e.g., 'image.jpg').
    // 2. 'file.size' - The size of the file in bytes (e.g., 500000 for 500KB).
    // 3. 'file.type' - The MIME type of the file (e.g., 'image/jpeg', 'text/plain').
    // 4. 'file.lastModified' - The last modified timestamp (Unix timestamp in milliseconds).
    // 5. 'file.lastModifiedDate' - A Date object (deprecated but still supported) representing the last modified time.

    // Example of how we could log these specific properties individually:
    console.log('File Name:', file.name); // e.g., 'image.jpg'
    console.log('File Size:', file.size, 'bytes'); // e.g., 500000
    console.log('File Type:', file.type); // e.g., 'image/jpeg'
    console.log('Last Modified Timestamp:', file.lastModified); // e.g., 1602337200000
    console.log('Last Modified Date:', new Date(file.lastModified)); // Date object representation of last modification
    
  } else {
    // If no file was selected, log a message indicating this.
    console.log("No file selected.");
  }
});


```

# File Object in JavaScript

## Explanation of the File Object

In this code, the `File` object is represented by the variable `file`, which is assigned to the first file selected in the file input element. The `File` object provides useful information about the file the user selects in a web browser. This object allows JavaScript to access key metadata about the file, such as its name, size, type, and last modification date.

### Key Properties of the File Object

- **`file.name`**:
    - This is the name of the file, including its extension.
    - Example: If the user selects a file named `image.jpg`, `file.name` will be `'image.jpg'`.

- **`file.size`**:
    - This property provides the size of the file in bytes.
    - Example: A file of 500 KB will have a `file.size` of `500000` bytes.
    - This property is useful for validating file sizes before uploading, for example, checking if the file is too large.

- **`file.type`**:
    - The MIME type (also known as the content type) of the file.
    - Example: The MIME type for a JPEG image will be `'image/jpeg'`, and for a plain text file, it will be `'text/plain'`.
    - You can use this property to ensure that the file type matches the expected format.

- **`file.lastModified`**:
    - This property returns a timestamp (in milliseconds since the Unix epoch) of the last time the file was modified.
    - Example: This is a numeric value that can be used to determine when the file was last updated on the system.

- **`file.lastModifiedDate` (deprecated)**:
    - This was the older version of the `lastModified` property. It returned a `Date` object representing the last modified time.
    - Although still supported in some browsers, it has been deprecated in favor of `lastModified` and should be avoided in new code.

### Example Output

If the user selects a file named `image.jpg` with a size of `500000` bytes (500 KB) and a MIME type of `'image/jpeg'`, the following data might be logged to the console:






````yaml
File Object:  File { name: 'image.jpg', size: 500000, type: 'image/jpeg', lastModified: 1602337200000, lastModifiedDate: Wed Nov 15 2024 14:30:00 GMT+0000 (Coordinated Universal Time) }
File Name:  image.jpg
File Size:  500000 bytes
File Type:  image/jpeg
Last Modified Timestamp:  1602337200000
Last Modified Date:  Wed Nov 15 2024 14:30:00 GMT+0000 (Coordinated Universal Time)


````



## How Can We Read the File Content?



To actually read the contents of the file (like its text, image data, or other information), we use another tool called the FileReader.

The FileReader is a built-in object in JavaScript that allows you to read files asynchronously, which means it won't block other actions while it's working. It works well for reading files like images, text files, or even JSON files that users upload.

## Why Use FileReader?


- For example, imagine you want to let users upload an image on your website. Using FileReader, you can show them a preview of the image before they actually upload it. This way, users can confirm they’ve selected the right file.

## How to use `FileReader?`


- The FileReader API in JavaScript allows you to read files selected by users in a web application. It’s used for reading file contents asynchronously, so your app can continue running smoothly without blocking other operations. You can use FileReader to read various file types, such as text, images, and binary files.





## Steps for Using FileReader

#### 1. `Create a FileReader object:` 

 This object is responsible for reading files.

````js
  const reader = new FileReader();  // Create a FileReader object

````

#### 2. `Add event listeners:` 

 The FileReader object has several events that help you manage the file reading process:

`Like`

- `load:` This event triggers when the file has been successfully read.

- `error:` This event triggers if there is an error while reading the file.

- `progress:` This event triggers as the file is being read, allowing you to track the progress.



````js
// Event listener for when the file is successfully loaded
reader.onload = function(e) {
    console.log('File read successfully!');
    console.log('File content:', e.target.result); // e.target.result will have the file data
};

// Event listener for when an error occurs
reader.onerror = function(e) {
    console.error('Error reading file:', e.target.error);
};

// Event listener for tracking progress
reader.onprogress = function(e) {
    if (e.lengthComputable) {
        const percentage = (e.loaded / e.total) * 100;
        console.log(`Progress: ${percentage}%`);
    }
};

````

#### 3. `Read the File`:

To actually read the file, you need to use one of the following methods, depending on the type of file you're working with:

-  `readAsText(file)`: 

Reads the content of a file as text. For example, reading a .txt file.

````javascript
reader.readAsText(file);

````

- `readAsDataURL():` 

Reads a file as a data URL, which is used for images. This lets you show the image on the page without uploading it.

````javascript

reader.readAsDataURL(file);

````


- `readAsArrayBuffer():` 

Reads the file as an array buffer, which is useful for binary files like images or audio.


````javascript

reader.readAsArrayBuffer(file);


````


## Example

#### Example 1: Reading a Text File with FileReader

`Html`
````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FileReader Example</title>
</head>
<body>
  <h2>Select a Text File</h2>
  <input type="file" id="fileInput">
  <pre id="fileContent"></pre> <!-- Display the file content here -->
  
  <script src="script.js"></script>
</body>
</html>

 <script>
// Get the file input and content display elements
const fileInput = document.getElementById('fileInput');
const fileContent = document.getElementById('fileContent');

// Listen for file selection
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];  // Get the selected file

  if (file) {
    const reader = new FileReader();  // Create a FileReader object

    // Define the callback for when the file is successfully read
    reader.onload = function(e) {
      fileContent.textContent = e.target.result;  // Display the file content
    };

    // Handle errors while reading the file
    reader.onerror = function(e) {
      alert("Error reading file: " + e.target.error);
    };

    // Read the file as text
    reader.readAsText(file);
  } else {
    fileContent.textContent = "No file selected.";
  }
});


 </script>


````




#### Example 2: Reading an Image File with FileReader

`Html`
````html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Preview Example</title>
</head>
<body>
  <h2>Select an Image</h2>
  <input type="file" id="imageInput">
  <img id="imagePreview" alt="Image Preview" style="max-width: 100%; height: auto; margin-top: 20px;">
  

 <script>
// Get the file input and content display elements
const fileInput = document.getElementById('fileInput');
const fileContent = document.getElementById('fileContent');

// Listen for file selection
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];  // Get the selected file

  if (file) {
    const reader = new FileReader();  // Create a FileReader object

    // Define the callback for when the file is successfully read
    reader.onload = function(e) {
      fileContent.textContent = e.target.result;  // Display the file content
    };

    // Handle errors while reading the file
    reader.onerror = function(e) {
      alert("Error reading file: " + e.target.error);
    };

    // Read the file as text
    reader.readAsText(file);
  } else {
    fileContent.textContent = "No file selected.";
  }
});


 </script>


````

<!--  -->
#### Example 3: Reading an Image File with FileReader

`Html`
````html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Preview Example</title>
</head>
<body>
  <h2>Select an Image</h2>
  <input type="file" id="imageInput">
  <img id="imagePreview" alt="Image Preview" style="max-width: 100%; height: auto; margin-top: 20px;">
  

 <script>
/// Get the file input and image preview elements
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

// Listen for file selection
imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];  // Get the selected file

  if (file && file.type.startsWith('image/')) {  // Check if the file is an image
    const reader = new FileReader();  // Create a FileReader object

    // Define the callback for when the file is successfully read
    reader.onload = function(e) {
      imagePreview.src = e.target.result;  // Set the image source to the file data URL
    };

    // Read the file as a data URL (base64 encoded)
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file.");
  }
});


 </script>


````


## Handling Errors and Progress

#### Error Handling:

- If something goes wrong while reading the file (e.g., unsupported file type, file read error), you should handle it with an onerror event handler:

````javascript

reader.onerror = function(e) {
  alert("Error reading file: " + e.target.error);
};

````

#### Progress Event:

- If you want to track the progress of the file being read, especially for large files, you can use the progress event:

````javascript
reader.onprogress = function(e) {
  if (e.lengthComputable) {
    const percent = (e.loaded / e.total) * 100;  // Calculate percentage progress
    console.log("File reading progress: " + percent.toFixed(2) + "%");
  }
};

````