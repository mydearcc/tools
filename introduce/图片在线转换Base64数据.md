base64图片转换工具,是一款可以在线任意图片格式转Base64 DataUrl编码工具,让你很方便地在没有上传文件的条件下将图片插入其它的网页、编辑器中。   

### 什么是base64编码
图片的base64编码就是可以将一张图片数据编码成一串字符串，使用该字符串代替图像地址url。

### 使用base64图片的优点
在前端页面中常见的base64图片的引入方式有：

1.在css中使用base64图片

`.header {
    background-image: url(data:image/png;base64,iVBORw0...);
}`

2.在html中使用base64图片

`<img src="data:image/gif;base64,base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQE.....>`

使用base64图片的优点有一下几种
> 减少http请求次数
> 采用base64的图片随着页面一起下载，因此不会存在跨域请求的问题
> 没有图片更新要上传图片，因此不会造成清理图片缓存的问题


### 使用base64图片的缺点
> 增加css文件的大小
> 浏览器兼容性
> 解析css的时间增长

### 工具地址
URL：[图片在线转换Base64数据](https://www.fly63.com/tool/base64/)

来源：[https://www.fly63.com/tool/detial/18](https://www.fly63.com/tool/detial/18)
