customSelect('select');
$(function(){
    $('.slider__inner, news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-next"></button>',
        infinite: false
    });
    $('select').styler();
});