// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});


jQuery(document).ready(function ($) {
 
  var path = window.location.pathname.split("/").pop();

  
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  
  target.parent().addClass("active");
});



$("#showmenu").click(function(e) {
  $("#menu").toggleClass("show");
  if ($("#menu").hasClass("show")) {
      setTimeout(function() {
          $("#menu").removeClass("show");
      }, 100000);
  }
});

$("#menu a").click(function(event) {
  if ($(this).next('ul').length) {
      event.preventDefault();
      $(this).next().toggle('fast');
      $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // Aquí agregar funcion
    console.log('JavaScript cargado correctamente');
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('anuncio').style.display = 'flex';
});

function cerrarAnuncio() {
    document.getElementById('anuncio').style.display = 'none';
}
setTimeout(function() {
  cerrarAnuncio();
}, 6000);





window.onload = function() {
  setTimeout(function() {
    document.querySelector('.loader').classList.add('hidden');
    document.getElementById('contenido').style.display = 'block';
  }, 2000);
};
