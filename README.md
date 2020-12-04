# node-wxapp-ticket

node 微信公众号开发

## Install 安装

> use npm isntall
>
> 使用 npm 安装

```
npm install node-wxapp-ticket
```

> [download](https://github.com/ice-penguin/node-wxapp-ticket) from github
>
> 从 github[下载](https://github.com/ice-penguin/node-wxapp-ticket)

## Introduce 模块说明

> 该模块支持微信公众号开发（不涉及支付）的常用方法，请求结果返回 promise 对象。参数规则参照[微信公众号开发文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

## Sample example 使用说明

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

### getOpenId 根据 code 获取授权用户的 openId

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

### getOpenId_xcx 根据 code 获取授权用户的小程序 openId

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

### getInfoAccess_token 从微信获取 用户信息 授权 access_token

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

### getInfo 通过 openid 获取用户信息

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

### getInfoByCode 通过 code 获取用户信息

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

### getAccess_token 获取 公众号开发 授权 access_token

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

### getJsTicket 通过 access_token 获取网页 js 开发票据，jsapi_ticket

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

### getJsParams 获取网页 js 调用所需注册参数

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

### getQrCode 获取小程序图片并存储至本地

```
/**
 * 获取小程序图片并存储至本地
 * @param {String} access_token [公众号开发授权token]
 * @param {Obejct} opt [二维码参数]
 * opt详见
 * 属性			类型	默认值	必填	说明
 * imageUrl 	string 		是 	图片存储地址，请使用绝对地址
 * scene		string			是	最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
 * page			string	主页	否	必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
 * width		number	430		否	二维码的宽度，单位 px。最小 280px，最大 1280px
 * auto_color	boolean	false	否	自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调
 * line_color	Object	{"r":0,"g":0,"b":0}	否	auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
 * is_hyaline	boolean	false	否	是否需要透明底色，为 true 时，生成透明底色的小程序码
 */
var getQrCode = function(token,opt){
	console.log(opt)
    wxapp.getQrCode(token,opt)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```
