支持跨域,提供在线HTTP请求模拟器,支持请求类型有POST、GET、DELETE、PUT、UPDATE请求,soJSON在线解析。

### 一、工作方式：
双方通过HTTP方式交互数据，第三方可以简单的“name=value”方式发送提交内容或响应请求内容。即通过HTTP的GET/POST方式交换。 另外双方需要保证数据传输的完整性和 安全性，每次发送请求都有响应(响应返回格式为纯文本)，安全验证目前采用用户名和密码的方式。

### 二、字符编码：
服务器接收数据可以是GBK或UTF-8编码字符,默认接收数据是GBK编码,如提交的是UTF-8编码字符,需要添加参数encode=utf8。 请求响应返回内容是GBK编码。

### 三、响应格式：
- 所为响应即每次向服务器提交请求后返回值
- 响应值格式为纯文本
- 状态码
- 如发送成功后返回

### 工具地址
URL：[HTTP接口测试工具](https://www.fly63.com/php/http/)

来源：[https://www.fly63.com/tool/detial/44](https://www.fly63.com/tool/detial/44)