(function(){
  //Browser sanity check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    //Old browser
    console.log('Old browser');
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    //select the necessary elements from the DOM
    var email_input=document.querySelector('#email');
    var telephone_input=document.querySelector('#telephone');
    var signup_submit=document.querySelector('#signup');
    var ph=false;
    var em=false;

    console.log('OMG the DOM is loaded!!!!');
    email.addEventListener('focus', focus);
    phone.addEventListener('focus', focus);
    submit.addEventListener('focus', focus);
    signup.addEventListener('focus', focus);

    //Disable signup button if either email or phone number is filled.
    function check(){
      if (ph === true || em === true){


      signup.removeAttribute('disabled')
      submit.removeAttribute('disabled');}
      else{
        submit.setAttribute('disabled', 'disabled')
        signup.setAttribute('disabled', 'disabled');}
      }
    }


  });

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
      phone.addEventListener('input', function(){

      })

})();
