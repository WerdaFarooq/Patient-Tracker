// Initialize Firebase (ADD YOUR OWN DATA)


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('DetailsForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var dob = getInputVal('dob');
  var disease = getInputVal('disease');
  var cost = getInputVal('cost');
  var doa = getInputVal('doa');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, dob, disease, cost,  doa, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('DetailsForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, dob, disease, cost, doa, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    dob:dob,
    disease:disease,
    cost:cost,
    doa:doa,
    message:message
  });
}