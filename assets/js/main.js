if(window.innerHeight>847){
    $('.seoul').css('background-image','url("assets/img/back2.jpg")');
    $('.transportation').css('top','38%');
}

var controller = new ScrollMagic.Controller({
    vertical:false,
    globalSceneOptions: {
        triggerHook: 0.1,
    }
})
controller.scrollTo(function(newpos) {
    TweenLite.to(window, 1.6, {scrollTo: {y: newpos}, ease: Power3.easeInOut, delay: 0.2})
})

// scene event
var slides = document.querySelectorAll('section.panel')
var navs = document.querySelectorAll('ul li')
var sideNav = document.querySelector('ul.side-nav')
var topbar = document.querySelector('div.topbar')
var audios = document.querySelectorAll('audio:not(#startAudio)')
var transition_description = function(){return new TweenLite.fromTo('#description',2,{opacity : 0}, {opacity : 1})};
// var transition_player = function(){return new TweenLite.fromTo('#player',2,{opacity : 0}, {opacity : 1})};

// console.log(i);
// transition_description().play();
// description_step(i);
//
var reset_Area = function(){
    // transition_player().reverse();
    transition_description().reverse();
    // $('#player').empty();
    $('#description').empty();

    tweenLite.killAll();
};

function darkToggle(elementId) {
    if (['section1', 'section2','section3','section4', 'section5','section6', 'section7','section8', 'section9','section10', 'section11'].includes(elementId)) {
        navs.forEach(function(el) {
            el.classList.toggle('dark')
        })
    }
}
function fn(str){
    var res;
    res = str.replace(/[^0-9]/g,"");
    return res;
}

for (var i = 0; i < slides.length; i++) {
    var scene = new ScrollMagic.Scene({
        triggerElement: slides[i],
        duration: '100%'
    })
    .addIndicators({name: 'section-' + i})
    .addTo(controller)
    .on('start', function (event) {
        if (event.type === 'start' && event.state === 'DURING') {
            topbar.style.display = 'block'
            sideNav.style.display = 'block'
        }
    })

    var PreviousStep=0;
    if (i < 12) {

        scene.on("change progress start end enter leave", function (event) {
            var triggerElement = event.currentTarget.triggerElement()
            var triggerElementId = triggerElement.id;
            var triggerElemenAudio = triggerElement.querySelector('audio')
            currentStep=fn(triggerElementId);
            // console.log('현재 section',currentStep);
            if(currentStep==1||currentStep>=11){
                $('.transportation').css('width','0%');
                $('.description').css('background-color', 'rgba(120, 120, 120, 0.0)');
            }

            else{
                $('.transportation').css('width','300px');
                $('.description').css('background-color', 'rgba(120, 120, 120, 0.5)');
            }
            if(currentStep!=PreviousStep){
                transition_description().play();
                // transition_player().play();
                PreviousStep = currentStep;
                description_step(currentStep);
                news_step(currentStep);
                videoplayer_step(currentStep);
            }
            if (event.type === 'start' && event.state === 'BEFORE' &&triggerElementId === 'section1') {
                topbar.style.display = 'none'
                sideNav.style.display = 'none'
            }
            if ((event.type === 'start' || event.type === 'end') && event.state === 'DURING') {
                // triggerElemenAudio.play()
            }
            if ((event.type === 'start' && event.state === 'BEFORE') || event.type === 'leave') {
                // triggerElemenAudio.pause()

            }
            if (event.type === 'start' || event.type === 'end') {
                // darkToggle(triggerElementId)
            }
        })

        scene.setClassToggle(navs[i], 'active')
    }

    if (i === 11) {
        scene.setClassToggle(sideNav, 'fade-dark')
    }
}

// scrollTo
var anchorIds = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11']

anchorIds.forEach(function(el) {
    var idx = anchorIds.indexOf(el);

    navs[idx].onclick = function() {
        console.log('#' + el);
        controller.scrollTo('#' + el)

    }
})


// mute
document.getElementById('muteBtn').onclick = function() {
    if (this.classList.value.includes('mute-off')) {
        this.classList.toggle('mute-off')
        this.classList.add('mute-on')
    } else {
        this.classList.toggle('mute-on')
        this.classList.add('mute-off')
    }

    document.querySelectorAll('audio').forEach(function(self) {
        self.muted = !self.muted
    })
}

// audio ended event
audios.forEach(function(el) {
    el.onended = function() {
        var toSection = '#section' + (1 + parseInt(this.id.split(/\D/)[5]))
        controller.scrollTo(toSection)
    }
})



// up-down ky binding
document.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        e.preventDefault()
        var nextSceneNav = document.querySelector('li.active')
        if (e.code === 'ArrowUp' && sideNav.style.display === 'block') {
            if (nextSceneNav === null) {
                controller.scrollTo('#section11')
            } else if (nextSceneNav.textContent === 'Intro') {
                controller.scrollTo('#landing')
            } else {
                nextSceneNav.previousElementSibling.click()
            }
        } else if (e.code === 'ArrowDown') {
            if (sideNav.style.display !== 'block') {
                controller.scrollTo('#section1')
            } else if (nextSceneNav.textContent === '2020s') {
                controller.scrollTo('#section12')
            } else {
                nextSceneNav.nextElementSibling.click()
            }
        }
    }
})