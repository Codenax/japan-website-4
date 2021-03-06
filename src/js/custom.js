
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


$('.close-btn').click(function () {
  $('.mobile-menu').removeClass("show-mobile-menu");
}); 



$('.navigration-icon').click(function () {
  $(this).toggleClass("click");
  $('.mobile-menu').toggleClass("show-mobile-menu");
});




$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
