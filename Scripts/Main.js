
/* Navigation Bar */

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

/* Slide Show */ 
 
$(document).ready(function(){
  $('.carousel').carousel();

//function for auto play carousel-slider

setInterval(function(){
  $('.carousel').carousel('next');

 }, 2500);

});

      
        
        

  /* Contact Form */

var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var e_mail = document.getElementById("e_mail");
var phone_number = document.getElementById("phone_number");
var comments = document.getElementById("comments");
var submit = document.getElementById("submit_button");
var firstname = sessionStorage.getItem("firstname");
var services = document.getElementById("dropdown1");
var timeFrameList = ["Immediatly", "1-6 months", "6 months - 1 year", "1-2 years"];
var servicesList = ["Custom Homes", 
                "Home Construction", 
                "Multi-Family (4+ Units)", 
                "New Construction", 
                "Other New Construction", 
                "Kitchen Addition", 
                "Bathroom Addition", 
                "Room Addition", 
                "Other Additions",
                "Multi-Room Remodel",
                "Kitchen Remodel",
                "Bathroom Remodel",
                "Basement Remodel",
                "Multi-Family (4+ Units) Remodeling",
                "Other Remodeling",
                "Office Renovation",
                "Restaurant Renovation",
                "Retail Renovation",
                "Other Commercial Renovation",
                "Roofing",
                "Hardwood Flooring",
                "Carpets",
                "Laminate Flooring",
                "Other Flooring",
                "Framing",
                "Fences",
                "Backsplash and Countertops",
                "Stonework",
                "Tile Flooring",
                "Other Stone and Tile",
                "Drywall",
                "Interior",
                "PlasterBrick and Blockwork",
                "Other Masonry",
                "Foundations",
                "Other Concrete",
                "Paving", 
                "Driveways and Sidewalks",
                "Excavation and Grading",
                "Other Site Work",
                "Garage Construction",
                "Gutters and Flashing Skylights"];

servicesList.forEach(function(serviceObj){
    var option = document.createElement("option");
    var a = document.createElement("a");
    a.innerHTML = serviceObj;
    a.href = "#!"
    a.setAttribute('class="grey lighten-2"')
    Option.innerHTML = a;
    timeFrame.appendChild(Option);
});

//<li><a href="#!" class="grey lighten-2" >Custom Home</a></li>

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

/* Form: Drop Down */
 
$('.dropdown-trigger').dropdown();

/* Services Dropdown */



