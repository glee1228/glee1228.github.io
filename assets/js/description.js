var description_step = function(i) {
    // $('#description').empty();
    i-=1;
    // console.log($('#description'));
    $(".description").empty();
    // console.log(i);
    if(i==1) {
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">항거: 유관순 이야기</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('영화 <<항거: 유관순이야기>>는 1919년 3월 1일 서울 종로에서 시작된 만세운동 이후, 고향 충청남도 병천에서 ‘아우내 장터 만세운동’을 주도한 유관순이 서대문 감옥에 갇힌 후 1년여의 이야기를 담았다. 유관순은 옥중에서도 대한독립만세를 불렀다고 하며 해당 장면은 감옥에서의 유관순과 국민들의 외침이 밖으로 전해져 만세운동이 전파되는 모습을 그리고 있다.');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==2){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">말모이</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('말모이는 주시경 선생이 한일합병 초기인 1911년에 시작했으나 미완성으로 남겨진 최초의 국어사전 원고를 일컫는 말이다. 영화에 등장하는 조선어학회는 실제 존재했던 단체로 우리말과 글을 연구하기 위해 만들어진 단체였으며 1933년 한글맞춤법통일안을 발표하고 1941년 외래어표기법통일안을 발표하였다. 1929년부터 조선어사전 편찬 작업을 실시했으나 1942년 조선어학회사건이 발생하면서 주요 인물들이 투옥되었고 결국 해방 이후 조선어 사전 편찬 사업이 계승되어 1957년 6권을 마지막으로 사전 편찬 작업을 완결지었다.');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==3){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">태극기 휘날리며</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<태극기 휘날리며>>는 6월 25일 발발한 한국전쟁을 배경으로 두 형제의 이야기를 그리고 있다. 한국전쟁 이후 한국전쟁을 이념의 문제로 바라보고 상대 진영에 대한 적대감이 팽배해졌지만 개인에게 있어 한국전쟁은 사상이나 애국과는 별개로 개인과 가족에게 닥친 불행이다. 이 영화는 이러한 시점에서 동생의 생존을 위해 전쟁 영웅이 되어가는 형과 자신을 위하는 형의 품에서 벗어나 스스로 설 수 있도록 강해지고자 하는 동생, 그리고 그들의 불행을 그리고 있다.');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }
    else if(i==4) {
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">그 때 그 사람들</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<그 때 그사람들>>은 1979년 10월 26일 저녁 7시 40분경 서울 종로구 궁정동 중앙정보부 안가(安家)에서 중앙정보부 부장 김재규가 대통령 박정희를 살해한 사건을 영화화한 작품이다. 박정희 살해 사건, 일명 10.26 사태는 대한민국 대통령이 살해된 사건으로 전례 없는 전대미문의 사건이었으며 이 사건을 계기로 유신체제가 무너지고 최규하가 대통령으로 선출되었지만 최규하 대통령은 전두환 등 신군부의 압박으로 8개월만에 대통령직에서 물러나게 된다.');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==5){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">택시 운전사</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('1980년 광주에서 벌어진 민주화 운동, 그 사진을 취재한 독일 기자의 이야기를 영화화한 작품이다. 영화에서 택시운전사인 김만섭이 돈을 벌기 위해 독일 기자인 피터를 태우고 광주로 향하고 그곳에서 광주 시민들과 군의 모습을 목격하게 된다. 그리고 다시 서울로 돌아오기까지의 과정을 그린 이 영화는 광주 바깥의 인물들이 광주를 바라보는 시점을 통해 해당 사건을 재조명한다는 점에서 그 의미를 찾을 수 있다.');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==6){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">1987</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('1987년 4월 13일, 전두환 대통령은 헌법을 개정하지 않고 대통령을 이전처럼 간접 선거로 선출하겠다는 “4.13 호헌조치”를 하였다. 이에 분노한 시민들은 6월 10일 ‘호헌 철폐’와 ‘독재 타도’를 외치며 민주화를 요구하는 시위에 들어갔으며 고문을 받아 숨진 박종철과 시위 도중 최루탄을 맞아 숨진 이한열 사건으로 인해 분노는 더욱 커졌으며 결국 6.29 민주화 선언을 통해 직선제 요구가 받아들여지고 직선제를 통해 노태우가 대통령으로 선출되었다');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }
    else if(i==7) {
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">국가 부도의 날</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<국가부도의 날>>은 1997년 외환 위기 사태를 다룬 영화이다. 국가부도까지 남은 시간 일주일, 위기를 막으려는 사람과 위기에 베팅하는 사람, 그리고 가족을 지키려는 평범한 사람들의 이야기 등 서로 다른 선택을 했던 사람들의 이야기를 총체적으로 그린 영화이다. 당시의 외환 위기 이후 대한민국의 경제가 크게 바뀌었으며 제도와 금융기관, 기업의 구조까지도 바뀌게 된 사건인 만큼 앞으로도 관심을 가져야할 사건이다.');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==8){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">연평해전</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('영화 <<연평해전>>은 2002년 6월 29일, 대한민국을 지키기 위해 목숨을 걸고 싸웠던 사람들과 그들의 동료, 연인, 가족의 이야기를 그린 작품이다. 이 영화에서 다루고 있는 사건은 제2차 연평해전으로 북한 경비정의 기습공격으로 결과적으로 참수리 357호정이 침몰하고 해군 6명이 전사하고 19명이 부상당하는 피해를 입었으며 북한은 약 30여 명의 사상자를 내고 SO·1급 초계정 등산곶 684호가 반파된 채 퇴각하였다. 근래에 발생한 북한군과의 무력 충돌이라는 점에서 주목할 필요가 있다.');
        $(".description").append('</div>');
        $(".description").append('</div>');

    }
    else if(i==9){
        $(".description").append('<div class="year">');
        $(".description").append('<div class="year-inner">제보자</div>');
        $(".description").append('<hr>');
        $(".description").append('<div class="year-desc">');
        $(".description").append('<<제보자>>는 줄기세포 연구로 세계적으로 주목받던 황우석 박사가 2005년 MBC PD수첩의 보도로 줄기세포 논문이 조작되었다는 것이 밝혀진 사건을 토대로 제작한 영화이다. 당시 많은 국민들이 황우석 박사의 연구를 지지하였으며 MBC PD수첩의 보도에 대해 비난을 했었지만 결국 PD수첩이 보도한 논문 조작이 사실로 밝혀졌다. 이 영화는 해당 사건을 진실을 말하려는 PD와 국익에 반한다며 박사를 지지하는 여론과 언론의 모습을 재구성하고 있다');
        $(".description").append('</div>');
        $(".description").append('</div>');



    }

};
