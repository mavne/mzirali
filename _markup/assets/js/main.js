class Loader{
	loadx(){
		window.scrollTo(0, 0);
		setTimeout(function(){
			$('body').addClass('loaded');	
		}, 1000);	

		setTimeout(function(){
			$('.logo-live-social, header, .image-text, .navigation-box, .fixed-menu, main').fadeIn('slow');

			setTimeout(function(){
				$('.image-text .image-box').addClass('moveNow');
			}, 500);
		}, 2500);	
	}

	run(){
		this.loadx();
	}
}

class Header{
  	openMenu(){
  		$("body").addClass('navOpened');	
  	}

  	closeMenu(){
  		$("body").removeClass('navOpened');	
  	}

  	burgerClick(){
  		var that = this;
  		$(document).on('click', 'header .center .center_small .burger-language-data .burger', function(){
  			that.openMenu();
  		});
  	}

  	closeClick(){
  		var that = this;
  		$(document).on('click', '.navOpened .navigation-box .center .close', function(){
  			that.closeMenu();
  		});
  	}

  	copyItems(){
  		var language = $("header .center .center_small .burger-language-data .languages").prop('outerHTML');
  		$('.navigation-box .nav-box').append(language);

  		var liveVideo = $(".logo-live-social .center .right .center_small .live-video").prop('outerHTML');
  		var social = $(".logo-live-social .center .right .social").prop('outerHTML');
  		var call = $("header .center .contact-box a.call").prop('outerHTML');
  		$('.fixed-menu .top .center_small').append(call + social + liveVideo);

  		var logo = $(".logo-live-social .center .logo").prop('outerHTML');
  		var navBox = $(".navigation-box .nav-box").prop('outerHTML');
  		$('.fixed-menu .bottom .center_small').append(logo + navBox);
  	}

  	showFixedMenu(){
  		$(window).scroll(function() {
		    var scrollTop = $(this).scrollTop();
		    
		    if (scrollTop >= 300) {
		        $('body').addClass('scrolled300');
		    }else{
		    	$('body').removeClass('scrolled300');
		    }
		});
  	}

  	run(){
		this.burgerClick();
		this.closeClick();
		this.copyItems();
		this.showFixedMenu();
  	}
}

class About{
	constructor(){
		this.width = $(window).width();
		this.smallCenter = $('.center_small').width();
	}

	setImageWidths(){
		var sideImagesWidth = (this.width - this.smallCenter) / 2;

		$(".outside-left").css({
			'width':sideImagesWidth+"px",
			'left':'-'+sideImagesWidth+"px"
		});

		$(".outside-right").css({
			'width':sideImagesWidth+"px",
			'right':'-'+sideImagesWidth+"px"
		});
	}

	run(){
		this.setImageWidths();
  	}
}

/* Header */
var loader = new Loader;
loader.run();

var header = new Header;
header.run();

/*About*/
var about = new About;
about.run();