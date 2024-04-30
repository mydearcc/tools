UserAgent是指浏览器,它的信息包括硬件平台、系统软件、应用软件和用户个人偏好，通过UA可以分析出浏览器名称、浏览器版本号、渲染引擎、操作系统。使用方法直接打开查看即可，也可以把其它浏览器的UA复制过来进行分析。

### 浏览器的常见User Agent 各字段的解释
浏览器的User Agent字段令人迷惑，例如：某一版本的Chrome访问网络时，User Agent字段如下：
`Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (Khtml, like Gecko) Chrome/33.0.1750.29 Safari/537.36`
其中既包含多个公司的浏览器标识，如：Mozilla、Chrome、Safari，也包含多个渲染引擎标识，如：AppleWebKit、KHTML、Gecko。下面我们对这些字段逐个进行解释。
Mozilla/5.0： 网景公司浏览器的标识，由于互联网初期浏览器市场主要被网景公司占领，很多服务器被设置成仅响应含有标志为Mozilla的浏览器的请求，因此，新款的浏览器为了打入市场，不得不加上这个字段。

- Windows NT 6.3 : Windows 8.1的标识符
- WOW64： 32位的Windows系统运行在64位的处理器上
- AppleWebKit/537.36：苹果公司开发的呈现引擎
- KHTML：是Linux平台中Konqueror浏览器的呈现引擎KHTML
- Geckeo：呈现引擎
- like Gecko：表示其行为与Gecko浏览器引擎类似

### 工具地址
URL：[浏览器内核版本检测器_查看userAgent信息](https://www.fly63.com/tool/useragent/)

来源：[https://www.fly63.com/tool/detial/164](https://www.fly63.com/tool/detial/164)
