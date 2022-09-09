

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
            elNavi.classList.toggle('open');
            elNavi.classList.toggle('close')

            if (!elHead.classList.contains('active-nav')) {
                document.documentElement.style = 'overflow-y: hidden';
                elNavi.classList.remove('open');
                elNavi.classList.add('close');
                
            } else {
                elNavi.classList.remove('close');
                document.documentElement.style = 'overflow-y: auto';
            }



        }); //click end
    }, 100);

}//navi end









// ==================================================================
//클릭시 네비 열리기
/* function clickFun() {
    let menuBox = document.querySelector('.menubox');
    let Buger = document.querySelector('.buger');
    let Ani;
    Ani = setTimeout(function () {
        Buger.addEventListener('click', function () {
            // console.log(100);
            Hd.classList.remove('bg');
            if (!Buger.classList.contains('active')) {
                spanColor.forEach(function (s, k) {
                    spanColor[k].classList.remove('spanColor');
                });
                document.documentElement.style = 'overflow:hidden';
                menuBox.classList.remove('out');
                logoColor.classList.add('aColor');
                
            } else {
                document.documentElement.style = 'overflow:auto';
                menuBox.classList.add('out');
                logoColor.classList.remove('aColor');

            }

            menuBox.classList.add('open');

            Buger.classList.toggle('active');
            logoColor.classList.toggle('aColor');
            TxtAni();

        });
        
    }, 300);
}; */