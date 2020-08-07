//언어처리













//소메뉴 및 내용 좌우 전환
function changeMenuLeft() {
    $('.submenuContainer ul').removeClass('left');
    $('.submenuContainer ul').removeClass('center');
    $('.submenuContainer ul').removeClass('right');
    $('.contentContainer ul').removeClass('left');
    $('.contentContainer ul').removeClass('center');
    $('.contentContainer ul').removeClass('right');


    $('.submenuContainer ul').addClass('left');
    $('.contentContainer ul').addClass('left');
}

function changeMenuCenter() {
    $('.submenuContainer ul').removeClass('left');
    $('.submenuContainer ul').removeClass('center');
    $('.submenuContainer ul').removeClass('right');
    $('.contentContainer ul').removeClass('left');
    $('.contentContainer ul').removeClass('center');
    $('.contentContainer ul').removeClass('right');


    $('.submenuContainer ul').addClass('center');
    $('.contentContainer ul').addClass('center');
}

function changeMenuRight() {
    $('.submenuContainer ul').removeClass('left');
    $('.submenuContainer ul').removeClass('center');
    $('.submenuContainer ul').removeClass('right');
    $('.contentContainer ul').removeClass('left');
    $('.contentContainer ul').removeClass('center');
    $('.contentContainer ul').removeClass('right');


    $('.submenuContainer ul').addClass('right');
    $('.contentContainer ul').addClass('right');
}





//스크롤 감지, 소메뉴 고정, 스크롤 내려가면 위로올라가는 버튼 보이게 하기

$(document).ready(function() {

    var scrollOffset = $('.submenuContainer').offset();
    $('#upButton').hide();
    
    $(window).scroll(function () { 
        if ($(document).scrollTop() > scrollOffset.top) {
            $('.submenuContainer').addClass('scroll-pinned');
            $('#upButton').show();
        }
        else {
            $('.submenuContainer').removeClass('scroll-pinned');
            $('#upButton').hide();
        }
    });
});




//맨 위로 스크롤
function up() {
    window.scrollTo(0,0);
}





//Q&A 드롭다운
function dropdown(obj) {
    if ($(obj).hasClass("fa-angle-up")) {
        $(obj).removeClass("fa-angle-up");
        $(obj).addClass("fa-angle-down");
        $(obj).parent().parent().parent().children(".qContent").attr("style", "display: flex");
        
    }
    else {
        $(obj).removeClass("fa-angle-down");
        $(obj).addClass("fa-angle-up");
        $(obj).parent().parent().parent().children(".qContent").attr("style", "display: none");
    }
}



//notice.html에서 넘어왔을 경우
window.onload = function () {
    var url = window.location.href;
    var pm = url.split("?");
    if(pm[1]=="notice") {

        $('.submenuContainer ul').removeClass('left');
        $('.submenuContainer ul').removeClass('center');
        $('.submenuContainer ul').removeClass('right');
        $('.contentContainer ul').removeClass('left');
        $('.contentContainer ul').removeClass('center');
        $('.contentContainer ul').removeClass('right');
    
    
        $('.submenuContainer ul').addClass('center');
        $('.contentContainer ul').addClass('center');
    }
};