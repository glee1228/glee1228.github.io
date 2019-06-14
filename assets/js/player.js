var videoplayer_step = function(i) {
    // $('#description').empty();
    i-=1;
    // console.log($('#player'));
    $(".player-container").empty();
    console.log(i);



    if(i==1) {
        $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="eKodxomtlNk"></div>');

    }
    else if(i==2){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/2_malmoi.png">><source src="assets/video/2_malmoi.mp4" type="video/mp4"></video>');
        $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="-uSAbEix8i4"></div>');
    }
    else if(i==3){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/3_gwihyang.png"><source src="assets/video/3_gwihyang.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="uHTuwVaLglo"></div>');
    }
    else if(i==4) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/4_gunhamdo.png"><source src="assets/video/4_gunhamdo.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="VI5gx0SqYNo"></div>');}
    else if(i==5){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/5_taegeuggi.png"><source src="assets/video/5_taegeuggi.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="pQVTQICYRmE"></div>');}
    else if(i==6){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/6_hyojadong.png"><source src="assets/video/6_hyojadong.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="94Q3IPBXF7k"></div>');}
    else if(i==7) {
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/7_then_those_people.png"><source src="assets/video/7_then_those_people.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="0Vo6vEAYyRY"></div>');}
    else if(i==8){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/8_jeontaeil.png"><source src="assets/video/8_jeontaeil.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="RfpzGlBaoBo"></div>');}
    else if(i==9){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/9_colorful_holiday.png"><source src="assets/video/9_colorful_holiday.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="2mJy32X43Og"></div>'); }
    else if(i==10){
        // $(".player-container").append('<video width="100%" height="auto" id="autoplay" controls crossorigin playsinline poster="assets/img/10_taxi_driver.png"><source src="assets/video/10_taxi_driver.mp4" type="video/mp4"></video>');
    $(".player-container").append('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="-eExpGoHEXg"></div>');
    }
    else{

    }
    const player = new Plyr('#player', {});

// Expose player so it can be used from the console
window.player = player;
    // const player = new Plyr('#autoplay');
    // player.play();
};
