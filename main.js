// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCKwIcVpsSXAMZ9tbK1D6jInJeB6hEtvmg",
  authDomain: "contact-form-b1e77.firebaseapp.com",
  databaseURL: "https://contact-form-b1e77.firebaseio.com",
  projectId: "contact-form-b1e77",
  storageBucket: "contact-form-b1e77.appspot.com",
  messagingSenderId: "562988318856",
  appId: "1:562988318856:web:395f1b9f29c1e856c41f3d",
  measurementId: "G-XBQMTHVZM9"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname= getInputVal('lname')
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname, lname, email, phone, message);
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname,lname, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
    });
  }
