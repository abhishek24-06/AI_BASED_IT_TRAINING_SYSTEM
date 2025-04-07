// Initialize Firebase
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
  
  // Get a reference to the Firebase Authentication instance
  const auth = firebase.auth();
  
  // Get references to the form elements
  const emailInput = document.querySelector('.login-form input[type="email"]');
  const passwordInput = document.querySelector('.login-form input[type="password"]');
  const loginButton = document.querySelector('.login-form button[type="submit"]');
  
  // Add an event listener to the login button
  loginButton.addEventListener('click', async (event) => {
    event.preventDefault();
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    try {
      // Sign in the user with email and password
      await auth.signInWithEmailAndPassword(email, password);
  
      // User is now logged in
      console.log('User is logged in:', auth.currentUser.email);
  
      // Redirect the user to the dashboard or another page
      window.location.href = 'dashboard.html';
    } catch (error) {
      // Handle any errors that occurred during the login process
      console.error('Error logging in:', error);
      alert('Invalid email or password. Please try again.');
    }
  });