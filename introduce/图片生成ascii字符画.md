一个在线生成ascii字符画的[工具](https://www.fly63.com/tool)。将图片的每个像素用一个字符替换，就可以有一副图片的字符画。该工具操作简单，支持自定义字母及数字，上传自己想要的图片即可。

### 原理
这里主要用到canvas的一个api,getImageData(x,y,width,height)。
然后根据灰度值计算公式：0.299 * r + 0.578 * g + 0.114 * b。
将图像上的每个像素的颜色转化成对应的灰度值，再根据灰度值替换成字符。

### 注意
并不是所有的图片转化后显示的效果都很明显，具体还要看图片上像素颜色的分布。

### 工具地址
URL：[图片转换为字符画工具](https://www.fly63.com/tool/img2char/)

来源：[https://www.fly63.com/tool/detial/129](https://www.fly63.com/tool/detial/129)
