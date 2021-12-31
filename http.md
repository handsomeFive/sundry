http 请求方法：
http 1.0 :
get  : 获取服务器资源
post : 发送数据给服务端
head : 获取服务器资源的头部信息
http 1.1 :
options : 获取服务器支持的通信选项
put     : 发送数据跟服务端，用于更新更好
delete  : 删除服务器资源
patch   : 更新服务器资源
connect : 
trace   : 

http 请求报文：
请求行  请求方法_URL_HTTP协议版本字段
请求头 键值对，冒号隔开
空行
请求体  请求正文

http 响应报文：
响应行  HTTP协议版本字段_状态码_状态码的原因短语
响应头 响应首部字段
空行  
响应体 服务器响应的数据

状态码:
2XX: 成功状态码
200: OK 该请求被正确处理
201: Created 请求已经被实现
202: Accepted 请求已经被接受
204: Not content 请求成功，但是响应报文不含实体的主体部分
206: Partial Content 请求成功，响应报文中包含由 Content-Range 指定范围的实体内容

3XX: 重定向状态码
301: moved 永久重定向，表示资源已经分配了新的url
302：found 临时重定向，表示资源临时被分配了新的url
303: see other 表示资源存在另一个url,
304: not modified 资源未修改可以使用缓存
307：found 临时重定向

4XX: 客服端错误状态码
400: Bad Request 请求报文存在问题
401: Unauthorized
403: Forbidden 该资源被禁止访问
404: not found 服务器上没有该资源
405: Method Not Allowed 服务器不支持该请求方式

5XX:
500: internal server error 处理请求时报错
503: service unavalid

Keep-alive :
http1.0只是"请求-应答"，每次请求都需要单独建立一次连接；
http1.1支持长连接,即在请求头里加Connection:Keep-Alive,建立一个TCP连接，可以发送多个http请求
可以Connection:Close 关闭长连接

http 缓存
就是将http请求获取的页面资源存储在本地，之后再加载直接从缓存中获取而不用请求服务器，从而响应更快。

强缓存：
第一次请求时，服务器会将资源的过期时间通过响应头中的Expires和Cache-control两个字段告诉浏览器，之后再请求这个资源时，会判断资源有没有过期，
如果没有过期就直接拿去用。
Expires 过期时间； http1.0提供的
Cache-control 还剩多少秒过期；http1.1提供的，同时存在优先级更高

协商缓存：
第一次请求时，服务器会不仅会返回之前的还会在响应头里返回last-modified字段，告诉浏览器该资源最后的修改时间
如何浏览器再次请求这个资源是会将这个字段通过if-Modified-since,发送给服务器端，如果两个时间是一样的，服务器直接返回304，
不一样则返回200及新的内容；
除开Expires/Cache-control/last-modified,还会返回etag,指定资源文件的编码，通过if-none-match字段发送给服务器端。last-modified优先于etag

优先查找强缓存，没有命中再找协商缓存

http2.0 
二进制分帧
头部压缩

Restful 是一种互联网软件架构，它结构清晰、符合标准、易于理解、扩展方便。表现层状态转化