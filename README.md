## Visual-Programming [역사를 그리다]
### by TEAM 소법전
![javascript](https://img.shields.io/github/languages/top/glee1228/glee1228.github.io.svg?color=red)
[![HitCount](http://hits.dwyl.io/glee1228/glee1228githubio.svg)](http://hits.dwyl.io/glee1228/glee1228githubio)
- Sound Visualization Demo : [http://glee1228.github.io/](http://glee1228.github.io/)
- Historical flow Visualization Demo **[PC or laptop only]** : [http://glee1228.github.io/animation.html](http://glee1228.github.io/animation.html)

## **스크린샷**
- [3.1 운동 100주년을 그리다](https://github.com/glee1228/glee1228.github.io/issues/1)
![SoundEffect](./assets/img/index_soundEffect.png)


- [영화로 보는 한국 근현대사](https://github.com/glee1228/glee1228.github.io/issues/2)
![Intro](./assets/img/animation_Intro.png)
![hanggeo](./assets/img/animation_hanggeo.png)
![taxidriver](./assets/img/animation_taxidriver.png)
![newspaper](./assets/img/animation_newspaper.png)
![2010s](./assets/img/animation_2010s.png)


## **페이지 UI와 기술 소개**
### **[3.1 운동 100주년을 그리다] 페이지**

<img src="./assets/img/index_soundEffect.png" width=50% >

```
화면을 클릭하면, 비와이 - 나의 땅 mp3를 실행합니다.
sound에서 저음, 중저음, 중음, 중고음, 고음 5가지 fft를 추출하고 파형으로 표현합니다.
```
**사용 기술 - p5.js, p5-sound.js, html, js, css**

### **[영화로 보는 한국 근현대사] 페이지**

<img src="./assets/img/animation_Intro.png" width=50% >

```
배경 이미지는 조선시대를 표현한 광화문입니다.
좌측에 메뉴 바는 현재 시대 타임라인의 위치를 보여줍니다.
```

<img src="./assets/img/animation_hanggeo.png" width=50% >

```
아래에는 해당 시대의 역사적 사건의 사진이 시간 흐름순으로 필름이미지에 포함되어 있습니다.
좌측 상단 부분에 해당 시대를 모티브로 한 영화 영상이 재생됩니다. 시대마다 변화합니다.
좌측 하단 부분에는 기차아이콘이 존재합니다. 영화 필름위를 기차길로 표현하여 좌우로 스크롤링하면 마치 기차가 철길을 횡단하는 느낌을 표현합니다.
우측 상단 부분에는 영화 소개와 모티브가 된 역사적 사건의 개요가 있습니다. 시대마다 변화합니다.
```

<img src="./assets/img/animation_newspaper.png" width=50% >

```
우측 하단 부분에는 신문 아이콘이 있습니다. 클릭 시, 해당 시대의 중요한 역사적 사건을 담은 신문 이미지가 확대됩니다. 시대마다 변화합니다.
```

<img src="./assets/img/animation_2010s.png" width=50% >

```
역사가 흘러 발전된 도시 skyline을 벡터 이미지로 표현합니다.
```

**사용 기술 - ScrollMagic , TweenLite, html, js, css, Youtube player API, jquery**

ScrollMagic : 수평 스크롤 화면에서 trigger[기준점]를 만들고 section[화면구간]을 분할해, 구간 별 이벤트를 제어하는 역할을 합니다.
TweenLite : ScrollMagic과 호환성이 좋고, Jquery와 마찬가지로 애니메이션 및 DOM 조작을 위한 라이브러리입니다. Jquery에 비해 자연스러움 움직임을 표현합니다.
YoutubePlayerAPI : IFrame Player API를 통해 웹사이트에 YouTube 동영상 플레이어를 퍼가고 JavaScript를 사용하여 플레이어를 제어할 수 있습니다. 웹페이지에 Flash 개체를 삽입하는 것과 관련된 Flash 및 JavaScript Player API와 달리 IFrame API는 콘텐츠를 페이지의 <iframe> 태그에 게시합니다.
P5.js : 디자이너와 아티스트들이 좀 더 손쉽게 프로그래밍에 접근할 수 있도록 만들어진 processing이라는 프로그램을 기반으로 만들어진 javascript기반의 라이브러리입니다.

  
## Reference
Site : [http://ondrejhomola.com](http://ondrejhomola.com/)

Library : [ScrollMagic.io](Scrollmagic.io) , [TweenLite](https://greensock.com/tweenlite), [YoutubePlayerAPI](https://developers.google.com/youtube/iframe_api_reference?hl=ko),  [P5.js](https://p5js.org/)

