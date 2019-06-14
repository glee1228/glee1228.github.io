

var videoplayer_step = function(i) {

    i-=1;
    console.log(i);
    var myframe = document.getElementById("player");
    if(i==0){
        myframe.setAttribute("width", "0");
    }
    if(i==1) {
        player.playVideoAt(0);
        myframe.setAttribute("width", "640");

    }
    else if(i==2){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/2_malmoi.png">><source src="assets/video/2_malmoi.mp4" type="video/mp4"></video>');
        player.playVideoAt(1);
    }
    else if(i==3){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/3_gwihyang.png"><source src="assets/video/3_gwihyang.mp4" type="video/mp4"></video>');
       player.playVideoAt(2);
    }
    else if(i==4) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/4_gunhamdo.png"><source src="assets/video/4_gunhamdo.mp4" type="video/mp4"></video>');
        player.playVideoAt(3);
    }
    else if(i==5) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/5_taegeuggi.png"><source src="assets/video/5_taegeuggi.mp4" type="video/mp4"></video>');
        player.playVideoAt(4);
    }else if(i==6) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/6_hyojadong.png"><source src="assets/video/6_hyojadong.mp4" type="video/mp4"></video>');
        player.playVideoAt(5);
    }
    else if(i==7) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/7_then_those_people.png"><source src="assets/video/7_then_those_people.mp4" type="video/mp4"></video>');
        player.playVideoAt(6);
    }else if(i==8) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/8_jeontaeil.png"><source src="assets/video/8_jeontaeil.mp4" type="video/mp4"></video>');
        player.playVideoAt(7);
    }else if(i==9) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/9_colorful_holiday.png"><source src="assets/video/9_colorful_holiday.mp4" type="video/mp4"></video>');
        player.playVideoAt(8);
    }else if(i==10){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/10_taxi_driver.png"><source src="assets/video/10_taxi_driver.mp4" type="video/mp4"></video>');
        player.playVideoAt(9);
    }




};
