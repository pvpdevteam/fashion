(function ($) {

    "use strict";
	
function isTouchDevice() {
	    return typeof window.ontouchstart != "undefined" ? true : false
	}

function TopSlider() {
	    var k1 = 0.5;
	    var k2 = 0.6;
	    var w0 = jQuery(window).width();
	    if (w0 > 1600) {
	        k2 = 0.55
	    }
	    var w2 = w0 * k1;
	    var w1 = w0 * k2;
	    var w3 = (w0 - jQuery(".container").width()) * 0.5;
	    var h1 = w2 / 1.9;
	    if (h1 < 235) {
	        h1 = 235;
	    }
	    jQuery("#slider_top").css({
	        "height": h1 + "px"
	    });
	    jQuery("#slider_top").css({
	        "width": w0 + "px"
	    });
	    jQuery("#carousel1 li").css({
	        "width": w0 + "px"
	    });
	    jQuery(".overlap_widget_wrapper").css({
	        "width": w0 + "px"
	    });
	    jQuery("#slider_top a.callbacks_nav.next").css({
	        "right": w3 + "px",
	        "top": h1 * 0.5 - jQuery("#slider_top a.callbacks_nav.next").height() * 0.5 + "px"
	    });
	    jQuery("#slider_top a.callbacks_nav.prev").css({
	        "left": w3 + "px",
	        "top": h1 * 0.5 - jQuery("#slider_top a.callbacks_nav.next").height() * 0.5 + "px"
	    });
	    jQuery("#carousel1 .overlap_widget_wrapper .left_image .title").css({
	        "left": w3 + "px"
	    });
	    jQuery("#carousel1 .overlap_widget_wrapper .right_image .title").css({
	        "right": w3 + "px"
	    });
	    jQuery(".overlap_widget_wrapper .left_image").css({
	        "width": w1 + "px"
	    });
	    jQuery(".overlap_widget_wrapper .left_image .placeholder").css({
	        "width": w2 + "px"
	    });
	    jQuery(".overlap_widget_wrapper .right_image").css({
	        "width": w1 + "px"
	    });
	    jQuery(".overlap_widget_wrapper .right_image .placeholder").css({
	        "width": w2 + "px"
	    });
	    jQuery("#back-top").css({
	        "bottom": jQuery("#footer").height() + 150 + "px"
	    });
	    var is_open = false;
	    var z_index = 0;
	    jQuery(".placeholder").mouseenter(function() {
	        is_open = true;
	        jQuery(this).parent().css({
	            "zIndex": "999"
	        });
	        jQuery(this).stop().animate({
	            "width": w1 + "px"
	        }, 550, 'easeOutQuad');
	    });
	    jQuery(".placeholder").mouseleave(function() {
	        is_open = false;
	        z_index++;
	        jQuery(this).parent().css({
	            "zIndex": z_index
	        });
	        jQuery(this).stop().animate({
	            "width": w2 + "px"
	        }, 550, 'easeOutQuad');
	    });
};

function GalleryZoom(windowWidth) {
	    // remove elevateZoom
	    jQuery.removeData(jQuery("#zoom-big-image img"), 'elevateZoom');
	    if (jQuery("#zoom-big-image img").parent('.zoomWrapper').length > 0) {
	        zoom_img = jQuery("#zoom-big-image img").clone();
	        jQuery("#zoom-big-image > .zoomWrapper").replaceWith(zoom_img);
	    }
	    jQuery('.zoomContainer').each(function() {
	        jQuery(this).remove();
	    })
	    var zoomType = 'window';
	    if (windowWidth < 768) {
	        zoomType = 'inner'
	    }
	    jQuery("#zoom-big-image img").elevateZoom({
	        responsive: true,
	        easing: false,
	        gallery: 'zoom-gallery-outer',
	        cursor: "crosshair",
	        borderSize: 1,
	        showLens: true,
	        borderColour: "#ccc",
	        zoomWindowOffetx: 30,
	        galleryActiveClass: 'active',
	        zoomType: zoomType
	    });
}

jQuery(document).ready(function() {

		jQuery("#mmenu").hide();
		jQuery("#mmenu li ul").hide();
		jQuery(".mtoggle").click(function() {
			jQuery("#mmenu").slideToggle(500);
		});
		jQuery("#mmenu .content-link").click(function() {
			jQuery(this).next('ul').slideToggle(500);
		});

	    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

	    var slide = false;
	    jQuery('#footer_button').click(function() {
			var top =jQuery(this).offset().top;
	        jQuery('#footer_higher_content').slideToggle(300);
			setTimeout(function () {
        	jQuery("html, body").animate({scrollTop: top}, 1000);
            }, 300)	    });
			
	    jQuery("#select1").selectbox();
	    jQuery("#select2").selectbox();
	    jQuery("#select3").selectbox();
	    jQuery("select.custom").selectbox();
	    jQuery(".megamenu").megamenu();
	    jQuery("#back-top").hide();
	    jQuery(function() {
	        jQuery(window).scroll(function() {
	            if (jQuery(this).scrollTop() > 600) {
	                jQuery('#back-top').fadeIn();
	            } else {
	                jQuery('#back-top').fadeOut();
	            }
	        });
	        jQuery('#back-top a').click(function() {
	            jQuery('body,html').animate({
	                scrollTop: 0
	            }, 400);
	            return false;
	        });
	    });

var set_reset_tab=function (tab) {
    jQuery('#bestsellers_activate,#specials_activate,#newproducts_activate').removeClass('active_slider');
    tab.addClass('active_slider');
}


    jQuery('#bestsellers_activate').click(function() {
        jQuery('#bestsellers_slider').show();
        jQuery('#newproducts_slider').hide();
        jQuery('#specials_slider').hide();
        set_reset_tab(jQuery(this));

    });

    jQuery('#specials_activate').click(function() {
        jQuery('#specials_slider').show();
        jQuery('#newproducts_slider').hide();
        jQuery('#bestsellers_slider').hide();

        set_reset_tab(jQuery(this));

    });

    jQuery('#newproducts_activate').click(function() {
        jQuery('#newproducts_slider').show();
        jQuery('#bestsellers_slider').hide();
        jQuery('#specials_slider').hide();

        set_reset_tab(jQuery(this));

    });

		
	    jQuery("#carousel1").responsiveSlides({
	        pager: false,
	        nav: true,
	        speed: 1000,
	        auto: true,
	        timeout: 3600,
	        namespace: "callbacks",
	    });
	    jQuery('#carousel').elastislide({
	        easing: 'easeInOutQuad',
	        speed: 1200
	    });
		jQuery('#carousel_bestsellers').elastislide({
			easing		: 'easeInOutQuad',
			speed		: 1200
			});
			
			jQuery('#carousel_specials').elastislide({
			easing		: 'easeInOutQuad',
			speed		: 1200
			});
			
			jQuery('#carousel_newproducts').elastislide({
			easing		: 'easeInOutQuad',
			speed		: 1200
			});
		 jQuery('.tabs-slider-content > div').hide();
		 jQuery('.tabs-slider-content > div:first-child').show();
	    jQuery('#slider_top a.callbacks_nav').hover(function() {
	            jQuery(this).stop().animate({
	                opacity: 1.0
	            }, 500);
	        },
	        function() {
	            jQuery(this).stop().animate({
	                opacity: 0.6
	            }, 500);
	        });
	    jQuery(" #shopping_cart_mini a.button-delete").click(function() {
	        jQuery("#shopping_cart_mini").fadeToggle(300, "linear");
	    });
	    jQuery(".shopping_cart a.open").click(function() {
	        jQuery("#shopping_cart_mini").fadeToggle(300, "linear");
	    });
		
					
			jQuery(".product").hover(function() {
				jQuery(this).find(".roll_over_img").fadeToggle("fast", "linear");
				jQuery(this).find(".product-image-wrapper-hover").fadeToggle("fast", "linear");
				jQuery(this).find(".wrapper-hover-hidden").fadeToggle(500, "linear");
			});

			jQuery(".product").hover(function() {
				jQuery(this).find(".wrapper-hover span").animate({color:"#fff"}, 300);
				jQuery(this).find(".wrapper-hover a").animate({color:"#fff"}, 500);
				jQuery(this).find(".wrapper-hover").animate({ backgroundColor: "#444444" }, 500);
			},function() {
				jQuery(this).find(".wrapper-hover span").animate({color:"#222"}, 500);
				jQuery(this).find(".wrapper-hover a").animate({color:"#222"}, 500);
				jQuery(this).find(".wrapper-hover").animate({ backgroundColor: "#fff" }, 500);
			});


		jQuery('#back-top a').hover(function() {
	            jQuery(this).stop().animate({
	                opacity: 1.0
	            }, 500);
	        },
	        function() {
	            jQuery(this).stop().animate({
	                opacity: 0.4
	            }, 500);
	        });

	    jQuery('.qty_minus').click(function() {
	        var jQueryinput = jQuery(this).parent().find('input');
	        var count = parseInt(jQueryinput.val()) - 1;
	        count = count < 1 ? 1 : count;
	        jQueryinput.val(count);
	        jQueryinput.change();
	        return false;
	    });
	    jQuery('.qty_plus').click(function() {
	        var jQueryinput = jQuery(this).parent().find('input');
	        jQueryinput.val(parseInt(jQueryinput.val()) + 1);
	        jQueryinput.change();
	        return false;
	    });
	    jQuery('ul#tab_nav li a').click(function() {
	        jQuery('ul#tab_nav li').removeClass('active');
	        jQuery(this).parent().addClass('active');
	        var tabhref = jQuery(this).attr('href');
	        jQuery('div.tab').hide();
	        jQuery(tabhref).fadeIn();
	        return false;
	    });
	    jQuery("table.striped tr:odd").addClass("odd");
		if (jQuery(".pretty-photo-item").length > 0 ){
			jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
				hook: 'data-gal',
				social_tools: false,
				overlay_gallery: false
			});
		}
	    if (jQuery(".parallax").length > 0 && !isTouchDevice()) {
	        jQuery(".parallax").parallax({
	            speed: 0,
	            axis: "y"
	        });
	    }

	    var brandsCarousel = jQuery(".brands .brands-carousel ul");
	    var brandsCarouselMax = 6;

		if (brandsCarousel.length > 0 ){
			brandsCarousel.carouFredSel({
				responsive: true,
				width: '100%',
				scroll: 1,
				prev: '#brands-carousel-prev',
				next: '#brands-carousel-next',
				items: {
					width: 120,
					height: '30%', //	optionally resize item-height
					visible: {
						min: 1,
						max: brandsCarouselMax
					}
				}
			});
		}

	    var blogCarousel = jQuery(".from-blog .carousel ul");
	    var blogCarouselMax = 2;

		if (blogCarousel.length > 0 ){
			blogCarousel.carouFredSel({
				responsive: true,
				width: '100%',
				scroll: 1,
				prev: '#blog-carousel-prev',
				next: '#blog-carousel-next',
				items: {
					width: 400,
					visible: {
						min: 1,
						max: blogCarouselMax
					}
				}
			});
		}

		  $('#select_main_nav select').bind('change', function () {
			  var url = $(this).val(); // get selected value
			  if (url) { // require a URL
				  window.location = url; // redirect
			  }
			  return false;
		  });
		  
	    GalleryZoom(windowWidth);
	    TopSlider();

});
jQuery(window).resize(function() {
	    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
	    TopSlider();
})
})(jQuery);