
//visual
function init() {
    //start
    let posY;
    let winH = $(window).height(); //window의 높이값
    let scrollTop;


    $(window).on('scroll', function () {

        scrollTop = $(window).scrollTop();

        $('figure').each(function (i) {
            posY = $('figure').eq(i).offset().top;

            if (posY - winH < scrollTop) {
                $('figure').eq(i).addClass('active');
            };
        });

    });


}  //and

$(window).on('load', init);

//company


//services


//infra

