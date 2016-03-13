
function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
function close_nav_dropdown() {
    if ($(window).width() >= 768) {
        $('.navbar .dropdown').hover(function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
        });
    }
}
function wowInit() {
    var wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 150,
            mobile: false
        }
    );
    wow.init();
}
function onScroll() {
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('current');
            sections.removeClass('current');

            $(this).addClass('current');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
        }
    });
}
function imgHover(){
    $('.template-img').hover(function () {
        var $img = $(this).find('img'),
            imgHtoAnimate = $img.height() - $(this).height();
        $(this).find('img').stop().animate({marginTop: -(imgHtoAnimate)}, 8000);
    }, function () {
        $(this).find('img').stop().animate({marginTop: 0}, 1000);
    });
}
function thridPlugin(){
    $(".navbar").sticky({topSpacing: 0});
    $("[data-toggle='tooltip']").tooltip();
    $(".alert").alert();
    $(".player").mb_YTPlayer();
    $('.counter-letters').counterUp({
        delay: 10,
        time: 800
    });
    $('.skill-section').waypoint(function () {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    }, {
        offset: '100%'
    });
    $(window).stellar({
        horizontalScrolling: false
    });
    $('#main-nav a').bind('click', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 109
        }, 1500, 'easeOutExpo');
        e.preventDefault();
    });
    $('#testi-slider').owlCarousel({

        pagination: true,
        paginationNumbers: false,
        singleItem: true,
        lazyEffect: 'fade'

    });
    $("#client-logo").owlCarousel({

        navigation: true,
        autoPlay: 5000,
        slideSpeed: 800,
        paginationSpeed: 800,
        singleItem: false,
        items: 4,
        autoHeight: true,

        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });
    $("#app-screenshot").owlCarousel({

        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,

        navigation: true,
        autoPlay: 5000,
        slideSpeed: 800,
        paginationSpeed: 800,
        autoHeight: true,

        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    $('.chart').easyPieChart({
        animate: 2000,
        barColor: '#5a528d',
        trackColor: '#edebfb',
        scaleColor: '#fff',
        lineCap: 'square',
        lineWidth: '10',
        size: '150',
        delay: 5000
    });
    if (!Modernizr.touch) {
        $.stellar();
    }
}
$(document).ready(function () {
    close_toggle();
    close_nav_dropdown();
    wowInit();
    imgHover();
    thridPlugin()
});
$(window).resize(function () {
    close_nav_dropdown();
    close_toggle();
});

$(window).on('scroll', function () {
    onScroll()
});