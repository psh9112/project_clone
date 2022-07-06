

$('header').load('inc.html header .head', navi);
$('footer').load('inc.html footer .bottom');
$('nav').load('inc.html nav .navi');

//navi

function navi() {
    const elHead = document.querySelector('header');
    const elBurger = document.querySelector('.head .header-burger');
    const elNavi = document.querySelector('nav');
    const elTxt = document.querySelectorAll('nav .navi .split-text');


    elBurger.addEventListener('click',function(){
        // event.preventDefault();

        elHead.classList.toggle('active-nav');
        elHead.style = 'padding-bottom: 20px';

        elNavi.classList.add('open');
        elTxt.classList.add('text_down');
        
        // if(!elHead.classList.contains('active-nav')){
        //     elHead.style = 'padding-bottom: 0';
        //     elNavi.classList.remove('open');
        //     elTxt.classList.remove('text-down');
        // }
    });
    
}

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
        $('header').css({paddingBottom: '20px'});
    } else {
        $('header').removeClass('active');
    }

};

$(window).on('scroll', headerFun);












//footer

/* &.active {
    color: #1fc77c;
    border-color: #1fc77c;
} */