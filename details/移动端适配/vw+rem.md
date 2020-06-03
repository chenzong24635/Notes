[网易新闻](https://3g.163.com/touch/#/)的方法

```css
/**
750px设计稿
    取1rem=100px为参照，那么html元素的宽度就可以设置为width: 7.5rem，于是html的font-size=deviceWidth / 7.5
**/
html {
  font-size: 13.33333vw;
}

@media screen and (max-width: 320px) {
  html {
    font-size: 42.667px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 321px) and (max-width: 360px) {
  html {
    font-size: 48px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  html {
    font-size: 50px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 376px) and (max-width: 393px) {
  html {
    font-size: 52.4px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 394px) and (max-width: 412px) {
  html {
    font-size: 54.93px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 413px) and (max-width: 414px) {
  html {
    font-size: 55.2px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 415px) and (max-width: 480px) {
  html {
    font-size: 64px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 481px) and (max-width: 540px) {
  html {
    font-size: 72px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 541px) and (max-width: 640px) {
  html {
    font-size: 85.33px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 641px) and (max-width: 720px) {
  html {
    font-size: 96px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 721px) and (max-width: 768px) {
  html {
    font-size: 102.4px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 769px) {
  html {
    font-size: 102.4px;
    font-size: 13.33333vw;
  }
}

@media screen and (min-width: 769px) {
  html {
    font-size: 102.4px;

    #app {
      margin: 0 auto;
    }
  }
}
```
