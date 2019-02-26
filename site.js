(function(){
  //Browser sanity check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    //Old browser
    console.log('Old browser');
    return;
  }

  function eq(value,condition) {
    return value === condition;
  }

  //Data cleanup function
  function clean_nonnumber(value) {
    // Remove non-digit and return values
    return value.replace(/\D/g, '');
  }


      //Email validity function
      function checkEmail(email){
       var em = /^[^@]+@[^@]+$/g;
        //remove whitespace
        email = email.replace(/\s/g, '');
        if (email.length >= 1 && this.value.match(email)) {
          em = true;}
          else {
            em = false;
          }

        });

        //Check for valid phone Number
        function validate_us_phone(value){
          var phone_number = trip_us_country_code(clean_nonnumber(value));
          return validate(phone_number.length,eq,10);
        }



  document.addEventListener('DOMContentLoaded', function(){
    //select the necessary elements from the DOM
    var signup_input = document.querySelector('#signup-form');
    var contact_input = document.querySelector('#contact');
    var signup_submit=document.querySelector('#signup');
    var ph = false;
    var em = false;

    //listen for keyup event anywhere in the formed
    signup_form.addEventListener('keyup', function(){
      var contact_value = contact_input.value;
      //Disable signup button if either email or phone number is filled.
        if (ph === true || em === true){


        signup_input.removeAttribute('disabled')
        else{
          signup_input.setAttribute('disabled', 'disabled');}
        }

    })


  });

})();
