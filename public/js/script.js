$( document ).ready(function() {
    $('.slick-main-head').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 3000,
    });
    $('header .menu ul li:nth-child(3) a').click(function() {
        $hclass = $(this).parent().hasClass('active');
        $(this).parent().removeClass('active');
        $('.cat-menus').slideUp(250);
        if(!$hclass){
            $(this).parent().addClass('active');
            $('.cat-menus').slideDown(250);
        }

    });
});