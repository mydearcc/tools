UUID 是 通用唯一识别码（Universally Unique Identifier）的缩写，是一种软件建构的标准，亦为开放软件基金会组织在分布式计算环境领域的一部分。其目的，是让分布式系统中的所有元素，都能有唯一的辨识信息，而不需要通过中央控制端来做辨识信息的指定。如此一来，每个人都可以创建不与其它人冲突的UUID。在这样的情况下，就不需考虑数据库创建时的名称重复问题。目前最广泛应用的UUID，是微软公司的全局唯一标识符（GUID），而其他重要的应用，则有Linux ext2/ext3文件系统、LUKS加密分区、GNOME、KDE、Mac OS X等等。另外我们也可以在e2fsprogs包中的UUID库找到实现。

### 如何选择UUID版本？
UUID1：根据主机ID、序列号和当前时间生成UUID。它基于硬件地址和一个随机的14位序列号。

UUID3：根据名称空间标识符（UUID）和名称（字符串，此站点使用UUID1作为字符串）的MD5哈希生成UUID。

UUID4：生成随机UUID。这个版本的UUID是使用最多的。

UUID5：根据名称空间标识符（UUID）和名称（字符串，此站点使用UUID1作为字符串）的SHA-1哈希生成UUID。

### 工具地址
URL：[uuid在线生成器](https://www.fly63.com/tool/uuid/)

来源：[https://www.fly63.com/tool/detial/70](https://www.fly63.com/tool/detial/70)