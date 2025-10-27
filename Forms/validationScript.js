// JavaScript code for form validation
// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', ev => {
  let fieldVal = document.getElementById('inputField').value;
  if (fieldVal === '') {
    alert('Input is required!');
    ev.preventDefault();
  }
  else {
    validateInput(ev);
  }
});

// Retrieve the input field value
var inputEle = document.getElementById('inputField');

// Regular expression pattern for alphanumeric input
let regex = /^[a-zA-Z0-9]*$/;
// Check if the input value matches the pattern
function validateInput(ev) {
  // Valid input: display confirmation and submit the form
  if (regex.test(inputEle.value)) {
    // accept valid input
    alert('Form submitted!');
    document.ev.submit();
  }
  // Invalid input: display error message
  else {
    // reject invalid input
    alert('Input must be alphanumeric.');
    document.ev.preventDefault();
  }
}