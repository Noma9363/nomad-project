// 버튼 변수 정의
const upBtn = $('upBtn');   //  그냥 태그 upBtn요소 가져오기
$('upBtn').hide();
//  윈도우창 화면이 움직일때마다
$(window).scroll(function(){
    //현재 위치 변수
    var indexPos = $(window).scrollTop();
    // 스크롤 할때마다 위치 치수 변함

    // 일정치수(1000px) 이상 넘기면
    if(indexPos >1000)
    {
        upBtn.fadeIn(200);
    }
    else
    {
        upBtn.fadeOut(200);
    }
});

// 버튼 클릭 기능 바로 위로 스크롤
upBtn.click(function(){
    $('html, body').animate({
        'scrollTop' : 0
    }, 1000);
});