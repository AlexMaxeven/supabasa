import $ from "jquery";

$(function () {
    $('.header__burger').on('click', function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('a.header__link').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + "px"
        }, {
            duration: 3000,
            easing: "swing"
        });
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;
        $('.header__burger').removeClass('active');
        $('body').removeClass('lock');
        return false;
    });
    $(document).on('click', '.header__list > li > a', e => {
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;
        $('.header__burger').removeClass('active');
        $('body').removeClass('lock');
    });
    $(document).on('click', '.header__list > li > a', e => {
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;
        $('.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});

import "slick-carousel";

$(".slick").slick({
    dots: true,
    arrows: false,
    centerMode: true
});