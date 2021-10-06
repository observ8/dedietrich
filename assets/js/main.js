
  function myFunction() {
    // menu mobile
  var x = document.getElementById("mysubmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

 // search modal 
  // Get the modal
  var modal = document.getElementById("myModalsearch");
  
  // Get the button that opens the modal
//   var btn = document.getElementById("mysearch");
  var btn1 = document.getElementById("mysearch1");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closesearch")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
   
  }
  btn1.onclick = function() {
    modal.style.display = "block";
   
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // end modal serch

$(document).on("ready", function () {
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
      if (scroll >= 620) {
        $(".topmenuoutsecondary").addClass("imenu2scroll");
        //   alert("ok");
      } else {
        $(".topmenuoutsecondary").removeClass("imenu2scroll");
        //   alert("removed");
      }
      });

     

    
 
});