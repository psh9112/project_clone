

// ============================== scroll event start ==============================
let secC, secS;
let winH = $(window).height(); //window의 높이값
let scrollTop;

$(window).on('scroll', function () {

    scrollTop = $(window).scrollTop();

    // company
    $('main .string-up').each(function (e) {
        secC = $('main .string-up').eq(e).offset().top;

        if (secC - winH < scrollTop) {
            $('main .string-up').eq(e).addClass('text_up');
        };
    });

    // services
    $('main .scale-up').each(function (e) {
        secS = $('main .scale-up').eq(e).offset().top;
        
        if (secS - winH < scrollTop) {
            $('main .scale-up').eq(e).addClass('scale');
        };
    });


});// ===============================scroll event end==============================
