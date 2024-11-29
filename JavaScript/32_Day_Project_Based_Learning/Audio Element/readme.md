# HTML Audio Element


- The `<audio>` element is part of HTML5 and provides native support for including audio content directly within web pages. It allows you to specify audio files to be played, control playback, adjust volume, and more, all with straightforward HTML attributes and JavaScript interaction.


 - `<audio> element` ka upayog sound content ko web pages mein Use karne ke liye kiya jata hai. Isse audio files ko directly web applications mein integrate kiya ja sakta hai, jisme playback control, volume adjustment, aur audio se judi alag-alag events ka response diya ja sakta hai.


- (Your browser does not support the audio element or does not allow automatic playback without user interaction.)

- Hum logo ka browser ye Allow nhi kr ta ki page Load hone pe Audio play ho jaye esi liye Browser Audio ko Block kr deta hain. Audio Tub hi play hoga Jub User interaction ho jaise ki agr user kisi button main click kre ga toh audio play ho jaye ga.



# Create a Audio Element 

- Here are several different ways you can create and interact with an `<audio>` element in HTML and JavaScript:

#### Method 1: Using `new Audio()`


````javascript
// Create an audio element
const audioElement = new Audio("car_horn.wav");

````


#### Method 2: Using `document.createElement('audio')`

````javascript
// Create an audio element
let audio = document.createElement('audio');
audio.src = "car_horn.wav";

// Set additional attributes if needed
audio.controls = true; // Show default controls (play, pause, volume)


````


#### Method 3: Creating an HTML Audio Element and Using `document.getElementById()`


`Html`

````html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Element Example</title>
</head>
<body>

  <audio id="myAudio" src="audiofile.mp3">
    Your browser does not support the audio element.
  </audio>

  <button id="playButton">Play Audio</button>

  <script>
    // JavaScript code will go here
  </script>

</body>
</html>




````

`JavaScript`

````javascript


// Get reference to the audio element
const audio = document.getElementById('myAudio');

// Get reference to the play button
const playButton = document.getElementById('playButton');

// Add click event listener to the play button
playButton.addEventListener('click', function() {
  // Check if audio is paused, then play it
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});




````


## Audio element properties 

- The `<audio>` element in HTML provides several properties that can be accessed and manipulated using JavaScript to control its behavior and interact with it dynamically. Here are some of the key properties of the `<audio>` element:


- HTML mein <audio> element ek bahut hi upyogi tarike se awaaz ya audio media ko web pages mein shaamil karne ka tarika hai. Is element ke kai gun hote hain jo JavaScript se prabandhan kiya ja sakta hai, jisse hum iske vyavahar ko niyantrit kar sakte hain aur gatishil roop se interact kar sakte hain.

##### `<audio>` Element Properties, Methods, and Events


`Properties:`


1. `src:` Specifies the URL of the audio file to be played.

`Example`

````javascript
// Set the source of the audio
audioElement.src = 'new-audio.mp3';
````


2. `autoplay:` Boolean attribute to start playing the audio as soon as it's loaded.

- Boolean attribute jo audio ko automatically play karne ke liye set karta hai jab wo load hota hai.

`Example`

````javascript
// To automatically start playing audio
audioElement.autoplay = true;
````

3. `controls:` Boolean attribute to show default audio controls (play, pause, volume, etc.).

`Example`

````javascript

// Show default audio controls
audioElement.controls = true;

````



4. `loop:` Boolean attribute indicating whether the audio should loop back to the beginning when it reaches the end.



`Example`

````javascript

// Enable looping of audio
audioElement.loop = true;

````


5. `preload:` Specifies how the audio file should be loaded.



`Example`

````javascript

// Set preload behavior to 'metadata'
audioElement.preload = 'metadata';


````



6. `volume:` Sets or returns the current volume of the audio (0.0 to 1.0).

`Example`

````javascript

// Set volume to half (0.5)
audioElement.volume = 0.5;

````



7. `currentTime:` Gets or sets the current playback position (in seconds).

`Example`

````javascript

// Set current playback position to 30 seconds
audioElement.currentTime = 30;


````

8. `duration:` Returns the total duration (in seconds) of the audio.


`Example`

````javascript

 // Get the total duration of the audio
 var totalDuration = audioElement.duration;

````


9. `paused:` Returns a boolean indicating whether the audio is paused.


`Example`

````javascript

// Check if audio is currently paused
if (audioElement.paused) {
    console.log('Audio is paused');
}

````


10. `muted:` Boolean attribute to mute/unmute the audio output.


`Example`

````javascript

// Mute the audio
audioElement.muted = true;

````


11.  `Play:` Starts playing the audio.


`Example`

````javascript

// Play the audio
audioElement.play();


````


12.   `load:` Re-loads the audio file.


`Example`

````javascript

// Reload the audio file
audioElement.load();


````
