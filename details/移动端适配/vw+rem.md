[网易新闻](https://3g.163.com/touch/#/)的方法


100px 750px  w
1rem  7.5rem fsize

```css
/**
  在750px设计搞下，如果使用vw单位换算，
  可以理解成100vw = 750px，则1px = 0.13333333vw；
  如果使用rem单位换算，预设1rem = 100px，则 100px = 13.333333vw

  7.5rem = 750px = 100vw
  1rem   = 100px = 13.333333vw

**/
html {
  font-size: 50px; /* 避免浏览器不支持vw */
  font-size: 13.333333vw;
}
```
