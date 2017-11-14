$(document).ready(function() {

  $(window).scroll(function() {
  	if ($(document).scrollTop() > 50) {
  		$('nav').addClass('shrink');
  	} else {
  		$('nav').removeClass('shrink');
  	}
  });

  $('body').scrollspy({target: ".navbar", offset: 65});

  $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

});