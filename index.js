

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



// ============================== click event start==============================


// services
// ㄴㄴ이미지 클릭하면 이미지 1.1비율로 확대 및 타이틀 옆에 "+" 추가


// infra
// ㄴㄴ이미지 클릭하면 이미지 1.1비율로 확대


// portfolio
// ㄴㄴ 이미지 클릭하면 이미지 1.1비율 확대, 요약글 변경


// new
// ㄴㄴ 이미지 클릭하면 이미지 1.1비율 확대

