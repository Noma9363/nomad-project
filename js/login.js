
// j쿼리 준비
$(".ID_Wrapper").hide();

// 버튼 클릭시 visible
$(".BG").click(function(){
    $(".ID_Wrapper").hide();
});

$(".IDLogin").click(function(){
    $(".ID_Wrapper").show();
});

$(".IDSingIN").click(function(){
    location.href = 'NOMADSINGIN.html';
});

$(".LogEvent").click(function(){

    var context = $(".LogEvent").text();
    if(context == "로그인"){
        //ID값 가져오기
        var ID = $("#ID").val();
        //PW값 가져오기
        var PW = $("#PW").val();    
        
        if(ID == 'admin'){

            if(PW == 1234){

                IsIDChecked = true;
                // alert("현재값" + IsIDChecked);
                // 체크하고 아이디 div 하이드
                $(".ID_Wrapper").hide();
                //로그인을 마이페이지로
                $(".IDLogin").text("내정보");


            }else{
                alert("비밀번호가 일치하지 않습니다");
                return false;
            }

        }else{
            alert("등록된 아이디가 아닙니다.");
            return false;
        }



    }else if(context == "내정보"){
        location.reload();
    }

    $('#loginFrm').submit();

});

$('#loginFrm').submit(function(e){
    e.preventDefault();

});