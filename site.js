(function(){
  //Browser sanity check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    //Old browser
    console.log('Old browser');
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    var email=document.querySelector('#email');
    var phone=document.querySelector('#telephone');
    var signup=document.querySelector('#signup');
    var submit=.document.querySelector('#submit');
    var ph=false;
    var em=false;

    console.log('OMG the DOM is loaded!!!!');
    email.addEventListener('focus', focus);
    phone.addEventListener('focus', focus);
    submit.addEventListener('focus', focus);
    signup.addEventListener('focus', focus);

    //Disable signup button if either email or phone number is filled
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

    //check if email is valid
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
