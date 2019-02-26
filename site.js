(function(){
  //Browser sanity check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    //Old browser
    console.log('Old browser');
    return;
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
    var signup_input = document.querySelector('signup-form');
    var email_input=document.querySelector('#email');
    var telephone_input=document.querySelector('#telephone');
    var signup_submit=document.querySelector('#signup');


    //Disable signup button if either email or phone number is filled.
    function check(){
      if (ph === true || em === true){


      signup.removeAttribute('disabled')
      else{
        signup.setAttribute('disabled', 'disabled');}
      }
    }


  });

})();
