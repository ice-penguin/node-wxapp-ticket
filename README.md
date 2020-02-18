# node-wxapp-ticket
node 微信公众号开发

## Install 安装

> use npm isntall
>
> 使用npm安装 

```
npm install node-wxapp-ticket
```

> [download](https://github.com/ice-penguin/node-wxapp-ticket) from github
>
> 从github[下载](https://github.com/ice-penguin/node-wxapp-ticket)

## Introduce 模块说明 

> 该模块支持微信公众号开发（不涉及支付）的常用方法，请求结果返回promise对象。参数规则参照[微信公众号开发文档](<https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html>)

## Sample example  使用说明

### init Client 初始化支付客户端

```
/**
 * 初始化微信公众号开发客户端
 * @author penguinhj
 * @param    {[String]}                 appid [微信公众号appid]
 * @param    {[String]}                 appsecret [微信公众号appsecret]
 */
var wxapp = require('../index').initClient({
	appid:appid,//微信公众号appid
	appsecret:appsecret//微信公众号appsecret
});
```

### getOpenId 根据code获取授权用户的openId

```
//根据code获取授权用户的openId
/**
 * @param    {[String]}         code [微信code]
 */
var getOpenId = function(){
    wxapp.getOpenId(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getOpenId_xcx 根据code获取授权用户的小程序openId

```
//根据code获取授权用户的小程序openId
/**
 * @param    {[String]}         code [微信code]
 */
var getOpenId_xcx = function(){
    wxapp.getOpenId_xcx(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getInfoAccess_token 从微信获取 用户信息 授权access_token

```
//从微信获取 用户信息 授权access_token
/**
 * @param    {[String]}         code [微信code]
 */
var getInfoAccess_token = function(){
    wxapp.getInfoAccess_token(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getInfo 通过openid获取用户信息

```
//通过openid获取用户信息
/**
 * @param    {[String]}         web_access_token [用户授权token]
 * @param    {[String]}         code [微信code]
 */
var getInfo = function(){
    wxapp.getInfo(web_access_token,code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getInfoByCode 通过code获取用户信息

```
//通过code获取用户信息
/**
 * @param    {[String]}         code [微信code]
 */
var getInfoByCode = function(){
    wxapp.getInfoByCode(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getAccess_token 获取 公众号开发 授权access_token

```
//获取 公众号开发 授权access_token
var getAccess_token = function(){
    wxapp.getAccess_token()
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getJsTicket  通过access_token获取网页js开发票据，jsapi_ticket

```
//通过access_token获取网页js开发票据，jsapi_ticket
/**
 * @param    {[String]}         access_token [公众号开发授权token]]
 */
var getJsTicket = function(){
    wxapp.getJsTicket(access_token)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

### getJsParams 获取网页js调用所需注册参数

```
//获取网页js调用所需注册参数
/**
 * 
 * @param {String} jsapi_ticket [网页js开发票据]
 * @param {String} url [需要使用jssdk的网址]
 */
var getJsParams = function(){
    wxapp.getJsParams(jsapi_ticket,url)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```

