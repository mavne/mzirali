class Loader{
	loadx(){
		window.scrollTo(0, 0);
		setTimeout(function(){
			$('body').addClass('loaded');	
		}, 1000);	

		setTimeout(function(){
			$('.logo-live-social, header, .image-text, .navigation-box, .fixed-menu, main, footer').fadeIn('slow');

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

class VisiableTracker{
	constructor(){
		this.trackElement = "section, footer";
		this.addRemoveClass = "g-visible";
	}

	track(){
		const elements = document.querySelectorAll(this.trackElement);

		const observer = new IntersectionObserver(entries => {
		  entries.forEach(entry => {
		    if (entry.isIntersecting) {
		      entry.target.classList.add(this.addRemoveClass);
		    } else {
		      entry.target.classList.remove(this.addRemoveClass);
		    }
		  });
		});

		elements.forEach(element => {
		  observer.observe(element);
		});
	}

	run(){
		this.track();
	}
}

class Advantages{
	addLast3LiClass(){
		if($('main .main-advantages .center_small .list-box ul').length){
			var ulElement = document.querySelector("main .main-advantages .center_small .list-box ul");
			
		  	var liElements = ulElement.querySelectorAll("li:nth-last-child(-n+3)");
		  	liElements.forEach(function(liElement) {
		    	liElement.classList.add("last");
		  	});

		  	var liElements2 = ulElement.querySelectorAll("li");
			liElements2.forEach(function(liElement, index) {
				if((index + 1) % 3 === 0) {
					liElement.classList.add("third");
				}
			});
		}
	}

	run(){
		this.addLast3LiClass();
	}
}

class Mobile{
	makeHeader(){
		var logo = $('.fixed-menu .bottom .logo').prop('outerHTML');
		var live = $('.fixed-menu .top .live-video').prop('outerHTML');
		var call = $('.fixed-menu .top .call').prop('outerHTML');

		var html = logo;
		html += '<div class="middle">';
		html += live;
		html += call;
		html += '</div>';

		html += '<div class="burger"><a href="javascript:void(0)">burger</a></div>';
		$('.mobile-header').html(html);
	}

	setMainImageHeight(){
		var height = $(window).height() - 90;
		$(".image-text").css('height', height+"px");
	}

	burgerClickInit(){
		$(document).on('click', '.mobile-header .burger a', function(){
			$('.mobile-navigation').addClass('open');
		})
	}

	closeClickInit(){
		$(document).on('click', '.mobile-navigation .close a', function(){
			$('.mobile-navigation').removeClass('open');
		})
	}

	makeNavigation(){
		var close = '<div class="close"><a href="javascript:void(0)">close</a></div>';
		var languages = $('.navigation-box .nav-box .languages').prop('outerHTML');
		var nav = $('.navigation-box .nav-box nav').prop('outerHTML');
		var social = $('.logo-live-social .center .right .social').prop('outerHTML');
		var contact = $('header .center .contact-box').prop('outerHTML');
		var bottom = "<div class='bottom'>" + social + contact + "</div>";
		
		$('.mobile-navigation').html(close + languages + nav + bottom);
	}

	aboutImages(){
		var image1 = $('main .about .center_small .content .outside-left .image').prop('outerHTML');
		var image2 = $('main .about .center_small .content .inside-image .image').prop('outerHTML');
		var image3 = $('main .about .center_small .content .outside-right .image').prop('outerHTML');

		var html = '<div class="image-mobile-box">';
		html += '<div class="image-mobile-item">';
		html += image1;
		html += '</div>';

		html += '<div class="image-mobile-item">';
		html += image2;
		html += '</div>';

		html += '<div class="image-mobile-item">';
		html += image3;
		html += '</div>';

		html += '</div>';

		$('main .about .center_small .content .text .data-list').before(html);
	}

	run(){
		this.makeHeader();
		this.setMainImageHeight();
		this.burgerClickInit();
		this.makeNavigation();
		this.closeClickInit();
		this.aboutImages();
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

/* VisiableTracker */
var visiableTracker = new VisiableTracker;
visiableTracker.run();

/* Advantages */
var advantages = new Advantages;
advantages.run();

/* Mobile */
var mobile = new Mobile;
mobile.run();

