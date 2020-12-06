/*
 * Version: 2.1.2
 * File Description: Initializations of plugins
 */
(function($) {

	// USE STRICT
	"use strict";

	$(document).ready(function() {

		if ($('.boxed .fullscreen-bg').length>0) {
			$("body").addClass("transparent-page-wrapper");
		};

		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		if ($(window).width() > 975) {
		$('.main-navigation:not(.onclick) .navbar-nav>li.dropdown, .main-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
			function() {
				$(this).addClass('show');
				$(this).find('>.dropdown-menu').addClass('show');
			}, function() {
				$(this).removeClass('show');
				$(this).find('>.dropdown-menu').removeClass('show');
			});
		};

		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if ($(window).width() < 974 || $(".main-navigation.onclick").length>0 ) {
			$('.header [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
				event.preventDefault();
				event.stopPropagation();
				$(this).parent().siblings().removeClass('show');
				$(this).parent().siblings().find('.dropdown-menu').removeClass('show');
				$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('show');
				$(this).parent().toggleClass('show');
				$(this).siblings('.dropdown-menu').toggleClass('show');
			});
		};

		//Transparent Header Calculations
		if ($(".transparent-header").length>0) {
			(function(){
				var trHeaderHeight;
				$(window).on('load', function (e) {
					trHeaderHeight = $("header.header").outerHeight();
					$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
				});
				var headerTopHeightResize = $(".header-top").outerHeight();
				$(window).resize(function() {
					if ($(this).scrollTop()  < headerTopHeightResize + trHeaderHeight -5) {
						trHeaderHeight = $("header.header").outerHeight();
						$(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
					}
				});
			})();
		}

		if ($(".transparent-header .slideshow").length>0 || $(".transparent-header .hc-slideshow").length>0) {
			$(".header-container header.header").addClass("transparent-header-on");
		} else {
			$(".header-container header.header").removeClass("transparent-header-on");
		}

		//Full Width Slider with Transparent Header Calculations
		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0) {
			if ($(window).width() < 991) {
				$("body").removeClass("transparent-header");
				$(".header-container header.header").removeClass("transparent-header-on");
				$(".tp-bannertimer").css("marginTop", "0px");
				$("body").addClass("slider-banner-fullwidth-big-height-removed");
			} else {
				$("body").addClass("transparent-header");
				$(".header-container header.header").addClass("transparent-header-on");
				$("body").removeClass("slider-banner-fullwidth-big-height-removed");
			}
		};

		if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0 || $(".slider-banner-fullwidth-big-height-removed").length>0) {
			$(window).resize(function() {
				if ($(window).width() < 991) {
					$("body").removeClass("transparent-header");
					$(".header-container header.header").removeClass("transparent-header-on");
					$(".tp-bannertimer").css("marginTop", "0px");
				} else {
					$("body").addClass("transparent-header");
					$(".header-container header.header").addClass("transparent-header-on");
				}
			});
		};

		//Mega menu fixed width
		if ($('html[dir="ltr"] .container .mega-menu--wide').length>0 && $(window).width() > 971) {
			(function(){
				var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
				headerFirstLeft = parseInt($('.header-first').offset().left),
				megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
				$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
				$(window).resize(function() {
					var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
					headerFirstLeft = parseInt($('.header-first').offset().left),
					megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
					$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
				});
			})();
		}
		if ($('html[dir="rtl"] .container .mega-menu--wide').length>0 && $(window).width() > 971) {
			(function(){
				var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
				headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
				headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
				megaMenuRightPosition = headerSecondRight - headerFirstRight;
				$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
				$(window).resize(function() {
					var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
					headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
					headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
					megaMenuRightPosition = headerSecondRight - headerFirstRight;
					$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
				});
			})();
		}

		//Mega menu full width
		if ($('html[dir="ltr"] .container-fluid .mega-menu--wide').length>0 && $(window).width() > 971) {
			(function(){
				var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
				headerFirstLeft = parseInt($('.header-first').offset().left),
				megaMenuLeftPosition = headerFirstLeft - headerSecondLeft,
				megaMenuWidth = parseInt($('.header .container-fluid').width());
				$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
				$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
				$(window).resize(function() {
					var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15),
					headerFirstLeft = parseInt($('.header-first').offset().left),
					megaMenuLeftPosition = headerFirstLeft - headerSecondLeft,
					megaMenuWidth = parseInt($('.header .container-fluid').width());
					$('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
					$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
				});
			})();
		}
		if ($('html[dir="rtl"] .container-fluid .mega-menu--wide').length>0 && $(window).width() > 971) {
			(function(){
				var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
				headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
				headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
				megaMenuRightPosition = headerSecondRight - headerFirstRight;
				megaMenuWidth = parseInt($('.header .container-fluid').width());
				$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
				$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
				$(window).resize(function() {
					var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent(),
					headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth()),
					headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15),
					megaMenuRightPosition = headerSecondRight - headerFirstRight;
					megaMenuWidth = parseInt($('.header .container-fluid').width());
					$('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
					$('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
				});
			})();
		}

		//Revolution Slider 5
		if ($(".slider-revolution-5-container").length>0) {
			$(".tp-bannertimer").show();

			$('body:not(.transparent-header) .slider-revolution-5-container .slider-banner-fullscreen').revolution({
				sliderType:"standard",
				sliderLayout:"fullscreen",
				delay:9000,
				autoHeight:"on",
				responsiveLevels:[1199,991,767,480],
				fullScreenOffsetContainer: ".header-container, .offset-container",
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				},
				gridwidth:1140,
				gridheight:750
			});
			$('.transparent-header .slider-revolution-5-container .slider-banner-fullscreen').revolution({
				sliderType:"standard",
				sliderLayout:"fullscreen",
				delay:9000,
				autoHeight:"on",
				responsiveLevels:[1199,991,767,480],
				fullScreenOffsetContainer: ".header-top, .offset-container",
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				},
				gridwidth:1140,
				gridheight:750
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth').revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:8000,
				gridwidth:1140,
				gridheight:450,
				responsiveLevels:[1199,991,767,480],
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth-big-height').revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:8000,
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-boxedwidth').revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:8000,
				gridwidth:1140,
				gridheight:450,
				responsiveLevels:[1199,991,767,480],
				shadow: 1,
				navigation: {
					onHoverStop: "off",
					arrows: {
						style: "hebe",
						enable:true,
						tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span></div>',
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0,
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					},
					bullets:{
						style:"",
						enable:true,
						hide_onleave:true,
						direction:"horizontal",
						space: 3,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20
					}
				}
			});
			$('.slider-revolution-5-container .slider-banner-fullscreen-hero:not(.dotted)').revolution({
				sliderType:"hero",
				sliderLayout:"fullscreen",
				autoHeight:"on",
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				delay: 9000,
				fullScreenOffsetContainer: ".header-top, .offset-container"
			});
			$('.slider-revolution-5-container .slider-banner-fullscreen-hero.dotted').revolution({
				sliderType:"hero",
				sliderLayout:"fullscreen",
				autoHeight:"on",
				gridwidth:1140,
				gridheight:650,
				dottedOverlay:"twoxtwo",
				delay: 9000,
				responsiveLevels:[1199,991,767,480],
				fullScreenOffsetContainer: ".header-top, .offset-container"
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth-hero:not(.dotted)').revolution({
				sliderType:"hero",
				sliderLayout:"fullwidth",
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				delay: 9000
			});
			$('.slider-revolution-5-container .slider-banner-fullwidth-hero.dotted').revolution({
				sliderType:"hero",
				sliderLayout:"fullwidth",
				gridwidth:1140,
				gridheight:650,
				responsiveLevels:[1199,991,767,480],
				delay: 9000,
				dottedOverlay:"twoxtwo"
			});
			$('.slider-revolution-5-container .slider-banner-carousel').revolution({
				sliderType:"carousel",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:5000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					arrows: {
						style:"erinyen",
						enable:true,
						hide_onmobile:false,
						hide_onleave:false,
						tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:30,
								v_offset:0
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
					},
					thumbnails: {
						style:"",
						enable:true,
						width:160,
						height:120,
						min_width:100,
						wrapper_padding:30,
						wrapper_color:"#373737",
						wrapper_opacity:"1",
						tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
						visibleAmount:9,
						hide_onmobile:false,
						hide_onleave:false,
						direction:"horizontal",
						span:true,
						position:"outer-bottom",
						space:20,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:0
					}
				},
				carousel: {
					maxRotation: 65,
					vary_rotation: "on",
					minScale: 55,
					vary_scale: "off",
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					vary_fade: "on",
					maxVisibleItems: 5,
					infinity: "off",
					space: -150,
					stretch: "off"
				},
				visibilityLevels:[1240,1024,778,480],
				gridwidth:600,
				gridheight:600,
				lazyType:"none",
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				shadow: 0
			});
			$('.slider-revolution-5-container .slider-banner-carousel-2').revolution({
				sliderType:"carousel",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"on",
					tabs: {
						style:"gyges",
						enable:true,
						width:220,
						height:80,
						min_width:220,
						wrapper_padding:0,
		                wrapper_color:"transparent",
						tmp:'<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{title}}</span></div><div class="tp-tab-image"></div>',
						visibleAmount: 6,
						hide_onmobile: true,
						hide_under:1240,
						hide_onleave:true,
						hide_delay:200,
						direction:"vertical",
						span:true,
						position:"inner",
						space:0,
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				},
				carousel: {
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					maxVisibleItems: 5,
					infinity: "on",
					space: 0,
					stretch: "off",
					showLayersAllTime: "off",
					easing: "Power3.easeInOut",
					speed: "800"
				},
				responsiveLevels:[1199,991,767,575],
				visibilityLevels:[1199,991,767,575],
				gridwidth:[800,700,500,500],
				gridheight:[600,600,500,500],
				lazyType:"single",
				shadow:0,
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0
			});
		};

		//Slick carousel
		//-----------------------------------------------
		if ($('.slick-carousel').length>0) {
			$("*[dir='ltr'] .slick-carousel.carousel").slick({
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
			$("*[dir='rtl'] .slick-carousel.carousel").slick({
				rtl: true,
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
			$("*[dir='ltr'] .slick-carousel.carousel-autoplay").slick({
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
			$("*[dir='rtl'] .slick-carousel.carousel-autoplay").slick({
				rtl: true,
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
			$("*[dir='ltr'] .slick-carousel.clients").slick({
				arrows: false,
				slidesToShow: 6,
				slidesToScroll: 6,
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 6
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					}
				]
			});
			$("*[dir='rtl'] .slick-carousel.clients").slick({
				rtl: true,
				arrows: false,
				slidesToShow: 6,
				slidesToScroll: 6,
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 6
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					}
				]
			});
			$("*[dir='ltr'] .slick-carousel.content-slider").slick({
				autoplay: true,
				autoplaySpeed: 5000,
				arrows: false
			});
			$("*[dir='rtl'] .slick-carousel.content-slider").slick({
				autoplay: true,
				autoplaySpeed: 5000,
				arrows: false,
				rtl: true
			});
			$("*[dir='ltr'] .slick-carousel.content-slider-with-controls").slick({
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>'
			});
			$("*[dir='rtl'] .slick-carousel.content-slider-with-controls").slick({
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>',
				rtl: true
			});
			$("*[dir='ltr'] .slick-carousel.content-slider-with-large-controls").slick({
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>'
			});
			$("*[dir='rtl'] .slick-carousel.content-slider-with-large-controls").slick({
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>',
				rtl: true
			});
			$("*[dir='ltr'] .slick-carousel.content-slider-with-controls-autoplay").slick({
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>'
			});
			$("*[dir='rtl'] .slick-carousel.content-slider-with-controls-autoplay").slick({
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>',
				rtl: true
			});
			$("*[dir='ltr'] .slick-carousel.content-slider-with-large-controls-autoplay").slick({
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>'
			});
			$("*[dir='rtl'] .slick-carousel.content-slider-with-large-controls-autoplay").slick({
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				nextArrow: '<button type="button" class="slick-next">Next</button>',
				prevArrow: '<button type="button" class="slick-prev">Prev</button>',
				rtl: true
			});

			if ($("*[dir='ltr']").length>0) {
				$('.slick-carousel.content-slider-with-thumbs').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '.slick-carousel.content-slider-thumbs'
				});
				$('.slick-carousel.content-slider-thumbs').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.slick-carousel.content-slider-with-thumbs',
					arrows: false,
						focusOnSelect: true
				});
			} else {
				$('.slick-carousel.content-slider-with-thumbs').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '.slick-carousel.content-slider-thumbs',
					rtl: true
				});
				$('.slick-carousel.content-slider-thumbs').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.slick-carousel.content-slider-with-thumbs',
					arrows: false,
					rtl: true,
						focusOnSelect: true
				});
			}
		};

		// Fixed header
		//-----------------------------------------------
		if ($(".object-non-visible").length>0) {
			if (($(".header.fixed.fixed-desktop").length > 0) && ($(window).width() > 1000)) {
				(function(){
					var sticky = new Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'object-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
			if ($(".header.fixed.fixed-all").length > 0) {
				(function(){
					var sticky = new Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'object-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
		} else {
			if (($(".header.fixed.fixed-desktop").length > 0) && ($(window).width() > 1000)) {
				(function(){
					var sticky = new Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'hc-element-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
			if ($(".header.fixed.fixed-all").length > 0) {
				(function(){
					var sticky = new Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'hc-element-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
		}

		// Charts
		//-----------------------------------------------
		if ($(".graph").length>0) {
			// Creates random numbers you don't need this for real graphs
			var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

			if ($(".graph.line").length>0) {
				(function(){
					// Data for line charts
					var lineChartData = {
						labels: ["January", "February", "March", "April", "May", "June", "July"],
						datasets: [
						{
							label: "My First dataset",
							fill: false,
							lineTension: 0.1,
							backgroundColor: "rgba(75,192,192,0.4)",
							borderColor: "rgba(75,192,192,1)",
							borderCapStyle: 'butt',
							borderDash: [],
							borderDashOffset: 0.0,
							borderJoinStyle: 'miter',
							pointBorderColor: "rgba(75,192,192,1)",
							pointBackgroundColor: "#fff",
							pointBorderWidth: 1,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "rgba(75,192,192,1)",
							pointHoverBorderColor: "rgba(220,220,220,1)",
							pointHoverBorderWidth: 2,
							pointRadius: 1,
							pointHitRadius: 10,
							data: [65, 59, 80, 81, 56, 55, 40],
							spanGaps: false,
						}
						]
					};

					// Line Charts Initialization
					var ctx = document.getElementById("lines-graph").getContext("2d");
					var LineChart = new Chart(ctx, {
						type: 'line',
						data: lineChartData,
						responsive: true,
						bezierCurve : false
					});
				})();
			}
			if ($(".graph.bar").length>0) {
				(function(){
					// Data for bar charts
					var barChartData = {
						labels: ["January", "February", "March", "April", "May", "June", "July"],
						datasets: [
						{
							label: "My First dataset",
							backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
							],
							borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
							],
							borderWidth: 1,
							data: [65, 59, 80, 81, 56, 55, 40],
						}
						]
					};

					// Bar Charts Initialization
					var ctx = document.getElementById("bars-graph").getContext("2d");
					var BarChart = new Chart(ctx, {
						type: 'bar',
						data: barChartData,
						responsive : true
					});
				})();
			}
			if ($(".graph.pie").length>0) {
				(function(){
					// Data for pie chart
					var pieData = {
						labels: [
						"Red",
						"Blue",
						"Yellow"
						],
						datasets: [
						{
							data: [300, 50, 100],
							backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
							],
							hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
							]
						}]
					};

					// Pie Chart Initialization
					var ctx = document.getElementById("pie-graph").getContext("2d");
					var PieChart = new Chart(ctx,{
						type: 'pie',
						data: pieData
					});
				})();
			}
			if ($(".graph.doughnut").length>0) {
				(function(){
					// Data for doughnut chart
					var doughnutData = {
						labels: [
						"Red",
						"Blue",
						"Yellow"
						],
						datasets: [
						{
							data: [300, 50, 100],
							backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
							],
							hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
							]
						}]
					};

					// Doughnut Chart Initialization
					var ctx = document.getElementById("doughnut-graph").getContext("2d");
					var DoughnutChart = new Chart(ctx, {
						type: 'doughnut',
						data: doughnutData,
						responsive : true
					});
				})();
			}
		};

		// Magnific popup
		//-----------------------------------------------
		if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0) || $(".slick-carousel--popup-img").length > 0) {
			$(".popup-img").magnificPopup({
				type:"image",
				gallery: {
					enabled: true,
				}
			});
			if ($(".slick-carousel--popup-img").length > 0) {
				$(".slick-carousel").each(function() {
					$(this).find(".slick-slide:not(.slick-cloned) .slick-carousel--popup-img").magnificPopup({
						type:"image",
						gallery: {
							enabled: true,
						}
					});
				});
			}
			$(".popup-img-single").magnificPopup({
				type:"image",
				gallery: {
					enabled: false,
				}
			});
			$('.popup-iframe').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				preloader: false,
				fixedContentPos: false
			});
		};

		// Animations
		//-----------------------------------------------
		if ($(".object-non-visible").length>0) {
			if ($("[data-animation-effect]").length>0) {
				$("[data-animation-effect]").each(function() {
					var waypoints = $(this).waypoint(function(direction) {
						var animatedObject;
						animatedObject = $(this.element);
						animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
						this.destroy();
					},{
						offset: '90%'
					});
				});
			};
		} else {
			if ($("[data-animation-effect]").length>0) {
				$("[data-animation-effect]").each(function() {
					var waypoints = $(this).waypoint(function(direction) {
						var animatedObject;
						animatedObject = $(this.element);
						animatedObject.addClass('animated hc-element-visible ' + animatedObject.attr("data-animation-effect"));
						this.destroy();
					},{
						offset: '90%'
					});
				});
			};
		}

		// Text Rotators
		//-----------------------------------------------
		if ($(".text-rotator").length>0) {
			var typed = new Typed('#text-rotator', {
				stringsElement: '#text-rotator-text',
				typeSpeed: 40,
				backSpeed: 30,
				backDelay: 4000,
				smartBackspace: true,
				loop: true
			});
		};

		// Stats Count To
		//-----------------------------------------------
		if ($(".stats [data-to]").length>0) {
			$(".stats [data-to]").each(function() {
				var waypoints = $(this).waypoint(function(direction) {
					var countingObject;
					countingObject = $(this.element);
					countingObject.countTo();
					this.destroy();
				},{
					offset: '95%'
				});
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0 || $('.isotope-container-fitrows').length>0) {
			$('.masonry-grid').isotope({
				itemSelector: '.masonry-grid-item',
				layoutMode: 'masonry'
			});
			$('.masonry-grid-fitrows').isotope({
				itemSelector: '.masonry-grid-item',
				layoutMode: 'fitRows'
			});
			$('.isotope-container').fadeIn();
			var $container = $('.isotope-container').imagesLoaded( function() {
				$container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
			});
			$('.isotope-container-fitrows').fadeIn();
			var $container_fitrows = $('.isotope-container-fitrows').imagesLoaded( function() {
				$container_fitrows.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'fitRows',
					transitionDuration: '0.6s',
					filter: "*"
				});
			});
			// filter items on button click
			$('.filters').on( 'click', 'ul.nav li a', function() {
				var filterValue = $(this).attr('data-filter');
				$(".filters").find("li .active").removeClass("active");
				$(this).addClass("active");
				$container.isotope({ filter: filterValue });
				$container_fitrows.isotope({ filter: filterValue });
				return false;
			});
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				$('.tab-pane .masonry-grid-fitrows').isotope({
					itemSelector: '.masonry-grid-item',
					layoutMode: 'fitRows'
				});
			});
		};

		// Animated Progress Bars
		//-----------------------------------------------
		if ($("[data-animate-width]").length>0) {
			$("[data-animate-width]").each(function() {
				var waypoints = $(this).waypoint(function(direction) {
					$(this.element).animate({width: parseInt($(this.element).attr("data-animate-width")) + '%'}, 800 );
					this.destroy();
				},{
					offset: '90%'
				});
			});
		};

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").addClass("fadeToTop");
				$(".scrollToTop").removeClass("fadeToBottom");
			} else {
				$(".scrollToTop").removeClass("fadeToTop");
				$(".scrollToTop").addClass("fadeToBottom");
			}
		});

		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

		// Pricing tables popovers
		//-----------------------------------------------
		if ($(".pricing-tables").length>0) {
			$(".plan .pt-popover").popover({
				trigger: 'hover',
				container: 'body'
			});
		};

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			if($(".fixed.header").length>0) {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			if($(".header.fixed").length>0) {
				$( ".smooth-scroll a, a.smooth-scroll" ).on( "click", function(e) {
					var destination = $(this.hash);
					e.preventDefault();
					$('html,body').animate({
						scrollTop: destination.offset().top-66
					}, 1000);
				});
			} else {
				$( ".smooth-scroll a, a.smooth-scroll" ).on( "click", function(e) {
					var destination = $(this.hash);
					e.preventDefault();
					$('html,body').animate({
						scrollTop: destination.offset().top
					}, 1000);
				});
			}
		}

		// Offcanvas side navbar
		//-----------------------------------------------
		if ($("#offcanvas").length>0) {
			$('#offcanvas').offcanvas({
				canvas: "body",
				disableScrolling: false,
				toggle: false
			});
		};

		// Notify Plugin
		//-----------------------------------------------
		if ($(".btn-alert").length>0){
			$(".btn-alert").on('click', function(event) {
				$.notify({
					// options
					// before putting here dynamic content (e.g content from a user input) please read https://github.com/mouse0270/bootstrap-notify/issues/53
					message: 'Great! you have just created this message :-) you can configure this into the template.js file'
				},{
					// settings
					type: 'info',
					delay: 4000,
					offset : {
						y: 100,
						x: 20
					}
				});
				return false;
			});
		};

		// Remove Button
		//-----------------------------------------------
		$(".btn-remove").click(function() {
			$(this).closest(".remove-data").remove();
		});

		// Shipping Checkbox
		//-----------------------------------------------
		if ($("#shipping-info-check").is(':checked')) {
			$("#shipping-information").hide();
		}
		$("#shipping-info-check").change(function(){
			if ($(this).is(':checked')) {
				$("#shipping-information").slideToggle();
			} else {
				$("#shipping-information").slideToggle();
			}
		});

		// Full Width Image Overlay
		//-----------------------------------------------
		if ($(".full-image-overlay").length>0) {
			(function(){
				var overlayHeight = $(".full-image-overlay").outerHeight();
				$(".full-image-overlay").css("marginTop",-overlayHeight/2);
			})();
		};

		//This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes (Header Top).
		//-----------------------------------------------
		$('.header-top .dropdown-menu input').click(function(e) {
			e.stopPropagation();
		});

	});

})(jQuery);

if (jQuery(".btn-print").length>0) {
	function print_window() {
		var mywindow = window;
		mywindow.document.close();
		mywindow.focus();
		mywindow.print();
		mywindow.close();
	}
}