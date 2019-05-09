'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.responsive-bar').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Review
	--------------------*/
	var review_meta = $(".review-meta-slider");
    var review_text = $(".review-text-slider");


    review_text.on('changed.owl.carousel', function(event) {
		review_meta.trigger('next.owl.carousel');
	});

	review_meta.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 3,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
	});


	review_text.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		margin: 20,
		autoplay: true,
		navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'],
		animateOut: 'fadeOutDown',
    	animateIn: 'fadeInDown',
	});



	 /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });


})(jQuery);



   /*-----------------
     Added Features
     -----------------*/



		/*------------------
		 Read More JS
		--------------------*/

		function readMore() {
		  var dots = document.getElementById("dots");
		  var moreText = document.getElementById("more");
		  var btnText = document.getElementById("myBtn");

		  if (dots.style.display === "none") {
		    dots.style.display = "inline";
		    btnText.innerHTML = "Read More";
		    moreText.style.display = "none";
		  } else {
		    dots.style.display = "none";
		    btnText.innerHTML = "Read Less";
		    moreText.style.display = "inline";
		  }
		}


		var coll = document.getElementsByClassName("collapsible");
		var i;
		var btnText = document.getElementById("btn");

		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.display === "block") {
					content.style.display = "none";
					btnText.innerHTML = "Read More";
				} else {
					content.style.display = "block";
					btnText.innerHTML = "Read Less";
				}
			});
		}


		var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.maxHeight){
		      content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    }
		  });
		}

		/*------------------
		 Read More JS
		--------------------*/


    /*-----------------
	    Goto Top Button
    	-----------------*/
	 $(window).scroll(function() {
	     var height = $(window).scrollTop();
	     if (height > 300) {
	         $('#topbtn').fadeIn();
	     } else {
	         $('#topbtn').fadeOut();
	     }
	 });
	 $(document).ready(function() {
	     $("#topbtn").click(function(event) {
	         event.preventDefault();
	         $("html, body").animate({ scrollTop: 0 }, "slow");
	         return false;
	     });

	 });
    /*-----------------
      Goto Top Button
      -----------------*/


    /*--------------
      Goto Services
	    --------------*/
	 $(document).ready(function() {
	     $(".goto").click(function(event) {
	         event.preventDefault();
					 $('html, body').animate({
                   scrollTop: $("#process-section").offset().top
								   }, "slow");


	         return false;
	     });

	 });
	     /*--------------
	       Goto Services
	 	    ---------------*/


				(function ($) {
				    "use strict";


				    /*==================================================================
				    [ Validate ]*/
				    var name = $('.validate-input input[name="name"]');
				    var email = $('.validate-input input[name="email"]');
				    var subject = $('.validate-input input[name="subject"]');
				    var message = $('.validate-input textarea[name="message"]');


				    $('.validate-form').on('submit',function(){
				        var check = true;

				        if($(name).val().trim() == ''){
				            showValidate(name);
				            check=false;
				        }

				        if($(subject).val().trim() == ''){
				            showValidate(subject);
				            check=false;
				        }


				        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				            showValidate(email);
				            check=false;
				        }

				        if($(message).val().trim() == ''){
				            showValidate(message);
				            check=false;
				        }

				        return check;
				    });


				    $('.validate-form .input1').each(function(){
				        $(this).focus(function(){
				           hideValidate(this);
				       });
				    });

				    function showValidate(input) {
				        var thisAlert = $(input).parent();

				        $(thisAlert).addClass('alert-validate');
				    }

				    function hideValidate(input) {
				        var thisAlert = $(input).parent();

				        $(thisAlert).removeClass('alert-validate');
				    }



				})(jQuery);
