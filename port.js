console.log('banana');
function myFunction() {
  let element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}

//french horn tabs

function openInfo(evt, infoName) {
  //Declare all variables
  var i, tabcontent, tablinks;
//Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  //Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].id !== infoName) {
      if (!tabcontent[i].classList.contains("hideMe")) {
        tabcontent[i].classList.add("hideMe");
        tabcontent[i].classList.add("conditionalClose");
      }
    }
  }
  if(document.getElementById(infoName).classList.contains("hideMe")) {
    document.getElementById(infoName).classList.remove("hideMe");
  }


  //check the ones belowwith an if statement
    if (document.getElementById(infoName).classList.contains("conditionalClose")) {
        document.getElementById(infoName).classList.replace("conditionalClose","conditionalOpen");
        evt.currentTarget.classList.add("active");
    } else {
        document.getElementById(infoName).classList.replace("conditionalOpen","conditionalClose");
        evt.currentTarget.classList.remove("active");
    }

  //show the current tab, and add an "active" class to the button that opened the tab

}
;

$(document).ready(function($){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
