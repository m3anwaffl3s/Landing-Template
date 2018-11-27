
/* Navigation Bar */

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

/* Slide Show */ 
 
$(document).ready(function(){
        $('.carousel').carousel(
        {
          dist: 0,
          padding: 0,
          fullWidth: true, 
          indicators: true,
          duration: 100,
        }
        );
      });
      
      autoplay()   
      function autoplay() {
          $('.carousel').carousel('next');
          setTimeout(autoplay, 4500);
      }

      
        
        

  /* Contact Form */

var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var e_mail = document.getElementById("e_mail");
var phone_number = document.getElementById("phone_number");
var comments = document.getElementById("comments");
var submit = document.getElementById("submit_button");
var firstname = sessionStorage.getItem("firstname");

    
submit.onclick = function() {

    window.sessionStorage.setItem("firstname", first_name.value);
    window.sessionStorage.setItem("lastname",last_name.value);
    window.sessionStorage.setItem("email",e_mail.value);
    window.sessionStorage.setItem("phonenumber", phone_number.value);
    window.sessionStorage.setItem("comments", comments.value);

    firstname = sessionStorage.getItem("firstname");
    last_name.innerHTML = sessionStorage.getItem("lastname");
    e_mail.innerHTML = sessionStorage.getItem("email");
    phone_number.innerHTML = sessionStorage.getItem("phonenumber");
    comments.innerHTML = sessionStorage.getItem("comments");
    submit.innerHTML = sessionStorage.getItem("submit");

} 





