这是一款可在线调整并生成css3剪贴路径的工具，用户从右侧的多边形列表中选择需要的形状，再在左侧的操作区域中通过拖拽构成多边形的点来调整多边形的点与线形状，或者点击删除不需要的多边形顶点，就可以在下方的代码区域中实时观察到生成的CSS3剪贴路径代码。

### clip-path介绍
clip-path 直译过来就是裁剪路径，使用SVG或形状定义一个html元素的可见区域的方法。想象一下你在Photoshop中勾勒路径的场景。MDN上是这样介绍 clip-path的：

clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle().。clip-path属性代替了现在已经弃用的剪切 clip属性。


### 基本语法
```
<clip-source> | [ <basic-shape> || <geometry-box> ] | none

/*属性说明*/
<clip-source> = <url>
<basic-shape> = <inset()> | <circle()> | <ellipse()> | <polygon()>
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### 兼容性
clip-path目前兼容性较差，IE和Edge直接不支持。

### 工具地址
URL：[一个在线的路径裁剪工具](https://www.fly63.com/tool/clippath/)

来源：[https://www.fly63.com/tool/detial/97](https://www.fly63.com/tool/detial/97)
