

$('header').load('inc.html header .head');
$('footer').load('inc.html footer .bottom');
$('nav').load('inc.html nav .navi', navi);


//navi animation

function navi() {
    const elHead = document.querySelector('header');
    const elBurger = document.querySelector('.head .header-burger');
    const elNavi = document.querySelector('nav');
    const elSvg = document.querySelector('nav .navi-bg');

    elBurger.addEventListener('click', function () {

        elHead.classList.toggle('active-nav');
        elNavi.classList.add('open');


        if (!elHead.classList.contains('active-nav')) {
            elNavi.classList.remove('open');
            elNavi.classList.add('close');
        } else {
            elNavi.classList.remove('close');
        }


    }); //click end
}//navi end








// header

let scrollState = { y: 0, y2: 0, state: 'down' };

function scrollFun() {
    scrollState.y = $(window).scrollTop();

    if (scrollState.y > scrollState.y2) {
        scrollState.state = true;
    } else {
        scrollState.state = false;
    }

    scrollState.y == scrollState.y2
};

function headerFun() {
    event.preventDefault();

    scrollFun();

    if (scrollState.state) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }

};

$(window).on('scroll', headerFun);
