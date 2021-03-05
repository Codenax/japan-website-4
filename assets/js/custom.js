"use strict";

// var width=$(window).width();
// $('meta[name=viewport]').attr('content','width=device-width, initial-scale=1');
// var newWidth=$(window).width();
// var viewportMetaTagIsUsed=width!=newWidth;
// // alert(viewportMetaTagIsUsed?'using meta viewport':'not using meta viewport');
// $(function(){
//   var ua = vpWidth =1680;
//   if(window.innerWidth < vpWidth) {
//       $("meta[name='viewport']").attr('content', 'width=1680');
//   } else {
//       $("meta[name='viewport']").attr('content', 'width=device-width,initial-scale=1');
//   }
// });
// function usesViewport() {
//     var meta=$('meta[name=viewport]');
//     var content=meta.attr('content');
//     if (!meta.length) {
//         meta=$('<meta name="viewport" content="width=device-width, initial-scale=1" />').appendTo('head');
//         console.log(meta.parent());
//     }
//     $('meta[name=viewport]').attr('content','width=device-width, initial-scale=1');
//     var width1=$(window).width();
//     $('meta[name=viewport]').attr('content','width=device-width, initial-scale=0.1');
//     var width2=$(window).width();
//     if (content) {
//         $('meta[name=viewport]').attr('content',content);
//     } else {
//         meta.remove();
//     }
//     var result=width1!=width2;
//     return result;
// }
// $(function() {
//     alert(usesViewport()?'Uses viewport':'Doesn\'t use viewport');
// });
$('.navigration-icon').click(function () {
  $(this).toggleClass("click");
  $('.mobile-menu').toggleClass("show-mobile-menu");
}); // $('.close-btn').click(function () {
//   $(this).toggleClass("click");
//   $('.mobile-manu').toggleClass("show-mobile-menu");
// }); 

$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
});
$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
});