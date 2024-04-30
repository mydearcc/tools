在线颜色值转换工具，支持RGB/RGBA/HEX/HSL/HSV等常用颜色格式的转换。

### RGB：
RGB又称RGB颜色模型或红绿蓝颜色空间，是一种加色模型，将红（red）、绿（green）、蓝（blue）三原色的色光以不同的比例相加，以产生多种多样的色光。在css中表示方法譬如：rgb(255, 0, 0)表示红色，rgb(255, 255, 255)表示黑色。

### HEX：
又叫十六进制颜色模式，是用十六进制表示颜色的。形如#000000的格式，这是在css中经常使用的。

### RGBA：
是代表Red、 Green、 Blue、和 Alpha的色彩空间。就是在RGB的基础上增加了透明度。这是css3新增加的色彩模式，它的表示方法是，rgba(255, 255, 255, 0.5)，其中alpha的取值在0~1之间，0为完全透明，1为完全不透明。与opacity属性的区别是，opacity能影响到其子元素透明度，RGBA不会。

### HSL：
HSL 和 HSV（也叫HSB）是对RGB色彩空间中点的两种有关系的表示，它们尝试描述比 RGB 更准确的感知颜色联系，并仍保持在计算上简单。H指hue（色相）、S指saturation（饱和度）、L指lightness（亮度）、V指value（色调）、B指brightness（明度）。色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等，取0-360。饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。明度（V），亮度（L），取0-100%。W3C 的 CSS3采用的是HSL。

### HSLA
HSLA是在HSL的基础上增加了透明度。几种色彩空间，在css中的表示方法：
```
/* --  rgb -- */
background-color: rgb(255, 0, 0);
 
/* -- hex -- */
background: #000000;
 
/* -- 以下为css3新增色彩空间表示方法，不支持ie6,7,8 -- */
/*-- rgba -- */
background: rgb(255, 255, 255, 0.5);
 
/* -- hsl -- */
background: hsl(10, 60%, 60%);
 
/* -- hsla -- */
background: hsl(10, 60%, 60%, 0.5);
```

### 工具地址
URL：[RGB/RGBA/HEX/HSL/HSV颜色在线转换工具](https://www.fly63.com/tool/color/)

来源：[https://www.fly63.com/tool/detial/32](https://www.fly63.com/tool/detial/32)