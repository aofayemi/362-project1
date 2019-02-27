'use strict';
(function(){
  // Browser sanity check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old browser
    console.log('Old browser');
    return;
  }

  function eq(value, condition) {
    return value === condition;
  }

  // Data cleanup function
  function clean_nonnumber(value) {
    // Remove non-digit and return values
    return value.replace(/\D/g, '');

  }

  // Remove country trip_us_country_code
  function strip_us_country_code(value) {
    return value.replace(/^1/, '');
  }

  function clean_whitespace(value) {
    return value.replace(/\s/g, '');
  }

  // All purpose validate function. It takes a value,
  // along with either a regular expression pattern or
  // a simple function -- like the comparison functions
  // above -- and a condition. JavaScript doesn't char
  // if a function is called with more or fewer arguments
  // than described in the function definition, so it's
  // no problem at all to leave off the `condition`
  // argument when calling a check that's a regular expression
  function validate(value, check, condition) {
    if (eq(typeof(check.test), 'function')) {
      // Handle a regular expression
      return check.test(value);
    } else if (eq(typeof(check), 'function')) {
      // Handle a comparison function
      return check(value, condition);
    } else {
      return false;
    }
  }

  // Email validity function
  function validate_email(value){
    var email = clean_whitespace(value);
    return validate(email, /^[^@\s]+@[^@\s]+$/g);
  }

  // Check for valid phone Number
  function validate_us_phone(value){
    var phone_number = strip_us_country_code(clean_nonnumber(value));
    return validate(phone_number.length, eq, 10);
  }



  document.addEventListener('DOMContentLoaded', function(){
    // select the necessary elements from the DOM
    var signup_input = document.querySelector('#signup-form');
    var contact_input = document.querySelector('#contact');
    var signup_submit=document.querySelector('#signup');

    signup_submit.removeAttribute('disabled');

    // listen for keyup event anywhere in the formed
    signup_input.addEventListener('keyup', function(){
      var contact_value = contact_input.value;
      // Disable signup button if either email or phone number is filled.
      if (validate_us_phone(contact_value) || validate_email(contact_value)) {
        signup_submit.removeAttribute('disabled');
      }
      else {
        // show user error message
        var contact_error = document.querySelector('#contact-error');
        if(contact_value.length > 10 && contact_error.innerText.length === 0) {
          contact_error.innerText = 'You need a ten-digit phone or valid email address.';
        }
        // Redisable submit button if it is unvalid
        signup_submit.setAttribute('disabled', 'disabled');}
    }

    );

    // End of DOMContentLoaded
  });
  // End of IIFE
}());
