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

    console.log('OMG the DOM is loaded!!!!');

  })
});
