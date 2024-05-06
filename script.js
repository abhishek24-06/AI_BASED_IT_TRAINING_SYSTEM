
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Find the "Get Started" button by its class name
    var getStartedButton = document.querySelector('.btn');

    // Add a click event listener to the button
    getStartedButton.addEventListener('click', function() {
        // Display an alert when the button is clicked
        alert("Welcome to AI Boosted Learning Platform! \nSign Up and start our journey.");
    });
});
