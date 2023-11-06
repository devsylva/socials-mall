(function($){"user strict";$(document).ready(function(){$(".loader").delay(1000).fadeOut("slow");$("#overlayer").delay(1000).fadeOut("slow");$('select').niceSelect();background();});$(window).on('load',function(){})
if($('.wow').length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:false,live:true});wow.init();}
function background(){var img=$('.bg_img');img.css('background-image',function(){var bg=('url('+$(this).data('background')+')');return bg;});}
setInterval(function(){$(".banner-group-shape").addClass("active")},1000);var fixed_top=$(".header-section");$(window).on("scroll",function(){if($(window).scrollTop()>500){fixed_top.addClass("animated fadeInDown header-fixed");}
else{fixed_top.removeClass("animated fadeInDown header-fixed");}});var $offerCountdown5=$(".draw-countdown");if($offerCountdown5.length){$offerCountdown5.each(function(){var jc_year=parseInt($(this).attr("data-year"));if(!jc_year)jc_year=1;var jc_month=parseInt($(this).attr("data-month"));if(!jc_month)jc_month=1;var jc_day=parseInt($(this).attr("data-day"));if(!jc_day)jc_day=1;var jc_hour=parseInt($(this).attr("data-hour"));if(!jc_hour)jc_hour=1;$.syotimerLang.neng={second:['seconds','seconds'],minute:['minutes','minutes'],hour:['hours','hours'],day:['day','day'],};$offerCountdown5.syotimer({lang:'neng',year:jc_year,month:jc_month,day:jc_day,hour:jc_hour,minute:59});});}
$(".text-typed").each(function(){var $this=$(this);$this.typed({strings:$this.attr('data-elements').split(','),typeSpeed:100,backDelay:3000});});$(".navbar li a").on("click",function(){var element=$(this).parent("li");if(element.hasClass("show")){element.removeClass("show");element.find("li").removeClass("show");}
else{element.addClass("show");element.siblings("li").removeClass("show");element.siblings("li").find("li").removeClass("show");}});$('.popup-youtube').magnificPopup({type:'video'});$('.image-popup').magnificPopup({type:'image'});var ScrollTop=$(".scrollToTop");$(window).on('scroll',function(){if($(this).scrollTop()<500){ScrollTop.removeClass("active");}else{ScrollTop.addClass("active");}});$(document).on('click','.search-bar, .skip',function(){$('.header-form').toggleClass('active');});$(document).on('click','.ellipsis-bar',function(){$('.header-top-area').toggleClass('active');$('.overlay').addClass('active');})
$(document).on('click','.custom-btn, .close',function(){$('.header-register-form').toggleClass('active');});$(document).on('click','.ellipsis-bar',function(){$('.header-top-area').toggleClass('active');$('.overlay').addClass('active');})
$(document).on('click','.custom-btn--style, .stop',function(){$('.header-login-form').toggleClass('active');});$(document).on('click','.ellipsis-bar',function(){$('.header-top-area').toggleClass('active');$('.overlay').addClass('active');})
$('.header-bar').on('click',function(){$(this).toggleClass('active');$('.header-right').toggleClass('active wow');})
$(document).on('click','.overlay',function(){$(this).removeClass('active');$('.header-bar').removeClass('active');$('.menu').removeClass('active');$('.header-top-area').removeClass('active');})
$('.faq-wrapper .faq-title').on('click',function(e){var element=$(this).parent('.faq-item');if(element.hasClass('open')){element.removeClass('open');element.find('.faq-content').removeClass('open');element.find('.faq-content').slideUp(300,"swing");}else{element.addClass('open');element.children('.faq-content').slideDown(300,"swing");element.siblings('.faq-item').children('.faq-content').slideUp(300,"swing");element.siblings('.faq-item').removeClass('open');element.siblings('.faq-item').find('.faq-title').removeClass('open');element.siblings('.taq-item').find('.faq-content').slideUp(300,"swing");}});$('.faq-wrapper--style .faq-title').on('click',function(e){var element=$(this).parent('.faq-item--style');if(element.hasClass('open')){element.removeClass('open');element.find('.faq-content--style').removeClass('open');element.find('.faq-content--style').slideUp(300,"swing");}else{element.addClass('open');element.children('.faq-content--style').slideDown(300,"swing");element.siblings('.faq-item--style').children('.faq-content--style').slideUp(300,"swing");element.siblings('.faq-item--style').removeClass('open');element.siblings('.faq-item--style').find('.faq-title').removeClass('open');element.siblings('.taq-item--style').find('.faq-content--style').slideUp(300,"swing");}});var swiper=new Swiper('.banner-slider',{slidesPerView:1,spaceBetween:0,loop:true,navigation:{nextEl:'.ruddra-next',prevEl:'.ruddra-prev',},autoplay:{speeds:1000,delay:3000,},breakpoints:{991:{slidesPerView:1,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.card-slider',{slidesPerView:1,spaceBetween:30,loop:true,autoplay:{speeds:1000,delay:4000,},speed:1000,breakpoints:{991:{slidesPerView:1,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.testimonial-wrapper',{slidesPerView:1,spaceBetween:0,centeredSlides:true,loop:true,autoplay:{speeds:2000,delay:4000,},speed:1000,breakpoints:{991:{slidesPerView:1,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.trial-slider',{slidesPerView:1,spaceBetween:30,loop:true,speed:1000,breakpoints:{991:{slidesPerView:1,},767:{slidesPerView:1,},575:{slidesPerView:1,},},pagination:{el:'.custom-pagination',type:'progressbar',},});var swiper=new Swiper('.client-slider',{slidesPerView:3,spaceBetween:30,loop:true,pagination:{el:'.swiper-pagination',clickable:true,},autoplay:{speed:2000,delay:3000,},speed:1000,breakpoints:{991:{slidesPerView:2,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.team-slider',{slidesPerView:4,spaceBetween:30,loop:true,autoplay:{speeds:1000,delay:2000,},speed:1000,breakpoints:{991:{slidesPerView:2,},767:{slidesPerView:2,},575:{slidesPerView:1,},}});var swiper=new Swiper('.work-slider',{slidesPerView:3,spaceBetween:30,loop:true,pagination:{el:'.swiper-pagination',clickable:true,},autoplay:{speeds:1000,delay:2000,},speed:1000,breakpoints:{991:{slidesPerView:2,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.brand-wrapper',{slidesPerView:5,spaceBetween:30,loop:true,autoplay:{speeds:1000,delay:2000,},speed:1000,breakpoints:{991:{slidesPerView:3,},767:{slidesPerView:2,},575:{slidesPerView:2,},}});var swiper=new Swiper('.product-slider',{slidesPerView:3,spaceBetween:30,loop:true,speed:1000,breakpoints:{991:{slidesPerView:2,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.product-wrapper',{slidesPerView:2,spaceBetween:30,loop:true,autoplay:{speeds:1000,delay:2000,},speed:1000,breakpoints:{991:{slidesPerView:2,},767:{slidesPerView:1,},575:{slidesPerView:1,},}});var swiper=new Swiper('.feature-slider',{slidesPerView:4,spaceBetween:0,loop:true,autoplay:{speeds:1000,delay:2000,},speed:1000,breakpoints:{1199:{slidesPerView:3,},991:{slidesPerView:3,},767:{slidesPerView:3,},575:{slidesPerView:2,},}});var $grid=$('.grid').isotope({itemSelector:'.grid-item',masonry:{columnWidth:'.grid-item'}});var $gallery=$(".grid").isotope({});$('.filter-btn-group').on('click','button',function(){var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue});});$('.filter-btn-group').on('click','button',function(){$(this).addClass('active').siblings().removeClass('active');});$('.privacy-sidebar li a').on('click',function(e){var element=$(this).parent('li');if(element.hasClass('open')){element.removeClass('open');element.find('li').removeClass('open');element.find('ul').slideUp(300,"swing");}else{element.addClass('open');element.children('ul').slideDown(300,"swing");element.siblings('li').children('ul').slideUp(300,"swing");element.siblings('li').removeClass('open');element.siblings('li').find('li').removeClass('open');element.siblings('li').find('ul').slideUp(300,"swing");}})
$('#show-pass-one').on('click',function(){var x=document.getElementById("myInput");if(x.type==="password"){x.type="text";}else{x.type="password";}});$('#show-pass-two').on('click',function(){var x=document.getElementById("myInputTwo");if(x.type==="password"){x.type="text";}else{x.type="password";}});$('#show-pass-three').on('click',function(){var x=document.getElementById("myInputThree");if(x.type==="password"){x.type="text";}else{x.type="password";}});$(".progressbar").each(function(){$(this).find(".bar").animate({"width":$(this).attr("data-perc")},8000);$(this).find(".label").animate({"left":$(this).attr("data-perc")},8000);});var w=$(window).width();var MarginTop=(w>1199)?80:0;if($('.sidebar').length){$('.sidebar').theiaStickySidebar({'containerSelector':'.news-section','additionalMarginTop':MarginTop,'minWidth':992,});}
var w=$(window).width();var MarginTop=(w>1199)?80:0;if($('.shop-sidebar').length){$('.shop-sidebar').theiaStickySidebar({'containerSelector':'.shop-details-section','additionalMarginTop':MarginTop,'minWidth':992,});}
if($(".counter-item").length){$(".counter-item").each(function(){$(this).isInViewport(function(status){if(status==="entered"){for(var i=0;i<document.querySelectorAll(".odometer").length;i++){var el=document.querySelectorAll('.odometer')[i];el.innerHTML=el.getAttribute("data-odometer-final");}}});});}
var tabWrapper=$('.faq-tab-wrapper'),tabMnu=tabWrapper.find('.tab-menu li'),tabContent=tabWrapper.find('.tab-cont > .tab-item');tabContent.not(':nth-child(1)').fadeOut(350);tabMnu.each(function(i){$(this).attr('data-tab','tab'+i);});tabContent.each(function(i){$(this).attr('data-tab','tab'+i);});tabMnu.on('click',function(){var tabData=$(this).data('tab');tabWrapper.find(tabContent).fadeOut(350);tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').fadeIn(350);});$('.tab-menu > li').on('click',function(){var before=$('.tab-menu li.active');before.removeClass('active');$(this).addClass('active');});var tabWrapper=$('.shop-tab-wrapper'),tabMnu=tabWrapper.find('.tab-menu li'),tabContent=tabWrapper.find('.tab-cont > .tab-item');tabContent.not(':nth-child(1)').fadeOut(10);tabMnu.each(function(i){$(this).attr('data-tab','tab'+i);});tabContent.each(function(i){$(this).attr('data-tab','tab'+i);});tabMnu.on('click',function(){var tabData=$(this).data('tab');tabWrapper.find(tabContent).fadeOut(10);tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').fadeIn(10);});$('.tab-menu > li').on('click',function(){var before=$('.tab-menu li.active');before.removeClass('active');$(this).addClass('active');});$('.v-open-btn').on('click',function(){$('.version-change-area').toggleClass('active');});$('.remove-cart').on('click',function(e){e.preventDefault();$(this).parent().parent().hide(300);});$('#cart-button').on('click',function(e){e.preventDefault();$('.cart-sidebar-area').addClass('active');$('.body-overlay').addClass('active');});$('#body-overlay').on('click',function(e){e.preventDefault();$('.cart-sidebar-area').removeClass('active');$('.body-overlay').removeClass('active');});$('.side-sidebar-close-btn').on('click',function(e){e.preventDefault();$('.cart-sidebar-area').removeClass('active');$('.body-overlay').removeClass('active');});$(".search-bar a").on('click',function(){$('.header-top-search-area').toggleClass('active');});var $circleCursor=$('.cursor');function moveCursor(e){var t=e.clientX+"px",n=e.clientY+"px";TweenMax.to($circleCursor,.2,{left:t,top:n,ease:'Power1.easeOut'});}
$(window).on('mousemove',moveCursor);function zoomCursor(e){TweenMax.to($circleCursor,.1,{scale:3,ease:'Power1.easeOut'});$($circleCursor).removeClass('cursor-close');}
$('a, .zoom-cursor').on('mouseenter',zoomCursor);function closeCursor(e){TweenMax.to($circleCursor,.1,{scale:3,ease:'Power1.easeOut'});$($circleCursor).addClass('cursor-close');}
$('.trigger-close').on('mouseenter',closeCursor);function defaultCursor(e){TweenLite.to($circleCursor,.1,{scale:1,ease:'Power1.easeOut'});$($circleCursor).removeClass('cursor-close');}
$('a, .zoom-cursor, .trigger-close, .trigger-plus').on('mouseleave',defaultCursor);if($('.countdown').length){$('.countdown').syotimer({year:2020,month:3,day:9,hour:20,minute:30});}
$(window).on('load',function(){galleryMasonaryTwo();})
function galleryMasonaryTwo(){var $grid=$(".grid");var filterFns={};$grid.isotope({itemSelector:'.grid-item',masonry:{columnWidth:0,}});$('ul.filter').on('click','li',function(){var filterValue=$(this).attr('data-filter');filterValue=filterFns[filterValue]||filterValue;$grid.isotope({filter:filterValue});});$('ul.filter').each(function(i,buttonGroup){var $buttonGroup=$(buttonGroup);$buttonGroup.on('click','li',function(){$buttonGroup.find('.active').removeClass('active');$(this).addClass('active');});});}})(jQuery);