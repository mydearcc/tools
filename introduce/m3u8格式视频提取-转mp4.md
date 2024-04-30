m3uM3U8 是 Unicode 版本的 M3U，用 UTF-8 编码。"M3U" 和 "M3U8" 文件都是苹果公司使用的 HTTP Live Streaming（HLS） 协议格式的基础，这种协议格式可以在 iPhone 和 Macbook 等设备播放。


### M3U8 文件简介
m3u8 文件实质是一个播放列表（playlist），其可能是一个媒体播放列表（Media Playlist），或者是一个主列表（Master Playlist）。但无论是哪种播放列表，其内部文字使用的都是 utf-8 编码。
当 m3u8 文件作为媒体播放列表（Meida Playlist）时，其内部信息记录的是一系列媒体片段资源，顺序播放该片段资源，即可完整展示多媒体资源。其格式如下所示：
```
#EXTM3U
#EXT-X-TARGETDURATION:10

#EXTINF:9.009,
http://media.example.com/first.ts
#EXTINF:9.009,
http://media.example.com/second.ts
#EXTINF:3.003,
http://media.example.com/third.ts
```

### 工具介绍
完美开源的m3u8 Downloader下载工具，采用10线程下载，最大的优势就是速度快，下载容量大的东西，几分钟甚至几秒钟就能够搞定。

现在很多视频网站的视频都分割成了小片段，其m3u8就是来记录这一堆地址的文件，使用本下载器可以快速的下载并合并成一个完整的视频文件输入m3u8地址，对视频一键下载。

> 本工具的代码来源项目：https://github.com/Momo707577045/m3u8-downloader

### 工具地址
URL：[m3u8格式视频提取-转mp4](https://www.fly63.com/tool/m3u8/)

来源：[https://www.fly63.com/tool/detial/219](https://www.fly63.com/tool/detial/219)
