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
  }, 100);
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
  }, 100);
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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('anuncio').style.display = 'flex';
});

function cerrarAnuncio() {
    document.getElementById('anuncio').style.display = 'none';
}
setTimeout(function() {
  cerrarAnuncio();
}, 9000);

window.onload = function() {
  setTimeout(hideLoaderAndShowContent, 500);
};

function hideLoaderAndShowContent() {
  document.querySelector('.loader').classList.add('hidden');
  document.getElementById('contenido').style.display = 'block';
}

function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, completa todos los campos antes de enviar.',
      confirmButtonColor: '#3085d6',
    });
    return;
  }

  $('#contactModal').modal('hide');
  document.getElementById('contactForm').reset();
  Swal.fire({
    icon: 'success',
    title: '¡Formulario enviado!',
    text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    confirmButtonColor: '#28a745'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'https://xunito.tech/design#';
    }
  });
}

function sendViaWhatsApp() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = $('#contactModal').data('service') || 'Servicio no especificado';
  const url = window.location.href;

  if (!name || !email || !phone) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, completa todos los campos antes de enviar.',
      confirmButtonColor: '#3085d6',
    });
    return;
  }

  const message = `Hola, estoy interesado en el servicio: ${service}%0A%0A` +
    `*Nombre:* _${name}_%0A` +
    `*Correo:* _${email}_%0A` + 
    `*Teléfono:* _${phone}_%0A` +
    `*URL:* _${url}_`;

  Swal.fire({
    icon: 'success',
    title: 'Redirigiendo a WhatsApp...',
    text: 'Por favor, espera mientras te llevamos al chat.',
    showConfirmButton: false,
    timer: 2000,
  });

  setTimeout(() => {
    window.open(`https://wa.me/529618137702?text=${message}`, '_blank');
  }, 2000);
}

fetch('icon/contact.json')
.then(response => response.json())
.then(data => {
    const iconElement = document.getElementById("icono-contacto");
    if (iconElement && data.icons && data.icons.contacto) {
        iconElement.className = data.icons.contacto;
    }
})
.catch(error => console.error("Error cargando el JSON:", error));

const btnArriba = document.getElementById("btnArriba");
window.onscroll = function () {
  btnArriba.style.display = document.documentElement.scrollTop > 100 ? "flex" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
