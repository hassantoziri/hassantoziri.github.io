jQuery(document).ready(function () {
    "use strict";

    /*======================================
     Site Header
     ======================================*/

    if (window.location.hash) {
        $(".sub-page").hide();
        $('.web-nav-menu li a').removeClass('active');
        $('section' + window.location.hash + ':first').show();
    }

    if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:true,
            margin:30,
            nav:false,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            autoplayTimeout:10000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });         
    }

    $('#web-nav-menu li a, .home-buttons a, .pricing-table .btn').on("click", function (e) {
        if ($(e.target).is('.web-nav-menu a, .home-buttons a, .pricing-table .btn')) {
            $('.web-nav-menu li a').removeClass('active');
            $(this).addClass('active');
            $(".sub-page").hide();
            var target = $(e.target.hash);
            if (target.length) {
                var gap = 0;
                $(e.target.hash, 'html', 'body').animate({
                    opacity: 'show',
                    duration: "slow",
                    scrollTop: target.offset().top - gap
                });
            }
            if ($(e.target).is('.home-buttons a')) {
                $("#web-nav-menu li a[href='#contact']").addClass('active');
            }
             if ($(e.target).is('.pricing-table .btn')) {
                $("#web-nav-menu li a[href='#contact']").addClass('active');
            }

        }
    });


    /*************************
     Responsive Menu
     *************************/
    $('.responsive-icon').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header').animate({'margin-left': 285}, 300);
        } else {
            $(this).removeClass('active');
            $('.header').animate({'margin-left': 0}, 300);
        }
        return false;
    });

    $('.header a').on("click", function (e) {
        $('.responsive-icon').removeClass('active');
        $('.header').animate({'margin-left': 0}, 300);

    });
    /*======================================
     Typing Text
     ======================================*/
    $(".freelencer-headline-list b:first-child").addClass("is-visible");


    /*======================================
     Counter - Fun Fact
     ======================================*/
    $('.counter-block-value').each(function () {
        var $this = $(this),
                countTo = $this.attr('data-count');
        $({countNum: $this.text()}).animate({
            countNum: countTo
        },
                {
                    duration: 8000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
    });


    /*======================================
     Testenomials
     ======================================*/
    $('.testimonials').owlCarousel({
        navigation: false,
        pagination: false,
        autoPlay: true,
        items: 2,
        loop: !1,
        dots: true,
        margin: 25,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });


    /*======================================
     Clients
     ======================================*/
    /*$('.clients').owlCarousel({
        navigation: false,
        pagination: false,
        dots: false,
        loop: true,
//        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 10,
        autoHeight: !1,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });*/


    /*======================================
     Portfolio Filter
     ======================================*/
    $(function () {
        var selectedClass = "";
        $(".filter-tabs").find('button:first-child').addClass('active-filter');
        $(".fil-cat").click(function () {
            $(".filter-tabs").find('button').removeClass('active-filter');
            $(this).addClass('active-filter');
            selectedClass = $(this).attr("data-rel");
            $("#portfolio-page").fadeTo(100, 0.1);
            $("#portfolio-page .portfolio-item").not("." + selectedClass).fadeOut().removeClass('portfolio-item');
            setTimeout(function () {
                $("." + selectedClass).fadeIn().addClass('portfolio-item');
                $("#portfolio-page").fadeTo(300, 1);
            }, 300);

        });
    });


    /*======================================
     LightBox
     ======================================*/
    $('[data-rel^=lightcase]').lightcase({
        maxWidth: 1100,
        maxHeight: 800
    });

    /*======================================
     WOW Animation
     ======================================*/
    new WOW().init();

    /*======================================
     Date & Time Dropper
     ======================================*/
    $('#app_date').dateDropper();
    $('#app_time').timeDropper();

    /*======================================
     Preloader
     ======================================*/
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});
