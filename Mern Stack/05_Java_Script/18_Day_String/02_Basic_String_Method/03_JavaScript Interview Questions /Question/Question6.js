// Instagram
function getInstagramUsername(str){
    return str.split('/')[3]
}
console.log(getInstagramUsername('https://www.instagram.com/abhishek_gupta.ig/'))

// Facebook
function getFacebookUsername(str){
    return str.split('/')[3]
}
console.log(getFacebookUsername('https://www.facebook.com/amanfreerunner/'))

// LinkedIn
function getLinkedInUsername(str){
    return str.split('/')[4]
}
console.log(getLinkedInUsername('https://www.linkedin.com/in/johndoe/'))

// Twitter
function getTwitterUsername(str){
    return str.split('/')[3]
}
console.log(getTwitterUsername('https://twitter.com/johndoe'))

// YouTube
function getYoutubeUsername(str){
    return str.split('/')[4]
}
console.log(getYoutubeUsername('https://www.youtube.com/c/TechTutorialsAbhishek'))

// Pinterest
function getPinterestUsername(str){
    return str.split('/')[3]
}
console.log(getPinterestUsername('https://www.pinterest.com/johndoe/'))

// Snapchat
function getSnapchatUsername(str){
    return str.split('/')[4]
}
console.log(getSnapchatUsername('https://www.snapchat.com/add/johndoe'))

// TikTok
function getTikTokUsername(str){
    return str.split('/')[4]
}
console.log(getTikTokUsername('https://www.tiktok.com/@johndoe'))

// Reddit
function getRedditUsername(str){
    return str.split('/')[4]
}
console.log(getRedditUsername('https://www.reddit.com/u/johndoe/'))

// GitHub
function getGitHubUsername(str){
    return str.split('/')[3]
}
console.log(getGitHubUsername('https://github.com/johndoe'))

// WhatsApp
function getWhatsAppUsername(str){
    return str.split('/')[3]
}
console.log(getWhatsAppUsername('https://wa.me/1234567890'))

// Tumblr
function getTumblrUsername(str){
    return str.split('/')[3]
}
console.log(getTumblrUsername('https://johndoe.tumblr.com/'))

// Spotify
function getSpotifyUsername(str){
    return str.split('/')[4]
}
console.log(getSpotifyUsername('https://open.spotify.com/user/johndoe'))

// Skype
function getSkypeUsername(str){
    return str.split('/')[3]
}
console.log(getSkypeUsername('https://join.skype.com/johndoe'))

// Flickr
function getFlickrUsername(str){
    return str.split('/')[4]
}
console.log(getFlickrUsername('https://www.flickr.com/photos/johndoe/'))
