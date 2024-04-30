KeyCode 属性返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。

两种代码类型的区别是:

> 字符代码 - 表示 ASCII 字符的数字
> 键盘代码 - 表示键盘上真实键的数字

两种类型的值不是都相等的，例如小写字符 "w" 和大写字符 "W" 有相同的键盘代码，因为他们他们键盘上 ( "W" 代码为 "87")，但是它们有不同的字符代码，两个字符输出是不一样的( "w" 和 "W" 字符代码为 "119" 和 "87")

提示： 如果需要知道用户按下的是打印键 (如 "a" 或 "5")，建议使用 onkeypress 事件。如果需要知道用户按下的是功能键(如 "F1", "CAPS LOCK" 或 "Home") 可使用 onkeydown 或 onkeyup 事件。

### 工具地址
URL：[键盘键码keyCode对照表](https://www.fly63.com/tool/keyboardcode/)

来源：[https://www.fly63.com/tool/detial/235](https://www.fly63.com/tool/detial/235)
