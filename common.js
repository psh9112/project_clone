

$('header').load('inc.html header .head');
$('footer').load('inc.html footer .bottom');
$('nav').load('inc.html nav .navi', navi);


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




//navi animation

function navi() {
    const elHead = document.querySelector('header');
    const elBurger = document.querySelector('.head .header-burger');
    const elNavi = document.querySelector('nav');

    setTimeout(function () {
        elBurger.addEventListener('click', function () {

            elHead.classList.toggle('active-nav');

            if (!elHead.classList.contains('active-nav')) {
                document.documentElement.style = 'overflow-y: hidden';
                elNavi.classList.remove('open');
                elNavi.classList.add('close');
                
            } else {
                document.documentElement.style = 'overflow-y: auto';
                elNavi.classList.remove('close');
                elNavi.classList.add('open');
            }



        }); //click end
    }, 100);

}//navi end