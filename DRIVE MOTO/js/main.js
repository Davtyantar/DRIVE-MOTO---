$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        adaptiveHeight: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./img/arrow-right.svg" alt=""></button>',
        responsive: {
            breakpoint: 969,
                settings: {
                    arrows: false,
                }
        }
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');

        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite-active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        utoplaySpeed: 2000,
        centerMode: true,
        pauseOnHover: true,
        centerPadding: '10px',
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./img/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./img/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1301,
              settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '10px',
              }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                    centerPadding: '10px',
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                    centerPadding: '10px'
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px'

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.7,
                    dots: true,
                    arrows: false,
                    centerPadding: '10px'
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: true,
                    dots: true,
                    arrows: false,
                    centerPadding: '0px',
                    centerMode: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    variableWidth: true
                }
            },
        ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function () {
        $(this).toggleClass('filter__item-drop-active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({    
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button-active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button-active');
        $('.product-item__wrapper').removeClass('product-item__wrapper-list');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button-active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button-active');
        $('.product-item__wrapper').addClass('product-item__wrapper-list');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        spacing: "7px"
    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list-active');
        $('.line1').toggleClass('line1-active');
        $('.line2').toggleClass('line2-active');
        $('.line3').toggleClass('line3-active');
    });

    $('.footer__top-title').on('click', function () {
        $(this).next().slideToggle();
    })

    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle();
    });

});