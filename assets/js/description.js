var description_step = function(i) {
    // $('#description').empty();
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

};
