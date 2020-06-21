$(function() {

   function slideEffect() {
      var timer = setInterval(function() {
         var rdH = parseInt(rnd(40, $(".hack").height())),
            rdW = parseInt(rnd(500, $(".hack").width() * 2)),
            rdT = parseInt(rnd(0, $(".hack").height() / 2)),
            rdL = parseInt(rnd(-500, $(".hack").width() / 2) + 200);
         $(".hack-slider .shapes").append('<span class="shape ' + rdH + ' ' + rdW + '" style="top:' + rdT + 'px; left:' + rdL + 'px; width:' + rdW + 'px;height:' + rdH + 'px;"></span>')
         $("." + rdH + "." + rdW).each(function() {
            $(this).delay(50).slideUp(0, function() {
               $(this).remove();
            });
         });
      }, 100);
      setTimeout(function() {
         clearInterval(timer)
      }, 1000);
   }

   slideEffect();

   function slideNext() {
      $('.slide.hack.last').removeClass('hack').fadeOut(200);
      if (!$(".slide").hasClass("hack")) {
         $(".slide").fadeOut(200);
         $(".slide:first-child", ".hack-slider").addClass("hack");
         $(".slide.hack").fadeIn(200);
         $(".hack-slider").height($(".slide.hack").height());
      } else {
         $(".slide.hack").fadeOut(200).next().addClass("hack").prev().removeClass("hack");
         $(".slide.hack").fadeIn(200);
         $(".hack-slider").height($(".slide.hack").height());
      }

      slideEffect();
   }

   slideNext();

   var autoPlay = setInterval(slideNext, 4000);
   $(".arrow").hover(function() {
      clearInterval(autoPlay);
   }, function() {
      autoPlay = setInterval(slideNext, 4000);
   })
   
   setInterval(xyz, 1000);
   
   function xyz() {
      $("span").toggleClass("toggle");
   }
   
});
