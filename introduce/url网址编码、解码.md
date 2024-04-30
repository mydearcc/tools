URL在线编码解码工具（UrlEncode编码 和 UrlDecode解码，为了让包含中文的URL可以使用，您可以使用本工具对中文进行UrlEncode编码。

### 工具介绍
1,本功能实现将Url进行：UrlEncode编码 和 UrlDecode解码
2,对Url进行编码后可以将一些特殊字符和汉字变为Encode编码格式 

### 类型选择说明
encodeURIComponent/decodeURIComponent（默认）
encodeURI/decodeURI
encodeURI/decodeURI
escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。而encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。encodeURIComponent方法在编码单个URIComponent（指请求参数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。
encodeURIComponent不编码字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z
encodeURI不编码字符有82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z
encodeURIComponent不编码字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z        

### 工具地址
URL：[在线url网址编码、解码](https://www.fly63.com/tool/etc/#?id=3)

来源：[https://www.fly63.com/tool/detial/114](https://www.fly63.com/tool/detial/114)
