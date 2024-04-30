Flexbox 布局（也叫Flex布局，弹性盒子布局）模块（ W3C 候选推荐，截止到2017年10月）旨在提供一个更有效地布局、对齐方式，并且能够使容器中的子元素大小未知或动态变化情况下仍然能够分配好子元素之间的空间。

Flex 布局的主要思想是使父容器能够调节子元素的宽度/高度（和排列顺序），从而能够最好地填充可用空间（主要是为了适应所有类型的显示设备和屏幕尺寸）。flex布容器能够放大子元素使之尽可能填充可用空间，也可以收缩子元素使之不溢出。

最重要的是，flexbox布局与方向无关，不同于常规布局（基于垂直的块（block）和基于水平的内联（inline））。 虽然传统布局适用于页面，但它们对于大型或复杂的应用程序布局来说缺乏灵活性（特别是在改变方向，调整大小，拉伸，收缩等方面）。

任何一个容器都可以指定为Flex布局。
```
.box{
  display: flex;
}
```
行内元素也可以使用Flex布局。
```
.box{
  display: inline-flex;
}
```
Webkit内核的浏览器，必须加上-webkit前缀。
```
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

> 注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

虽然 Flexbox 非常适合缩放，对齐和重新排序元素，但以下情况应该尽量避免使用 Flexbox 布局：
- 1.整体页面布局
- 2.完全支持旧浏览器的网站

旧版浏览器，如IE 11或更低版本，不支持或仅部分支持 Flexbox 。如果你想安全的使用页面正常呈现，你应该退回到其他的 css 布局方式，比如结合float 的 display: inline-block 或者 display: table等。但是，如果您只针对现代浏览器，那么 Flexbox 绝对值得一试。

### 工具地址
URL：[CSS3 Flexbox 在线演示](https://www.fly63.com/tool/flexbox/)

来源：[https://www.fly63.com/tool/detial/13](https://www.fly63.com/tool/detial/13)