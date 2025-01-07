# Animated Boxes with GSAP

This project demonstrates how to animate boxes using GSAP (GreenSock Animation Platform). Each box on the webpage moves horizontally and changes color when the page loads.

## Setup

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css"> <!-- Linking a file that styles our webpage -->
    <title>Gsap 01 Introduction</title>
</head>
<body>
    
<main>
    <!-- Three colored boxes on our webpage -->
    <div class="box" id="box1"></div>
    <div class="box" id="box2"></div>
    <div class="box" id="box3"></div>
</main>

<!-- Linking a tool called GSAP that helps with animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

<!-- Linking a file that contains code to animate our boxes -->
<script src="./script.js"></script>
</body>
</html>


```

### CSS (`style.css`)


````css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    height: 100vh;
    background-color: black;
}

.box {
    width: 300px;
    height: 200px;
}

#box1 {
    background-color: yellow;
}

#box2 {
    background-color: green;
}

#box3 {
    background-color: red;
}



````

### JavaScript (`script.js`)

````javascript

// Animates the first box to move right and change color to sky blue
gsap.to("#box1", {
    x: 1200,
    backgroundColor: "skyblue",
    duration: 2
});

// Animates the second box to move right, taking longer, and change color to orange
gsap.to("#box2", {
    x: 1100,
    backgroundColor: "orange",
    duration: 2.5
});

// Animates the third box to move right and change color to light green
gsap.to("#box3", {
    x: 1200,
    backgroundColor: "lightgreen",
    duration: 2
});


````


## Explanation


- HTML (index.html): Defines the structure of the webpage with three colored boxes (box1, box2, box3). CSS and JavaScript files are linked to style and animate the boxes.

- CSS (style.css): Sets initial styles for the boxes and the main container (main), including dimensions, spacing, and background colors.

- JavaScript (script.js): Uses GSAP to animate each box (#box1, #box2, #box3) by changing their horizontal position (x coordinate) and background color (backgroundColor) over specified durations (2 seconds for box1 and box3, 2.5 seconds for box2).