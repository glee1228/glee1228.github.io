var description_step = function(i) {
    // $('#description').empty();
    i-=1;
    // console.log($('#description'));
    $(".description").empty();
    // console.log(i);
    if(i==1) {
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">일제 초기, 3.1 운동 일어나다.</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('암살 ');
        $(".description").append('이 때 한 아이의 아버지 앤드류가 소동을 일으키고 그에게는 오른 팔을 기차 밖으로 내보내 얼어붙게 만드는 형벌이 내려진다. ');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==2){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">일제 말기, 민족 말살 정책을 시행하다.</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('말모이, 귀향, 군함도 ');
        $(".description").append('이 때 한 아이의 아버지 앤드류가 소동을 일으키고 그에게는 오른 팔을 기차 밖으로 내보내 얼어붙게 만드는 형벌이 내려진다. ');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==3){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">이승만 정권, 6.25전쟁과 4.19 혁명의 시기!</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('태극기 휘날리며, 효자동 이발사');
        $(".description").append('이 때 한 아이의 아버지 앤드류가 소동을 일으키고 그에게는 오른 팔을 기차 밖으로 내보내 얼어붙게 만드는 형벌이 내려진다. ');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }
    else if(i==4) {
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">박정희 정권, 유신체제와 새마을 운동의 시.</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<그 때 그 사람들>>, <<아름다운 청년 전태일>>');
        $(".description").append('정치 : 유신체제 / 경제 : 경제개발 5개년(새마을 운동)');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==5){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">전두환 , 5.18, 5공화국, 629민주화선언.</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<26년>>, <<택시운전사>>, <<화려한 휴가>>, <<남영동 1985>>, <<1987>> ');
        $(".description").append('정치 : 5.18 5공화국 6월, 629민주화선언 / 경제 : 삼 저 호황  / 문화 : 3S 정책 ');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==6){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">노태우 정권, 88올림픽 개최하다.</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('없음');
        $(".description").append('정치 : UN 가입 / 사회문화 88올림픽 ');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }
    else if(i==7) {
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">김영삼, IMF, OECD 시장 개방!</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<국가부도의 날>>');
        $(".description").append('정치 : 문민정부 개막 / 경제 : IMF, OECD 시장 개방');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==8){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">김대중, 대북화해 6.15 남북 공동 선언, IMF 극복(금모으기 운동)</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<연평해전>>');
        $(".description").append('정치 : 대북화해 6.15 남북 공동 선언 / 경제 : IMF 극복(금모으기 운동) / 문화 : 월드컵');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==9){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">노무현 정권, 개성공단과 남북 정상회담! </div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('없음');
        $(".description").append('정치 : 개성공단, 남북 정상회담 / 사회문화 : 후크송 열풍 ');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }
    else if(i==10){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">21세기, 새로운 시대 ! </div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('없음');
        $(".description").append(' ');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }
};
