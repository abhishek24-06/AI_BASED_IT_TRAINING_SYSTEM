
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
 

  function signUpUser(username, email, password) {
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
	  console.log('Invalid email address');
	  return;
	}
	firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
	  // User is signed up
	  var user = userCredential.user;
	  console.log('User signed up:', user);
	  alert('Sign-up successful!');
	  window.location.href = 'dashboard.html';
	})
  .catch((error) => {
	  // An error occurred while signing up the user
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log('Error signing up user:', errorCode, errorMessage);
	});
  }
  document.getElementById('signup-form').addEventListener('submit', (event) => {
	event.preventDefault();
  
	var username = document.querySelector('#signup-form input[name="username"]').value;
	var email = document.querySelector('#signup-form input[name="email"]').value;
	var password = document.querySelector('#signup-form input[name="password"]').value;
  
	signUpUser(username, email, password);
  });
  
