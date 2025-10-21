// This is what we'll be filling in in class!

// Let's start by selecting the button and
// where we'll be filling in the user info:
const button = document.getElementById("load");
const userDiv = document.getElementById("user");

// Then we'll add an event listener so that
// when we click the button, we show a user.
button.addEventListener("click", getUser);

// This is the function where we'll 
// add in the user to fill in
async function getUser() {
    // Optional: show loading... while getting data from the random user API

    // Make a request to: https://randomuser.me/api/
    // The response is formatted as JSON.
    
    // We want the first person in the results entry
    // From there, we would like to get the name (in the name entry, {first, last}),
    // location (in the location entry, country),
    // and image (in the picture entry, medium)

    // Then we will fill in
    // Name: <name>
    // Country: <country>
    // Image: <image URL>
}