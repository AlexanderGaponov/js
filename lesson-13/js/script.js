$(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {

        $('.overlay').fadeIn(1500);
        $('.modal').animate({
                height: "show",
                opacity: "show",
            },
            1500)
    });

    $('.close').click(function() {
        $('.overlay').fadeOut(1500);
        $('.modal').slideUp(1500);
    });
    
});