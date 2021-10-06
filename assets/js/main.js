

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