$("a[href*='" + location.pathname + "']").addClass("current");

function myFunction(x) {
    x.classList.toggle("change");
    if($('.navbar-list:visible').length == 0)
{
$(".navbar-list").show();
}
else {
    $(".navbar-list").hide();
}
  }

// slideshow


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("jb");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

  //modal
  // Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// if the page load for first time open the modal.
// if already visited, skip modal box.

    if (document.cookie.indexOf("visited") >= 0  ) {
        modal.style.display="none";
    } 
    else {
         modal.style.display = "block";

    }
//if mobile = ilang pop up ny
    if( $('.container').css('display')!='none') {
      modal.style.display="none";
    }

// 
//     modal.style.display = "block";
//   }
//ilangin pencet x btn
span.onclick = function() {
  modal.style.display = "none";
}

//klik mana aja ilang
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


