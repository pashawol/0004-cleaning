var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({}); 
	 
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();  
	JSCCommon.magnificPopupCall();  
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/1.png);"></div>')
	// /добавляет подложку для pixel perfect

 
 
	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   }); 

	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// // карусель
		// // карусель
		$('.s-logos__slider--js').slick({
			slidesToShow: 1, 
			dots: false,
			speed: 600,
			infinite: true, 
			arrows: true,
			mobileFirst: true, 
			prevArrow: arrr2,
			nextArrow: arrl2,
			responsive: [
				{ 
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,  
				}  },
				
				{ 
				breakpoint: 767.98,
				settings: {
					slidesToShow: 3, 
					// infinite: false, 
				}  },
				
				{ 
				breakpoint: 575.98,
				settings: {
					slidesToShow: 2, 
					// infinite: false, 
				}  },
				
		 ]
		});
	 
 
	$('.custom-input-time__input').change(function(){
		$(this).parents('form').find('.toggle-wrap-input-js').toggle().toggleClass('active');
	})

 
	var gets = (function() {
		var a = window.location.search;
		var b = new Object();
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
		c = a[i].split("=");
				b[c[0]] = c[1];
		}
		return b;
	})();
			// form
			// $("form").submit(function () { //Change
			// 	var th = $(this);
			// 	th.find('.utm_source').val(gets['utm_source']);
			// 	th.find('.utm_term').val(gets['utm_term']);
			// 	var  valOrder = th.find('.order').val();
			// 	var  valTime = th.find('[name="time"]').val(); 
			// 	$.ajax({
			// 		type: "POST",
			// 		url: 'action.php', //Change
			// 		data: th.serialize()
			// 	}).success(function () { 
					
		 

			// 		setTimeout(function () { 
			// 			th.trigger("reset"); 
			// 			// ym(53383120, 'reachGoal', 'zakaz');
			// 		}, 4000);
			// 	});
			// 	return false;
			// });
			// /form

			$(".form-wrap__toggle").click(function(){
				$(".form-wrap__toggle-block").toggle()
			})
			$(".viber-link").each(function(){

				if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					// some code..
					$(this).attr('href', $(this).data("desktop"))
					alert($(this).attr('href'))
					// $(this).attr('href', $(this).data("mobile"))
					// alert('mobile')
				}
				else{ 
				}
			})
});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	 

	// /LazyFunction

	magnificPopupCall: function () {
		$(".link-modal").click(function(){
			$($(this).data("src")).find(".order").val( $(this).data("order"))
			 $(this).parents('.s-prod-head')
			? $($(this).data("src")).find(".color").val( $(this).parents('.s-prod-head').find(".radio-input__input:checked").val())
			: $($(this).data("src")).find(".color").val('')
			
		})
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false, 
			touch: false, 
			// type : 'inline', 
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		// /modal галерея
	},
 
    // табы  .
    tabscostume: function (tab) {
			$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
					$(this)
							.addClass('active').siblings().removeClass('active')
							.closest('.' + tab).find('.' + tab + '__content').removeClass('active').hide(function () {
							$(this).find('input').attr('required', false)
					})
							.eq($(this).index()).addClass('active').show(function () {
							$(this).find('input').attr('required', true)
					});

			});
	},
	// /табы  .

	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/

