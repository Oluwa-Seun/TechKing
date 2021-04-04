$(document).ready(function() {

    $('.bx-menu').click(function() {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('nav-toggle')
    });
    $(window).on('load scroll', function() {
        $('.bx-menu').removeClass('bx-x');
        $('.navbar').removeClass('nav-toggle');
    });
});


// SHUGABA, Hahahah!