

var news_step = function(i) {
    i-=1;
    // console.log($('#player'));
    $(".news-img").empty();
    // console.log(i);

    if(i==1) {
        $(".news-img").append('<img id="myImg" src="assets/img/news1.jpg"  style="width:100%;max-width:150px">');
    }
    else if(i==2){
        $(".news-img").append('<img id="myImg" src="assets/img/news2.jpg"  style="width:100%;max-width:150px">');
    }
    else if(i==3){
        $(".news-img").append('<img id="myImg" src="assets/img/news3.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==4) {
        $(".news-img").append('<img id="myImg" src="assets/img/news4.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==5){
        $(".news-img").append('<img id="myImg" src="assets/img/news5.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==6){
        $(".news-img").append('<img id="myImg" src="assets/img/news6.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==7) {
        $(".news-img").append('<img id="myImg" src="assets/img/news7.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==8){
        $(".news-img").append('<img id="myImg" src="assets/img/news8.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==9){
        $(".news-img").append('<img id="myImg" src="assets/img/news9.jpg" style="width:100%;max-width:150px">');
    }
    else if(i==10){
        $(".news-img").append('<img id="myImg" src="" style="width:100%;max-width:150px">');
    }
    // Get the modal

    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    if(i<=10&&i>=1) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

};

