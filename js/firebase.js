// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAplqxoRTscwmphFsdf8MpoyXK1-Iuupws",
    authDomain: "ai-based-it-training-system.firebaseapp.com",
    databaseURL: "https://ai-based-it-training-system-default-rtdb.firebaseio.com",
    projectId: "ai-based-it-training-system",
    storageBucket: "ai-based-it-training-system.appspot.com",
    messagingSenderId: "825817586029",
    appId: "1:825817586029:web:64a461b6bdaa1225dee264"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Get the form element
  const form = document.querySelector('form');
  
  const googleBtn = document.querySelector('.google-btn');
  googleBtn.addEventListener('click', function() {
  // Implement the logic for Google Sign-Up
  console.log('Google Sign-Up clicked');
  });
  // Add an event listener for form submission
  form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the form input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Perform form validation or submit the data to the server
  // (e.g., using AJAX or other methods)
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  
  // Reset the form if needed
  form.reset();
  });